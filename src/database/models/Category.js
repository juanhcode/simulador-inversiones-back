const { DataTypes } = require('sequelize');
const db = require('../connection');
const Category = db.define('category', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey:true
    },
    name: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    }},
    {
    timestamps: false,
    freezeTableName: true,
    tableName: 'category'
    }
);

Category.prototype.toJSON = function(){
    let values = Object.assign({}, this.get());
    return values;
}

module.exports = Category;