//Blockchain.js
//Contains the class definition for a blockchain

const Block = require("./block");

//Create blockchain class
class Blockchain{
    constructor(){
        this.chain = [new Block(Array(65).join("0"))];
    }

    //return last block
    getLastBlock(){
        return this.chain[this.chain.length-1];
    }
    //return current length
    getChainLength(){
        return this.chain.length;
    }
    //add a block to the chain
    addBlock(){
        let newBlock = new Block(this.getLastBlock().hash, global.transactions);
    
        this.chain.push(Object.freeze(newBlock));
    }

    //verify
    isChainValid(blockchain = this){
        for(let i=1; i<blockchain.chain.length; i++){
            const currentBlock = blockchain.chain[i];

            const prevBlock = blockchain.chain[i-1];

            if(currentBlock.hash!==currentBlock.getHash() ||
                prevBlock.hash!==currentBlock.prevHash){
                
                    return false;
            }
            let checkString = Array(global.difficulty+1).join("0");
            if(!currentBlock.hash.startsWith(checkString)){
                return false;
            }
        }

        return true;
    }

    //Replace
    replaceChain(newChain){
        if(newChain.length <= this.chain.length) return;

        if(!this.isChainValid(newChain)) return;

        this.chain = newChain;
    }
//Once again make it pretty 
    prettify() {
        let chainString = "";
        for (let i = 0; i < this.chain.length; i++) {
            chainString += this.chain[i].prettify();
            chainString += "<br><hr>";
        }

        return chainString;
    }

}

module.exports = Blockchain;