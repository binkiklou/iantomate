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
        db.run(
            `INSERT INTO signataires VALUES (?, "${choix}")`,
            [nom],
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
    listAll:function()
    {

    }
};