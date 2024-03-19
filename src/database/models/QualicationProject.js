const { DataTypes } = require('sequelize');
const db = require('../connection');
const User = require('./User');
const Project = require('./Project');

const QualificationProject = db.define('qualification_project', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey:true
    },
    value: {
        type: DataTypes.STRING
    },
    project: {
        type: DataTypes.STRING,
        references:{
            model:Project,
            key:'id'
        }
    },
    user: {
        type: DataTypes.STRING,
        references:{
            model:User,
            key:'id'
        }
    }},
    {
    timestamps: false,
    freezeTableName: true,
    tableName: 'qualification_project'
    }
);

QualificationProject.belongsTo(Project,{foreignKey:'id'});
QualificationProject.belongsTo(User,{foreignKey:'id'})

QualificationProject.prototype.toJSON = function(){
    let values = Object.assign({}, this.get());
    return values;
}

module.exports = QualificationProject;