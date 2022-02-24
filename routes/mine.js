//Time to mine ! 
function mine(app) {
    app.get("/mine", (request, response) => {
        global.blockchain.addBlock();//Add
        global.transactions = [];//Clear

        let msg = `Block added: ${global.blockchain.getLastBlock().prettify()}`;
        response.status(200).send(msg);
    });
}
module.exports = mine;