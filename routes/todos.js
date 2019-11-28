var express = require("express"),
    router = express.Router(),
    db = require("../models"),
    helpers = require("../helpers/todos")

/*
router.get("/", function(req, res){
    db.Todo.find()
    .then(function(todos){
        res.json(todos);
    })
    .catch(function(err){
    res.send(err);
    })
});

router.post("/", function(req, res){
    db.Todo.create(req.body)
    .then(function(newTodo){
        res.status(201).json(newTodo);
    })
    .catch(function(err){
        res.send(err);
    })
})
*/

router.route("/")
    .get(helpers.getTodos)
    .post(helpers.createTodos)

/*
router.get("/:todoId", function(req, res){
    db.Todo.findById(req.params.todoId)
    .then(function(foundTodo){
        res.json(foundTodo);
    })
    .catch(function(err){
        res.send(err);
    })
})

router.put("/:todoId", function(req, res){
    db.Todo.findOneAndUpdate({_id: req.params.todoId}, req.body)
    .then(function(todo){
        res.json(todo);
    })
    .catch(function(err){
        res.send(err);
    })
})

router.delete("/:todoId", function(req, res){
    db.Todo.remove({_id: req.params.todoId})
    .then(function(){
        res.send({message: "We deleted it"})
    })
    .catch(function(err){
        res.send(err);
    })
})
*/

router.route("/:todoId")
    .get(helpers.getTodo)
    .put(helpers.updateTodo)
    .delete(helpers.deleteTodo)

module.exports = router;