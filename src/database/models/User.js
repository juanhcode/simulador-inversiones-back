const { DataTypes } = require('sequelize');
const db = require('../connection');

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


module.exports = User;