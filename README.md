# SRC_JS-Intro-to-Vue3_Studies-01
Version d'étude issue des cours de Mastery.com de Adam Jahr

## Objectif
Ce projet permet d'apprendre à utiliser Vue.Js 3 en réalisant étape par étape les opérations de codage 
proposées dans le cours __Intro à Vue 3__ de **Mastery.com**.

## Etapes du projet

### Etape 1 : Initialisation du projet - Création de l'application Vue (branche `L2-creation-app-vue`)
1. Initialisation de la structure du projet avec les données du repository de Adam Jahr
   - Source : [Code-Pop/Intro-to-Vue-3 (GitHub)](https://github.com/Code-Pop/Intro-to-Vue-3)
   - Création d'une branche `L2-creation-app-vue`dans le _Projet_
   - Recopie des fichiers de la _source_
2. Création de l'instance `mountedApp` de __Vue__ liée à l'élément `#app` du __DOM__
   - Codage `main.js` :
     - instance `app` par utilisation de la méthode `Vue.createApp()`
     - création de la fonction `data()` pour accéder aux données `product`
   - Codage `index.html` :
    - script __JS__ d'instance de `mountedApp` avec un rendu dans `#app`
    - consommation de la donnée `product` dans `h1` de `#app`
3. *Chalenge :* (branche `L2-creation-app-vue_challenge`)
    - Le challenge est de créer une donnée `description` et de l'afficher dans un paragraphe `p`
    - Création d'une branche __`L2-creation-app-vue_challenge`__
    - Codage `main.js` et `index.html`

### Etape 2 : Fixation d'attribut (branche `L3-fixation-attribut`) - __attribute binding__
1. Initialisation des données pour cette étape
   - Création d'une branche `L3-fixation-attribut`
   - Codage `index.html` :
     - création des différentes classes `.nav-bar`, `.product-display`, `.product-container`, 
        `product-image` et `.product-info`
   - Codage `main.js` :
     - suppression champ `description`
2. Ajout d'une __image__ aux données
   - Codage `main.js` :
     - création du champ `image`
   - Codage `index.html` :
     - création de l'élément `img`dans `product-image` en utilisant la directive `v-bind:` pour connecter 
       la source `src`de l'image
3. *Challenge :* (branche `L3-fixation-attribut-challenge`)
    - Le challenge est de créer une donnée `url` et d'utiliser une directive `v-bind` pour fixer l'url à 
      l'attribut `href` d'un élément de lien `<a>` 
    - Création d'une branche `L3-fixation-attribut-challenge`
    - Création du codage du challenge dans `main.js` et dans `index.html`

### Etape 3 : Rendu conditionnel (branche `L4-rendu-conditionnel`)  __Conditional rendering__
1. Initialisation des données pour cette étape
   - Création d'une branche `L4-rendu-conditionnel`
   - Suppression du codage du challenge dans `index.html` et `main.js`
2. Rendre (afficher) ou Ne pas rendre (masquer) un élément du DOM (de la page)
   - Création d'une données `inventory` dans `main.js`
   - Création d'éléments `<p>` avec une directive enchaînée `v-if`, `v-else-if` et `v-else` sur une condition
     - voir les autres conditions __`Vue`__ du type `v-if`+`v-else` et `v-show`
3. *Challenge :* (branche `L4-rendu-conditionnel-challenge`)
    - Le challenge est d'afficher 'On sale!' lorsque la donnée `onSale` est `vrai`
    - Création d'une branche `L4-rendu-conditionnel-challenge`
    - Création du codage du challenge dans `main.js` et dans `index.html`

### Etape 4 : Rendu conditionnel (branche `L5-liste-de-rendu`)  __List rendering__
1. Initialisation des données pour cette étape
   - Création d'une branche `L5-liste-de-rendu`
   - Suppression du codage du challenge et adaptation des données dans `index.html` et `main.js`
     - Création d'un tableau `details` et d'une donnée booléenne `inStock`, suppresson de `inventory`
