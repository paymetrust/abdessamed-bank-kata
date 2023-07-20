import { Account } from "../account/Account";
import { Transaction } from "../account/Transaction";

export type FindAllTransactions = () => Transaction[];

export interface AccountRepository {
    getAccount(id: number): Account;
    saveAccount(account: Account): void;
    getAccountTransactions(accountId: number): FindAllTransactions;
    saveTransaction(transaction: Transaction): void;
    findAllTransactions(): FindAllTransactions;
    getAccount(id: any): Account;
    getAllAccountsOfACustomer(customerId: any): Account[];
    saveAccount(account: Account): void;
  }