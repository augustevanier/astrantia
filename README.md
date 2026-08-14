# Maison Astrantia

Site de **Maison Astrantia** — maison de conception, d'aménagement, de mobilier et d'art de vivre.
40c allée des négociants, 01340 Attignat.

**Signature : Vision · Confiance · Évidence.**

HTML5 + CSS3 + JavaScript vanilla. **Aucune dépendance, aucun outil de build obligatoire** :
ouvrez `index.html` et tout fonctionne.

---

## Le positionnement

Le site raconte, dans cet ordre : **émotion → vision → confiance → projets → expertise → univers → contact**.
La boutique et les produits restent complets et fonctionnels, mais ils arrivent *après* la
compréhension de qui est Astrantia et de ce qu'elle sait faire.

## Structure

```
astrantia/
├── index.html          Accueil : hero, notre regard, 3 piliers, projets, 4 univers,
│                       studio, sélection du moment, partagez et adoptez, expertise,
│                       philosophie, marques, la maison, newsletter, contact
├── projets.html        PROJETS — la mosaïque des réalisations (emplacements à compléter)
├── studio.html         STUDIO — projets & conception, les 3 piliers développés, la méthode
├── collections.html    COLLECTION — les 6 univers de la sélection, en pages éditoriales
├── atelier.html        ATELIER — créations sur mesure
├── art-de-vivre.html   ART DE VIVRE — matières, objets & inspirations
├── a-propos.html       LA MAISON — qui nous sommes, engagements, visite, mentions légales
├── contact.html        « Parlons de votre projet » — formulaire validé + coordonnées
├── boutique.html       Catalogue : recherche, filtres, tri, pagination
├── produit.html        Fiche dynamique — produit.html?id=chaise-luxembourg
├── panier.html         Panier, code promo, retrait sur place, commande simulée
├── style.css           Toute la direction artistique (commentée, section par section)
├── products.js         LE CATALOGUE — produits, marques, univers, photos de démo
├── script.js           Toute la logique + le système d'images
├── fonts/              Polices auto-hébergées (woff2, sous-ensemble latin)
├── images/             hero/ piliers/ projets/ univers/ atelier/ collections/
│                       showroom/ produits/ logo/   → voir images/LISEZ-MOI.txt
├── robots.txt / sitemap.xml
└── _build/             (optionnel) gabarits de génération — voir plus bas
```

## Vos photos s'affichent toutes seules

Chaque visuel tente de charger, dans l'ordre :

1. **votre photo** — le chemin est écrit dans l'attribut `data-local` du HTML
   (ex. `images/hero/accueil.jpg`, `images/projets/projet-1.jpg`) ;
2. la photo de démonstration (banque libre de droit, déjà en place) ;
3. le visuel CSS de secours (dégradé de matière + pictogramme).

**Vous n'avez donc jamais de code à toucher pour changer une image** : déposez le fichier
au bon endroit, il remplace automatiquement la démo. La liste complète des emplacements
est dans `images/LISEZ-MOI.txt`.

Pour un produit : `images/produits/<identifiant>.jpg` (+ `-2.jpg`, `-3.jpg`, `-4.jpg`
pour les vues supplémentaires de la fiche).

## Le logo

Le logotype affiché dans le header et le footer est **typographique** (« MAISON ASTRANTIA »),
donc net à toutes les tailles. Si vous déposez un fichier `images/logo.png`, il le remplace
automatiquement partout.

Le logo **Astrantia Studio** fourni est dans `images/logo/astrantia-studio.png` (fond rendu
transparent, proportions d'origine respectées). Il est utilisé tel quel sur la page Studio.

## Emplacements à compléter

Les contenus que nous n'avions pas sont signalés dans le code par le commentaire
`EMPLACEMENT À COMPLÉTER` et à l'écran par une petite étiquette discrète :

- **les 8 projets** (`projets.html` et l'accueil) : photo, lieu, nom ;
- **l'histoire de la maison** (`a-propos.html`) ;
- **les mentions légales** : forme juridique, capital, directeur de la publication.

Pour publier un projet : déposez `images/projets/projet-N.jpg`, remplacez le lieu et le nom,
puis supprimez les classes `project-card--todo` et `is-placeholder` ainsi que la ligne
`<span class="placeholder-tag">…</span>`.

Aucune information n'a été inventée : ni avis client, ni chiffre, ni date, ni nom.

## Personnaliser le design

Tout se règle dans `style.css` :

- **couleurs** → bloc `01. VARIABLES` (ivoire, crème, sable, taupe, bois, vert profond, laiton) ;
- **polices** → bloc `00. POLICES` (fichiers dans `/fonts`) + variables `--serif` / `--sans` ;
- **rythme** → `--container`, `--gutter`, `--section-y`.

Les polices sont **auto-hébergées** : aucun appel à Google Fonts, chargement plus rapide et
conforme au RGPD.

## Le dossier `_build/` (facultatif)

Il contient les gabarits qui ont servi à générer les pages, afin que le header et le footer
soient rigoureusement identiques partout. Il n'est **pas publié** (GitHub Pages ignore les
dossiers commençant par `_`) et n'est **pas nécessaire** au fonctionnement du site.

- Si vous modifiez directement les fichiers `.html`, ne relancez pas le script :
  les `.html` sont la source publiée.
- Si vous voulez changer le menu ou le footer sur **toutes** les pages d'un coup :
  éditez `_build/parts.py` puis lancez `python3 _build/build.py`.
