const { DataTypes } = require("sequelize")

module.exports = (sequelize) => {
    sequelize.define("Character", {
        id: {
            type: DataTypes.INTEGER,
            allowNNull: false,
            primaryKey: true,
        },

        email: {
            type: DataTypes.STRING,
            allowNNull: false,
            isEmail: true,
        },

        password: {
            type: DataTypes.STRING,
            allowNNull: false,
        }
    })
}