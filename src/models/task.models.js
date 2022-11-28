const { DataTypes } = require('sequelize')
const db = require('../utils/database')

const Tasks = db.define('tasks', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    is_completed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
},{
    timestamps: false
})


module.exports = Tasks
