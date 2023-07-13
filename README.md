# Bank Account (FR)
> Ceci est un exercice assez libre d'implémentation à faire chez vous, dans un temps restreint, il a pour objectif d'ouvrir la discussion technique lors d'un futur entretien.

## Consignes
L'exercice suivant est composé d'une partie obligatoire, le [Minimum Valuable Product ou MVP](#minimum-valuable-product---mvp)
et de [fonctionnalités facultatives](#features-bonus) afin d'utiliser le temps restant pour vous démarquer.  
S'il vous manque une information, faites un choix et restez cohérent avec celui-ci.  
_Faites attention à la taille de vos commits et leurs messages._

**Il n'y a pas de "bonne" façon de réaliser ce exercice, nous sommes intéressés par votre choix d'implémentation, votre technique et le respect des contraintes.**

### Livraison
L'exercice devra être fourni sous forme d'un repository [Github](https://github.com) ou bien faire l'objet d'une *Pull Request* vers la branche [develop] du [repository d'origine].  
Votre repository doit contenir : 
* Une branche qui a pour nom, votre `trigramme` reçu par mail, qui contiendra votre code source final.
* Un fichier `readme.md` qui explique les possibles subtilités de votre implémentation et comment lancer votre projet.

### Contraintes techniques
* NodeJS 
* Jest  

## L'exercice
### Minimum Valuable Product - MVP

#### User Story 1
> En tant que banque, j'accepte le dépôt d'argent d'un client vers son compte, s'il est supérieur à 0,01€

#### User Story 2
> En tant que banque, j'accepte le retrait d'argent d'un client depuis son compte, s'il n'utilise pas le découvert

#### User Story 3
> En tant que banque, j'offre la possibilité à mon client de consulter le solde de son compte

#### User Story 4
> En tant que banque, j'offre la possibilité à mon client de consulter l'historique des transactions sur son compte

### Features bonus
Les fonctionnalités suivantes sont optionnelles et non exhaustives.  
Elles n'ont pas de priorité entre elles, vous pouvez implémenter celles qui vous intéressent ou même en proposer d'autres.

#### API REST
* Proposer une API REST consommable via http pour interagir avec les services réalisé dans le MVP
* Sécuriser l'API
* Utiliser une solution non-bloquante

#### Clients & Comptes
* La banque a plusieurs clients
* Un client peut avoir plusieurs comptes

#### Persistence
* Proposer une solution de persistence des données

#### Interface Utilisateur
* Proposer une interface graphique pour interagir avec les services réalisés dans le MVP

#### CI/CD
* Utiliser Gradle au lieu de Maven
* Proposer un system de CI/CD pour le projet
* Proposer des tests End to End à destination de votre livrable
