const { DataTypes } = require('sequelize');
const db = require('../connection');
const Investment = require('./Investment');
const User = require('./User');

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
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: 'user_id'
        }
    }
}, {
    timestamps: false,
    freezeTableName: true,
    tableName: 'currency'
});

Currency.belongsTo(User, {foreignKey: 'user_id'})

module.exports = Currency;
