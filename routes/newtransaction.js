//Create a new mock transaction and add it to the system

const Transaction = require("../src/transaction");
function newtransaction(app) {
    app.get("/newtransaction", (request, response)=>{
        let tx = new Transaction();
        global.transactions.push(tx);
        response
            .status(200)
            .send(tx.prettify());
    });
}
module.exports = newtransaction;