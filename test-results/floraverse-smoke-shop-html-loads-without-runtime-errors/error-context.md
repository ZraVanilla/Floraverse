# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: floraverse-smoke.spec.js >> shop.html loads without runtime errors
- Location: ..\Users\User\AppData\Local\Temp\opencode\floraverse-smoke.spec.js:16:3

# Error details

```
Error: page.goto: net::ERR_EMPTY_RESPONSE at http://localhost:8010/shop.html
Call log:
  - navigating to "http://localhost:8010/shop.html", waiting until "load"

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e6]:
    - heading "This page isn’t working" [level=1] [ref=e7]
    - paragraph [ref=e8]:
      - strong [ref=e9]: localhost
      - text: didn’t send any data.
    - generic [ref=e10]: ERR_EMPTY_RESPONSE
  - button "Reload" [ref=e13] [cursor=pointer]
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | 
  3  | test.use({ channel: 'chrome' });
  4  | 
  5  | const pages = [
  6  |   'index.html',
  7  |   'plants.html',
  8  |   'learn.html',
  9  |   'community.html',
  10 |   'shop.html',
  11 |   'garden.html',
  12 |   'profile.html',
  13 | ];
  14 | 
  15 | for (const path of pages) {
  16 |   test(`${path} loads without runtime errors`, async ({ page }) => {
  17 |     const errors = [];
  18 |     page.on('pageerror', error => errors.push(error.message));
> 19 |     await page.goto(`http://localhost:8010/${path}`, { waitUntil: 'load' });
     |                ^ Error: page.goto: net::ERR_EMPTY_RESPONSE at http://localhost:8010/shop.html
  20 |     await page.waitForTimeout(1000);
  21 |     expect(errors, errors.join('\n')).toEqual([]);
  22 |   });
  23 | }
  24 | 
  25 | test('community join action works', async ({ page }) => {
  26 |   const errors = [];
  27 |   page.on('pageerror', error => errors.push(error.message));
  28 |   await page.goto('http://localhost:8010/community.html', { waitUntil: 'load' });
  29 |   await page.locator('#rulesModal button').first().click();
  30 |   await page.locator('#commSidebar button').first().click();
  31 |   expect(errors, errors.join('\n')).toEqual([]);
  32 | });
  33 | 
  34 | test('new garden plant survives reload', async ({ page }) => {
  35 |   await page.goto('http://localhost:8010/garden.html', { waitUntil: 'load' });
  36 |   await page.evaluate(() => localStorage.removeItem('fv_garden_state'));
  37 |   await page.reload({ waitUntil: 'load' });
  38 |   const before = await page.evaluate(() => MY_GARDEN.length);
  39 |   await page.evaluate(() => addPlantToGarden(PLANTS[PLANTS.length - 1].id));
  40 |   const addedId = await page.evaluate(() => MY_GARDEN[MY_GARDEN.length - 1].id);
  41 |   await page.reload({ waitUntil: 'load' });
  42 |   const state = await page.evaluate(id => ({ count: MY_GARDEN.length, exists: MY_GARDEN.some(p => p.id === id) }), addedId);
  43 |   expect(state).toEqual({ count: before + 1, exists: true });
  44 | });
  45 | 
```