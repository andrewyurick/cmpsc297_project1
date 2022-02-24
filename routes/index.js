//New index.js inside routes
//Import
const fs = require("fs");//Used for file indexing

function dynamicallyLoadRoutes(app){
    //read all filenames in current folder and apply
    fs.readdirSync(__dirname).forEach(function (file) {
        //skip all non JS files!
        if (
            file == "index.js" ||
            file.substring(file.lastIndexOf(".") + 1) !== "js"
        )
            return;
        let name = file.substring(0, file.indexOf("."));//Get name of the file
        //Add routes file to the exports 
        require("./" + name)(app);
    });
}
module.exports = dynamicallyLoadRoutes;//Export fcn to dynamically load routes