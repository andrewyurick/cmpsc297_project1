//New index.js inside routes
//Import
const fs = require("fs");//Used for file indexing

function dynamiicallyLoadRoutes(app){
    //read all filenames in current folder and apply
    fs.readdirSync(__dirname).forEach(function (file) {
        //skip all non JS files!
        if (
            file == "index.js" ||
            file.substr(file.lastIndexOf(".") + 1) !== "js"
        )
            return;
        let name = file.substr(0, file.indexOf("."));//Get name of the file
        require("./" + name)(app);//Add routes file to the exports 
    });
}
module.exports = dynamicallyLoadRoutes;//Export fcn to dynamically load routes