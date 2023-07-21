import { Account } from "../domain/account/Account";
import { Transaction } from "../domain/account/Transaction";
import { TransactionStatus } from "../domain/account/TransactionStatus";
import { TransactionType } from "../domain/account/TransactionType";
import { Customer } from "../domain/customer/Customer";

let fakeAccounts = [
    new Account(new Customer('Lassina','DIARRA',new Date), 1000000),
    new Account(new Customer('Imane','KONAN',new Date), 907800),
    new Account(new Customer('Mariam','DIALLO',new Date), 8777000),
]

let fakeTransactions = [
    new Transaction(fakeAccounts[0],2000, TransactionType.Withdrawal, new Date, TransactionStatus.SUCCES),
    new Transaction(fakeAccounts[1],17000, TransactionType.Deposit, new Date, TransactionStatus.SUCCES),
    new Transaction(fakeAccounts[1],2000, TransactionType.Withdrawal, new Date, TransactionStatus.SUCCES),
    new Transaction(fakeAccounts[0],2000, TransactionType.Withdrawal, new Date, TransactionStatus.SUCCES),
    new Transaction(fakeAccounts[2],30000, TransactionType.Withdrawal, new Date, TransactionStatus.SUCCES),
    new Transaction(fakeAccounts[2],2000, TransactionType.Withdrawal, new Date, TransactionStatus.SUCCES),
    new Transaction(fakeAccounts[2],19000, TransactionType.Deposit, new Date, TransactionStatus.SUCCES),
    new Transaction(fakeAccounts[1],22000, TransactionType.Deposit, new Date, TransactionStatus.SUCCES),
    new Transaction(fakeAccounts[0],2000, TransactionType.Withdrawal, new Date, TransactionStatus.SUCCES),
  ];


export const findAllFakeTransactions: any = ()  => fakeTransactions;
export const findAllfakeAccounts: any = ()  => fakeAccounts;

export const setAccounts = (accounts: Account[]) => {
    fakeAccounts = accounts;
};
export const setTransactions = (transactions: Transaction[]) => {
    fakeTransactions = transactions;
};