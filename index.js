const express = require('express');
const path = require('path');
const passport = require('passport');


const config = require("./server/config");
require('./server/models/index').connect(config.dbUri);

const localLoginStrategy = require('./server/passport/local-login');

const ingreso = require("./server/services/admin/ingreso")

const router = new express.Router();
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static('./dist/Proyect'));
app.use(express.static('./dist/Proyect/js'));

app.use(passport.initialize());
passport.use('local-login', localLoginStrategy);


const indexRoutes = require('./server/routes/index');
const tasksRoutes = require('./server/routes/task');
const adminRoutes = require('./server/routes/admin');

ingreso.New();

app.use('/api', tasksRoutes);
app.use('/admin',adminRoutes);


app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'./dist/Proyect/index.html'));
    
})


app.listen(4200,'192.168.1.76' ,()=>{
    console.log("Server Is Running");
})