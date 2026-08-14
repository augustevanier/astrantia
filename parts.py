# -*- coding: utf-8 -*-
"""Fragments partagés (header, footer, <head>) — Maison Astrantia.

Ce fichier n'est PAS publié : il sert uniquement à régénérer les pages
avec un header et un footer strictement identiques partout.
Lancer :  python3 _build/build.py
"""

# --------------------------------------------------------------------------
# Liens <head> communs : polices + feuille de style
# --------------------------------------------------------------------------
HEAD_LINKS = """<link rel="preload" href="fonts/cormorant-garamond-latin-300-normal.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="fonts/jost-latin-300-normal.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="style.css">"""

FAVICON = ("""<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' """
           """viewBox='0 0 32 32'%3E%3Crect width='32' height='32' fill='%231E3229'/%3E%3Ctext x='16' y='22' """
           """font-family='Georgia,serif' font-size='17' fill='%23FCFAF6' text-anchor='middle'%3EA%3C/text%3E%3C/svg%3E">""")

# --------------------------------------------------------------------------
# HEADER — identique sur toutes les pages
# --------------------------------------------------------------------------
HEADER = """<!-- ============================ HEADER ============================ -->
<!-- Navigation unique à toutes les pages. Pour ajouter une entrée :
     ajoutez simplement un <a> dans .main-nav ci-dessous.               -->
<header class="site-header" id="siteHeader">
  <div class="container header-inner">
    <a class="logo" href="index.html" data-logo aria-label="Maison Astrantia — retour à l'accueil">
      <span class="logo__text">
        <span class="logo__maison">Maison</span>
        <span class="logo__name">Astrantia</span>
      </span>
    </a>
    <nav class="main-nav" id="mainNav" aria-label="Navigation principale">
      <a href="projets.html">Projets</a>
      <a href="studio.html">Studio</a>
      <a href="collections.html">Collection</a>
      <a href="atelier.html">Atelier</a>
      <a href="art-de-vivre.html">Art de vivre</a>
      <a href="a-propos.html">La maison</a>
      <a href="contact.html">Contact</a>
    </nav>
    <div class="header-actions">
      <span class="lang" aria-label="Langue du site : français">FR</span>
      <button type="button" class="icon-btn" id="searchToggle" aria-label="Rechercher" aria-expanded="false">
        <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="M16.5 16.5 21 21"/></svg>
      </button>
      <a class="icon-btn" href="panier.html" aria-label="Panier">
        <svg viewBox="0 0 24 24"><path d="M6 8h12l-1 12H7L6 8Z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/></svg>
        <span class="cart-count" data-cart-count>0</span>
      </a>
      <button type="button" class="burger" id="burger" aria-label="Ouvrir le menu" aria-expanded="false" aria-controls="mainNav">
        <span></span><span></span><span></span>
      </button>
    </div>
  </div>
  <div class="search-panel" id="searchPanel">
    <form class="search-form" action="boutique.html" method="get" role="search">
      <input type="search" name="q" placeholder="Rechercher une pièce, une marque, une matière…" aria-label="Rechercher un produit">
      <button type="submit" class="btn btn--sm">Rechercher</button>
      <button type="button" class="search-close" id="searchClose">Fermer</button>
    </form>
  </div>
</header>"""

