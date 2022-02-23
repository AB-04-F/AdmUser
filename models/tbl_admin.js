const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
    return sequelize.define('tbl_admin', {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        first_name: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        product_name: {
            type: DataTypes.STRING(250),
            allowNull: false
        },
        product_price: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        sequelize,
        tableName: 'tbl_admin',
        timestamps: false,
        indexes: [{
            name: "PRIMARY",
            unique: true,
            using: "BTREE",
            fields: [
                { name: "id" },
            ]
        }, ]
    });
};