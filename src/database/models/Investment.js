const { DataTypes } = require('sequelize');
const db = require('../connection');
const User = require('./User');
const Investment = db.define('investment', {
    investment_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey:true
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    quantity: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    type_of_investment : {
        type: DataTypes.STRING,
        allowNull: false
    },
    user_id : {
        type: DataTypes.INTEGER,
        references:{
            model:User,
            key:'user_id'
        }
    }},
    {
    timestamps: false,
    freezeTableName: true,
    tableName: 'investment'
    }
);

Investment.belongsTo(User,{foreignKey:'user_id'});

Investment.prototype.toJSON = function(){
    let values = Object.assign({}, this.get());
    return values;
}

module.exports = Investment;