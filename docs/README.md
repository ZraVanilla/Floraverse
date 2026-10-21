# Dokumentasi Sumber FloraVerse

Dokumentasi ini mencatat **sumber eksternal** (gambar, video, CDN, font, ikon) yang dipakai website FloraVerse - dipakai untuk tracking attribution / sumber asset.

## Struktur

```
docs/
├── sources/
│   ├── index.md
│   ├── plants.md
│   ├── learn.md
│   ├── community.md
│   ├── shop.md
│   ├── garden.md
│   ├── profile.md
│   └── icons.md
└── README.md
```

## Aturan

- **Satu file per page.** Setiap halaman yang ada di project punya file sendiri (`index.html` → `sources/index.md`, `garden.html` → `sources/garden.md`, dst). Halaman yang tidak ada di project tidak dibuat; halaman yang ada tidak boleh terlewat.
- **`sources/icons.md`** khusus ikon global website (Lucide + SVG inline). Ikon tidak diduplikasi ke tiap file halaman.
- Setiap file halaman memuat:
  - `## Image / Visual Sources` - tabel: Asset → Penggunaan → Source URL.
  - `## External Resources` - CDN/font yang dimuat halaman itu.
- **Sumber diambil dari kode yang benar-benar ada** (HTML, CSS, JS, data JS seperti `plant-images.js`, `gambar-produk.js`, `guides.js`, `communities.js`), bukan dari nama file saja.
- Jika tidak ditemukan URL sumber di project: tulis `Unknown / source URL not found in project`. **Jangan mengarang URL.**
- Asset global yang dipakai banyak halaman tetap ditulis di file halaman yang memakainya (konteks visual halaman), tanpa penjelasan desain yang berlebihan.
- **Jangan mengubah source asset hanya karena format dokumentasinya berubah.** Dokumentasi ini murni dokumen - tidak menyentuh kode, CSS, JS, asset, UI, atau behaviour website.
