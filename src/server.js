

const express = require("express");
const cors = require("cors"); 
const mongoose = require("mongoose");


// Main routes for APIs
const { shop } = require("./routes/shop")
const { users } = require("./routes/users")


        
const app = express();
app.use(cors()); // Middleware CORS
app.use(express.json()) // Middleware json
app.use(express.urlencoded({ extended: true })); 


// Route distribution
require("dotenv").config();


// APIs 
app.use("/shop", shop);
app.use("/users", users);



// Database connection
mongoose.connect(process.env.MONGODB_SERVER_URL)
.then(res => console.log("Connected to database"))
.catch(error => console.log(error));



app.get("/", function (req, res) {
    res.send("Main route")
})


app.listen(5000, () => {
    console.log("Server listening on port 5000")
})