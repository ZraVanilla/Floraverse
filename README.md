# 🌱 FloraVerse

> **Satu Dunia, Berjuta Cara untuk Tumbuh.**

FloraVerse adalah ekosistem berkebun digital berbasis web yang menggabungkan **ensiklopedia tanaman, pembelajaran, komunitas, marketplace, dan kebun digital pribadi** dalam satu pengalaman yang saling terhubung.

FloraVerse dirancang untuk membantu pengguna, khususnya pemula dan urban gardener, melalui perjalanan:

**Temukan → Pelajari → Coba → Rawat → Lengkapi → Bagikan**

Dibangun sebagai proyek **front-end statis** menggunakan HTML5, Tailwind CSS, Vanilla JavaScript, dan jQuery tanpa framework, backend, maupun database.

> **Project oleh:** Izra, Fairuz, Tafayad  
> **© 2026 FloraVerse**

---

## 🌿 Tentang FloraVerse

Berkebun bukan hanya tentang memilih tanaman.

Pengguna juga perlu mengetahui cara menanam, merawat, memahami kondisi tanaman, mendapatkan perlengkapan, mencatat perkembangan, dan berbagi pengalaman dengan pekebun lainnya.

FloraVerse menyatukan seluruh proses tersebut ke dalam satu ekosistem digital.

```text
                    🌱 TEMUKAN
                        │
                        ▼
                    📚 PELAJARI
                        │
                        ▼
                     🧪 COBA
                        │
                        ▼
                    🌳 RAWAT
                        │
                        ▼
                   🛒 LENGKAPI
                        │
                        ▼
                   💬 BAGIKAN
                        │
                        ▼
                  👤 BERKEMBANG
```

---

# ✨ Fitur Utama

## 🌱 Plant Encyclopedia

Ensiklopedia tanaman yang membantu pengguna menemukan dan memahami berbagai tanaman.

Fitur:

- Pencarian tanaman secara real-time
- Filter berdasarkan kategori
- Filter tingkat kesulitan
- Filter kebutuhan cahaya
- Sorting tanaman
- Detail lengkap tanaman
- Informasi air, cahaya, suhu, pH, dan media tanam
- Informasi hama dan penyakit
- Produk terkait
- Panduan terkait
- Komunitas terkait
- Tambahkan tanaman ke Kebunku

Saat ini tersedia **41 tanaman** dalam data simulasi.

---

## 🧪 Plant Lab

Simulasi edukasi interaktif untuk memahami pengaruh kondisi lingkungan terhadap tanaman.

Pengguna dapat mengatur:

- 💧 Air
- ☀️ Cahaya
- 🧪 Pupuk
- 🌿 Media tanam

Perubahan parameter menghasilkan feedback kesehatan tanaman secara real-time.

> Plant Lab merupakan simulasi edukasi dan bukan alat diagnosis tanaman secara ilmiah.

---

## 🧭 Plant Match

Quiz interaktif untuk membantu pengguna menemukan tanaman yang sesuai dengan kondisi dan preferensi mereka.

Quiz terdiri dari **7 pertanyaan** mengenai:

- Kondisi cahaya
- Lokasi
- Frekuensi perawatan
- Frekuensi penyiraman
- Luas ruang
- Pengalaman berkebun
- Tujuan berkebun

Hasil quiz menghasilkan rekomendasi tanaman berdasarkan skor kesesuaian.

---

## 📚 Learning Hub

Ruang belajar yang berisi **18 panduan berkebun** untuk pengguna tingkat Pemula hingga Menengah.

Topik yang tersedia:

- Dasar berkebun
- Media tanam
- Penyiraman
- Cahaya
- Pemupukan
- Hama & penyakit
- Hidroponik
- Urban farming
- Composting

Setiap panduan memiliki:

- Ringkasan
- Langkah praktik
- Checklist
- Tanaman terkait
- Estimasi waktu baca
- Tingkat kesulitan

---

## 💬 Community

Ruang komunitas untuk berbagi pengalaman, bertanya, dan berdiskusi mengenai berkebun.

Fitur:

- Community feed
- Filter postingan
- Komunitas berdasarkan topik
- Like
- Save
- Share
- Inline comments
- Membuat postingan
- Rekomendasi komunitas
- Bergabung dengan komunitas

Tersedia **12 komunitas simulasi** dengan berbagai topik berkebun.

---

## 🛒 FloraShop

Marketplace simulasi untuk kebutuhan berkebun.

Tersedia **28 produk** dalam beberapa kategori:

- Benih
- Bibit
- Pot
- Media Tanam
- Pupuk
- Tools
- Hydroponics
- Plant Care
- Bundling

Fitur:

