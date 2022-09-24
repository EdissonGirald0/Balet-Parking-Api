const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('parqueadero', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        disponibilidad:{
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });
};