const { Sequelize, User } = require('../../config/models');
//const { Sequelize, User } = require('./../../config/models');
// const { Op } = Sequelize;
const MomentTimezone = require('moment-timezone');
const bcrypt = require('bcryptjs');

exports.register = async (req, res) => {
    let usr = req.body;
    
    const user = await User.findOne({ where: { email: usr.email } });

    if (user != null) { // caso ja exista o email
        res.status(200).json(user);
        return;
    }
    if (usr.password) {
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(usr.password, salt, function (err, hash) {
                usr.password = hash;

                User.create(usr)
                .then(newUser => {
                    delete newUser.password;
                    res.status(201).json(newUser);
                }, err => {
                    res.status(500).send();
                    console.log(err)
                });
        });
    });
    } else {
        User.create(usr)
            .then(newUser => {
                res.status(201).json(newUser);
            }, err => {
                res.status(500).send();
                console.log(err)
            });
        }
}