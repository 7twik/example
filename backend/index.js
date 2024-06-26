//SERVER MAKING CODE
const express = require("express");
const app = express();
const port = 8080;
require("./db/conn");
const cors = require("cors");
app.use("*",cors()); //it removes the cors error

app.use(express.json()); //it will help to read the data from the body


const route=require("./routes/router");
app.use("", route);

//another way to use route
// app.use("", require("./routes/router")

app.listen(port,()=>{
    console.log(`server start at port no : ${port}`);
})

//how to run?
// type "node index.js" in terminal without " "
// or npm i nodemon --g , then type "nodemon index.js" in terminal without " "


