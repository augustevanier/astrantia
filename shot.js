const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
  const errors = [];
  for (const spec of process.argv.slice(2)) {
    const [name, w, h, mode] = spec.split(':');
    const ctx = await browser.newContext({ viewport: { width: +w, height: +h } });
    const page = await ctx.newPage();
    page.on('console', m => { if (m.type() === 'error') errors.push(`[${name}] ${m.text()}`); });
    page.on('pageerror', e => errors.push(`[${name}] PAGEERROR ${e.message}`));
    await page.goto(`http://127.0.0.1:8811/${name}.html`, { waitUntil: 'load', timeout: 45000 }).catch(e => errors.push(`[${name}] ${e.message}`));
    await page.evaluate(() => document.querySelectorAll('img[loading="lazy"]').forEach(i => { i.loading = 'eager'; }));
    await page.waitForTimeout(2200);
    await page.evaluate(() => document.querySelectorAll('.reveal').forEach(e => { e.classList.add('is-visible'); e.style.transitionDelay = '0s'; }));
    await page.waitForTimeout(700);
    const H = await page.evaluate(() => document.documentElement.scrollHeight);
    if (mode === 'segments') {
      const step = Math.round(+h * 0.92);
      let idx = 0;
      for (let y = 0; y < H - 100; y += step) {
        await page.evaluate(v => window.scrollTo(0, v), y);
        await page.waitForTimeout(450);
        await page.screenshot({ path: `_shots/${name}-${w}-${String(idx).padStart(2, '0')}.png` });
        idx++;
      }
    } else {
      await page.screenshot({ path: `_shots/${name}-${w}.png` });
    }
    await ctx.close();
  }
  await browser.close();
  const uniq = [...new Set(errors)];
  console.log(uniq.length ? 'ERREURS CONSOLE:\n - ' + uniq.join('\n - ') : 'Aucune erreur console.');
})();
