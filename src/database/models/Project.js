const { DataTypes } = require('sequelize');
const db = require('../connection');
const User = require('./User');
const Category = require('./Category');

const Project = db.define('project', {
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
    },
    file:{
        type:DataTypes.JSON
    },
    user: {
        type: DataTypes.STRING,
        references:{
            model:User,
            key:'id'
        }
    },
    category: {
        type: DataTypes.STRING,
        references:{
            model:Category,
            key:'id'
        }
    }},
    {
    timestamps: false,
    freezeTableName: true,
    tableName: 'user'
    }
);

Project.belongsTo(User,{foreignKey:'id'});
Project.belongsTo(Category,{foreignKey:'id'})

Project.prototype.toJSON = function(){
    let values = Object.assign({}, this.get());
    return values;
}

module.exports = Project;