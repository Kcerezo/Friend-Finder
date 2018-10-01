var path = require("path");
module.exports= function(app){
    app.get("*", function(req, res, next){
        res.sendFile(path.join(__dirname,"../public/home.html"))
    })
}

var friendData = require ('../data/friends.js');

module.exports = function (app){

    app.get('/api/friends', function (req,res){
        res.json(tableData);
    });

    app.get('/api/tables', function (req, res){
        if(friendData.length <5){
            friendData.push(req.body);
            res.json(true);
        } else{
           nomatchData.push(req.body);
            res.json(false);
        }
    });

    app.post('/api/friend_form', function(req, res){
        friendData = [];
        nomatchData = [];
        console.log(req)
        console.log(friendData);
        console.log(nomatchData);
    })
}