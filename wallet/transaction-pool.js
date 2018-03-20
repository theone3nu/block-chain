class TransactionPool {
	constructor() {
		this.transactions = [];
	}

	updateOrAddTransaction(transaction) {
		const transactionIndex = this.transactions.findIndex(t => t.id === transaction.id);
		if(transactionIndex >= 0) {
			this.transactions[transactionIndex] = transaction;
		} else {
			this.transactions.push(transaction);
		}
	}
}

module.exports = TransactionPool;