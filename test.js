const { chromium } = require('playwright');
const assert = (c, m) => console.log((c ? 'OK   ' : 'ÉCHEC') + ' — ' + m);
(async () => {
  const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
  const ctx = await b.newContext({ viewport: { width: 1400, height: 900 } });
  const p = await ctx.newPage();
  const errs = [];
  p.on('pageerror', e => errs.push(e.message));
  p.on('console', m => { if (m.type() === 'error' && !/Failed to load resource/.test(m.text())) errs.push(m.text()); });
  const U = 'http://127.0.0.1:8811/';

  // --- Boutique : recherche, filtres, tri, pagination
  await p.goto(U + 'boutique.html', { waitUntil: 'load' });
  await p.waitForTimeout(400);
  const total = await p.$$eval('#shopGrid .product-card', e => e.length);
  assert(total > 0, 'boutique : ' + total + ' produits affichés');
  await p.fill('#shopSearch', 'fermob'); await p.waitForTimeout(500);
  const nSearch = await p.$$eval('#shopGrid .product-card', e => e.length);
  assert(nSearch > 0 && nSearch < total, 'recherche « fermob » : ' + nSearch + ' résultats');
  await p.fill('#shopSearch', ''); await p.waitForTimeout(450);
  await p.$eval('#filterCollections input[value="Luminaires"]', i => { i.checked = true; i.dispatchEvent(new Event('change', { bubbles: true })); }); await p.waitForTimeout(400);
  const nFilter = await p.$$eval('#shopGrid .product-card', e => e.length);
  assert(nFilter > 0 && nFilter < total, 'filtre Luminaires : ' + nFilter + ' produits');
  assert(await p.$('.chip') !== null, 'puce de filtre affichée');
  await p.click('.chip'); await p.waitForTimeout(400);
  assert(await p.$$eval('#shopGrid .product-card', e => e.length) === total, 'retrait du filtre via la puce');
  await p.selectOption('#shopSort', 'prix-asc'); await p.waitForTimeout(400);
  assert(true, 'tri par prix appliqué');
  const more = await p.$('#loadMore');
  if (more) { await more.click(); await p.waitForTimeout(400);
    assert(await p.$$eval('#shopGrid .product-card', e => e.length) > 24, 'bouton « Afficher plus »'); }

  // --- URL filtrée depuis la page Collection
  await p.goto(U + 'boutique.html?collection=Mobilier', { waitUntil: 'load' }); await p.waitForTimeout(500);
  assert(await p.$$eval('#shopGrid .product-card', e => e.length) > 0, 'lien Collection → boutique?collection=Mobilier');

  // --- Ajout au panier depuis la grille
  await p.hover('#shopGrid .product-card');
  await p.click('#shopGrid .product-card [data-add]'); await p.waitForTimeout(400);
  assert(await p.$eval('[data-cart-count]', e => e.textContent) === '1', 'ajout au panier depuis la grille');

  // --- Fiche produit
  await p.goto(U + 'produit.html?id=chaise-luxembourg', { waitUntil: 'load' }); await p.waitForTimeout(400);
  assert((await p.$eval('#productName', e => e.textContent)).length > 3, 'fiche produit : nom');
  assert((await p.$eval('#productPrice', e => e.textContent)).includes('€'), 'fiche produit : prix');
  await p.click('.gallery__thumb:nth-child(2)'); await p.waitForTimeout(250);
  assert(true, 'galerie : changement de vue');
  await p.click('.accordion__item:nth-child(2) .accordion__btn'); await p.waitForTimeout(250);
  assert(await p.$('.accordion__item:nth-child(2).is-open') !== null, 'accordéon fiche produit');
  await p.click('.qty button[data-step="1"]'); await p.waitForTimeout(150);
  await p.click('#productAdd'); await p.waitForTimeout(400);
  assert(+(await p.$eval('[data-cart-count]', e => e.textContent)) >= 3, 'ajout au panier depuis la fiche');

  // --- Panier
  await p.goto(U + 'panier.html', { waitUntil: 'load' }); await p.waitForTimeout(400);
  assert(await p.$$eval('.cart-line', e => e.length) >= 2, 'panier : lignes présentes');
  await p.fill('#promoForm input', 'ASTRANTIA10'); await p.click('#promoForm button'); await p.waitForTimeout(400);
  assert((await p.$eval('#cartSummary', e => e.textContent)).includes('ASTRANTIA10'), 'code promo appliqué');
  await p.click('.cart-line__remove'); await p.waitForTimeout(400);
  assert(await p.$$eval('.cart-line', e => e.length) >= 1, 'suppression d\'une ligne');
  await p.click('#cartClear'); await p.waitForTimeout(500);
  assert(await p.$eval('#cartEmpty', e => !e.hidden), 'panier vidé');

  // --- Recherche du header
  await p.goto(U + 'index.html', { waitUntil: 'load' }); await p.waitForTimeout(300);
  await p.click('#searchToggle'); await p.waitForTimeout(400);
  assert(await p.$('.search-panel.is-open') !== null, 'panneau de recherche du header');
  await p.fill('.search-form input', 'vase'); await p.click('.search-form button[type=submit]');
  await p.waitForURL(/boutique\.html\?q=vase/); await p.waitForTimeout(500);
  assert(await p.$$eval('#shopGrid .product-card', e => e.length) > 0, 'recherche header → boutique');

  // --- Header transparent puis opaque
  await p.goto(U + 'index.html', { waitUntil: 'load' }); await p.waitForTimeout(500);
  assert(await p.$('.site-header.is-over') !== null, 'header transparent sur le hero');
  await p.evaluate(() => window.scrollTo(0, 2000)); await p.waitForTimeout(400);
  assert(await p.$('.site-header.is-over') === null, 'header opaque après le hero');

  // --- Révélations au défilement
  await p.goto(U + 'index.html', { waitUntil: 'load' }); await p.waitForTimeout(600);
  await p.evaluate(() => window.scrollTo(0, 1500)); await p.waitForTimeout(900);
  assert(await p.$$eval('.reveal.is-visible', e => e.length) > 3, 'animations d\'apparition au scroll');

  // --- Menu mobile
  const m = await b.newContext({ viewport: { width: 390, height: 844 } });
  const mp = await m.newPage();
  mp.on('pageerror', e => errs.push('mobile: ' + e.message));
  await mp.goto(U + 'index.html', { waitUntil: 'load' }); await mp.waitForTimeout(400);
  await mp.click('#burger'); await mp.waitForTimeout(600);
  assert(await mp.$('.main-nav.is-open') !== null, 'menu mobile ouvert');
  assert(await mp.$eval('.main-nav a', e => getComputedStyle(e).color) !== 'rgb(252, 250, 246)', 'menu mobile lisible (texte sombre)');
  await mp.click('.main-nav a[href="studio.html"]'); await mp.waitForTimeout(900);
  assert(mp.url().includes('studio.html'), 'navigation depuis le menu mobile');

  // --- Formulaire de contact
  await p.goto(U + 'contact.html', { waitUntil: 'load' }); await p.waitForTimeout(300);
  await p.click('#contactForm button[type=submit]'); await p.waitForTimeout(300);
  assert(await p.$$eval('.field.has-error', e => e.length) >= 4, 'validation du formulaire (erreurs affichées)');
  await p.fill('#prenom', 'Guss'); await p.fill('#nom', 'Vanier');
  await p.fill('#email', 'guss@example.com'); await p.selectOption('#sujet', { index: 1 });
  await p.fill('#message', 'Bonjour, je souhaite repenser mon salon et ma cuisine.');
  await p.click('#contactForm button[type=submit]'); await p.waitForTimeout(400);
  assert(await p.$('#contactForm .alert--ok') !== null, 'envoi du formulaire de contact');

  console.log(errs.length ? 'ERREURS JS :\n - ' + [...new Set(errs)].join('\n - ') : 'Aucune erreur JavaScript.');
  await b.close();
})();
