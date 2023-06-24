const mongoose=require("mongoose");

require("dotenv").config();

const connecion = mongoose.connect(process.env.URL);
