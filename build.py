# -*- coding: utf-8 -*-
"""Génère les pages HTML de Maison Astrantia.

- Les pages « éditoriales » sont écrites à partir des gabarits _build/*.tpl.html
- Les pages « boutique » (boutique, produit, panier) sont conservées telles
  quelles : seuls le <head>, le header et le footer y sont remplacés, afin de
  ne casser aucune fonctionnalité JavaScript existante.

Usage :  python3 _build/build.py
"""

import os
import re
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from parts import HEAD_LINKS, FAVICON, HEADER, FOOTER, SCRIPTS, CONTACT_CTA  # noqa: E402

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BUILD = os.path.join(ROOT, "_build")

TEMPLATES = [
    "index", "studio", "projets", "atelier",
    "art-de-vivre", "collections", "a-propos", "contact",
]

# Pages boutique : on ne touche qu'au head, au header et au footer.
SHOP_PAGES = ["boutique.html", "produit.html", "panier.html"]

SHOP_META = {
    "boutique.html": (
        "Collection — Toutes les pièces | Maison Astrantia",
        "L'ensemble de la sélection Maison Astrantia : mobilier, luminaires, "
        "décoration, art de la table, extérieur et cadeaux. Recherche, filtres "
        "par matière, par marque et par univers.",
    ),
    "produit.html": (
        "Fiche produit | Maison Astrantia",
        "Fiche détaillée d'une pièce sélectionnée par Maison Astrantia : marque, "
        "matières, dimensions, coloris et pièces assorties.",
    ),
    "panier.html": (
        "Panier | Maison Astrantia",
        "Votre panier Maison Astrantia : récapitulatif, quantités, code "
        "promotionnel, retrait gratuit sur place à Attignat ou livraison.",
    ),
}


def render_template(name):
    src = os.path.join(BUILD, name + ".tpl.html")
    with open(src, encoding="utf-8") as f:
        html = f.read()
    html = (html
            .replace("__HEAD_LINKS__", HEAD_LINKS)
            .replace("__FAVICON__", FAVICON)
            .replace("__HEADER__", HEADER)
            .replace("__FOOTER__", FOOTER)
            .replace("__SCRIPTS__", SCRIPTS)
            .replace("__CONTACT_CTA__", CONTACT_CTA))
    if "__" in re.sub(r"[a-z]__[a-z]", "", html):
        leftover = re.findall(r"__[A-Z_]+__", html)
        if leftover:
            raise SystemExit("Marqueur non remplacé dans %s : %s" % (name, leftover))
    out = os.path.join(ROOT, name + ".html")
    with open(out, "w", encoding="utf-8") as f:
        f.write(html)
    return name + ".html"


def patch_shop_page(filename):
    path = os.path.join(ROOT, filename)
    with open(path, encoding="utf-8") as f:
        html = f.read()

    title, desc = SHOP_META[filename]

    # <head> : titre, description, couleur de thème, favicon, polices
    html = re.sub(r"<title>.*?</title>", "<title>%s</title>" % title, html, count=1, flags=re.S)
    html = re.sub(r'<meta name="description" content=".*?">',
                  '<meta name="description" content="%s">' % desc, html, count=1, flags=re.S)
    html = re.sub(r'<meta property="og:title" content=".*?">',
                  '<meta property="og:title" content="%s">' % title, html, count=1, flags=re.S)
    html = re.sub(r'<meta property="og:description" content=".*?">',
                  '<meta property="og:description" content="%s">' % desc, html, count=1, flags=re.S)
    html = html.replace('<meta property="og:site_name" content="Astrantia">',
                        '<meta property="og:site_name" content="Maison Astrantia">')
    html = html.replace('<meta name="theme-color" content="#FBF9F5">',
                        '<meta name="theme-color" content="#FCFAF6">')
    html = re.sub(r'<link rel="icon".*?>', FAVICON, html, count=1, flags=re.S)
    # Normalisation : on retire d'éventuels liens de polices déjà injectés,
    # afin que le script puisse être relancé autant de fois que nécessaire.
    html = re.sub(r'\n?<link rel="preconnect"[^>]*>', '', html)
    html = re.sub(r'\n?<link rel="preload"[^>]*as="font"[^>]*>', '', html)
    html = re.sub(r'\n?<link rel="stylesheet" href="https://fonts\.googleapis\.com[^>]*>', '', html)
    html = html.replace('<link rel="stylesheet" href="style.css">', HEAD_LINKS, 1)

    # Header & footer partagés
    html = re.sub(r"<header class=\"site-header\".*?</header>", lambda m: HEADER,
                  html, count=1, flags=re.S)
    html = re.sub(r"<footer class=\"site-footer\">.*?</footer>", lambda m: FOOTER,
                  html, count=1, flags=re.S)
    # Le commentaire HEADER d'origine précédait la balise : on évite le doublon
    html = html.replace("<!-- ============================ HEADER ============================ -->\n"
                        "<!-- ============================ HEADER ============================ -->",
                        "<!-- ============================ HEADER ============================ -->")
    html = html.replace("<!-- ============================ FOOTER ============================ -->\n"
                        "<!-- ============================ FOOTER ============================ -->",
                        "<!-- ============================ FOOTER ============================ -->")

    with open(path, "w", encoding="utf-8") as f:
        f.write(html)
    return filename


if __name__ == "__main__":
    written = [render_template(n) for n in TEMPLATES]
    written += [patch_shop_page(p) for p in SHOP_PAGES]
    print("Pages générées :")
    for w in written:
        print("  ·", w)
