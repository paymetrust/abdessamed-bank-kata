import { Account } from "../account/Account";
import { Transaction } from "../account/Transaction";
import { Customer } from '../customer/Customer';

export type ListTransactions = () => Transaction[];
export type SearchTransactions = (account: Account) => Transaction[];

export interface AccountService {
    deposit(accountId: number, amount: number): Promise<Account>;
    withdraw(accountId: number, amount: number): Promise<Account>;
    getBalance(accountId: number): Promise<number>;
    getTransactions(accountId: number): Promise<Transaction[]>;
    listTransactions: Promise<ListTransactions>;
    searchTransactions: Promise<SearchTransactions>;
}
  