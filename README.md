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
        `.product-image` et `.product-info`
   - Codage `main.js` :
     - suppression champ `description`
2. Ajout d'une __image__ aux données
   - Codage `main.js` :
     - création du champ `image`
   - Codage `index.html` :
     - création de l'élément `img`dans `.product-image` en utilisant la directive `v-bind:` pour connecter 
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
2. Rendre (afficher) les éléments d'un tableau `details`
   - Création du tableau `details` dans `main.js`
   - Création d'un élément `<ul>` et `<li>` pour afficher une liste dans le DOM
     - Utiliser la directive `v-for` dans l'élément de liste `<li>` pour parcourir `details` pour chaque élément `detail`
3. Rendre (afficher) les éléments d'une donnée structurée `variants`
   - Création de la donnée structurée `variants` composé des champs `id` et `color` 
   - Affichage de la donnée structurée `variants` pour chaque élément `variant`, avec l'attribut de la *clé* `:key` 
     obtenu par`variant.id`. La donnée affichée `variant.color` est la couleur de l'élément donnée par la clé
4. *Challenge :* (branche `L5-liste-de-rendu-challenge`)
    - Le challenge est d'afficher un tableau de donnée `sizes` dans une liste
    - Création d'une branche `L5-liste-de-rendu-challenge`
    - Création du codage du challenge dans `main.js` et dans `index.html`

