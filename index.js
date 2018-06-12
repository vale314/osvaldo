const express = require('express');
const router = new express.Router();
const path = require('path');


var app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static('./dist/Proyect'));
app.use(express.static('./dist/Proyect/js'));

const indexRoutes = require('./server/routes/index');
const tasksRoutes = require('./server/routes/task');


app.use('/api', tasksRoutes);

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'./dist/Proyect/index.html'));
    
})


app.listen(5000,'192.168.1.76' ,()=>{
    console.log("Server Is Running");
})