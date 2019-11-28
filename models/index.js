var mongoose = require("mongoose");
mongoose.set("debug", true);
console.log(process.env.DATABASEURL);
//mongoose.connect("mongodb://localhost/todos_api", { useNewUrlParser: true });
var url = process.env.DATABASEURL || "mongodb://localhost:27017/todo_api"
//mongoose.connect("mongodb://localhost:27017/todo_api", { useNewUrlParser: true});
mongoose.connect(url, { useNewUrlParser: true})
.then(function(){
    console.log("connected to database: " + url);
    console.log(process.env.DATABASEURL);
})
.catch(function(err){
    console.log(err);
})

mongoose.Promise = Promise;

module.exports.Todo = require("./todo");