const { DataTypes } = require('sequelize');
const db = require('../connection');

const Role = db.define('rol', {
    rol_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey:true
    },
    rol_name: {
        type: DataTypes.STRING,
        allowNull: false
    }},
    {
    timestamps: false,
    freezeTableName: true,
    tableName: 'rol'
});

module.exports = Role;