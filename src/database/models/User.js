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
        type: DataTypes.STRING
    },
    last_name: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
    role: {
        type: DataTypes.STRING,
        references:{
            model:Role,
            key:'id'
        }
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