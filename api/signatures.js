const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('../db/test.db');

module.exports = {
    sanitize:function()
    {

    },
    add:function(nom, choix, cb)
    {
        if(cb == undefined){
            cb = function(){};
        }
        // NOTE: Doit limiter taille du nom!
        if(typeof(nom) !== 'string'){
            cb(false);
            return;
        }
        let nom_safe = nom.slice(0,26);
        // Doit sanitizer aussi
        db.run(
            `INSERT INTO signataires VALUES (?, ?)`,
            [nom_safe, choix],
            (err) => {
                if(err !== null){
                    console.error(err);
                    cb(false);
                }
                else
                {
                    cb(true);
                }
            });
    },
    listAll:function(cb)
    {
        var data = [];
        db.all("SELECT nom, vote FROM signataires;", (err, rows) => {
            rows.forEach((row) => {
                data.push(row);
            });
            cb(data);
        }); 
    }
};