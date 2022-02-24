//Transaction file
//Someone paying someone else a certain amount

function generateRandomIPv4(){
    let ipv4 = "";

    //Network port 1
    ipv4 += Math.floor(Math.random() * 255) + 1;
    ipv4 += ".";
    //Network port 2
    ipv4 += Math.floor(Math.random() * 255) + 1;
    ipv4 += ".";

    //Create host part 1
    ipv4 += Math.floor(Math.random() * 255) + 1;
    ipv4 += ".";
    //Create host part 2
    ipv4 += Math.floor(Math.random() * 255) + 1;
    return ipv4;
}

//Generate a random amount of money. Right now 1mill cap
function generateRandomMoney() {
    return Math.floor(Math.random() * 1000000);
}

class Transaction {
    constructor(fromAddress = "", toAddress = "", amount = 0){
        this.fromAddress = generateRandomIPv4();
        this.toAddress = generateRandomIPv4();
        this.amount = generateRandomMoney();
    }

    //Return a pretty version of this transaction
    prettify(){
        let txStr = `<div>Host <i>${this.fromAddress}</i> sent mockcoin to <i>${this.toAddress}</i> \$${this.amount}.</div>`;
        return txStr;
    }
}
module.exports = Transaction;