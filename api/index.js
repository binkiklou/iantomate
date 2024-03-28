const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

const prefab = require("./prefab.json");

var db = require('./db');

app.use(cors());

app.get('/', (req, res) => {
    //res.setHeader('Content-Type', ' application/json');

    var r = prefab;
    r.type = "info";
    r.data = {
        "version": 1
    };

    res.send(r);
});

app.post('/signature', (req, res, next) => {
    try{
        var rbody = JSON.parse(req.body);
        var r = prefab;
        r.type = "yay";
        r.data = undefined;
        res.send(r);
    }
    catch(e){
        next();
    }
});

app.use((req,res,next) => {
    var r = prefab;
    r.type = "denied";
    r.data = undefined;
    res.send(r);
});

app.listen(port, () => {
    console.log(`API listening on ${port}`);
});