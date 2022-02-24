//Inside routes/
//Server attempts to brew coffee, but fails

function brew(app) {
    //Attempt to get some coffee
    app.get("/brew", function(request, response) {
        //Send the response for brewwing coffee
        response
            .status(418)//HTTP Status Code 418: I'm a teapot
            .send("I'm a teapot, so I cannot brew coffee!"); //Silly message response

    });
}
module.exports = brew;