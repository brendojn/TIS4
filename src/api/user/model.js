module.exports = (Sequelize, DataTypes) => {

    let User = Sequelize.define("User", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        social_id: DataTypes.INTEGER,
        name: DataTypes.STRING(45),
        email: DataTypes.STRING(45),
        password: DataTypes.STRING(60),
        profile: DataTypes.STRING(3),
        profile_img: DataTypes.STRING(60),
        header_img: DataTypes.STRING(60),
        dt_birth: DataTypes.DATEONLY,
        gender: DataTypes.STRING(6),
        last_sign_in: DataTypes.DATE,
    }, {
            timestamps: true,
            tableName: 'user',
            underscored: true
        });

    // User.associate = function (models) {

    // };

    return User;
};