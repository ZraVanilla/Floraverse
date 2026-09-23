# FloraVerse

**Satu Dunia, Berjuta Cara untuk Tumbuh.**

FloraVerse adalah ekosistem berkebun digital berbasis web yang menggabungkan ensiklopedia tanaman, panduan belajar, komunitas berkebun, toko perlengkapan, dan manajemen kebun pribadi dalam satu alur pengalaman yang saling terhubung. Dibangun sebagai proyek front-end statis menggunakan HTML, Tailwind CSS, dan JavaScript vanilla dengan jQuery.

> **Project oleh:** Izra, Fairuz, Tafayad — © 2026

---

## Daftar Isi

- [Gambaran Umum](#gambaran-umum)
- [Tech Stack](#tech-stack)
- [Struktur Folder](#struktur-folder)
- [Halaman (Pages)](#halaman-pages)
- [JavaScript — Data & Logika](#javascript--data--logika)
- [CSS — Sistem Desain](#css--sistem-desain)
- [Aset Media](#aset-media)
- [Fitur Utama](#fitur-utama)
- [Alur Ekosistem](#alur-ekosistem)
- [Pengguna Simulasi](#pengguna-simulasi)

---

## Gambaran Umum

FloraVerse dirancang untuk pemula dan urban gardener. Platform ini tidak memerlukan back-end atau database — semua data disimpan sebagai konstanta JavaScript di file data terpisah, dan state pengguna (keranjang belanja, kebun) dipersist ke `localStorage` browser.

Lima "ruang" utama yang membentuk ekosistem:

| # | Ruang | URL |
|---|---|---|
| 01 | Tanaman (Ensiklopedia) | `plants.html` |
| 02 | Belajar (Panduan) | `learn.html` |
| 03 | Komunitas | `community.html` |
| 04 | FloraShop (Toko) | `shop.html` |
| 05 | Kebunku (Plant Journey) | `garden.html` |

---

## Tech Stack

| Komponen | Teknologi |
|---|---|
| Markup | HTML5 (semua bahasa Indonesia) |
| Styling | [Tailwind CSS v3 (CDN)](https://tailwindcss.com) + custom CSS |
| Interaktivitas | Vanilla JavaScript + [jQuery 3.7.1 (CDN)](https://jquery.com) |
| Font | Google Fonts: Outfit (400–800) & Nunito (600–800) |
| Penyimpanan | `localStorage` + `BroadcastChannel` untuk sinkronisasi keranjang antar tab |
| Media | Video MP4 lokal + gambar eksternal (URL publik) |
| Build / Bundler | Tidak ada — file statis langsung |

Tidak ada framework (React, Vue, dll), tidak ada Node.js build step, tidak ada database.

---

## Struktur Folder

```
FloraVerse/
├── index.html              # Beranda — Interactive World Gateway
├── plants.html             # Ensiklopedia Tanaman + Plant Lab
├── learn.html              # Ruang Belajar / Panduan
├── community.html          # Komunitas & Feed
├── shop.html               # FloraShop — Toko Perlengkapan
├── garden.html             # Kebunku — Plant Journey
├── profile.html            # Profil Pengguna
│
├── css/
│   ├── style.css           # Design system utama (variabel, komponen)
│   ├── home.css            # Layout & animasi khusus halaman beranda
│   ├── animations.css      # Keyframes, page transitions, micro-interactions
│   └── responsive.css      # Breakpoint & penyesuaian mobile
│
├── js/
│   ├── plants.js           # Data: 41 tanaman (PLANTS[])
│   ├── products.js         # Data: 28 produk toko (PRODUCTS[])
│   ├── communities.js      # Data: 12 komunitas + dummy posts & komentar
│   ├── guides.js           # Data: 18 panduan belajar (GUIDES[])
│   ├── garden.js           # Data: kebun aktif pengguna (MY_GARDEN[])
│   ├── users.js            # Data: profil pengguna simulasi (USERS{})
│   ├── journey.js          # Logika: storytelling Plant Journey per fase
│   ├── plant-lab.js        # Logika: simulasi Plant Lab (air/cahaya/pupuk)
│   ├── plant-match.js      # Logika: personality mapping dari Plant Match
│   ├── plant-images.js     # Mapping: URL gambar tanaman per ID
│   ├── gambar-produk.js    # Mapping: URL gambar produk per ID
│   ├── utils.js            # Utilitas: fungsi slugify()
│   └── app.js              # Core: cart, toast, nav, Plant Match quiz, modal
│
└── asset/
    ├── plant.mp4           # Video background: halaman Tanaman & Beranda
    ├── plant_page.gif      # GIF preview Tanaman
    ├── learnpage.mp4       # Video background: halaman Belajar
    ├── learn_page.mp4      # Video alternatif Belajar
    ├── community.mp4       # Video background: halaman Komunitas
    ├── community_page.gif  # GIF preview Komunitas
    ├── garden.mp4          # Video background: halaman Kebunku
    ├── garden_page.mp4     # Video alternatif Kebunku
    ├── shop.mp4            # Video background: FloraShop
    ├── shop_page.mp4       # Video alternatif FloraShop
    └── source.txt          # Catatan sumber aset
```

---

## Halaman (Pages)

### `index.html` — Beranda

Halaman utama yang berfungsi sebagai **Interactive World Gateway**. Pengunjung bisa menjelajahi preview dari lima ruang FloraVerse (Tanaman, Belajar, Komunitas, FloraShop, Kebunku) dari satu layar tanpa berpindah halaman.

**Fitur kunci:**
- **World Stage**: Area hero yang berubah secara dinamis saat user memilih salah satu dari lima ruang. Konten (judul, deskripsi, statistik, video background, CTA) semuanya di-render ulang via JavaScript dengan transisi animasi 180ms.
- **World Picker Grid**: Lima tombol navigasi di bawah hero, masing-masing merepresentasikan satu ruang dengan nomor, label, dan deskripsi singkat.
- **Plant Match Prompt**: Callout section untuk mengundang pengunjung mencoba fitur Plant Match.
- **Journey Steps**: Visualisasi alur empat langkah: Temukan → Pelajari → Rawat → Bagikan.
- Data konfigurasi lima dunia tersimpan dalam objek `HOME_WORLDS` di dalam halaman.

---

### `plants.html` — Ensiklopedia Tanaman

Katalog 41 tanaman yang dapat difilter, diurutkan, dan ditelusuri. Ini adalah halaman paling kaya fitur selain kebun.

**Fitur kunci:**
- **Search & Filter**: Pencarian teks real-time + filter kombinasi Kategori (9 kategori: Sayuran, Buah, Bunga, Herbal, Hias, Pohon buah, Pangan, Sukulen, Kaktus), Level kesulitan (Sangat Mudah–Sulit), Kebutuhan cahaya (Full Sun / Partial Sun / Bright Indirect), dan Sorting (Populer, Panen Cepat, Termudah, A–Z).
- **Category Pills**: Filter cepat via tombol kategori di atas grid.
- **Plant Card Grid**: Tampilan responsif 1–4 kolom dengan gambar, kategori, rating, kesulitan, dan kebutuhan dasar.
- **Load More**: Paginasi sisi klien — tampil 12 (mobile) atau 24 (desktop) per halaman.
- **Plant Detail Modal**: Klik kartu membuka modal lengkap berisi cara tanam, cara merawat, tips, kebutuhan air/cahaya/suhu/pH/media, hama penyakit, produk terkait, komunitas terkait, panduan terkait, dan tombol ekosistem (tambah ke kebun, coba Plant Lab, starter kit).
- **Plant Lab**: Simulasi interaktif di bawah grid — atur level air (💧), cahaya (☀️), pupuk (🧪), dan media (🌿) dengan slider range 0–100. Tanaman bereaksi secara simulasi dengan indikator kesehatan, status, dan pesan edukasi. Plant yang ditampilkan bisa diganti via dropdown.
- **Plant Match Modal**: Survey 7 pertanyaan (cahaya, lokasi, frekuensi perawatan, frekuensi siram, luas ruang, pengalaman, tujuan) yang menghasilkan skor kesesuaian untuk setiap tanaman dan menampilkan top 5 rekomendasi.

---

### `learn.html` — Ruang Belajar

18 panduan berkebun bertingkat (Pemula & Menengah) yang dapat difilter, dicari, dan dibuka sebagai modal penuh.

**Fitur kunci:**
- **Search & Filter**: Pencarian teks + filter Kategori (9 kategori: Dasar berkebun, Media tanam, Penyiraman, Cahaya, Pemupukan, Hama & penyakit, Hidroponik, Urban farming, Composting) + filter Level (Semua / Pemula / Menengah).
- **Category Tabs**: Scrollable pill tabs di atas grid untuk filter cepat.
- **Guide Cards**: Grid 1–4 kolom dengan gambar, label populer, waktu baca, dan level.
- **Guide Modal**: Membuka panduan penuh dengan ringkasan, integrasi data tanaman dari ensiklopedia (lengkap dengan karakteristik), langkah demi langkah bernomor, dan checklist praktik dengan tombol "Tandai Selesai +20 XP".
- **Kartu Edukasi Interaktif**: Tiga kartu flip (Penyiraman, Cahaya, Pemupukan) — tap untuk membalik dan melihat fakta tersembunyi.
- **Beginner Roadmap**: Urutan panduan yang disarankan untuk pemula absolut, dengan tombol simpan.
- **Plant Journey Education Teaser**: Koneksi ke halaman Kebunku — setiap panduan memiliki tombol "Mulai Day 1 di Kebunku".

---

### `community.html` — Komunitas

Feed komunitas bertopik dengan 12 grup, sistem postingan, komentar inline, dan filter konten.

**Fitur kunci:**
- **Hero dengan video background** (community.mp4) dan statistik (12 grup, 14K+ anggota, 4K+ post).
- **Feed Komunitas**: Daftar postingan yang bisa difilter (Semua / Populer / Terbaru / Mengikuti). Setiap postingan menampilkan gambar tanaman dari ensiklopedia, tag, tombol Suka (dengan animasi heartPop), Komentar, Simpan, dan Bagikan.
- **Inline Comments**: Klik tombol komentar untuk membuka/menutup seksi komentar per postingan. Ada input komentar langsung di bawah postingan. Komentar yang banyak bisa di-toggle "Lihat N komentar lainnya".
- **Buat Postingan**: Modal dengan pilihan komunitas, textarea, dan tag (Foto, Tag Tanaman, #).
- **Sidebar Komunitas Anda**: Menampilkan empat komunitas yang diikuti pengguna aktif.
- **Rekomendasi Komunitas**: Daftar komunitas yang bisa dicari dan difilter (Tanaman / Metode / Hobi), dengan tombol Gabung.
- **Rules Modal**: Dialog aturan komunitas yang muncul otomatis saat halaman dibuka pertama kali.

---

### `shop.html` — FloraShop

Toko perlengkapan berkebun dengan 28 produk, keranjang belanja, dan alur checkout simulasi lengkap.

**Fitur kunci:**
- **Search & Filter**: Pencarian teks + filter Kategori (Benih, Bibit, Pot, Media Tanam, Pupuk, Tools, Hydroponics, Plant care, Bundling) + Sorting (Populer, Harga Terendah, Harga Tertinggi, Rating Tertinggi) + checkbox Best Seller dan Beginner Pick.
- **Product Grid**: Grid responsif dengan gambar, badge (Best Seller / Beginner Pick / Popular), rating, stok, harga, dan tombol "+ Keranjang".
- **Product Detail Modal**: Klik produk untuk detail lengkap — ukuran, manfaat, cocok untuk tanaman apa (dengan link ke ensiklopedia), dan estimasi pengiriman.
- **Keranjang (Cart Modal)**: Terbuka sebagai modal di shop.html (berbeda dari drawer di halaman lain). Mendukung tambah/kurang kuantitas dan hapus item.
- **Checkout Form Lengkap**: Form alamat pengiriman (nama, WhatsApp, alamat, kota, kode pos) + pilihan metode pengantaran (Reguler Rp12.000, Same Day Rp25.000, Ambil sendiri Gratis) + pilihan pembayaran (Transfer Bank, QRIS, E-Wallet, COD) + ringkasan pesanan dengan kalkulasi subtotal dan ongkos kirim secara real-time. Order ID digenerate dan disimpan ke `localStorage`.
- **Cart Drawer**: Di semua halaman selain shop.html, keranjang terbuka sebagai side drawer dari kanan.
- Keranjang disinkronisasi antar tab browser via `BroadcastChannel` dan `localStorage`.

---

### `garden.html` — Kebunku (Plant Journey)

Manajemen kebun digital pribadi dengan sistem task harian, plant journal, timeline fase pertumbuhan, dan integrasi Plant Lab.

**Fitur kunci:**
- **Hero dengan video background** (garden.mp4).
- **My Plants Grid**: Menampilkan semua tanaman di kebun pengguna (default 6 tanaman) dengan progress bar, health badge (Healthy / Needs Water / Needs Fertilizer), dan indikator fase saat ini. Bisa difilter per status kesehatan.
- **Plant Journey Detail**: Panel utama kiri yang menampilkan detail tanaman yang dipilih:
  - Progress bar keseluruhan
  - Stage pills (Seed → Seedling → Growing → Flowering → Fruiting → Harvest) dengan indikator selesai/aktif/akan datang
  - Timeline vertikal naratif untuk setiap fase dengan deskripsi dan tombol "Complete Stage"
  - Task list harian dengan checkbox (check = +10 XP simulasi), tambah task custom
  - Informasi air, cahaya, dan pupuk
  - Tombol "Bagikan ke Komunitas" dan "Tulis Jurnal"
- **Plant Journal**: Catatan harian bertimestamp, tambah entri baru langsung dari panel.
- **Tips Sidebar**: Tips otomatis dari data ensiklopedia tanaman yang dipilih.
- **Smart Basket Sidebar**: Produk terkait dari FloraShop untuk tanaman aktif.
- **Plant Lab Shortcut**: Tombol yang membuka Plant Lab (modal) langsung di konteks tanaman yang sedang dilihat.
- **Tambah Tanaman**: Modal pencarian dari 41 tanaman ensiklopedia untuk ditambahkan ke kebun. Setiap penambahan membuat entri baru dengan task awal dan jurnal hari pertama.
- State kebun dipersist ke `localStorage` via fungsi `persistGarden()`.

---

### `profile.html` — Profil Pengguna

Halaman profil gamifikasi lengkap untuk pengguna simulasi "Izra".

**Fitur kunci:**
- **Header Profil**: Avatar, nama, level (Gardener Lv 8), XP (340), bio, progress bar menuju level berikutnya, dan tombol Bagikan/Edit.
- **Stats Overview**: Jumlah tanaman aktif (6), komunitas diikuti (4), dan panduan dibaca (18).
- **XP & Level Detail**: Dua accordion — "Cara Dapat XP" (6 aksi dengan poin) dan "Level Progression" (10 level dari Seed Starter hingga Flora Master, level aktif ditandai biru).
- **Garden Summary**: Ringkasan visual semua tanaman di kebun + completed journeys.
- **Joined Communities**: Grid empat komunitas yang diikuti dengan tombol ke halaman komunitas.
- **Tab Panel (Tersimpan/Aktivitas)**:
  - Tanaman Tersimpan: Tanaman yang di-bookmark dari ensiklopedia.
  - Panduan Tersimpan: Panduan yang disimpan dari halaman Belajar.
  - Aktivitas: Timeline aktivitas terbaru (task, postingan, panduan, bergabung komunitas, checkout).
- **Achievements**: 8 lencana pencapaian (4 terbuka, 4 terkunci).
- **Tantangan Mingguan**: Challenge aktif "selesaikan 5 task" dengan progress bar.
- **Edit Profil Modal**: Form edit nama, bio, dan lokasi.

---

## JavaScript — Data & Logika

### `js/plants.js`
Berisi array `PLANTS` dengan 41 objek tanaman. Setiap objek memiliki:

| Field | Contoh |
|---|---|
| `id` | `"cabai-rawit"` |
| `nama` | `"Cabai Rawit"` |
| `ilmiah` | `"Capsicum frutescens"` |
| `kategori` | `"Sayuran"` |
| `kesulitan` | `"Mudah"` / `"Sedang"` / `"Sulit"` / `"Sangat Mudah"` |
| `panen` | `"70–90 hari"` |
| `cahaya` | `"Full Sun"` / `"Partial Sun"` / `"Bright Indirect"` |
| `air` | `"Sedang"` / `"Banyak"` / `"Jarang"` |
| `ph` | `"6.0–7.0"` |
| `suhu` | `"24–32°C"` |
| `media` | `"Tanah gembur + kompos"` |
| `color` | Hex warna tema kartu |
| `emoji` | Emoji representatif |
| `desc` | Deskripsi singkat |
| `cara` | Cara menanam |
| `perawat` | Cara merawat |
| `hama` | Hama dan penyakit umum |
| `tips` | Tips singkat |
| `rating` | Angka desimal (4.4–4.9) |
| `buyers` | Jumlah penanam simulasi |

Kategori yang tersedia: Sayuran, Buah, Bunga, Herbal, Hias, Pohon buah, Sukulen, Kaktus.

---

### `js/products.js`
Array `PRODUCTS` dengan 28 produk. Setiap produk memiliki `id`, `nama`, `kategori`, `harga` (Rupiah), `rating`, `ulas` (jumlah ulasan), `badge`, `emoji`, `related` (ID tanaman), dan `stok`.

Kategori produk: Benih, Bibit, Pot, Media Tanam, Pupuk, Tools, Hydroponics, Plant care, Bundling.

---

### `js/communities.js`
- Array `COMMUNITIES` (12 komunitas) dengan id, nama, kategori, jumlah anggota, posts, warna, emoji, deskripsi, tags, dan opsional `coverImg` serta `plantId`.
- Array `POSTS` (10 dummy post) sebagai data awal feed komunitas, masing-masing terhubung ke komunitas dan opsional ke ID tanaman.
- Objek `DUMMY_COMMENTS` berisi array komentar per ID postingan untuk simulasi diskusi yang realistis.

---

### `js/guides.js`
Array `GUIDES` (18 panduan) dengan struktur lengkap per panduan:
- `id`, `judul`, `kategori`, `waktu`, `level`, `color`, `emoji`, `desc`, `plantId`, `img` (URL)
- `konten`: paragraf ringkasan
- `langkah`: array `{t, d}` (judul & deskripsi per langkah)
- `checklist`: array string untuk checklist praktik
- `populer`: boolean (muncul di sidebar "Populer")

---

### `js/garden.js`
- Array `MY_GARDEN` (6 tanaman aktif) sebagai state kebun default. Setiap entri berisi `id`, `plantId`, `nama`, `day` (hari ke-berapa), `stage`, `stageIndex`, `stages[]`, `health`, `water`, `light`, `fert`, `progress` (0–100), `tasks[]`, dan `journal[]`.
- Array `GARDEN_PULSE` (3 item notifikasi) untuk widget Garden Pulse.
- Fungsi `persistGarden()` menyimpan state ke `localStorage`.
- Saat halaman dimuat, state tersimpan dari `localStorage` di-merge ke data default agar perubahan pengguna tetap ada.

---

### `js/users.js`
Objek `USERS` berisi tiga profil simulasi: Izra (Lv 8, 340 XP), Fairuz (Lv 6, 280 XP), Tafayad (Lv 7, 310 XP). Konstanta `CURRENT_USER` menunjuk ke `USERS.izra`.

---

### `js/journey.js`
- Objek `JOURNEY_STORY` berisi narasi bertahap per hari untuk beberapa tanaman (terutama cabai rawit dan tomat).
- Fungsi `buildPlantJourney(plant)` membuat storyline generik dari data ensiklopedia untuk tanaman yang belum punya narasi khusus.
- Fungsi `getStory(plantId, day)` mencari narasi paling relevan untuk hari tertentu.
- Fungsi `xpForAction(action)` mendefinisikan tabel XP per aksi (addPlant: 10, guide: 20, dll) — saat ini masih sebatas referensi, belum terintegrasi ke runtime dinamis.

---

### `js/plant-lab.js`
- Fungsi `plantLabEvaluate(params)` menerima objek `{water, sun, fert, soil}` (skala 0–100) dan mengembalikan `{health, messages[], status, color, emoji}` berdasarkan aturan threshold.
- Fungsi `renderPlantLab(containerId, initialPlantId)` merender UI lengkap Plant Lab ke dalam container yang ditentukan. Mendukung 4 slider, indikator kesehatan real-time, tombol reset, dan eksposes API `$c.data('setPlant', fn)` untuk mengganti tanaman dari luar.

---

### `js/plant-match.js`
Berisi fungsi `plantMatchToPersonality(answers)` yang memetakan jawaban 7 pertanyaan Plant Match ke salah satu dari 6 tipe Gardening Personality: Perawat Santai, Pemburu Panen Cepat, Pekebun Urban, Penjelajah Tanaman, Peracik Herbal, atau Perawat Teliti.

Logika utama quiz (pertanyaan, penilaian, rendering hasil) berada di `app.js`.

---

### `js/plant-images.js` & `js/gambar-produk.js`
Mapping dari ID tanaman/produk ke URL gambar eksternal (JPEG/PNG). Digunakan oleh fungsi `fvImg()` di `app.js` untuk merender gambar dengan fallback graceful (teks huruf pertama nama).

---

### `js/utils.js`
Berisi satu fungsi: `window.slugify(name)` — mengkonversi string ke format URL-friendly (lowercase, tanpa aksen, karakter non-alphanumerik diganti tanda hubung).

---

### `js/app.js` — Core Application
File terbesar, dimuat terakhir di setiap halaman, berisi semua logika shared:

- **`fvImg(obj, cls)`**: Render `<img>` dengan src dari mapping gambar dan fallback huruf pertama jika gambar gagal dimuat.
- **Custom Dropdown (`fvEnhanceSelects`)**: Mengupgrade semua `<select>` native menjadi dropdown bergaya custom dengan panel floating. Mendeteksi overflow viewport untuk membalik posisi panel ke atas jika perlu.
- **Cart System**: 
  - Penyimpanan di `localStorage` (key: `fv_cart`) + `window.name` untuk sinkronisasi antar tab.
  - `BroadcastChannel` untuk update real-time antar tab.
  - Fungsi: `getCart()`, `setCart(cart)`, `addToCart(id, qty)`, `removeFromCart(id)`, `clearCart()`, `updateCartBadge()`, `renderDrawerCart()`.
- **Checkout System**: `openCheckout()`, `closeCheckout()`, `updateCheckoutSummary()`, `placeOrder(event)` — menggenerasikan order ID dan menyimpan ke `localStorage`.
- **Plant Match Quiz**: Objek `pmQuestions` (7 pertanyaan), fungsi `choosePM`, `prevPM`, `renderPMStep`, `scorePlant(plant, answers)`, `renderPMResult` — menghitung skor 0–98% per tanaman.
- **Toast Notifications**: `window.toast(msg, icon)` — notifikasi kecil muncul di sudut kanan bawah, antri maksimal 3, hilang otomatis setelah 2.6 detik.
- **Page Transitions**: Intercept klik `<a>` internal, tambah class `is-leaving` ke body, navigasi setelah 190ms untuk animasi keluar halus.
- **Mobile Navigation**: Membuat panel nav mobile (slide dari kiri) secara dinamis dari link navigasi yang ada.
- **Scroll Reveal**: `IntersectionObserver` untuk memicu animasi `.reveal` saat elemen masuk viewport.
- **Micro-interactions**: `toggleLike()`, `toggleSave()`, `sharePost()`, `toggleJoin()` dengan animasi CSS.
- **Active Nav**: Deteksi otomatis halaman aktif untuk menyorot link nav yang sesuai.

---

## CSS — Sistem Desain

### Palet Warna

```css
--blue:    #6FA8FF  /* Biru utama — aksen, progress, info */
--pink:    #FF718D  /* Pink — likes, harga, komunitas */
--yellow:  #FFD45C  /* Kuning — XP, badge, highlight */
--orange:  #FF9B70  /* Oranye — harga toko, notifikasi */
--green:   #8BCB8A  /* Hijau — Healthy, selesai, panduan */
--charcoal:#252525  /* Charcoal — teks utama, tombol dark */
```

### `css/style.css` — Design System Utama
- Custom properties (CSS variables) untuk semua warna dan shadow
- **Komponen cards**: `.fv-card` (white, blue, pink, yellow, orange, green) dengan shadow layered, border radius 24px, dan hover lift effect
- **Tombol (`.btn`)**: Varian `btn-primary`, `btn-dark`, `btn-ghost`, `btn-orange`
- **Pills**: `.pill`, `.pill-blue`, `.pill-yellow`, `.pill-green`, `.pill-white`
- **Navbar** (`.navbar`): Sticky, backdrop-blur, border bawah transparan
- **Modal & Drawer**: `.modal-backdrop`, `.modal`, `.drawer`, `.drawer-backdrop`
- **Progress bars**: `.progress-track`, `.progress-fill`, `.shimmer`
- **Journey visual**: `.journey-line`, `.journey-dot` (done/active/todo states)
- **Custom select dropdown**: `.fv-select`, `.fv-select-btn`, `.fv-select-panel`, `.fv-select-option`
- **Checkout**: `.checkout-input`, `.checkout-panel`, `.checkout-option`, `.checkout-summary`
- **Toast**: `#toastBox`, `.toast`, `.is-leaving`
- **Mobile nav**: `.mobile-nav-backdrop`, `.mobile-nav-panel`, `.mobile-profile-chip`
- Scrollbar custom styling untuk sidebar komunitas

### `css/home.css` — Khusus Beranda
- **World Stage**: `.world-stage`, `.world-stage-copy`, `.world-stage-visual`, transisi `is-transitioning` / `is-ready`
- **World Scene** (video + overlay): `.world-scene`, `.world-scene-video`, `.world-scene-shade`, `.world-core`
- **World Title**: `.world-title`, `.world-title-line`, `.world-title-highlight`
- **World Facts**: `.world-facts`, `.world-fact`, `.world-fact-value`
- **World Picker Grid**: `.world-picker-grid`, `.world-trigger`, `.world-trigger-body`, `.is-active`
- **Journey Steps**: `.home-journey`, `.home-journey-steps`
- **Plant Match Prompt**: `.plant-match-prompt`, `.plant-match-mark`, `.plant-match-copy`

### `css/animations.css` — Sistem Animasi
- **Keyframes dekoratif**: `drift`, `driftSlow`, `beePath`, `butterflyPath`, `sunPulse`
- **Page transitions**: `pageEnter` (fade + slide up) dan `pageLeave` (fade + slide up)
- **Scroll reveal**: `fadeUp`, `.reveal`, `.reveal.in`
- **Micro-interactions**: `bounce`, `heartPop` (like), `saveBounce` (save/bookmark), `iconPop`
- **Shimmer loading**: `shimmer` (digunakan di progress bar Plant Lab)
- **Comment chevron**: `comment-chevron`, `.open`
- **Collapsible content** (kebun): `.collapsible-content`, `.collapsed`

### `css/responsive.css` — Responsivitas
- Layout penyesuaian untuk mobile (< 640px) dan tablet
- Community layout: `.community-layout`, `.community-main`, `.community-sidebar`
- Profile stat grid: `.profile-stat-grid`
- Sidebar scroll: `.sidebar-scroll`

---

## Aset Media

Semua file video disimpan di folder `asset/` dan digunakan sebagai background video (autoplay, loop, muted, playsinline) di header setiap halaman.

| File | Digunakan di |
|---|---|
| `plant.mp4` | `index.html` (dunia Tanaman & Home), `plants.html` |
| `learnpage.mp4` | `learn.html` |
| `community.mp4` | `community.html`, `index.html` (dunia Komunitas) |
| `garden.mp4` | `garden.html`, `index.html` (dunia Kebunku) |
| `shop.mp4` | `shop.html`, `index.html` (dunia FloraShop) |
| `plant_page.gif` | Preview aset alternatif |
| `community_page.gif` | Preview aset alternatif |

---

## Fitur Utama

### Plant Match Quiz
Survey 7 pertanyaan untuk merekomendasikan tanaman. Setiap tanaman diberi skor 0–98% berdasarkan kesesuaian jawaban dengan karakteristik tanaman (cahaya, kesulitan perawatan, lokasi, frekuensi siram, ruang, pengalaman, tujuan). Hasilnya menampilkan top 5 tanaman dengan persentase kesesuaian, alasan cocok, dan tombol langsung ke Kebunku.

### Plant Lab (Simulasi Edukasi)
Empat slider (Air, Cahaya, Pupuk, Media — skala 0–100) yang menghasilkan feedback edukasi instan. Ini bukan diagnosa ilmiah, tapi alat untuk memahami akibat overwatering, kekurangan cahaya, atau kelebihan pupuk secara visual. Tersedia di `plants.html` dan sebagai modal shortcut di `garden.html`.

### Plant Journey (Kebunku)
Setiap tanaman di kebun berjalan melalui 6 fase (Seed → Seedling → Growing → Flowering → Fruiting → Harvest). Pengguna bisa:
- Menyelesaikan task harian (memberi XP simulasi)
- Menyelesaikan fase untuk melanjutkan ke fase berikutnya
- Menulis jurnal per hari
- Berbagi journey ke komunitas

### Gamifikasi (XP & Level)
- 10 level dari "Seed Starter" (0 XP) hingga "Flora Master" (500 XP)
- Pengguna aktif "Izra" berada di Level 8 (340 XP)
- XP didapat dari: tambah tanaman (+10), selesaikan panduan (+20), update jurnal (+10), bantu komunitas (+15), selesaikan journey (+50), selesaikan challenge (+40)
- **Catatan**: Sistem XP saat ini masih bersifat simulasi statis — angka XP di toast adalah teks, belum terintegrasi ke state dinamis.

### Cart & Checkout Lintas Halaman
Keranjang belanja sinkron di semua halaman via `localStorage` dan `BroadcastChannel`. Perubahan di satu tab (tambah produk di shop.html) langsung tercermin di tab lain. Checkout menyimulasikan proses pemesanan lengkap tanpa pembayaran nyata.

### Komunitas Feed
Feed postingan yang bisa difilter, diurutkan, dan diinteraksikan. Pengguna bisa membuat postingan baru (pilih komunitas, tulis konten), memberi like, menyimpan, berbagi, dan berkomentar secara inline. Semua interaksi bersifat in-memory (tidak persisten ke localStorage).

---

## Alur Ekosistem

FloraVerse dirancang agar setiap ruang mengarahkan pengguna ke ruang berikutnya:

```
Beranda (World Gateway)
    ↓
plants.html → Temukan tanaman via ensiklopedia atau Plant Match
    ↓
learn.html → Baca panduan cara menanam & merawat
    ↓
plants.html → Coba simulasi di Plant Lab
    ↓
garden.html → Mulai Plant Journey (Day 1), kerjakan task harian, tulis jurnal
    ↓
shop.html → Beli kebutuhan via Smart Basket / Starter Kit
    ↓
community.html → Bagikan progress, minta tips, panen bareng
    ↓
profile.html → Lihat XP, achievements, dan statistik perjalanan
```

Setiap halaman memiliki tombol "Ekosistem" yang menghubungkan langsung ke ruang terkait.

---

## Pengguna Simulasi

Aplikasi ini menggunakan tiga pengguna fiksi sebagai persona simulasi. Semua UI dan data dummy dibuat berdasarkan perspektif pengguna aktif **Izra**.

| Pengguna | Level | XP | Spesialisasi |
|---|---|---|---|
| **Izra** (aktif) | 8 | 340 | Urban Gardener — cabai & sukulen di balkon 2x1m |
| Fairuz | 6 | 280 | Hydro Enthusiast — hidroponik selada & tomat |
| Tafayad | 7 | 310 | Compost Hero — berkebun organik & kompos |

Ketiga nama ini muncul sebagai penulis dummy posts di komunitas, ulasan produk, dan komentar feed.

---

## Detail Teknis Per Halaman (HTML, JavaScript, CSS)

Bagian ini menjelaskan secara mendalam elemen HTML, skrip JavaScript, dan CSS yang digunakan di setiap halaman — ditulis agar juri dan tim paham betul arsitektur teknis FloraVerse.

---

### 1. `index.html` — Beranda (Interactive World Gateway)

**Fungsi:**
Halaman pembuka yang berfungsi sebagai portal interaktif ke lima ruang FloraVerse. Pengunjung bisa memilih salah satu dari lima dunia (Tanaman, Belajar, Komunitas, FloraShop, Kebunku) dan konten hero berubah secara dinamis tanpa pindah halaman.

**Struktur HTML:**
- **Navbar** (`.navbar`): Navigasi sticky dengan logo `FloraVerse`, link ke 7 halaman, ikon keranjang belanja (🛒) dengan badge jumlah item, avatar pengguna "Izra" (Lv 8), dan tombol hamburger untuk mobile.
- **World Stage** (`#worldStage`): Hero section utama dengan dua kolom:
  - Kiri (`world-stage-copy`): Judul dinamis (`#heroTitle`), deskripsi, statistik (facts), tombol CTA, dan tombol "Coba Plant Match".
  - Kanan (`world-stage-visual`): Video background (`asset/plant.mp4`) yang berubah sesuai dunia yang dipilih, overlay gradien, dan kartu "world core" (icon + nama ruang).
- **World Picker Grid** (`#worldPicker`): 5 tombol grid yang masing-masing merepresentasikan satu ruang. Setiap tombol berisi nomor (01–05), nama ruang, deskripsi singkat, dan panah navigasi.
- **Journey Steps** (`.home-journey`): Visualisasi 4 langkah berkebun: Temukan → Pelajari → Rawat → Bagikan, dengan deskripsi masing-masing.
- **Plant Match Prompt** (`.plant-match-prompt`): CTA section untuk mengundang pengunjung mencoba fitur Plant Match.
- **Footer**: Copyright FloraVerse 2026.
- **Plant Match Modal** (`#plantMatchModal`): Modal overlay untuk quiz Plant Match 7 pertanyaan (inline di halaman ini).
- **Cart Drawer** (`#cartDrawer`): Drawer samping kanan untuk keranjang belanja lintas halaman.
- **Toast Box** (`#toastBox`): Container notifikasi toast.

**JavaScript yang digunakan:**
- **jQuery 3.7.1** (CDN): Dasar manipulasi DOM.
- **`js/plants.js`**: Data array `PLANTS[]` (41 tanaman) — di-load tapi tidak langsung digunakan di beranda, hanya untuk Plant Match.
- **`js/utils.js`**: Fungsi `slugify()`.
- **`js/plant-images.js`**: Mapping URL gambar tanaman → digunakan oleh `fvImg()`.
- **`js/products.js`**: Data array `PRODUCTS[]` (28 produk) — untuk keranjang.
- **`js/gambar-produk.js`**: Mapping URL gambar produk.
- **`js/communities.js`**: Data komunitas & post — tidak aktif di halaman ini.
- **`js/guides.js`**: Data panduan belajar — tidak aktif di halaman ini.
- **`js/users.js`**: Data profil pengguna simulasi.
- **`js/garden.js`**: Data kebun aktif `MY_GARDEN[]`.
- **`js/journey.js`**: Narasi Plant Journey per fase.
- **`js/plant-lab.js`**: Logika simulasi Plant Lab (tidak dirender di halaman ini).
- **`js/plant-match.js`**: Fungsi `plantMatchToPersonality()` — memetakan jawaban quiz ke tipe kepribadian berkebun.
- **`js/app.js`**: Core application — berisi:
  - `fvImg()`: Renderer gambar tanaman/produk dengan fallback huruf pertama.
  - `fvEnhanceSelects()`: Mengupgrade `<select>` native ke dropdown custom.
  - Cart system: `getCart()`, `setCart()`, `addToCart()`, `removeFromCart()`, `clearCart()`, `updateCartBadge()`, `renderDrawerCart()`.
  - Checkout: `openCheckout()`, `closeCheckout()`, `updateCheckoutSummary()`, `placeOrder()`.
  - Plant Match quiz: `openPlantMatch()`, `startPlantMatch()`, `choosePM()`, `prevPM()`, `renderPMStep()`, `scorePlant()`, `renderPMResult()`.
  - Toast: `window.toast(msg, icon)`.
  - Page transitions: Intercept klik `<a>`, tambah class `is-leaving`, navigasi setelah 190ms.
  - Mobile nav: Membuat panel nav mobile (slide dari kiri) secara dinamis.
  - Scroll reveal: `IntersectionObserver` untuk animasi `.reveal`.
  - Micro-interactions: `toggleLike()`, `toggleSave()`, `sharePost()`, `toggleJoin()`.
  - Active nav: Deteksi halaman aktif.
- **Script inline di `index.html`**: Objek `HOME_WORLDS` (konfigurasi 6 dunia: home + 5 ruang), fungsi `renderWorldContent()`, `syncWorldPicker()`, `setActiveWorld()` — logika utama interaksi World Gateway dengan transisi animasi 180ms.

**CSS yang digunakan:**
- **`css/style.css`**: Design system utama — variabel warna, `.fv-card`, `.btn`, `.pill`, `.navbar`, `.modal-backdrop`, `.drawer`, `.progress-track`, `.toast`, `.mobile-nav-panel`, scrollbar custom, hover-lift.
- **`css/home.css`**: Khusus halaman beranda — `.world-stage`, `.world-scene`, `.world-title`, `.world-facts`, `.world-picker-grid`, `.world-trigger`, `.plant-match-prompt`, `.home-journey`. Termasuk CSS variables per dunia (`data-world="tanaman"` dst) yang mengubah warna secara otomatis.
- **`css/animations.css`**: `@keyframes pageEnter`, `pageLeave`, `worldWipe`, `worldCtaIn`, `toastIn`, `toastOut`, `fadeUp`, `bounce`, `heartPop`, `saveBounce`, `iconPop`, `shimmer`.
- **`css/responsive.css`**: Penyesuaian layout untuk mobile (< 640px) dan tablet.
- **Tailwind CSS v3 (CDN)**: Utility classes untuk spacing, typography, flex, grid, warna, dll.

---

### 2. `plants.html` — Ensiklopedia Tanaman

**Fungsi:**
Katalog 41 tanaman yang bisa dicari, difilter, diurutkan, dan dibuka detailnya. Juga menjadi home untuk **Plant Lab** (simulasi edukasi) dan **Plant Match** (quiz rekomendasi).

**Struktur HTML:**
- **Navbar**: Sama seperti halaman lain.
- **Header Hero** (`.fv-card`): Video background `asset/plant.mp4`, judul "Temukan tanaman yang paling cocok untukmu", tombol Plant Match, dan panel pencarian/filter di sebelah kanan:
  - Input pencarian (`#searchInput`): Real-time search berdasarkan nama, nama ilmiah, atau kategori.
  - 4 `<select>` filter: Kategori (9 opsi), Level kesulitan (4 opsi), Cahaya (3 opsi), Sorting (4 opsi).
  - Counter hasil (`#resultCount`).
- **Category Pills** (`#catPills`): Scrollable horizontal button group — Semua, Sayuran, Buah, Bunga, Herbal, Hias, Pohon buah, Sukulen, Kaktus. Setiap pill menampilkan emoji + nama kategori.
- **Main Grid** (`#plantsGrid`): Grid responsif 1–4 kolom. Setiap kartu tanaman berisi: gambar, badge kategori, rating (★), level kesulitan + waktu panen, nama, nama ilmiah, pill cahaya/air/suhu, deskripsi singkat, tombol "Lihat Detail" dan "+ Kebunku".
- **Load More** (`#plantsLoadMore`): Tombol paginasi sisi klien — tampil 12 (mobile) atau 24 (desktop) per halaman.
- **Empty State** (`#emptyState`): Pesan "Tidak ada tanaman ditemukan" + tombol reset filter.
- **Plant Lab Section**: Card putih besar berisi:
  - Dropdown pilih tanaman (`#labPlantSelect`).
  - Container render Plant Lab (`#plantLabRoot`) — dirender via `renderPlantLab()`.
  - 3 info cards: "Eksperimen Aman", "Feedback Instan", "Hubungkan ke Kebunku".
- **Ecosystem Cross-link**: Card kuning yang menunjukkan alur ekosistem (Cabai → Pelajari → Coba Lab → Mulai Journey → Smart Basket → Share Community).
- **Plant Detail Modal** (`#plantModal`): Modal besar (max 880px) yang dibuka saat kartu diklik. Berisi: gambar besar, badge kategori + kesulitan, nama + nama ilmiah, pill kebutuhan, rating + jumlah penanam, tombol "Tambah ke Kebunku" + "Simpan", deskripsi, grid info (media tanam, suhu, air, cahaya), 3 kolom panduan (cara menanam, cara merawat, tips), hama & penyakit, produk terkait dari FloraShop (dengan tombol "+ Keranjang" dan "Starter Kit"), komunitas terkait, panduan terkait, dan tombol ekosistem (Pelajari, Mulai Journey, Coba Plant Lab, Gabung Komunitas, Starter Kit, + Kebunku).
- **Plant Match Modal** (`#plantMatchModal`): Quiz 7 pertanyaan dengan progress bar, navigasi maju mundur, dan hasil top 5 rekomendasi.
- **Cart Drawer** (`#cartDrawer`): Keranjang samping.

**JavaScript yang digunakan:**
- Semua file JS yang sama seperti index.html (load semua data + core).
- **Script inline**: Fungsi `renderPlants()` — filtering, sorting, rendering grid + kartu + modal detail. Fungsi `openPlant(id)` — membuka modal detail tanaman dengan data lengkap + integrasi produk/komunitas/panduan terkait. Event handler untuk search, filter, category pills, load more, reset filter. Inisialisasi Plant Lab: `renderPlantLab('plantLabRoot', 'cabai-rawit')`.

**CSS yang digunakan:**
- `css/style.css`, `css/animations.css`, `css/responsive.css` (sama).
- Tidak ada `css/home.css` (khusus beranda).
- Tailwind CSS CDN.

---

### 3. `learn.html` — Ruang Belajar

**Fungsi:**
18 panduan berkebun bertingkat yang bisa dicari, difilter, dan dibuka sebagai modal penuh. Setiap panduan memiliki ringkasan, langkah praktik, dan checklist.

**Struktur HTML:**
- **Navbar**: Sama.
- **Header Hero**: Video background `asset/learnpage.mp4`, judul "Belajar berkebun tanpa ribet", info waktu baca (4–12 menit), panel pencarian + filter kategori, dan sidebar "Paling Populer" (3 panduan terpopuler).
- **Category Tabs** (`#guideCats`): 10 pill tabs scrollable — Semua, Dasar, Media, Siram, Cahaya, Pupuk, Hama, Hidroponik, Urban, Kompos.
- **Level Filter**: 3 tombol — Semua Level, Pemula, Menengah.
- **Guide Grid** (`#guidesGrid`): Grid 1–4 kolom. Setiap kartu: gambar/emoji, badge kategori, badge level, label "Populer" (jika applicable), judul, waktu + level, deskripsi singkat, tombol "Baca" dan simpan.
- **Kartu Edukasi Interaktif**: 3 kartu flip (Penyiraman, Cahaya, Pemupukan) — klik untuk membalik dan melihat fakta tersembunyi. Menggunakan class `.flipped` via `group-[.flipped]:block`.
- **Beginner Roadmap**: Card biru dengan urutan 4 panduan yang disarankan untuk pemula + tombol "Simpan Roadmap".
- **Plant Journey Education Teaser**: Card hijau yang menghubungkan pembelajaran ke Plant Journey di Kebunku.
- **Guide Modal** (`#guideModal`): Modal penuh (max 720px) dengan: ikon/gambar panduan, badge kategori, judul, info waktu + level + jumlah langkah, ringkasan, blok data tanaman terkait (cahaya, air, suhu, pH, panen, media), langkah demi langkah bernomor, checklist praktik + tombol "Tandai Selesai +20 XP".
- **Cart Drawer**.

**JavaScript yang digunakan:**
- File JS: jQuery, `plants.js`, `utils.js`, `plant-images.js`, `products.js`, `gambar-produk.js`, `guides.js`, `journey.js`, `app.js`.
- **Script inline**: Fungsi `renderGuides()` — filtering + rendering grid. Fungsi `openGuide(id)` — membuka modal panduan dengan langkah, checklist, dan integrasi data tanaman dari ensiklopedia. Rendering sidebar "Populer". Event handler untuk search, category tabs, level filter.

**CSS yang digunakan:**
- `css/style.css`, `css/animations.css`, `css/responsive.css` + Tailwind CDN.
- Style kartu flip di-handle via Tailwind `group-[.flipped]:block` + inline onclick toggle class.

---

### 4. `community.html` — Komunitas

**Fungsi:**
Feed komunitas bertopik dengan 12 grup, sistem postingan, komentar inline, dan filter konten. Ini adalah halaman paling interaktif dari sisi UI.

**Struktur HTML:**
- **Navbar**: Sama.
- **Hero**: Video background `asset/community.mp4`, judul "Bertumbuh bareng yang sepemikiran", statistik (12 grup, 14K+ anggota, 4K+ post), tombol "Buat Postingan".
- **Search & Filter Komunitas**: Input pencarian + filter pill (Semua, Tanaman, Metode, Hobi). Info "Bergabung sebagai Izra • 4 komunitas diikuti".
- **2-Column Layout** (`.community-layout`):
  - **Left — Feed Komunitas** (`#feedList`):
    - Filter tab: Semua, Populer, Terbaru, Mengikuti.
    - Input "Buat postingan" shortcut + tombol Posting.
    - Daftar postingan, masing-masing berisi: avatar + nama penulis + waktu, nama komunitas + kategori, konten teks, tag (#), gambar tanaman dari ensiklopedia, info suka + komentar, tombol Suka (♥ dengan animasi heartPop), Komentar, Simpan (🔖), Bagikan (↗).
    - **Inline Comments**: Setiap postingan bisa展开/menutup komentar. Ada input komentar langsung. Komentar banyak bisa di-toggle "Lihat N komentar lainnya".
  - **Right — Sidebar** (`.community-sidebar`, sticky):
    - "Komunitas Anda": 4 komunitas yang diikuti (Pecinta Cabai, Hidroponik Indonesia, Home Gardening Pemula, Cactus & Succulent ID) dengan indikator online hijau.
    - "Rekomendasi Komunitas": Daftar semua komunitas yang bisa difilter + tombol "Gabung".
- **Create Post Modal** (`#createPostModal`): Form buat postingan — pilih komunitas (dropdown), textarea konten, tombol tag (Foto, Tag Tanaman, #).
- **Rules Modal** (`#rulesModal`): Dialog aturan komunitas yang muncul otomatis saat halaman dibuka pertama kali (4 aturan + tombol Setuju/Kembali).
- **Cart Drawer**.

**JavaScript yang digunakan:**
- File JS: jQuery, `plants.js`, `utils.js`, `plant-images.js`, `products.js`, `gambar-produk.js`, `communities.js`, `guides.js`, `journey.js`, `plant-lab.js`, `app.js`.
- **Script inline**: Fungsi `renderCommsSidebar()` — rendering sidebar komunitas dengan filter. Fungsi `renderFeed()` — rendering feed postingan dengan filter tab (semua/populer/terbaru/mengikuti) + filter per komunitas. Fungsi `toggleComments(postId)` — expand/collapse komentar dengan animasi max-height. Fungsi `submitInlineComment(postId)` — menambahkan komentar baru ke `DUMMY_COMMENTS`. Fungsi `toggleShowMore(postId)` — toggle show/hide semua komentar. Fungsi `closeRulesModal()`. Event handler untuk search, filter komunitas, filter feed, submit postingan, rules modal. Auto-open rules modal on page load.

**CSS yang digunakan:**
- `css/style.css`, `css/animations.css`, `css/responsive.css` + Tailwind CDN.
- Style khusus: `.comment-section` (max-height transition), `.comment-btn.active`, `.comment-chevron`, `.community-layout`, `.community-main`, `.community-sidebar`, `.sidebar-scroll`.

---

### 5. `shop.html` — FloraShop

**Fungsi:**
Toko perlengkapan berkebun dengan 28 produk, keranjang belanja (modal, bukan drawer), dan alur checkout simulasi lengkap.

**Struktur HTML:**
- **Navbar**: Sama, tapi tombol keranjang memanggil `openDrawer()` yang di-override ke modal.
- **Header Hero**: Video background `asset/shop.mp4`, judul "Semua kebutuhan berkebun, satu tempat", panel pencarian + filter kategori + sorting.
- **Category Pills** (`#prodCats`): 10 pill — Semua, Benih, Bibit, Pot, Media, Pupuk, Tools, Hydro, Care, Bundling.
- **Filter Tambahan**: Checkbox "Best Seller saja" dan "Beginner Pick".
- **Product Grid** (`#productsGrid`): Grid 1–4 kolom. Setiap kartu: gambar produk, badge (Best Seller/Beginner Pick/Popular), tombol wishlist (♡), rating + jumlah ulasan, nama produk, kategori + stok, harga (Rp), info tanaman terkait, tombol "+ Keranjang".
- **Product Modal** (`#productModal`): Detail produk — badge, gambar besar, nama, kategori, rating, harga, info isi + stok, manfaat, "Cocok untuk" (link ke tanaman), estimasi pengiriman, tombol "+ Keranjang" + "Wishlist" + "Beli Sekarang".
- **Cart Modal** (`#cartModal`): **Berbeda dari halaman lain** — menggunakan modal (bukan drawer) karena shop.html punya alur belanja khusus. Berisi daftar item dengan tombol +/− kuantitas, hapus item, total, tombol "Lanjut ke Pembayaran", "Kosongkan Keranjang", "Lanjut Belanja".
- **Checkout Modal** (`#checkoutModal`): Form checkout lengkap (max 860px):
  - **Alamat Pengiriman**: Nama penerima, Nomor WhatsApp, Alamat lengkap, Kota/Kabupaten, Kode pos — semua dengan validasi `required`.
  - **Cara Pengantaran**: 3 radio button — Reguler (Rp12.000, 2–4 hari), Same Day (Rp25.000), Ambil sendiri (Gratis).
  - **Metode Pembayaran**: 4 radio button — Transfer Bank (BCA/BNI/BRI/Mandiri), QRIS, E-Wallet (GoPay/DANA/OVO/ShopeePay), COD.
  - **Ringkasan Pesanan** (sidebar): Daftar item + subtotal + ongkir + total + tombol "Buat Pesanan".

**JavaScript yang digunakan:**
- File JS: jQuery, `plants.js`, `utils.js`, `plant-images.js`, `products.js`, `gambar-produk.js`, `journey.js`, `app.js`.
- **Script inline (blok 1)**: Override fungsi cart untuk shop.html — `openDrawer()` diubah menjadi `openCartModal()` (modal), `closeCartModal()`, `updateCartQty(id, delta)`, `removeFromCart(id)`, `checkoutSim()`. Menangani klik backdrop modal.
- **Script inline (blok 2)**: Fungsi `renderProducts()` — filtering, sorting, rendering grid + badge + harga + tombol keranjang. Fungsi `openProduct(id)` — membuka modal detail produk. Event handler untuk search, category pills, filter, sort, reset filter, product modal click-outside-to-close.
- Dari `app.js`: Fungsi `openCheckout()`, `closeCheckout()`, `updateCheckoutSummary()`, `placeOrder()` — menghandle form checkout, kalkulasi subtotal + ongkir real-time, generate order ID, simpan ke `localStorage`.

**CSS yang digunakan:**
- `css/style.css`: `.checkout-panel`, `.checkout-summary`, `.checkout-input`, `.checkout-option` — styling form checkout.
- `css/animations.css`, `css/responsive.css` + Tailwind CDN.

---

### 6. `garden.html` — Kebunku (Plant Journey)

**Fungsi:**
Manajemen kebun digital pribadi dengan task harian, plant journal, timeline fase pertumbuhan, dan integrasi Plant Lab.

**Struktur HTML:**
- **Navbar**: Sama.
- **Header Hero**: Video background `asset/garden.mp4`, judul "Kebun digitalmu, terpantau setiap hari", tombol "Tambah Tanaman".
- **My Plants Grid** (`#myPlantsGrid`): Section collapsible (bisa dibuka/ditutup via toggle). Berisi filter status kesehatan (Healthy/Needs Water/Needs Fertilizer) dan tombol "+ Tambah". Grid kartu tanaman: gambar, nama, hari ke-berapa + fase, health badge (warna), progress bar, stage pills.
- **Journey Detail Panel** (kiri, 7 kolom):
  - Header: gambar tanaman, nama + hari, nama ilmiah + fase +%, health badge.
  - Progress bar keseluruhan.
  - Stage pills: Seed → Seedling → Growing → Flowering → Fruiting → Harvest (done/active/todo).
  - Journey timeline vertikal (`.journey-line` + `.journey-dot`): Setiap fase dengan deskripsi + tombol "Complete Stage" untuk fase aktif.
  - Task list harian: Checkbox untuk setiap task (check = +10 XP simulasi), input tambah task custom.
  - Info boxes: Air, Cahaya, Pupuk.
  - Tombol "Bagikan ke Komunitas" dan "Tulis Jurnal".
- **Sidebar Kanan** (5 kolom):
  - **Plant Lab Shortcut**: Card border-dashed yang membuka Plant Lab (modal) untuk tanaman yang sedang dipilih.
  - **Plant Journal** (`#journalList`): Daftar entri jurnal bertimestamp + input tambah jurnal baru.
  - **Tips** (`#tipsList`): Tips otomatis dari data ensiklopedia tanaman yang dipilih + link ke panduan.
  - **Smart Basket** (`#gardenShop`): Produk terkait dari FloraShop + tombol "Starter Kit".
- **Ecosystem Cross-link**: Card biru yang menunjukkan koneksi ke Lab Tanaman dan Share Community.
- **Add Plant Modal** (`#addPlantModal`): Pencarian dari 41 tanaman ensiklopedia untuk ditambahkan ke kebun.
- **Plant Lab Modal** (`#plantLabModal`): Modal untuk Plant Lab yang dibuka dari shortcut.
- **Cart Drawer**.

**JavaScript yang digunakan:**
- File JS: jQuery, `plants.js`, `utils.js`, `plant-images.js`, `products.js`, `gambar-produk.js`, `garden.js`, `journey.js`, `plant-lab.js`, `plant-match.js`, `app.js`.
- **Script inline**: Fungsi `renderMyPlants()` — rendering grid kebun dengan filter. Fungsi `renderDetail()` — rendering panel detail: stage pills, journey timeline, task list, journal, tips, smart basket, storytelling. Fungsi `selectGarden(id)` — memilih tanaman aktif. `toggleTask(tid, checked)` — toggle task + update progress + toast XP. `addTask()` — tambah task custom. `addJournal()` — tambah jurnal. `completeStage()` — maju ke fase berikutnya + update progress + toast. `shareJourney()` — toast berbagi. `renderAddPlantList(filter)` — render daftar tanaman untuk ditambahkan. `addPlantToGarden(plantId)` — membuat entri baru di `MY_GARDEN[]` dengan task awal + jurnal hari pertama + persist ke `localStorage`.

**CSS yang digunakan:**
- `css/style.css`: `.journey-line`, `.journey-dot` (done/active/todo), `.collapsible-content`, `.collapsed`.
- `css/animations.css`, `css/responsive.css` + Tailwind CDN.

---

### 7. `profile.html` — Profil Pengguna

**Fungsi:**
Halaman profil gamifikasi untuk pengguna simulasi "Izra". Menampilkan statistik, XP, level, pencapaian, kebun ringkasan, komunitas diikuti, dan aktivitas terbaru.

**Struktur HTML:**
- **Navbar**: Sama.
- **Header Profil** (`.fv-card.blue`): Avatar besar "IZ", nama "Izra", badge (Gardener Lv 8, 340 XP, Urban Gardener), bio, progress bar ke Lv 9 (340/500 XP), tombol "Bagikan Profil" + "Edit".
- **Stats Overview**: 4 stat cards — Tanaman (6), Komunitas (4), Panduan (18), 340 Green Points (+20 hari ini).
- **XP & Level Detail** (2 accordion):
  - "Cara Dapat XP": 6 aksi dengan poin (tambah tanaman +10, selesaikan guide +20, update journal +10, bantu komunitas +15, selesaikan journey +50, selesaikan challenge +40).
  - "Level Progression": 10 level (Seed Starter 0 XP → Flora Master 500 XP), level aktif (Lv 8 "Plant Keeper") ditandai biru.
- **Garden Summary** (`#profileGarden`): Ringkasan visual semua tanaman di kebun + completed journeys (2).
- **Joined Communities** (`#profileComms`): Grid 4 komunitas yang diikuti + tombol ke halaman komunitas.
- **Tab Panel** (3 tab):
  - **Tanaman Tersimpan** (`#tabSavedPlants`): Tanaman yang di-bookmark dari ensiklopedia.
  - **Panduan Tersimpan** (`#tabSavedGuides`): 4 panduan yang disimpan.
  - **Aktivitas** (`#tabActivity`): Timeline 6 aktivitas terbaru (task, postingan, panduan, komunitas, kebun, checkout) dengan warna dan timestamp.
- **Sidebar Kanan** (sticky):
  - **Achievements** (`#achieveList`): 8 lencana pencapaian (4 terbuka: First Sprout, Water Wizard, Garden Explorer, Community Helper; 4 terkunci).
  - **Statistik**: Tanaman aktif (6), Task selesai (42), Jurnal (18 entri), Postingan (7), Pesanan (3 simulasi).
  - **Tantangan Mingguan**: Challenge "Selesaikan 5 task" dengan progress bar 3/5 + tombol "Lihat Task".
- **Edit Profil Modal** (`#editProfileModal`): Form edit nama, bio, lokasi + tombol Simpan/Batal.
- **Footer**: Copyright.
- **Cart Drawer**.

**JavaScript yang digunakan:**
- File JS: jQuery, `plants.js`, `utils.js`, `plant-images.js`, `communities.js`, `guides.js`, `garden.js`, `products.js`, `gambar-produk.js`, `users.js`, `journey.js`, `plant-lab.js`, `plant-match.js`, `app.js`.
- **Script inline (blok 1)**: `openEditProfile()`, `closeEditProfile()`, `saveEditProfile()` — menghandle modal edit profil. Event handler backdrop modal.
- **Script inline (blok 2)**: `toggleLevel()`, `toggleXP()` — accordion toggle dengan animasi max-height + rotasi panah. `$(function(){})` — rendering: garden summary dari `MY_GARDEN[]`, komunitas diikuti dari `CURRENT_USER.joined`, saved plants dari `CURRENT_USER.savedPlants`, saved guides (dummy 4), activity timeline (dummy 6 aktivitas), achievements (8 lencana, 4 terbuka). Event handler tab switching (savedPlants/savedGuides/activity).

**CSS yang digunakan:**
- `css/style.css`: `.profile-stat-grid`, `.profile-page > section` spacing, `.accordion` styling, `.sidebar-scroll`.
- `css/animations.css`, `css/responsive.css` + Tailwind CDN.

---

### Ringkasan Penggunaan CSS per Halaman

| Halaman | style.css | home.css | animations.css | responsive.css | Tailwind CDN |
|---|---|---|---|---|---|
| index.html | ✅ | ✅ | ✅ | ✅ | ✅ |
| plants.html | ✅ | ❌ | ✅ | ✅ | ✅ |
| learn.html | ✅ | ❌ | ✅ | ✅ | ✅ |
| community.html | ✅ | ❌ | ✅ | ✅ | ✅ |
| shop.html | ✅ | ❌ | ✅ | ✅ | ✅ |
| garden.html | ✅ | ❌ | ✅ | ✅ | ✅ |
| profile.html | ✅ | ❌ | ✅ | ✅ | ✅ |

### Ringkasan Penggunaan JS per Halaman

| Halaman | Semua data JS | app.js | plant-lab.js | Script inline halaman |
|---|---|---|---|---|
| index.html | ✅ | ✅ | ✅ | HOME_WORLDS, World Gateway |
| plants.html | ✅ | ✅ | ✅ | renderPlants, openPlant, Plant Lab init |
| learn.html | ✅ | ✅ | ❌ | renderGuides, openGuide |
| community.html | ✅ | ✅ | ✅ | renderFeed, renderCommsSidebar, comments |
| shop.html | ✅ (sebagian) | ✅ | ❌ | renderProducts, openProduct, cart override |
| garden.html | ✅ | ✅ | ✅ | renderDetail, renderMyPlants, tasks, journal |
| profile.html | ✅ | ✅ | ✅ | renderProfile, tabs, accordion |

---

*FloraVerse — Tanam lebih yakin. Tumbuh lebih terarah.*
