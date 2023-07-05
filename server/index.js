const express = require('express');
const app = express();

app.use(express.json());

const connectToMongo = require("./src/mongodb/config");
connectToMongo();

//routes
app.use("/api/user", require("./src/api/user"));




app.listen(5000, ()=>{
    console.log("Server is running on port 3000");
})