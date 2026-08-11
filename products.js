/* ==========================================================================
   ASTRANTIA — Catalogue central
   --------------------------------------------------------------------------
   Toute la boutique (grille, recherche, filtres, tri, fiches produits,
   produits similaires, panier) se nourrit UNIQUEMENT de ce fichier.

   POUR AJOUTER UN PRODUIT :
   ajoutez une ligne dans le tableau `items` de la famille concernée :
     ["Modèle", prix, "Matières", "Dimensions", "Famille de matière"]
   Un identifiant unique, une description, des coloris et un visuel sont
   générés automatiquement. Le site supporte plusieurs milliers de références
   sans aucune modification du code (rendu par lots + index de recherche).

   POUR AJOUTER UNE FAMILLE :
   ajoutez un bloc dans CATALOG. Les filtres de la boutique se construisent
   dynamiquement à partir des données : rien d'autre à modifier.
   ========================================================================== */

(function (global) {
  "use strict";

  /* ------------------------------------------------------------------ */
  /* 1. Source du catalogue                                              */
  /* ------------------------------------------------------------------ */
  var CATALOG = [
    {
      category: "Fauteuils", collection: "Salon", icon: "chair", prefix: "Fauteuil",
      items: [
        ["Oslo", 890, "Chêne massif, lin lavé", "L 78 × P 82 × H 74 cm", "Bois"],
        ["Arca", 1290, "Noyer cintré, laine bouclée", "L 84 × P 86 × H 72 cm", "Textile"],
        ["Malmö", 740, "Frêne clair, tissu coton", "L 72 × P 78 × H 76 cm", "Bois"],
        ["Lucca", 1640, "Cuir pleine fleur, acier patiné", "L 88 × P 90 × H 70 cm", "Cuir"],
        ["Sienne", 980, "Velours de coton, hêtre teinté", "L 76 × P 80 × H 75 cm", "Textile"],
        ["Bergen", 1120, "Chêne fumé, laine mélangée", "L 80 × P 84 × H 73 cm", "Bois"],
        ["Ravel", 1450, "Cuir grainé, piètement laiton", "L 86 × P 88 × H 71 cm", "Cuir"],
        ["Nord", 690, "Bouleau, toile de lin", "L 70 × P 76 × H 78 cm", "Bois"],
        ["Comô", 1780, "Cuir nubuck, noyer massif", "L 92 × P 94 × H 74 cm", "Cuir"],
        ["Aria", 860, "Bouclette écrue, acier noir", "L 74 × P 79 × H 72 cm", "Textile"],
        ["Vernon", 1340, "Velours côtelé, laiton brossé", "L 82 × P 85 × H 74 cm", "Textile"],
        ["Sorel", 1050, "Rotin tressé, coussins lin", "L 78 × P 80 × H 77 cm", "Rotin"]
      ]
    },
    {
      category: "Canapés", collection: "Salon", icon: "sofa", prefix: "Canapé",
      items: [
        ["Noma", 2490, "Lin épais, structure hêtre", "L 220 × P 96 × H 78 cm", "Textile"],
        ["Halden", 3180, "Laine bouclée, mousse HR", "L 245 × P 102 × H 76 cm", "Textile"],
        ["Vérone", 4290, "Cuir pleine fleur camel", "L 238 × P 100 × H 74 cm", "Cuir"],
        ["Milos", 2790, "Coton lavé, chêne massif", "L 226 × P 98 × H 80 cm", "Textile"],
        ["Lisbonne", 3450, "Velours de coton, laiton", "L 252 × P 104 × H 77 cm", "Textile"],
        ["Ancona", 3890, "Cuir grainé, piètement noyer", "L 240 × P 99 × H 75 cm", "Cuir"],
        ["Solstice", 2190, "Lin naturel déhoussable", "L 205 × P 94 × H 79 cm", "Textile"],
        ["Marta", 2980, "Bouclette ivoire, frêne", "L 232 × P 100 × H 78 cm", "Textile"],
        ["Ombre", 3620, "Velours anthracite, acier noir", "L 248 × P 103 × H 76 cm", "Textile"],
        ["Ravenne", 4680, "Cuir nubuck, structure noyer", "L 268 × P 108 × H 74 cm", "Cuir"]
      ]
    },
    {
      category: "Tables basses", collection: "Salon", icon: "table", prefix: "Table basse",
      items: [
        ["Alba", 690, "Chêne massif huilé", "L 120 × P 65 × H 36 cm", "Bois"],
        ["Onde", 940, "Travertin naturel", "Ø 90 × H 34 cm", "Pierre"],
        ["Galet", 780, "Marbre Calacatta, acier", "L 100 × P 60 × H 32 cm", "Pierre"],
        ["Sienna", 620, "Noyer massif, verre fumé", "L 110 × P 58 × H 38 cm", "Bois"],
        ["Lune", 1180, "Marbre vert, laiton brossé", "Ø 100 × H 33 cm", "Pierre"],
        ["Kaolin", 540, "Céramique émaillée, métal", "Ø 70 × H 40 cm", "Céramique"],
        ["Brume", 860, "Verre trempé, chêne fumé", "L 130 × P 70 × H 35 cm", "Verre"],
        ["Sillon", 720, "Frêne massif cannelé", "L 115 × P 62 × H 37 cm", "Bois"]
      ]
    },
    {
      category: "Consoles", collection: "Salon", icon: "table", prefix: "Console",
      items: [
        ["Élan", 890, "Chêne massif, laiton", "L 140 × P 38 × H 82 cm", "Bois"],
        ["Ligne", 760, "Frêne teinté, acier noir", "L 120 × P 35 × H 80 cm", "Métal"],
        ["Verso", 1240, "Noyer massif, marbre blanc", "L 150 × P 40 × H 84 cm", "Bois"],
        ["Sablier", 980, "Travertin massif", "L 130 × P 36 × H 81 cm", "Pierre"],
        ["Ostra", 690, "Chêne clair, cannage", "L 118 × P 34 × H 79 cm", "Rotin"],
        ["Ivoire", 1120, "Laque mate, piètement laiton", "L 145 × P 38 × H 83 cm", "Métal"],
        ["Trame", 840, "Frêne massif, cannage naturel", "L 128 × P 36 × H 80 cm", "Rotin"],
        ["Havane", 1390, "Noyer massif, cuir cousu", "L 152 × P 40 × H 82 cm", "Cuir"]
      ]
    },
    {
      category: "Chaises", collection: "Salle à manger", icon: "chair", prefix: "Chaise",
      items: [
        ["Épure", 340, "Chêne massif, assise paille", "L 46 × P 52 × H 82 cm", "Bois"],
        ["Fjord", 420, "Frêne courbé, lin", "L 48 × P 54 × H 80 cm", "Bois"],
        ["Cordoue", 560, "Cuir tendu, acier patiné", "L 50 × P 55 × H 81 cm", "Cuir"],
        ["Tiva", 290, "Hêtre teinté, assise bois", "L 44 × P 50 × H 84 cm", "Bois"],
        ["Anvers", 480, "Velours de coton, noyer", "L 49 × P 56 × H 83 cm", "Textile"],
        ["Lino", 380, "Lin lavé, piètement frêne", "L 47 × P 53 × H 82 cm", "Textile"],
        ["Sable", 320, "Rotin naturel, hêtre", "L 45 × P 51 × H 80 cm", "Rotin"],
        ["Corso", 610, "Cuir grainé, laiton brossé", "L 52 × P 57 × H 82 cm", "Cuir"],
        ["Nara", 450, "Chêne fumé, corde tressée", "L 48 × P 54 × H 79 cm", "Bois"],
        ["Belle-Île", 390, "Bouclette écrue, acier noir", "L 47 × P 53 × H 81 cm", "Textile"]
      ]
    },
    {
      category: "Tables", collection: "Salle à manger", icon: "table", prefix: "Table",
      items: [
        ["Épure", 1890, "Chêne massif huilé", "L 220 × P 100 × H 75 cm", "Bois"],
        ["Riviera", 2640, "Travertin massif", "L 240 × P 105 × H 74 cm", "Pierre"],
        ["Massif", 2180, "Noyer massif, assemblage tourillon", "L 230 × P 102 × H 76 cm", "Bois"],
        ["Ostende", 1490, "Frêne clair, piètement acier", "L 200 × P 95 × H 75 cm", "Métal"],
        ["Cassis", 3290, "Marbre Calacatta, laiton", "L 250 × P 110 × H 74 cm", "Pierre"],
        ["Terra", 1740, "Chêne fumé, plateau ovale", "L 210 × P 110 × H 75 cm", "Bois"],
        ["Ombra", 2380, "Chêne noirci, socle central", "Ø 140 × H 75 cm", "Bois"],
        ["Ligne", 1620, "Verre trempé, acier noir", "L 205 × P 98 × H 74 cm", "Verre"],
        ["Ravello", 2890, "Travertin, piètement sculpté", "L 245 × P 108 × H 75 cm", "Pierre"],
        ["Vasque", 1980, "Noyer massif, plateau rond", "Ø 130 × H 75 cm", "Bois"]
      ]
    },
    {
      category: "Buffets & rangements", collection: "Salle à manger", icon: "storage", prefix: "",
      items: [
        ["Buffet Lima", 1890, "Chêne massif, cannage naturel", "L 180 × P 45 × H 78 cm", "Bois"],
        ["Bibliothèque Verso", 2240, "Noyer massif, acier noir", "L 200 × P 38 × H 200 cm", "Bois"],
        ["Vaisselier Anjou", 2680, "Frêne massif, verre cannelé", "L 120 × P 42 × H 195 cm", "Verre"],
        ["Meuble TV Onde", 1290, "Chêne fumé, laiton brossé", "L 165 × P 40 × H 48 cm", "Bois"],
        ["Étagère Trame", 890, "Frêne clair, tirants acier", "L 90 × P 32 × H 180 cm", "Métal"],
        ["Buffet Cassis", 2190, "Noyer, façades laquées", "L 195 × P 46 × H 80 cm", "Bois"],
        ["Bibliothèque Massif", 3180, "Chêne massif, modules empilables", "L 240 × P 40 × H 210 cm", "Bois"],
        ["Vitrine Halo", 1980, "Acier patiné, verre trempé", "L 100 × P 38 × H 175 cm", "Verre"],
        ["Buffet Ostra", 1640, "Frêne, cannage et laiton", "L 170 × P 44 × H 76 cm", "Rotin"],
        ["Desserte Ligne", 690, "Chêne massif, roulettes laiton", "L 80 × P 44 × H 82 cm", "Bois"]
      ]
    },
    {
      category: "Lits", collection: "Chambre", icon: "bed", prefix: "Lit",
      items: [
        ["Nord", 1690, "Chêne massif, tête de lit lin", "L 180 × P 210 × H 105 cm", "Bois"],
        ["Aria", 2180, "Bouclette écrue, socle bois", "L 180 × P 212 × H 100 cm", "Textile"],
        ["Sereine", 1490, "Frêne clair, sommier inclus", "L 160 × P 205 × H 98 cm", "Bois"],
        ["Anvers", 2680, "Velours de coton, laiton", "L 200 × P 215 × H 110 cm", "Textile"],
        ["Kyoto", 1290, "Noyer massif, ligne basse", "L 160 × P 205 × H 78 cm", "Bois"],
        ["Ombre", 2390, "Cuir grainé, structure acier", "L 180 × P 212 × H 102 cm", "Cuir"],
        ["Bruma", 1840, "Lin lavé, coutures apparentes", "L 180 × P 210 × H 106 cm", "Textile"],
        ["Tête de lit Lin", 780, "Lin épais capitonné", "L 180 × P 10 × H 120 cm", "Textile"]
      ]
    },
    {
      category: "Commodes & chevets", collection: "Chambre", icon: "storage", prefix: "",
      items: [
        ["Commode Aster", 1290, "Chêne massif, six tiroirs", "L 120 × P 45 × H 82 cm", "Bois"],
        ["Commode Lune", 1580, "Noyer, poignées laiton", "L 135 × P 48 × H 85 cm", "Bois"],
        ["Chevet Onde", 420, "Frêne clair, tiroir unique", "L 45 × P 38 × H 52 cm", "Bois"],
        ["Chevet Galet", 540, "Travertin, plateau rond", "Ø 42 × H 55 cm", "Pierre"],
        ["Commode Trame", 1140, "Frêne, façades cannage", "L 110 × P 44 × H 80 cm", "Rotin"],
        ["Chevet Ligne", 380, "Acier noir, plateau chêne", "L 42 × P 36 × H 54 cm", "Métal"],
        ["Armoire Nord", 2890, "Chêne massif, deux portes", "L 160 × P 60 × H 210 cm", "Bois"],
        ["Coiffeuse Aria", 980, "Frêne clair, miroir intégré", "L 100 × P 45 × H 140 cm", "Bois"]
      ]
    },
    {
      category: "Textiles", collection: "Chambre", icon: "rug", prefix: "",
      items: [
        ["Plaid Alpaga", 240, "Alpaga et laine mérinos", "130 × 190 cm", "Textile"],
        ["Coussin Lin", 68, "Lin lavé, garnissage plumes", "50 × 50 cm", "Textile"],
        ["Coussin Chevron", 82, "Laine tissée main", "45 × 65 cm", "Textile"],
        ["Parure Cotone", 320, "Percale de coton lavé", "240 × 260 cm", "Textile"],
        ["Plaid Bouclette", 190, "Laine bouclée écrue", "140 × 200 cm", "Textile"],
        ["Coussin Velours", 94, "Velours de coton, passepoil", "40 × 60 cm", "Textile"],
        ["Rideau Voile", 160, "Voile de lin, œillets laiton", "140 × 280 cm", "Textile"],
        ["Couvre-lit Ombre", 380, "Coton gaufré, finition main", "250 × 270 cm", "Textile"]
      ]
    },
    {
      category: "Luminaires", collection: "Décoration", icon: "lamp", prefix: "",
      items: [
        ["Lampe Atelier", 320, "Acier patiné, abat-jour lin", "Ø 32 × H 48 cm", "Métal"],
        ["Suspension Halo", 590, "Laiton brossé, verre opalin", "Ø 45 × H 30 cm", "Métal"],
        ["Lampadaire Ligne", 740, "Acier noir, diffuseur coton", "Ø 40 × H 165 cm", "Métal"],
        ["Applique Onde", 280, "Laiton massif, verre dépoli", "L 24 × P 14 × H 22 cm", "Verre"],
        ["Lampe Galet", 390, "Céramique émaillée, lin", "Ø 30 × H 45 cm", "Céramique"],
        ["Suspension Terra", 460, "Terre cuite émaillée", "Ø 38 × H 34 cm", "Céramique"],
        ["Lampadaire Arc", 980, "Marbre blanc, laiton", "L 180 × H 210 cm", "Pierre"],
        ["Lampe Céleste", 520, "Albâtre naturel, socle laiton", "Ø 26 × H 38 cm", "Pierre"],
        ["Suspension Papier", 240, "Papier washi, structure bambou", "Ø 55 × H 55 cm", "Textile"],
        ["Applique Trame", 310, "Rotin tressé, métal noir", "L 28 × P 16 × H 26 cm", "Rotin"],
        ["Lampe Sillon", 350, "Grès émaillé, abat-jour coton", "Ø 28 × H 42 cm", "Céramique"],
        ["Lampadaire Nord", 640, "Chêne massif, coton écru", "Ø 42 × H 158 cm", "Bois"]
      ]
    },
    {
      category: "Objets & décoration", collection: "Décoration", icon: "decor", prefix: "",
      items: [
        ["Vase Terra", 140, "Terre cuite tournée main", "Ø 22 × H 34 cm", "Céramique"],
        ["Vase Onde", 180, "Grès émaillé mat", "Ø 18 × H 40 cm", "Céramique"],
        ["Bougeoir Ligne", 96, "Laiton massif tourné", "Ø 9 × H 24 cm", "Métal"],
        ["Corbeille Osier", 110, "Osier tressé main", "Ø 42 × H 36 cm", "Rotin"],
        ["Plateau Chêne", 130, "Chêne massif huilé", "L 48 × P 32 × H 4 cm", "Bois"],
        ["Sculpture Galet", 260, "Marbre sculpté à la main", "L 24 × P 14 × H 18 cm", "Pierre"],
        ["Bol Grès", 74, "Grès émaillé, pièce unique", "Ø 26 × H 10 cm", "Céramique"],
        ["Photophore Ambre", 58, "Verre soufflé bouche", "Ø 12 × H 14 cm", "Verre"],
        ["Serre-livres Onyx", 220, "Onyx naturel poli", "L 12 × P 10 × H 16 cm", "Pierre"],
        ["Coupe Travertin", 190, "Travertin massif", "Ø 30 × H 8 cm", "Pierre"]
      ]
    },
    {
      category: "Tapis", collection: "Décoration", icon: "rug", prefix: "Tapis",
      items: [
        ["Sable", 690, "Laine nouée main", "200 × 300 cm", "Textile"],
        ["Trame", 480, "Jute et coton tissés", "160 × 230 cm", "Textile"],
        ["Berbère", 890, "Laine vierge, nouage traditionnel", "200 × 290 cm", "Textile"],
        ["Onde", 620, "Laine et viscose", "170 × 240 cm", "Textile"],
        ["Lin", 540, "Lin et coton, tissage plat", "180 × 270 cm", "Textile"],
        ["Ombre", 980, "Laine haute densité", "240 × 340 cm", "Textile"]
      ]
    },
    {
      category: "Miroirs", collection: "Décoration", icon: "mirror", prefix: "Miroir",
      items: [
        ["Halo", 420, "Laiton brossé, verre biseauté", "Ø 80 cm", "Métal"],
        ["Arche", 560, "Chêne massif cintré", "L 70 × H 150 cm", "Bois"],
        ["Ligne", 340, "Acier noir, format rectangulaire", "L 60 × H 120 cm", "Métal"],
        ["Ovale", 380, "Frêne clair, suspension cuir", "L 55 × H 90 cm", "Bois"],
        ["Trame", 290, "Rotin tressé, verre clair", "Ø 70 cm", "Rotin"],
        ["Bronze", 640, "Verre bronze, cadre laiton", "L 90 × H 140 cm", "Verre"]
      ]
    },
    {
      category: "Extérieur", collection: "Extérieur", icon: "outdoor", prefix: "",
      items: [
        ["Fauteuil Riva", 780, "Teck massif FSC, corde marine", "L 74 × P 80 × H 76 cm", "Bois"],
        ["Table Teck", 1690, "Teck massif non traité", "L 220 × P 100 × H 75 cm", "Bois"],
        ["Chaise longue Solis", 940, "Teck et toile outdoor", "L 200 × P 68 × H 38 cm", "Textile"],
        ["Banc Ostende", 690, "Teck massif, lattes fines", "L 160 × P 42 × H 45 cm", "Bois"],
        ["Canapé Terrasse", 2380, "Aluminium poudré, coussins outdoor", "L 210 × P 88 × H 72 cm", "Métal"],
        ["Lanterne Solis", 180, "Verre et laiton, usage extérieur", "Ø 18 × H 36 cm", "Verre"],
        ["Table basse Béton", 540, "Béton ciré, finition minérale", "Ø 80 × H 32 cm", "Pierre"],
        ["Parasol Lin", 890, "Toile lin outdoor, mât frêne", "Ø 300 × H 250 cm", "Textile"],
        ["Fauteuil Corde", 720, "Corde tressée, structure alu", "L 72 × P 78 × H 74 cm", "Métal"],
        ["Bain de soleil Onde", 1140, "Teck massif, matelas déperlant", "L 205 × P 72 × H 40 cm", "Bois"]
      ]
    }
  ];

  /* ------------------------------------------------------------------ */
  /* 2. Génération : identifiants, descriptions, coloris, visuels        */
  /* ------------------------------------------------------------------ */
  var COLOR_LIBRARY = {
    "Lin naturel": "#DDD3C2", "Écru": "#EFE9DE", "Beige sable": "#D4C4AC",
    "Anthracite": "#33322F", "Terre cuite": "#B0714E", "Vert olive": "#6E7261",
    "Bleu nuit": "#2E3A4A", "Camel": "#A97B54", "Chêne clair": "#D7BE9B",
    "Noyer": "#7A5738", "Noir mat": "#1E1D1B", "Gris pierre": "#A9A69E"
  };
  var COLOR_NAMES = Object.keys(COLOR_LIBRARY);

  var DESCRIPTIONS = {
    chair: [
      "Une assise enveloppante aux lignes tendues, pensée pour les longues soirées. Le dossier légèrement incliné et la profondeur généreuse en font une pièce aussi confortable que graphique.",
      "Silhouette épurée et proportions justes : {name} s'installe aussi bien dans un salon contemporain qu'au coin d'une bibliothèque. Chaque assemblage est réalisé à la main dans nos ateliers.",
      "Un dessin sobre, presque architectural, mis en valeur par des matières franches. La structure apparente révèle la qualité du travail d'ébénisterie."
    ],
    sofa: [
      "Assise profonde, dossier coulissant et coussins garnis en mousse haute résilience : {name} privilégie le confort durable à l'effet de mode. Housses déhoussables et nettoyables.",
      "Un canapé de belle largeur, dont les volumes bas et généreux structurent la pièce sans l'alourdir. Les coutures apparentes soulignent la précision de la confection.",
      "Pensé comme une pièce centrale, {name} associe une ossature massive à un rembourrage souple. Les proportions ont été affinées pour les intérieurs de caractère."
    ],
    table: [
      "Un plateau massif aux arêtes adoucies, porté par un piètement dessiné pour disparaître. Chaque pièce révèle un veinage unique, signature du matériau brut.",
      "Les proportions de {name} ont été étudiées pour circuler librement autour de la table. Finition huilée naturelle, entretien simple, patine qui se bonifie avec les années.",
      "Ligne franche et matière noble : une pièce sobre qui devient le point d'ancrage de la pièce. Assemblages traditionnels, sans visserie apparente."
    ],
    storage: [
      "Rangement généreux et façades sobres : {name} organise sans jamais s'imposer. Charnières à fermeture douce et intérieur en placage naturel.",
      "Une menuiserie soignée, des poignées intégrées et des volumes calibrés au centimètre. Le meuble se fait discret pour laisser respirer l'espace.",
      "Conçu pour durer, {name} associe un caisson massif à des finitions travaillées à la main. Étagères réglables et passage de câbles dissimulé."
    ],
    bed: [
      "Une tête de lit habillée avec soin et un socle bas qui allège la silhouette. {name} installe immédiatement une atmosphère calme et enveloppante.",
      "Structure massive, sommier à lattes intégré et finitions textiles douces : le sommeil dans sa version la plus sobre. Livré démonté, montage sans outil spécifique.",
      "Des lignes horizontales apaisantes et des matières tactiles. La hauteur de couchage a été pensée pour un usage quotidien confortable."
    ],
    lamp: [
      "Une lumière chaude et diffuse, filtrée par un abat-jour choisi pour sa densité. {name} éclaire sans éblouir et sculpte les volumes en fin de journée.",
      "Un objet lumineux au dessin minimal, à mi-chemin entre la sculpture et l'usage. Compatible ampoules LED E27, variateur recommandé.",
      "Le contraste entre la matière brute du corps et la douceur du diffuseur crée une lumière enveloppante, idéale en éclairage d'appoint."
    ],
    decor: [
      "Pièce façonnée à la main : chaque exemplaire présente d'infimes variations de teinte et de texture qui en font un objet unique.",
      "Un objet simple, sans ornement superflu, dont toute la présence tient à la justesse des proportions et à la qualité de la matière.",
      "{name} apporte cette touche de matière naturelle qui réchauffe une console, une table ou une étagère."
    ],
    rug: [
      "Tissé sur métier traditionnel, ce tapis apporte chaleur et absorption acoustique. Les nuances irrégulières signent le travail manuel.",
      "Une matière dense et souple sous le pied, dans des teintes naturelles qui s'accordent avec tous les bois. Sous-tapis antidérapant conseillé.",
      "{name} délimite l'espace sans le cloisonner. Nettoyage à sec recommandé pour préserver la fibre."
    ],
    mirror: [
      "Un miroir généreux qui démultiplie la lumière naturelle. L'encadrement fin laisse toute la place au reflet.",
      "{name} joue sur la géométrie pure et la finesse du cadre. Fixation murale renforcée fournie.",
      "Le verre légèrement teinté adoucit le reflet et donne de la profondeur au mur qu'il habille."
    ],
    outdoor: [
      "Conçu pour vivre dehors : matériaux sélectionnés pour leur résistance aux UV et à l'humidité. La patine se développe naturellement avec les saisons.",
      "{name} prolonge l'intérieur sur la terrasse ou au jardin, avec le même soin apporté aux finitions. Coussins déperlants et séchage rapide.",
      "Une pièce d'extérieur pensée pour durer plusieurs décennies, avec des assemblages démontables et des pièces détachées disponibles."
    ]
  };

  var USAGE = {
    Salon: "salon", "Salle à manger": "salle à manger", Chambre: "chambre",
    "Décoration": "intérieur", "Extérieur": "extérieur"
  };

  function slugify(str) {
    return String(str)
      .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/['’]/g, "-")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }

  var products = [];
  var index = 0;

  CATALOG.forEach(function (family) {
    family.items.forEach(function (row) {
      var model = row[0];
      var price = row[1];
      var material = row[2];
      var dimensions = row[3];
      var matterFamily = row[4];
      var name = family.prefix ? family.prefix + " " + model : model;
      var id = slugify(name);

      var tpl = DESCRIPTIONS[family.icon];
      var description = tpl[index % tpl.length].replace(/\{name\}/g, name);

      var colors = [
        COLOR_NAMES[index % COLOR_NAMES.length],
        COLOR_NAMES[(index + 4) % COLOR_NAMES.length],
        COLOR_NAMES[(index + 8) % COLOR_NAMES.length]
      ];

      products.push({
        id: id,
        name: name,
        model: model,
        category: family.category,
        collection: family.collection,
        matter: matterFamily,
        price: price,
        description: description,
        longText: "Fabriqué en Europe dans un atelier partenaire de la maison, " + name +
          " est réalisé à la commande. Comptez 3 à 5 semaines de délai selon les finitions. " +
          "Une pièce pensée pour le " + (USAGE[family.collection] || "quotidien") +
          ", livrée et installée par nos équipes.",
        material: material,
        dimensions: dimensions,
        colors: colors.map(function (c) { return { name: c, hex: COLOR_LIBRARY[c] }; }),
        icon: family.icon,
        tone: (index % 8) + 1,
        isNew: index % 9 === 3,
        isBest: index % 11 === 2,
        stock: index % 13 === 5 ? "Sur commande" : "En stock",
        ref: "AST-" + String(1000 + index),
        order: index
      });
      index++;
    });
  });

  /* ------------------------------------------------------------------ */
  /* 3. API publique                                                     */
  /* ------------------------------------------------------------------ */
  function uniqueSorted(key) {
    var seen = Object.create(null);
    products.forEach(function (p) { seen[p[key]] = (seen[p[key]] || 0) + 1; });
    return Object.keys(seen).sort(function (a, b) {
      return a.localeCompare(b, "fr");
    }).map(function (k) { return { value: k, count: seen[k] }; });
  }

  // Index de recherche pré-calculé : la recherche reste instantanée
  // même avec plusieurs milliers de références.
  products.forEach(function (p) {
    p._search = slugify([p.name, p.category, p.collection, p.matter, p.material, p.ref].join(" "));
  });

  var API = {
    all: products,
    categories: uniqueSorted("category"),
    collections: uniqueSorted("collection"),
    matters: uniqueSorted("matter"),
    priceBounds: products.reduce(function (acc, p) {
      return { min: Math.min(acc.min, p.price), max: Math.max(acc.max, p.price) };
    }, { min: Infinity, max: 0 }),
    slugify: slugify,
    byId: function (id) {
      for (var i = 0; i < products.length; i++) {
        if (products[i].id === id) return products[i];
      }
      return null;
    },
    byCollection: function (collection, limit) {
      var list = products.filter(function (p) { return p.collection === collection; });
      return typeof limit === "number" ? list.slice(0, limit) : list;
    },
    featured: function (limit) {
      var ids = ["fauteuil-oslo", "table-basse-alba", "canape-noma", "table-epure",
                 "lampe-atelier", "console-elan", "fauteuil-arca", "table-riviera"];
      var list = ids.map(API.byId).filter(Boolean);
      return list.slice(0, limit || ids.length);
    },
    similar: function (product, limit) {
      if (!product) return [];
      var same = products.filter(function (p) {
        return p.id !== product.id && p.category === product.category;
      });
      var near = products.filter(function (p) {
        return p.id !== product.id && p.category !== product.category &&
               p.collection === product.collection;
      });
      return same.concat(near).slice(0, limit || 4);
    },
    formatPrice: function (value) {
      return new Intl.NumberFormat("fr-FR", {
        style: "currency", currency: "EUR",
        minimumFractionDigits: 0, maximumFractionDigits: 0
      }).format(value);
    }
  };

  global.ASTRANTIA_PRODUCTS = API;
})(window);
