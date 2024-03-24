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
    - Création d'une donnée `description` et affichage dans un paragraphe `p`
    - Création d'une branche __`L2-creation-app-vue_challenge`__
    - Codage `main.js` et `index.html`

### Etape 2 : Fixation d'attribut (branche `L3-fixation-attribut`)
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
