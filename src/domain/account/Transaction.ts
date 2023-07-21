import {v4 as uuidv4} from 'uuid';
import { TransactionType } from "./TransactionType";
import { TransactionStatus } from './TransactionStatus';
import { Account } from './Account';

export class Transaction {
  id: any;
  account: Account;
  amount: number;
  transactionType: TransactionType;
  date: Date;
  transactionStatus: TransactionStatus;

  constructor(account: Account, amount: number, transactionType: TransactionType, date: Date, transactionStatus: TransactionStatus) {
    this.id = uuidv4();
    this.account = account;
    this.amount = amount;
    this.transactionType = transactionType;
    this.date = date;
    this.transactionStatus = transactionStatus;
  }

  
}