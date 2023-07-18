import { Transaction } from "../account/Transaction";

interface AccountService {
    deposit(accountId: number, amount: number): void;
    withdraw(accountId: number, amount: number): void;
    getBalance(accountId: number): number;
    getTransactionHistory(accountId: number): Transaction[];
  }
  