### Etape 5 : Gestion des événements (branche `L6-gestion-événements`)  __Event Handling__
1. Initialisation des données pour cette étape
   - Création d'une branche `L6-gestion-événements`
   - Suppression du codage du challenge et adaptation des données dans `index.html` et `main.js`
     - Création de la donnée `cart` (pour le nombre d'élément ajouté au __panier__) et de la structure `variants` 
       comprenant `id`, `color` et `image`
     - Création d'un élément `.cart` (pour compter la quantité du __panier__) et d'un bouton `.button` (pour ajouter 
       au __panier__)
2. Incrémenter la valeur de la donnée `cart` avec un click sur le bouton `.button`
   - Créer l'écoute de événement `click` du bouton `.button` avec la directive `v-on` (raccourci est **@**)
   - Créer la méthode appelée pour traiter l'événement `addToCart()` dans `main.js`
3. Changer l'image affichée lors que la souris survole les __textes de la couleur__
   - Créer dans `index.html` l'écoute `v-on` (ou **@**) de l'événement `mouseover` (survol) du __texte de la couleur__ en déclenchant la 
     méthode `updateImage()`
4. *Challenge :* (branche `L6-gestion-événements-challenge`)
    - Le challenge est de créer un bouton pour décrémenter la valeur du __panier__ `Cart(...)` affiché
    - Création d'une branche `L6-gestion-événements-challenge`
    - Création du codage du challenge dans `main.js` et dans `index.html`
      - le bouton s'affiche si le nombre `cart` est supérieur à __0__ avec la directive `v-if="cart > 0"`
      - le bouton gère un événement `@click` qui active la méthode `removeFromCart()` avec la directive `v-on:click="removeFromCart()"` 
        (en version raccourcie : `@click="removeFromCart()"`)

### Etape 6 : Reliure de style et de classe (branche `L7-reliure-style-classe`)  __Class & Style Binding__
1. Initialisation des données pour cette étape
   - Création d'une branche `L7-reliure-style-classe`
   - Suppression du codage du challenge et adaptation des données dans `index.html` et `main.js`
     - Création de la donnée `brand` (pour la marque) 
2. Création de pastilles avec la couleur pour remplacer les textes de la couleur
   - ajout de la classe `color-circle` à la `<div>` des couleurs disponibles
   - remplacement du text de la couleur par un fond dans la couleur désirée avec `:style="{ backgroundColor: variant.color }"`
     - 2 possibilités de codage avec le même résultat :
       - en codage **camelCase** : `:style="{ backgroundColor: variant.color }"`
       - en codage **kebab-case** : `:style="{ 'background-color': variant.color }"`
3. Empêcher l'utilisation du bouton quand le stock est vide (`inStock` est *faux*)
   - désactiver le bouton `.button` et changer son style (utilisation de la classe `.disabledButton`)
     - désactiver le bouton `.button` : avec __:disabled="!inStock"__ (code avec le raccourci de `v-bind`)
     - changer le style en modifiant la classe du bouton avec `v-bind:class="{ disabledButton: !inStock }"`
       - alternative à étudier... avec la déclaration `<button :class="[!inStock ? button : disabledButton]">`
4. *Challenge :* (branche `L7-reliure-style-classe-challenge`)
    - Le challenge est de lier la classe `.out-of-stock-img` à l'image chaque fois que `inStock` est __faux__
    - Création d'une branche `L7-reliure-style-classe-challenge`
    - Création du codage du challenge dans `index.html`

### Etape 7 : Propriétés calculés (branche `L8-propriétés-calculées`)  __Computed Proprieties__
1. Initialisation des données pour cette étape
   - Création d'une branche `L8-propriétés-calculées`
   - Suppression du codage du challenge et adaptation des données dans `index.html` et `main.js`
2. Etablir un **titre** avec un calcul direct dans **Vue** qui combine les données `brand` et `product`
   - Ajouter une propriété `computed` (calculée) qui se nomme `titre()`
   - Afficher `{{ title }}` dans la balise `<h1>` de `.product-info`   
3. Utiliser les propriétés calculées pour gérer les quantités par produit et avoir une connaissance dynamique de la disponibilité
   - Ajouter à la donnée structurée `variants` un champ `quantity` pour chaque produit
   - Créer une propriété calculée pour afficher **En stock** ou **En rupture de stock** en fonction de la quantité de la couleur du 
     produit choisie par le survol (`mouseover`) de la souris
     - ajouter un `index` à la boucle `v-for` de rendu du `variants` avec __`v-for="(variant, index) in variants"`__ pour identifier l'indice 
       du produit 
     - modifier la directive `@mouseover` pour identifier le `variant` à mettre à jour avec __` @mouseover="updateVariant(index)"`__
     - ajouter une donnée `selectedVariant` pour mémoriser l'indice du *produit survolé* 
     - modifier la méthode `updateVariant()` pour gérer l'indice du *produit survolé*
     - remplacer (supprimer) la donnée `image` par une propriété calculée (`computed`) pour gérer l'image avec `image()` qui utilise le champ 
       `image` de la donnée structurée `variant`
     - remplacer (supprimer) la donnée `inStock` par une propriété calculée (`computed`) pour gérer la quantité `inStock()` qui utilise le champ 
       `quantity` de la donnée structurée `variant`
4. *Challenge :* (branche `L8-propriétés-calculées-challenge`)
    - Le challenge est de créer une donnée booléenne `onSale` et d'afficher avec une *propriété calculée* le message 
      **`brand` + ' ' + `product` + ' est en vente'** chaque fois que `onSale` est __vrai__
    - Création d'une branche `L8-propriétés-calculées-challenge`
    - Création du codage du challenge dans `main.js` et dans `index.html`

### Etape 8 : Composants et Accessoires (branche `L9-composants-accessoires`)  __Components & Props__
1. Initialisation des données pour cette étape
   - Création d'une branche `L9-composants-accessoires`
   - Suppression du codage du challenge et adaptation des données dans `index.html` et `main.js`
2. Création d'un _premier_ **composant** et insertion dans le projet
   - Création de la structure d'un composant **Vue**
     - création du dossier `./components` et d'un fichier `ProductDisplay.js`
     - dans le fichier `ProductDisplay.js`, créer le composant __`product-display`__ en créant des **options** obtenues en transférant de :
       - de `index.html`, l'élément `.product-display`
       - de `main.js`, les éléments de `data()` (sauf la donnée `cart` qui est _globale_) et les éléments de `methods` et `computed`
   - Insertion du composant dans le projet
     - dans `index.html`, importer le _script_ (après l'import de `main.js`)
   - Utilisation du composant en appelant la balise de son nom (ici, `<product-display>`)
3. Création d'un _premier_ **accessoire** d'un __composant__ pour atteindre des éléments extérieurs à **ce** __composant__
   - Pour l'exemple, création d'un attribut personnalisé au composant `product-display` pour indiquer la gestion d'un client __premium__
     - dans `main.js` création de la donnée booléenne `premium`
     - dans le composant `ProductDisplay.js` :
       - ajouter l'option `props:` (accessoire) pour gérer les relations __avec l'extérieur du composant__
       - ajouter à **methods:** la propriété calculée `shipping () { ... }` pour calculer le prix du transport
       - ajouter au **template:** l'élément `<p>` pour indiquer le prix du transport en utilisant la **propriété calculée** `shipping()`
     - dans le projet `index.html` :
       - dans l'élément _composant_ `<product-display>` ajouter l'attribut **`premium="premium"`** qui permet d'accéder 
         à l'accessoire _'premium='_ et lui affecter la valeur de la donnée _"premium"_ (l'attribut `premium` utilise la directive `v-bind` pour établir 
         un lien dynamique avec la donnée `{ premium }`)
4. *Challenge :* (branche `L9-composants-accessoires-challenge`)
    - Le challenge est de créer un composant `product-details` qui reçoit le `details` à partir d'un *accessoire* appelé `details`
    - Création d'une branche `L9-composants-accessoires-challenge`
    - Création du codage du challenge dans le dossier `components` et dans `index.html`

### Etape 9 : Communiquer les événements (branche `L10-communiquer-événements`)  __Communicating Events__
1. Initialisation des données pour cette étape
   - Création d'une branche `L10-communiquer-événements`
   - Suppression du codage du challenge et adaptation des données dans `product-display`, `index.html` et `main.js`
2. Création d'un événement `add-to-cart` du composant `product-display` pour ajouter au _panier_ `cart` (donnée définie dans `main.js`) du _projet_
   - dans `main.js` :
     - créer une méthode `updateCart()` pour modifier la donnée `cart`
   - dans le projet `index.html` :
     - ajouter à l'instance du composant `<product-display>` l'attribut `@add-to-cart="updateCart"` pour la gestion dynamique `v-on` (**@**) par la 
       méthode `updateCart()` de l'événement `add-to-cart`
   - dans le composant `product-display` (défini dans le fichier `ProductDisplay.js`) :
     - modifier la méthode `addToCart()` pour émettre _l'événement_ nommé `add-to-cart` par la commande `$emit( ... )`
3. Modification du panier `cart` pour contenir les identifiants de chaque produit ajouté et afficher le nombre de produits sélectionnés dans le _panier_
   - dans `main.js` :
     - transformer la donnée `cart` en tableau
     - modifier la méthode `updateCart()` pour ajouter l'identifiant du produit ajouté au _panier_
   - dans le composant `product-display` (défini dans le fichier `ProductDisplay.js`) :
     - ajouter un second paramètre à la méthode `addToCart()` pour transmettre l'identificant du produit concerné
   - dans le projet `index.html` :
     - modifier l'affichage du _panier_ pour indiquer le nombre d'éléments sélectionnés
4. *Challenge :* (branche `L10-communiquer-événements-challenge`)
    - Le challenge est de créer dans le composant `product-display` qui supprime le produit du _panier_
    - Création d'une branche `L10-communiquer-événements-challenge`
    - Création du codage du challenge dans le dossier `components` et dans `index.html`

### Etape 10 : Formulaires et v-modèle (branche `L11-forms`)  __Forms & v-model__
1. Initialisation des données pour cette étape
   - Création d'une branche `L11-forms`
   - Suppression du codage du challenge et adaptation des données dans `product-display`, `index.html` et `main.js`
2. Créer un formulaire permettant d'ajouter des avis sur les produits
   - Créer un fichier `ReviewForm.js` et définir le composant `review-form` qui propose le **template** du formulaire
     - chaque structure du formulaire possède un identifiant (`#name`, `#review`, `#rating`) associé à une donnée du composant (`name`, `review`, 
       `rating`) pour que les données saisies dans le formulaire soient stockées _localement_ dans le composant
     - chaque donnée du composant (`name`, `review`, `rating`) possède une _liaison d'attribut_ (`v-model`) pour chacun des éléments du formulaire 
       (`v-model="name"`, `v-model="review"`,`v-model.number="rating"`)
       - pour le sélecteur `#rating`, la liaison s'effectue sur la _valeur_ du sélecteur `v-model.number`
     - ajouter à la définition du formulaire `.review-form` un modificateur `@submit.prevent="onSubmit"` pour empêcher le comportement par défaut 
       de l'événement de _soumission_
   - Créer la **méthode** `onSubmit` pour traiter la _soumission_ du formulaire
     - créer un objet structuré `productReview` qui contient les données du formulaire, puis qui émet un événement nommé `review-submitted` avec le 
       contenu à soumettre `productReview`, puis qui réinitialise les données (`name`, `review`, `rating`) du formulaire
   - Utiliser le composant ``review-form` pour l'afficher :
     - avec un script d'import dans le _projet_ (`index.html`)
     - avec une utilisation du composant `review-form` par un ajout de la balise `<review-form>` dans le _template_ du composant parent 
       `product-display`
3. Exploitation du formulaire `review-form`
   - Ecouter et exploiter l'événement `review-submitted` pour le stocker dans une nouvelle donnée `reviews` du composant `product-display`
     - dans le composant `product-display` :
       - créer la donnée tableau nommée `reviews`
       - pour l'instance du formulaire `review-form` ajouter une liaison à la méthode `addReview` pour l'événement nommé `review-submitted`
       - créer la méthode `addReview` avec le contenu du formulaire transmis avec l'événement pour enregistrer le contenu des données du formulaire 
         dans le tableau `reviews`
   - Créer un nouveau composant `review-list` (dans un nouveau fichier `ReviewList`) pour afficher les avis
     - dans le composant `review-list` :
       - créer l'accessoire `reviews` pour disposer des données à afficher
       - crér le `template` pour afficher les avis
     - dans le _template_ du composant `product-display`, ajouter l'instance du composant `review-list` avec la liaison `:reviews="reviews"` aux 
       données `reviews`
       - avec l'affichage du composant `review-list` si il existe un avis enregistré `v-if="reviews.length"`
     - dans le _projet_ (fichier `index.html`) importer le composant `review-list` du fichier `ReviewList.js`
   - s'assurer avant la soumission que tous les champs du formulaire sont remplis, sinon afficher un **message d'alerte**
     - dans la méthode `onSubmit` du composant `review-form`, tester si tous les champs sont remplis avant de réaliser le traitement de soumission
       - informer par un message d'alerte, si au moins un champ du formulaire n'est pas rempli
4. *Challenge :* (branche `L11-forms-challenge`)
    - Le challenge est d'ajouter une question dans le composant `review-form`, puis de l'enregistrer et de l'afficher dans le composant `review-list`
    - Création d'une branche `L11-forms-challenge`
    - Création du codage du challenge dans le dossier `components` (fichiers `ReviewForm.js` et `ReviewList`)
      - **à remarquer : l'ajout d'une fonctionnalité dans les couches _basses_, sans modifier les couches _hautes_ du _projet_**
