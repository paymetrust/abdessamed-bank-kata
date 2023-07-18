import { Transaction } from "../account/Transaction";

interface TransactionRepository {
    getTransactions(accountId: number): Transaction[];
    saveTransaction(transaction: Transaction): void;
  }