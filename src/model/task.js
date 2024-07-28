const { DataTypes } = require('sequelize');


const initTask = (sequelize, DataTypes) => {
    const Task = sequelize.define(
        "Task",
        {
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    len: [5, 30],
                },
            },
            description: {
                type: DataTypes.STRING,
                validate: {
                    len: [0, 100],
                },
            },
            dueDate: {
                type: DataTypes.DATE,
            },
            completed: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
            },
        },
        {
            timestamps: true,
        }
    );

    return Task;
}

module.exports = { initTask };