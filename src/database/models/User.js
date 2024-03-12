const { DataTypes } = require('sequelize');
const db = require('../connection');
const Rol = require('./Rol');

const User = db.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey:true
    },
    email: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
    username: {
        type: DataTypes.STRING
    },
    rol_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Rol,
            key: 'rol_id'
        }
    },
    foto: {
        type: DataTypes.STRING(256),
    }},
    {
    timestamps: false,
    freezeTableName: true,
    tableName: 'user'
});


User.prototype.toJSON = function(){
    let values = Object.assign({}, this.get());
    delete values.password;
    return values;
}

Usuario.belongsTo(Rol, {foreignKey: 'rol_id'});

module.exports = Usuario;