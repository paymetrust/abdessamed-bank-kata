import { Transaction } from "../account/Transaction";

interface TransactionService {
    getTransactions(accountId: number): Transaction[];
    saveTransaction(transaction: Transaction): void;
  }