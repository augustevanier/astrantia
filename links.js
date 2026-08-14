const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
  const p = await b.newPage();
  const pages = ['index','studio','projets','atelier','art-de-vivre','collections','a-propos','contact','boutique','produit','panier'];
  const links = new Set(); const anchors = new Set(); const ids = {};
  for (const name of pages) {
    await p.goto(`http://127.0.0.1:8811/${name}.html`, { waitUntil: 'load' });
    await p.waitForTimeout(300);
    const hrefs = await p.$$eval('a[href]', as => as.map(a => a.getAttribute('href')));
    ids[name + '.html'] = await p.$$eval('[id]', e => e.map(x => x.id));
    hrefs.forEach(h => {
      if (!h || h.startsWith('http') || h.startsWith('mailto') || h.startsWith('tel')) return;
      if (h.startsWith('#')) { anchors.add(name + '.html' + h); return; }
      links.add(h);
      if (h.includes('#')) anchors.add(h);
    });
  }
  const fs = require('fs');
  const bad = [];
  for (const l of links) {
    const file = l.split('?')[0].split('#')[0];
    if (!fs.existsSync('/home/claude/astrantia/' + file)) bad.push('FICHIER MANQUANT : ' + l);
  }
  for (const a of anchors) {
    const [file, id] = a.split('#');
    if (ids[file] && !ids[file].includes(id)) bad.push('ANCRE MANQUANTE : ' + a);
  }
  console.log('Liens internes distincts : ' + links.size + ' — ancres : ' + anchors.size);
  console.log(bad.length ? bad.join('\n') : 'Tous les liens internes et toutes les ancres sont valides.');
  await b.close();
})();