- Search produk
- Filter kategori
- Sorting harga dan rating
- Best Seller
- Beginner Pick
- Wishlist
- Detail produk
- Shopping cart
- Checkout
- Pilihan pengiriman
- Pilihan pembayaran
- Order ID

> Checkout merupakan simulasi front-end dan tidak melakukan transaksi nyata.

---

## 🌳 Kebunku — Plant Journey

Ruang pribadi untuk mengikuti perjalanan pertumbuhan tanaman.

Setiap tanaman memiliki enam fase:

```text
Seed
  ↓
Seedling
  ↓
Growing
  ↓
Flowering
  ↓
Fruiting
  ↓
Harvest
```

Pengguna dapat:

- Menambahkan tanaman
- Melihat progress tanaman
- Menyelesaikan task harian
- Mendapatkan XP simulasi
- Menulis jurnal
- Melihat tips tanaman
- Menggunakan Plant Lab
- Menemukan produk terkait
- Membagikan progress ke komunitas

Data kebun disimpan menggunakan `localStorage`.

---

## 👤 Profile & Gamification

Profil pengguna menggabungkan aktivitas pengguna dalam satu dashboard.

Menampilkan:

- Level
- XP
- Statistik kebun
- Komunitas
- Panduan
- Achievements
- Aktivitas
- Tanaman tersimpan
- Panduan tersimpan
- Weekly challenge

Sistem XP saat ini masih merupakan **simulasi front-end**.

---

# 🗺️ Ekosistem FloraVerse

FloraVerse menggunakan konsep **Interactive World Gateway** sebagai pintu masuk ke seluruh ekosistem.

Lima ruang utama FloraVerse:

| # | Ruang | Fungsi | Halaman |
|---|---|---|---|
| 01 | 🌱 Tanaman | Ensiklopedia & Plant Lab | `plants.html` |
| 02 | 📚 Belajar | Panduan berkebun | `learn.html` |
| 03 | 💬 Komunitas | Diskusi & sharing | `community.html` |
| 04 | 🛒 FloraShop | Perlengkapan berkebun | `shop.html` |
| 05 | 🌳 Kebunku | Plant Journey | `garden.html` |

Halaman pendukung:

| Halaman | Fungsi |
|---|---|
| `index.html` | Interactive World Gateway |
| `profile.html` | Profil & gamifikasi |

---

# 🖥️ Pages

## `index.html` — Interactive World Gateway

Beranda FloraVerse yang menjadi pintu masuk menuju seluruh ruang utama.

Fitur:

- Dynamic World Stage
- World Picker
- Dynamic video background
- World-specific content
- Plant Match CTA
- Ecosystem Journey
- Page transition animation

Pengguna dapat mengeksplorasi lima ruang utama dari satu halaman sebelum melanjutkan ke halaman terkait.

---

## `plants.html` — Plant Encyclopedia

Katalog tanaman yang dapat dicari, difilter, diurutkan, dan dibuka dalam detail.

Fitur:

- Search
- Category filter
- Difficulty filter
- Sunlight filter
- Sorting
- Plant detail modal
- Plant Match
- Plant Lab
- Ecosystem cross-link

---

## `learn.html` — Learning Hub

Ruang pembelajaran dengan 18 panduan berkebun.

Fitur:

- Search
- Category filter
- Level filter
- Guide modal
- Checklist
- Interactive learning cards
- Beginner roadmap
- Plant Journey integration

---

## `community.html` — Community

Ruang komunitas dengan sistem feed dan diskusi.

Fitur:

- Community feed
- Post filtering
- Inline comments
- Create post
- Community discovery
- Join community
- Like
- Save
- Share

---

## `shop.html` — FloraShop

Marketplace simulasi untuk kebutuhan berkebun.

Fitur:

- Product catalog
- Search
- Category filter
- Sorting
- Product detail
- Wishlist
- Shopping cart
- Checkout simulation

---

## `garden.html` — Kebunku

Ruang Plant Journey untuk mengelola tanaman pribadi.

Fitur:

- My Plants
- Plant progress
- Growth stages
- Daily tasks
- Plant journal
- Plant Lab
- Smart Basket
- Plant tips
- Community sharing

---

## `profile.html` — Profile

Dashboard pengguna yang menampilkan perkembangan dan aktivitas dalam FloraVerse.

Fitur:

- Profile overview
- XP & level
- Garden summary
- Joined communities
- Saved content
- Activity timeline
- Achievements
- Weekly challenge

---

# 🛠️ Tech Stack

| Komponen | Teknologi |
|---|---|
| Markup | HTML5 |
| Styling | Tailwind CSS v3 + Custom CSS |
| JavaScript | Vanilla JavaScript |
| DOM Utility | jQuery 3.7.1 |
| Font | Google Fonts |
| Storage | `localStorage` |
| Cross-tab Sync | `BroadcastChannel` |
| Media | MP4, PNG, JPG, SVG |
| Build Tool | Tidak ada |
| Framework | Tidak ada |
| Backend | Tidak ada |
| Database | Tidak ada |

