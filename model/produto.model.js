const { DataTypes } = require('sequelize');
const sequelize = require ('../config/database');

const produto = sequelize.define('produto',{
    idproduto: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    produtonome: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    produtovalor: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
    }

}, {
    tableName: 'produto',
    timestamps: true

});

module.exports = produto;