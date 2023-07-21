import { Account } from '../../src/domain/account/Account';
import { Customer } from '../../src/domain/customer/Customer';
import { AccountController } from '../../src/infra/controllers/AccountController';
import {expect} from 'chai'

const client = new Customer('Gerard','KOFFI', new Date)
const account = new Account(client, 0);
const ctl = new AccountController(account);

it("should be able to deposit money", async () => {
  ctl.deposit(100);
    expect(account.balance).equal(100);
  });

it("should not be able to deposit less than 0.01", async () => {
  try {
    ctl.deposit(0.00);
    fail("Should have thrown an error");
  } catch (e) {
    if (e instanceof Error) {
      expect(e.message).equal("Le montant du dépôt doit être supérieur à 0.01");
    } else {
      console.log('Unexpected error', e);
    }
  }
});

it("should be able to withdraw money", async () => {
  ctl.withdraw(50);
  expect(account.balance).equal(50);
});

it("should not be able to withdraw more than the balance", async () => {
  try {
    ctl.withdraw(200);
    fail("Should have thrown an error");
  } catch (e) {
    if (e instanceof Error) {
      expect(e.message).equal("Le solde du compte est insuffisant");
    } else {
      console.log('Unexpected error', e);
    }
  }
});

it("should be able to get the balance", async () => {
  expect(account.getBalance()).equal(50);
});


it("should allow the client to view the transaction history", async () => {
  const transactions = await ctl.getTransactions();
  expect(transactions.length).equal(4)
});