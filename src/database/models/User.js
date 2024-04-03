const { DataTypes } = require('sequelize');
const db = require('../connection');

const User = db.define('"user"', {
    user_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey:true
    },
    names: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_names: {
        type: DataTypes.STRING,
        allowNull: false
    },
    user_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email_address: {
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
    tableName: '"user"'
});



User.prototype.toJSON = function(){
    let values = Object.assign({}, this.get());
    delete values.password;
    return values;
}


module.exports = User;