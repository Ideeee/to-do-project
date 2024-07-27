const {createServer} = require('http');

const express = require('express');
const { json } = require('express');
const path = require('path');

const router = require('./routes/todo.routes');
const { sequelize } = require("./model/index.js")


require('dotenv').config({path: '.env'}); //CONFIGURE ENV FILE


const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(json());
app.use(express.urlencoded({extended:true})); 

app.get("/", (req,res) => {
    res.send("Welcome to my TO-DO app");
})

app.use("/tasks", router);

port = process.env.PORT || 3000;
const server = createServer(app);

const serve = async () => {
    try {
        // force=true flushes your database everytime your server restarts. It's used to
        // force-update your tables based on your models.
        await sequelize.sync({ force: true, logging: false });
        // await sequelize.sync({ logging: false });
        server.listen(port, () => console.log(`Server is running on port ${port}`));
    } catch (err) {
        // throw new Error("Could not start-up server\n" + `Reason: ${err.message}`)
        throw err
    }
}

serve();