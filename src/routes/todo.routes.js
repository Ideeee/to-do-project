const router = require('express').Router();
const controller = require('../controller/todoController');

router.post("/", controller.createTask)
    .get("/", controller.getTasks)
    .get("/:id", controller.getOneTask)
    .patch("/:id", controller.updateTask)
    .delete("/:id", controller.deleteTask);


module.exports = router;