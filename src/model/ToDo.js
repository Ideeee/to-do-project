const {Schema, model} = require('mongoose');

const taskSchema = new Schema( {
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 30,
    },
    description: {
        type: String,
        maxlength: 100,
    },
    completed: {
        type: Boolean,
        default: false
    }
}, {timestamps: true});

const TaskModel = model("Tasks", taskSchema);
module.exports = TaskModel;