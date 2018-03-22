const ChainUtil = require('../chain-util');
const Transaction = require('./transaction');
const { INITIAL_BALANCE } = require('../config');

class Wallet {
  constructor() {
    this.balance = INITIAL_BALANCE;
    this.keyPair = ChainUtil.genKeyPair();
    this.publicKey = this.keyPair.getPublic().encode('hex');
  }

  toString() {
    console.log(`Wallet ---- 
			Balance: ${this.balance}
			Public Key: ${this.publicKey.toString()}`);
  }

  sign(dataHash) {
    return this.keyPair.sign(dataHash);
  }

  createTransaction(recipient, amount, transactionPool) {
  	if(amount > this.balance) {
  		console.log(`Amount: ${amount} exceeds balance: ${this.balance}`);
  		return;
		}

		let transaction = transactionPool.existingTransaction(this.publicKey);

  	if(transaction) {
  		transaction.update(this, recipient, amount);
		} else {
  		transaction = Transaction.newTransaction(this, recipient, amount);
  		transactionPool.updateOrAddTransaction(transaction);
		}
		return transaction;
	}
}

module.exports = Wallet;
