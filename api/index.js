const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

const prefab = require("./prefab.json");

//var db = require('./db');
const signature = require('./signatures');
const signatures = require('./signatures');

app.use(cors());
app.use(express.json());

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
        console.log(req.body);

        if(req.body['choix'] == undefined || req.body['nom'] == undefined){
            next();
            return;
        }

        signature.add(req.body['nom'], req.body['choix'], (succ) => {
            if(!succ){
                console.log('Erreur lors de add');
                res.status(400);
                next();
            }
            else {
                console.log('probablement good')
                var r = prefab;
                r.type = "yay";
                res.send(r);
            }
        });
    }
    catch(e){
        console.log('fuck!');
        next();
    }
});

app.get('/signataires', (req,res,next) => {
    try{
        signatures.listAll((d)=>{
            res.send(d);
        })
    }
    catch(e){
        next();
    }
});

app.use((req,res,next) => {
    var r = prefab;
    r.type = "denied";
    r.data = undefined;
    res.status(400);
    res.send(r);
});

app.listen(port, () => {
    console.log(`API listening on ${port}`);
});