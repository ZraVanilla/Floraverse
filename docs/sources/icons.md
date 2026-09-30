# Icon Sources

Seluruh ikon UI FloraVerse memakai **Lucide Icons** v0.469.0, dimuat dari CDN lalu dirender menjadi `<svg>` oleh `lucide.createIcons()` (`js/utils.js`, `js/app.js`).

CDN: `https://unpkg.com/lucide@0.469.0/dist/umd/lucide.js` - Situs resmi: https://lucide.dev

Salinan lokal seluruh ikon: `asset/img/icons/` (53 file SVG, diunduh dari paket resmi `lucide-static@0.469.0`). Dipakai sebagai aset offline/referensi; halaman tetap me-render ikon dari bundle CDN.

## Lucide Icons

| Icon | Provider / Library | Digunakan Pada | Source |
|---|---|---|---|
| apple | Lucide Icons | plants | https://lucide.dev/icons/apple |
| arrow-right | Lucide Icons | plants, profile | https://lucide.dev/icons/arrow-right |
| axe | Lucide Icons | shop | https://lucide.dev/icons/axe |
| bar-chart-3 | Lucide Icons | profile | https://lucide.dev/icons/bar-chart-3 |
| book-open | Lucide Icons | plants, learn, profile | https://lucide.dev/icons/book-open |
| bookmark | Lucide Icons | index, plants, learn, community, shop, garden, profile | https://lucide.dev/icons/bookmark |
| bug | Lucide Icons | plants, learn | https://lucide.dev/icons/bug |
| building-2 | Lucide Icons | learn | https://lucide.dev/icons/building-2 |
| calendar | Lucide Icons | profile | https://lucide.dev/icons/calendar |
| camera | Lucide Icons | community | https://lucide.dev/icons/camera |
| check | Lucide Icons | profile | https://lucide.dev/icons/check |
| chevron-down | Lucide Icons | profile | https://lucide.dev/icons/chevron-down |
| chevron-right | Lucide Icons | profile | https://lucide.dev/icons/chevron-right |
| circle-check | Lucide Icons | learn, garden | https://lucide.dev/icons/circle-check |
| circle-plus | Lucide Icons | profile | https://lucide.dev/icons/circle-plus |
| droplet | Lucide Icons | plants, learn, community, shop, garden | https://lucide.dev/icons/droplet |
| flame | Lucide Icons | learn, community, profile | https://lucide.dev/icons/flame |
| flask-conical | Lucide Icons | plants, learn, community, shop, garden | https://lucide.dev/icons/flask-conical |
| flower-2 | Lucide Icons | plants | https://lucide.dev/icons/flower-2 |
| gift | Lucide Icons | shop | https://lucide.dev/icons/gift |
| github | Lucide Icons | Footer (semua halaman: index, plants, learn, community, shop, garden, profile) | https://lucide.dev/icons/github |
| hand | Lucide Icons | index, plants, learn, community, shop, garden, profile | https://lucide.dev/icons/hand |
| heart | Lucide Icons | index, plants, learn, community, shop, garden, profile | https://lucide.dev/icons/heart |
| home | Lucide Icons | community | https://lucide.dev/icons/home |
| leaf | Lucide Icons | plants, learn, shop, garden, profile | https://lucide.dev/icons/leaf |
| lightbulb | Lucide Icons | plants, community, garden | https://lucide.dev/icons/lightbulb |
| link | Lucide Icons | index, plants, learn, community, shop, garden, profile | https://lucide.dev/icons/link |
| list-checks | Lucide Icons | profile | https://lucide.dev/icons/list-checks |
| mail | Lucide Icons | Footer (semua halaman: index, plants, learn, community, shop, garden, profile) | https://lucide.dev/icons/mail |
| map-pin | Lucide Icons | profile | https://lucide.dev/icons/map-pin |
| menu | Lucide Icons | Navbar (mobile) (semua halaman: index, plants, learn, community, shop, garden, profile) | https://lucide.dev/icons/menu |
| message-circle | Lucide Icons | community | https://lucide.dev/icons/message-circle |
| microscope | Lucide Icons | plants, garden | https://lucide.dev/icons/microscope |
| notebook-pen | Lucide Icons | garden | https://lucide.dev/icons/notebook-pen |
| package | Lucide Icons | shop | https://lucide.dev/icons/package |
| palette | Lucide Icons | community | https://lucide.dev/icons/palette |
| party-popper | Lucide Icons | index, plants, learn, community, shop, garden, profile | https://lucide.dev/icons/party-popper |
| pencil | Lucide Icons | community | https://lucide.dev/icons/pencil |
| recycle | Lucide Icons | learn | https://lucide.dev/icons/recycle |
| search | Lucide Icons | plants | https://lucide.dev/icons/search |
| shopping-bag | Lucide Icons | shop | https://lucide.dev/icons/shopping-bag |
| shopping-cart | Lucide Icons | Navbar + keranjang (semua halaman: index, plants, learn, community, shop, garden, profile) | https://lucide.dev/icons/shopping-cart |
| sparkles | Lucide Icons | index, plants, learn, garden | https://lucide.dev/icons/sparkles |
| sprout | Lucide Icons | index, plants, learn, community, shop, garden, profile | https://lucide.dev/icons/sprout |
| stethoscope | Lucide Icons | shop | https://lucide.dev/icons/stethoscope |
| sun | Lucide Icons | plants, learn, garden | https://lucide.dev/icons/sun |
| thermometer | Lucide Icons | plants | https://lucide.dev/icons/thermometer |
| trash-2 | Lucide Icons | index, plants, learn, community, shop, garden, profile | https://lucide.dev/icons/trash-2 |
| tree-pine | Lucide Icons | plants | https://lucide.dev/icons/tree-pine |
| trees | Lucide Icons | plants, community | https://lucide.dev/icons/trees |
| trending-up | Lucide Icons | profile | https://lucide.dev/icons/trending-up |
| trophy | Lucide Icons | profile | https://lucide.dev/icons/trophy |
| users | Lucide Icons | plants, community, profile | https://lucide.dev/icons/users |