FloraVerse menggunakan arsitektur static website sehingga dapat dijalankan tanpa server backend maupun proses build.

---

# 📁 Project Structure

```text
FloraVerse/
│
├── index.html
├── plants.html
├── learn.html
├── community.html
├── shop.html
├── garden.html
├── profile.html
│
├── css/
│   ├── style.css
│   ├── home.css
│   ├── animations.css
│   └── responsive.css
│
├── js/
│   ├── app.js
│   ├── plants.js
│   ├── products.js
│   ├── communities.js
│   ├── guides.js
│   ├── garden.js
│   ├── journey.js
│   ├── plant-lab.js
│   ├── plant-match.js
│   ├── plant-images.js
│   ├── gambar-produk.js
│   └── utils.js
│
├── asset/
│   ├── main.png
│   │
│   ├── banner/
│   │   ├── community.mp4
│   │   ├── garden.mp4
│   │   ├── learn.mp4
│   │   ├── plant.mp4
│   │   └── shop.mp4
│   │
│   └── img/
│       ├── plants/
│       ├── produk/
│       ├── postingan/
│       ├── panduan/
│       └── icons/
│
└── docs/
    └── sources/
        └── ...
```

---

# 📦 JavaScript Architecture

Data dan logic FloraVerse dipisahkan ke dalam beberapa file agar struktur aplikasi tetap modular.

## Data

```text
plants.js
    └── PLANTS[]

products.js
    └── PRODUCTS[]

guides.js
    └── GUIDES[]

communities.js
    ├── COMMUNITIES[]
    ├── POSTS[]
    └── DUMMY_COMMENTS[]

garden.js
    ├── MY_GARDEN[]
    └── GARDEN_PULSE[]
```

## Feature Logic

```text
plant-lab.js
    └── Plant Lab simulation

plant-match.js
    └── Plant Match personality mapping

journey.js
    └── Plant Journey storytelling
```

## Shared Logic

```text
app.js
```

`app.js` menangani berbagai fungsi yang digunakan lintas halaman, termasuk:

- Image rendering
- Cart system
- Checkout
- Toast notification
- Page transition
- Mobile navigation
- Scroll reveal
- Active navigation
- Micro-interactions
- Plant Match
- Custom dropdown
- Cross-tab cart synchronization

---

# 🎨 Design System

FloraVerse menggunakan visual system yang colorful, playful, dan approachable untuk menciptakan suasana berkebun yang ringan.

## Color Palette

| Warna | Hex | Penggunaan |
|---|---|---|
| Blue | `#6FA8FF` | Primary / information |
| Pink | `#FF718D` | Community / interaction |
| Yellow | `#FFD45C` | XP / highlight |
| Orange | `#FF9B70` | Shop / notification |
| Green | `#8BCB8A` | Plant / success |
| Charcoal | `#252525` | Text / dark UI |

## Typography

- **Outfit** — primary interface typography
- **Nunito** — supporting typography

---

# 🎞️ Motion & Interaction

Motion digunakan sebagai bagian dari pengalaman pengguna, bukan hanya sebagai dekorasi.

Sistem animasi mencakup:

- Page transitions
- World transitions
- Hover interactions
- Button feedback
- Scroll reveal
- Like animation
- Save animation
- Icon animation
- Toast animation
- Expandable content
- Mobile navigation transition
- Plant Lab feedback
- Plant Journey interactions

Tujuannya adalah memberikan **feedback visual yang jelas terhadap setiap interaksi pengguna**.

---

# 💾 Data Persistence

FloraVerse tidak menggunakan database.

State tertentu disimpan langsung pada browser menggunakan `localStorage`.

Data yang dapat dipersist antara lain:

- Shopping cart
- Garden state
- Simulated orders
- Beberapa state pengguna

Untuk sinkronisasi shopping cart antar tab digunakan:

```text
localStorage
      +
BroadcastChannel
```

Contoh alur:

```text
Tab A
  │
  ├── Add Product
  │
  ▼
localStorage
  │
  ▼
BroadcastChannel
  │
  ▼
Tab B
  │
  └── Cart diperbarui
```

---

# 🖼️ Assets & Sources

Asset eksternal yang digunakan oleh FloraVerse telah diunduh dan disimpan secara lokal agar website tidak bergantung pada URL eksternal ketika dijalankan.

Struktur asset:

