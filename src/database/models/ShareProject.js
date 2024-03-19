const { DataTypes } = require('sequelize');
const db = require('../connection');
const User = require('./User');
const Project = require('./Project');

const ShareProject = db.define('share_project', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey:true
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
    tableName: 'share_project'
});

ShareProject.belongsTo(Project,{foreignKey:'id'});
ShareProject.belongsTo(User,{foreignKey:'id'});


ShareProject.prototype.toJSON = function(){
    let values = Object.assign({}, this.get());
    return values;
}


module.exports = ShareProject;