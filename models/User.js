const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
    id: { type: DataTypes.STRING, primaryKey: true },
    updated_at_bi: DataTypes.STRING,
    created_at_bi: DataTypes.STRING,
    province_code: DataTypes.STRING,
    health_zone: DataTypes.STRING,
    health_id: DataTypes.STRING,
    provider_id: DataTypes.STRING,
    user_operation_unit_type: DataTypes.STRING,
    username_type: DataTypes.STRING,
    operation_unit_id: DataTypes.STRING,
    position: DataTypes.STRING,
    hash_cid: DataTypes.STRING,
    c_id: DataTypes.STRING,
    operator_name: DataTypes.STRING,
    operator_id: DataTypes.STRING,
    deleted_at: DataTypes.STRING,
    updated_at: DataTypes.STRING,
    created_at: DataTypes.STRING,
    seq: DataTypes.STRING,
}, {
    tableName: 'operator',
    timestamps: false,
});

module.exports = User;
