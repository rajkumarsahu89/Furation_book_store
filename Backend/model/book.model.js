const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    name: { type: String, require: true },
    author: { type: String, require: true },
    image: { type: String, require: true },
    price: { type: Number, require: true },
    year: { type: Number, require: true },
},
    { versionKey: false }
);

const BookModel=mongoose.model("book", bookSchema);

module.exports=BookModel;