# --------------------------------------------------------------------------
# FOOTER — identique sur toutes les pages
# --------------------------------------------------------------------------
FOOTER = """<!-- ============================ FOOTER ============================ -->
<footer class="site-footer">
  <div class="container">
    <div class="footer-grid">
      <div>
        <a class="logo" href="index.html" data-logo aria-label="Maison Astrantia">
          <span class="logo__text">
            <span class="logo__maison">Maison</span>
            <span class="logo__name">Astrantia</span>
          </span>
        </a>
        <p class="footer-signature">Vision · Confiance · Évidence</p>
        <p class="footer-about">Maison de conception, d'aménagement, de mobilier et d'art de vivre. Nous imaginons, dessinons et révélons des lieux de vie singuliers.</p>
        <p class="footer-about" style="margin-top:16px">
          40c allée des négociants<br>01340 Attignat<br>
          <a href="tel:+33628546611">06 28 54 66 11</a><br>
          <a href="mailto:contact@astrantia.fr">contact@astrantia.fr</a>
        </p>
        <div class="socials">
          <a href="https://www.instagram.com/astrantia7/" target="_blank" rel="noopener" aria-label="Instagram @astrantia7"><svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.6" fill="currentColor"/></svg></a>
          <a href="https://www.facebook.com/Astrantia01340" target="_blank" rel="noopener" aria-label="Facebook @Astrantia01340"><svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M14 8h-1.5a1.5 1.5 0 0 0-1.5 1.5V21"/><path d="M9.5 13h5"/></svg></a>
          <a href="https://www.pinterest.fr/astrantia0570/_saved/" target="_blank" rel="noopener" aria-label="Pinterest"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M10 18l2-8"/><path d="M9 11c0-2 1.5-3.5 3.5-3.5S16 9 15 12s-3.5 2.5-4 1"/></svg></a>
        </div>
      </div>
      <div>
        <h4>La maison</h4>
        <ul>
          <li><a href="projets.html">Projets</a></li>
          <li><a href="studio.html">Studio</a></li>
          <li><a href="collections.html">Collection</a></li>
          <li><a href="atelier.html">Atelier</a></li>
          <li><a href="art-de-vivre.html">Art de vivre</a></li>
          <li><a href="a-propos.html">Notre histoire</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </div>
      <div>
        <h4>La sélection</h4>
        <ul>
          <li><a href="boutique.html?collection=Mobilier">Mobilier</a></li>
          <li><a href="boutique.html?collection=Luminaires">Luminaires</a></li>
          <li><a href="boutique.html?collection=D%C3%A9coration">Décoration</a></li>
          <li><a href="boutique.html?collection=Art%20de%20la%20table">Art de la table</a></li>
          <li><a href="boutique.html?collection=Ext%C3%A9rieur">Extérieur</a></li>
          <li><a href="boutique.html?collection=Cadeaux">Cadeaux</a></li>
          <li><a href="boutique.html">Toute la sélection</a></li>
        </ul>
      </div>
      <div>
        <h4>Nous accompagner</h4>
        <ul>
          <li><a href="studio.html">Conception &amp; aménagement</a></li>
          <li><a href="atelier.html">Mobilier sur mesure</a></li>
          <li><a href="studio.html#methode">Suivi de chantier</a></li>
          <li><a href="contact.html">Parlons de votre projet</a></li>
          <li><a href="panier.html">Panier</a></li>
          <li><a href="a-propos.html#mentions">Mentions légales</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© <span data-year>2026</span> Maison Astrantia — SIRET 849 412 309 00015. Maquette de démonstration.</p>
      <ul>
        <li><a href="a-propos.html#mentions">Mentions légales</a></li>
        <li><a href="a-propos.html#mentions">Confidentialité</a></li>
        <li><a href="contact.html">Aide</a></li>
      </ul>
    </div>
  </div>
</footer>"""

SCRIPTS = """<script src="products.js"></script>
<script src="script.js"></script>"""

# --------------------------------------------------------------------------
# Bloc contact final — réutilisé en bas de plusieurs pages
# --------------------------------------------------------------------------
CONTACT_CTA = """<!-- ===================== PARLONS DE VOTRE PROJET ==================== -->
<section class="contact-cta">
  <span class="ph contact-cta__bg" data-tone="7" data-scene="contact" data-local="images/showroom/contact.jpg" data-alt="" aria-hidden="true"></span>
  <div class="container contact-cta__inner">
    <span class="eyebrow reveal">Contact</span>
    <h2 class="reveal" data-delay="1">Parlons de votre projet.</h2>
    <p class="reveal" data-delay="2">Une maison à transformer, un lieu à imaginer, une idée à faire naître&nbsp;? Échangeons.</p>
    <div class="reveal" data-delay="3"><a class="btn btn--light" href="contact.html">Prendre contact</a></div>
  </div>
</section>"""
