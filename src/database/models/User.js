const { DataTypes } = require('sequelize');
const db = require('../connection');
const Role = require('./Role');

const User = db.define('user', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey:true
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }},
    {
    timestamps: false,
    freezeTableName: true,
    tableName: 'user'
});

//User.belongsTo(Role,{foreignKey:'id'});

User.prototype.toJSON = function(){
    let values = Object.assign({}, this.get());
    delete values.password;
    return values;
}


module.exports = User;