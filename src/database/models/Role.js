const { DataTypes } = require('sequelize');
const db = require('../connection');

const Role = db.define('role', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING
    }
},
    {
        timestamps: false,
        freezeTableName: true,
        tableName: 'role'
    }
);

Role.prototype.toJSON = function () {
    let values = Object.assign({}, this.get());
    return values;
}

module.exports = Role;