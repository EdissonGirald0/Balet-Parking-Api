const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('usuario', {
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        celular: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            primaryKey: true,
        },
        pass: {
            type: DataTypes.NUMBER,
            allowNull: false,

        },
        asistencia: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },

    });
};