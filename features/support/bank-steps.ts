const assert = require('assert');
import { Given, When, Then } from '@cucumber/cucumber';
import { Account } from '../../src/domain/account/Account';
import {expect} from 'chai'
import { Customer } from '../../src/domain/customer/Customer';
import { TransactionStatus } from '../../src/domain/account/TransactionStatus';
import { AccountController } from '../../src/infra/controllers/AccountController';


const customer = new Customer('Gerard','KOFFI', new Date)
const account = new Account(customer, 0);
const ctl = new AccountController(account);

Given('a customer with a balance of €100', function () {
    return account.balance += 100;
  });

When('the customer deposits €50', function () {
    return account.balance += 50;
  });

Then('the deposit should be successful', function () {
    expect(account.balance).equal(150);
  });

Then('the customer deposits less than €0.01', async ()=> {
  try {
    ctl.deposit(0.00198);
  } catch (e) {
    if (e instanceof Error) {
      expect(e.message).equal("Le montant du dépôt doit être supérieur à 0.01");
    } else {
      console.log('Unexpected error', e);
    }
  }
});

Then('the deposit should be rejected', function () {
  expect(account.transactions[0].transactionStatus).equal(TransactionStatus.FAILED);
});

When('the customer consults the balance of his account', function () {
  expect(account.customer).equal(customer);
});

Then('the customer should be able to see the balance of his account, which is €{int}', function (int) {
  expect(account.balance).equal(250);
});

Given('a customer with a balance of ${int}', function (int) {
  Given('a customer with a balance of ${float}', function (float) {
    expect(account.balance).equal(250);
  })
});

When('the customer failed to withdraw more than his balance', function () {
  try {
    ctl.withdraw(400);
  } catch (e) {
    if (e instanceof Error) {
      expect(e.message).equal("Le solde du compte est insuffisant");
    } else {
      console.log('Unexpected error', e);
    }
  }
});