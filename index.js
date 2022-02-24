//This is my index.js File
//First importing expresss and morgan
const express = require("express");
const morgan = require("morgan");

const app = express();//First call to express to initialize

app.use(morgan("dev"));
const port = 8080; //I hate UDP and TCP thanks to ee/cmpen 362

require("./routes")(app);//Dynamically load all routes from the ./routes folder.

//Configure server to run
app.listen(port, () => {
    //log our server is rurnning in terminal
    console.log('Server is listening at http://localhost:${port}/');
});