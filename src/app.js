const express = require('express');
const {json} = require('express');
const connect = require('./config/database');
const router = require('./routes/todo.routes');
require('dotenv').config({path: '.env'});
const app = express();
connect(); //your hosted mongo URI

app.use(json());
app.use(express.urlencoded({extended:true}));

app.get("/", (req,res) => {
    res.send("Welcome to my TO-DO app");
})

app.use("/tasks", router);


port = process.env.PORT || 2000;
app.listen(port, () => console.log(`Server is running on port ${port}`));