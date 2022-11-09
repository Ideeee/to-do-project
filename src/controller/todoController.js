const Tasks = require('../model/ToDo');

exports.createTask = async(req, res) =>{
    const task = await req.body;
    try {
        const newTask = await Tasks.create(task);
        if(!newTask) return res.status(400).send("An error occured");
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

exports.getTasks = async(req, res) =>{
            
    try{
        const tasks = await Tasks.find();
        if(!tasks) return res.status(404).send("Not found");
        res.status(200).json({"All Tasks" : tasks });
    }
    catch(e){
        res.status(500).send(e.message);
    }

}

exports.getOneTask = async(req, res) =>{
    const{id} = req.params;
    try {
        const task = await Tasks.findById(id);
        if(!task) return res.status(404).send("Not found");
        res.status(200).json({"Task" : task });
    } catch (error) {
        res.status(500).send(error.message);
    }
}

exports.updateTask = async(req, res) =>{
    const id = {_id: req.params.id};
    const task = req.body;

    try {
        const updatedTask = await Tasks.findOneAndUpdate(id, task, {new: true});
        if(!updatedTask) return res.status(400).send("An error occured");
        res.status(200).json(
            {
                message: "Updated Successfully!",
                "Task" : updatedTask 
            }
        );
    } catch (error) {
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

