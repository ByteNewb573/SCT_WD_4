const express = require("express");
const router = express.Router();

const Todo = require("../models/Todo");


// CREATE TODO

router.post("/", async (req, res) => {

    try {

        const { title, desc } = req.body;

        const todo = new Todo({
            title,
            desc
        });

        await todo.save();

        res.status(201).json(todo);

    } catch (err) {

        res.status(500).json({
            message: err.message
        });

    }

});


// GET ALL TODOS

router.get("/", async (req, res) => {

    try {

        const todos = await Todo.find();

        res.json(todos);

    } catch (err) {

        res.status(500).json({
            message: err.message
        });

    }

});


// UPDATE TODO

router.put("/:id", async (req, res) => {

    try {

        const todo = await Todo.findByIdAndUpdate(

            req.params.id,

            req.body,

            {
                new: true
            }

        );

        res.json(todo);

    } catch (err) {

        res.status(500).json({
            message: err.message
        });

    }

});


// DELETE TODO

router.delete("/:id", async (req, res) => {

    try {

        await Todo.findByIdAndDelete(req.params.id);

        res.json({
            message: "Todo Deleted"
        });

    } catch (err) {

        res.status(500).json({
            message: err.message
        });

    }

});


module.exports = router;