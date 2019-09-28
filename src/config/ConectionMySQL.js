const Sequelize = require('sequelize');
const { readdirSync, statSync } = require('fs')
const { join } = require('path')

//     Sequelize.DATE.prototype._stringify = function _stringify(date, options) {
// 	date = this._applyTimezone(date, options);

// 	return date.format('YYYY-MM-DD HH:mm:ss.SSS');
// }   ;

var log = process.env.SEQUELIZE_LOGGING ? console.log : false;
var options = {
	host: process.env.POSTGRES_HOST,
	dialect: 'mysql',
	logging: log,
	pool: {
		max: 10,
		min: 0,
		// evict: 900000,
		idle: 900000,
		acquire: 1000000
    },
    operatorsAliases: false,
	timezone: 'UTC'
};

if (process.env.DATABASE_URL) {
	var sequelize = new Sequelize(process.env.DATABASE_URL, options);
} else {
	var sequelize = new Sequelize(process.env.MYSQL_DB, process.env.MYSQL_USER, process.env.MYSQL_PASSWORD, options);
}

var db = {};

const dirs = p => readdirSync(p).filter(f => statSync(join(p, f)).isDirectory())

dirs("api").forEach(dir => {
    readdirSync(`${__dirname}/../api/${dir}`)
        .filter(function (file) {
            return (file == "model.js");
        })
        .forEach(function (file) {
            var model = sequelize.import(join(`${__dirname}/../api/${dir}`, file));
            db[model.name] = model;
        });
});

Object.keys(db).forEach(function (modelName) {
	if ("associate" in db[modelName]) {
		db[modelName].associate(db);
	}
});

db.Sequelize = sequelize;
module.exports = db;