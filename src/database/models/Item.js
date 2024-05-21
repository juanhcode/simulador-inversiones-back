const { DataTypes } = require('sequelize');
const db = require('../connection');
const Investment = require('./Investment');
const Currency = require('./currency');
const Item = db.define('item', {
    item_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey:true
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    investment_id : {
        type: DataTypes.INTEGER,
        references:{
            model:Investment,
            key:'investment_id'
        }
    },
    currency_id : {
        type: DataTypes.INTEGER,
        references:{
            model:Currency,
            key:'currency_id'
        }
    }},
    {
    timestamps: false,
    freezeTableName: true,
    tableName: 'item'
    }
);

Item.belongsTo(Investment,{foreignKey:'investment_id'});
Item.belongsTo(Currency,{foreignKey:'currency_id'});

Item.prototype.toJSON = function(){
    let values = Object.assign({}, this.get());
    return values;
}

module.exports = Item;