import { Account } from '../../src/domain/account/Account';
import { Customer } from '../../src/domain/customer/Customer';

const client = new Customer('Gerard','KOFFI', new Date)
const account = new Account(client, 0);

it("should be able to deposit money", async () => {
    account.deposit(100);
    expect(account.balance).toEqual(100);
  });

it("should not be able to deposit less than 0.01", async () => {
  try {
    account.deposit(0.00);
    fail("Should have thrown an error");
  } catch (e) {
    if (e instanceof Error) {
      expect(e.message).toEqual("Le montant du dépôt doit être supérieur à 0.01");
    } else {
      console.log('Unexpected error', e);
    }
  }
});

it("should be able to withdraw money", async () => {
  account.withdraw(50);
  expect(account.balance).toEqual(50);
});

it("should not be able to withdraw more than the balance", async () => {
  try {
    account.withdraw(200);
    fail("Should have thrown an error");
  } catch (e) {
    if (e instanceof Error) {
      expect(e.message).toEqual("Le solde du compte est insuffisant");
    } else {
      console.log('Unexpected error', e);
    }
  }
});

it("should be able to get the balance", async () => {
  expect(account.getBalance()).toEqual(50);
});


it("should allow the client to view the transaction history", async () => {
  const transactions = await account.getTransactions();
  expect(transactions.length).toEqual(4)
});