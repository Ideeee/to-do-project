const { models } = require('../model/index.js');

const Task = models.Task

exports.createTask = async(req, res) =>{
    const task = req.body;
    console.log(task)
    try {
        const newTask = await Task.create(task);
        if(!newTask) return res.status(400).send("An error occured while creating the task");
        res.status(201).json(
            {
                message: "Created Successfully!",
                "Task" : newTask 
            }
        );
    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports.getTasks = async(req, res) =>{
            
    try{
        const tasks = await Task.findAll();
        if(!tasks) return res.status(404).send("Not found");
        const jsonData = {
            "Tasks" : tasks 
        };
        res.status(200).render('index', { jsonData });
    }
    catch(e){
        res.status(500).send(e.message);
    }

}

exports.getOneTask = async(req, res) =>{
    const{id} = req.params;
    
    try {
        const task = await Task.findById(id);
        if(!task) return res.status(404).send("Not found");
        res.status(200).json({"Task" : task });

    } catch (error) {
        res.status(500).send(error.message);
    }
}

exports.updateTask = async(req, res) =>{
    const id = req.params.id;
    const task = req.body;
    console.log("got here");
    console.log(id);

    try {
        let updatedTask = await Task.findOne( {where: { id: id }});
        console.log(updatedTask);
        if(!updatedTask) return res.status(400).send("An error occured");
        updatedTask.completed = task.completed;
        updatedTask.save();
        res.status(200).json(
            {
                message: "Updated Successfully!",
                "Task" : updatedTask 
            }
        );
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
}

exports.deleteTask = async(req, res) =>{
    const{id} = req.params;
    try {
        const deleted = await Tasks.findByIdAndDelete(id);
        if(!deleted) return res.status(400).send("An error occured"); 
        res.status(200).json(
            {
                message: "Deleted Successfully!",
            }
        );
    } catch (error) {
        res.status(500).send(error.message);
    }
    
}

