const express = require("express");
const BookModel = require("../model/book.model");

const bookRouter = express.Router();


//get
bookRouter.get("/", async (req, res) => {
    
    try {
        const data = await BookModel.find();
        res.send(data)
    } catch (error) {
        console.log(error)
        res.send({ "Message": "Failed", "Error": error });
    }
})


//post
bookRouter.post("/", async (req, res) => {
    let book = req.body
    try {
        const data = new BookModel(book);
        console.log(data)
        await data.save();
        res.send("Book has been added successfully")
    } catch (error) {
        console.log(error)
        res.send({ "Message": "Failed", "Error": error });
    }
})


module.exports={bookRouter};