## Inline SVG (buatan project, bukan library)

| Icon | Provider / Library | Digunakan Pada | Source |
|---|---|---|---|
| Chevron komentar | Inline SVG | community.html | Tidak ada URL eksternal (SVG inline di kode) |
| Panah toggle “Tanaman Ku” | Inline SVG | garden.html | Tidak ada URL eksternal (SVG inline di kode) |
| Pola hero profil | Inline SVG | profile.html | Tidak ada URL eksternal (SVG inline di kode) |
| Dekorasi footer (rumput & tunas) | SVG data-URI di CSS | Semua halaman | Tidak ada URL eksternal (SVG inline di css/style.css) |

## Catatan

- Emoji (mis. `🌱`, `📊`) dipakai sebagai teks/notifikasi toast, bukan icon library.
- Icon yang muncul di banyak/semua halaman (mis. `bookmark`, `link`, `hand`, `party-popper`, `trash-2`) dipicu oleh toast di `js/app.js`, script yang dimuat setiap halaman.
- Ikon tidak didokumentasikan ulang di file per halaman; cukup referensi ke file ini.
- Status lokal semua ikon: `LOCAL ASSET AVAILABLE - asset/img/icons/<nama>.svg`.
- Dua ikon tidak ada di Lucide 0.469.0: `bar-chart-3` (profile.html) dan `home` (community.html). Sumber terdokumentasi di-redirect permanen (308) ke `chart-column` dan `house`, jadi salinan lokal memakai nama di kode berisi isi ikon hasil redirect. Bundle CDN tidak mengenal nama lama, sehingga kedua ikon itu tidak ter-render di halaman.
