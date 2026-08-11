# Astrantia — site e-commerce premium

Site statique complet (HTML5 + CSS3 + JavaScript vanilla). **Aucune dépendance, aucun build** : ouvrez `index.html` dans un navigateur et tout fonctionne.

## Structure

```
astrantia/
├── index.html          Accueil (hero, collections, sélection, showroom)
├── boutique.html       Catalogue : recherche, filtres, tri, pagination
├── produit.html        Fiche produit dynamique — produit.html?id=fauteuil-oslo
├── collections.html    Pages éditoriales des 5 univers
├── a-propos.html       Histoire, méthode, repères, mentions légales
├── contact.html        Formulaire avec validation JS
├── panier.html         Panier, code promo, commande simulée
├── robots.txt / sitemap.xml
├── css/style.css       Design system complet (1 190 lignes, commenté)
├── js/products.js      Catalogue central — 136 produits
├── js/script.js        Toute la logique du site
└── images/             Dossiers prêts pour vos photos
```

## Le catalogue (136 produits, extensible sans limite)

Tout part de `js/products.js`. Pour **ajouter un produit**, une ligne suffit dans la famille concernée :

```js
["Modèle", 890, "Chêne massif, lin lavé", "L 78 × P 82 × H 74 cm", "Bois"]
```

L'identifiant, la description, les coloris, la référence et le visuel sont générés automatiquement. Pour **ajouter une famille**, ajoutez un bloc dans `CATALOG` : les filtres de la boutique se reconstruisent tout seuls à partir des données.

La boutique reste fluide à grande échelle : index de recherche pré-calculé, rendu par lots de 24 via `DocumentFragment`, aucun re-rendu inutile.

## Fonctionnalités

- **Recherche** multi-termes insensible aux accents (nom, catégorie, matière, référence)
- **Filtres** catégories / collections / matières / fourchette de prix, cumulables, avec compteurs et chips supprimables
- **Tri** sélection, nouveautés, prix croissant/décroissant, alphabétique
- **URL partageable** : `boutique.html?collection=Chambre&matiere=Bois&tri=prix-asc`
- **Panier** persistant (localStorage), quantités, codes promo `ASTRANTIA10` / `BIENVENUE5`, livraison offerte dès 1 500 €
- **Fiches produits** dynamiques avec galerie 4 vues, coloris, accordéons et pièces assorties
- **Formulaire de contact** validé côté client (champ par champ, à la volée)
- **SEO** : titles, meta descriptions, Open Graph, canonical, structure Hn, `alt`/`aria-label`, sitemap, robots
- **Responsive** mobile / tablette / desktop, menu hamburger, panneau de filtres plein écran sur mobile
- **Accessibilité** : navigation clavier, `aria-*`, focus visible, `prefers-reduced-motion`

## Les visuels

Les images sont pour l'instant **générées en CSS** (dégradés de matière + pictogramme linéaire, 8 teintes × 12 familles). C'est volontaire : le site est cohérent immédiatement, sans fichier lourd.

Pour brancher vos photos, deux points d'entrée :

1. `js/script.js` → fonction `phHTML()` : remplacez le `<span class="ph">` par `<img src="images/produits/ID.jpg" alt="...">`
2. Dans le HTML statique : remplacez les `<span class="ph ...">` par vos `<img>`

Le CSS `.ph` reste utile comme état de chargement.

## Mise en ligne

Déposez le dossier tel quel sur n'importe quel hébergement statique (Netlify, Vercel, GitHub Pages, OVH, un simple FTP). Pensez à remplacer `https://www.astrantia.fr/` par votre domaine dans les balises `canonical`, `og:url`, `sitemap.xml` et `robots.txt`.

## Vérifications effectuées

- 0 lien mort, 0 page fictive, 0 erreur 404 (tous les `href` pointent vers un fichier existant)
- 136 produits, aucun identifiant en doublon
- Structure HTML équilibrée sur les 7 pages, CSS sans erreur de syntaxe
- Parcours testés automatiquement : ajout au panier, filtres, tri, recherche, pagination, promo, commande, validation du formulaire
