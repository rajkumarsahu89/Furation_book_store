const express = require("express");
const connecion = require("../Backend/config/db");
const {bookRouter}=require("../Backend/route/book.route");
const cors=require("cors")

const app = express();
app.use(express.json());
app.use(cors())

app.use("/add",bookRouter)
app.use("/",bookRouter)
// app.get("/", (req, res) => {
//     res.send("Welcome to Book Store")
// })

app.listen(4100, async (req, res) => {
    try {
        await connecion
       console.log("Connected to DB")
    } catch (error) {
        console.log(error)
        console.log("Not Connected to DB")
    }
    console.log("server is running on 4100")
})