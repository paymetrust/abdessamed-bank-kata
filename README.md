# exercice-bank

## L'exercice

Implementation d'un MVP avec un stack nodejs/typescript/jest

### Minimum Valuable Product - MVP

> User Story 1: En tant que banque, j'accepte le dépôt d'argent d'un client vers son compte, s'il est supérieur à 0,01€

> User Story 2:
> En tant que banque, j'accepte le retrait d'argent d'un client depuis son compte, s'il n'utilise pas le découvert

> User Story 3:
> En tant que banque, j'offre la possibilité à mon client de consulter le solde de son compte

> User Story 4:
> En tant que banque, j'offre la possibilité à mon client de consulter l'historique des transactions sur son compte

```
git clone pour recuperer le referentiel
npm install
npm test

 TEST  tests/account.test.ts
  ✓ should be able to deposit money
  ✓ should not be able to deposit less than 0.01
  ✓ should be able to withdraw money
  ✓ should not be able to withdraw more than the balance
  ✓ should be able to get the balance

```