```text
asset/
├── main.png
│
├── banner/
│   ├── community.mp4
│   ├── garden.mp4
│   ├── learn.mp4
│   ├── plant.mp4
│   └── shop.mp4
│
└── img/
    ├── plants/
    ├── produk/
    ├── postingan/
    ├── panduan/
    └── icons/
```

Sumber gambar, ikon, dan media dicatat dalam:

```text
docs/sources/
```

Dokumentasi sumber digunakan untuk menjaga keterlacakan asset yang digunakan dalam project.

---

# 🚀 Menjalankan FloraVerse

FloraVerse tidak membutuhkan proses build.

## 1. Clone Repository

```bash
git clone https://github.com/ZraVanilla/Floraverse.git
cd Floraverse
```

## 2. Jalankan Local Server

Contoh menggunakan Python:

```bash
python -m http.server 8765
```

Kemudian buka:

```text
http://localhost:8765
```

> Menjalankan menggunakan local server direkomendasikan agar asset, video, dan JavaScript dapat bekerja secara konsisten.

---

# 🌐 Browser Support

FloraVerse dirancang untuk browser modern yang mendukung:

- ES6 JavaScript
- CSS Grid
- CSS Flexbox
- CSS Custom Properties
- Intersection Observer
- localStorage
- BroadcastChannel
- HTML5 Video

Browser modern seperti **Google Chrome, Microsoft Edge, Mozilla Firefox, dan Safari** didukung.

---

# 📊 Project Data

FloraVerse menggunakan data simulasi untuk membangun pengalaman ekosistem yang lengkap.

| Data | Jumlah |
|---|---:|
| 🌱 Tanaman | 41 |
| 📚 Panduan | 18 |
| 💬 Komunitas | 12 |
| 🛒 Produk | 28 |
| 🌳 Tanaman Kebunku | 6 |
| 🏆 Achievement | 8 |
| 🧭 Plant Journey | 6 fase |

---

# 🔄 Alur Ekosistem

FloraVerse dirancang agar setiap fitur dapat mengarahkan pengguna ke fitur lainnya.

```text
                    ┌───────────────┐
                    │   FloraVerse  │
                    │     Home      │
                    └───────┬───────┘
                            │
          ┌─────────────────┼─────────────────┐
          │                 │                 │
          ▼                 ▼                 ▼
      🌱 Tanaman         📚 Belajar       💬 Komunitas
          │                 │                 │
          ▼                 ▼                 │
      🧪 Plant Lab      Panduan              │
          │                 │                 │
          └────────────┬────┘                 │
                       ▼                      │
                  🌳 Kebunku ◄───────────────┘
                       │
                       ▼
                  🛒 FloraShop
                       │
                       ▼
                  👤 Profile
```

Contoh perjalanan pengguna:

```text
Beranda
   ↓
Temukan tanaman
   ↓
Plant Match
   ↓
Pelajari cara merawat
   ↓
Coba Plant Lab
   ↓
Tambahkan ke Kebunku
   ↓
Kerjakan Plant Journey
   ↓
Lengkapi kebutuhan di FloraShop
   ↓
Bagikan progress ke Community
   ↓
Lihat perkembangan di Profile
```

---

# 👤 Pengguna Simulasi

FloraVerse menggunakan tiga pengguna fiksi sebagai persona dalam data simulasi.

| Pengguna | Level | XP | Spesialisasi |
|---|---:|---:|---|
| **Izra** | 8 | 340 | Urban Gardener |
| **Fairuz** | 6 | 280 | Hydro Enthusiast |
| **Tafayad** | 7 | 310 | Compost Hero |

Data tersebut digunakan pada postingan komunitas, komentar, ulasan produk, dan berbagai aktivitas simulasi.

---

# ⚠️ Project Scope

FloraVerse merupakan **prototype front-end interaktif**.

Beberapa fitur masih bersifat simulasi:

- Tidak ada backend
- Tidak ada database
- Tidak ada autentikasi nyata
- Checkout tidak melakukan pembayaran
- Data komunitas tidak tersimpan ke server
- XP belum terintegrasi sebagai sistem dinamis penuh
- Interaksi komunitas masih bersifat lokal
- Order hanya merupakan simulasi

Tujuan utama project adalah membangun **pengalaman ekosistem berkebun digital yang interaktif dan terintegrasi**.

---

# 📚 Dokumentasi

Dokumentasi tambahan tersedia di:

```text
docs/
```

Termasuk dokumentasi sumber asset yang digunakan pada website:

```text
docs/sources/
```

---

# 👥 Team

**FloraVerse — 2026**

- Izra
- Fairuz
- Tafayad

---

<div align="center">

### 🌱 FloraVerse

**Tanam lebih yakin. Tumbuh lebih terarah.**

*Satu Dunia, Berjuta Cara untuk Tumbuh.*

© 2026 FloraVerse

</div>
