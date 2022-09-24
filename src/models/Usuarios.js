const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('usuario', {
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        celular: {
            type: DataTypes.STRING,
            allowNull: false
        },
    });
};