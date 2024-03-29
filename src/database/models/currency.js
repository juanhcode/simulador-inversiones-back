const { DataTypes } = require('sequelize');
const db = require('../connection');

const Currency = db.define('Currency', {
    currency_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(128),
        allowNull: false
    },
    value: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    investment_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Investment,
            key: 'investment_id'
        }
    }
}, {
    timestamps: false,
    freezeTableName: true,
});

Currency.belongsTo(Investment, {foreignKey: 'investment_id'})

module.exports = Currency;