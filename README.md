# FloraVerse

**Satu Dunia, Berjuta Cara untuk Tumbuh.**

FloraVerse adalah ekosistem digital berkebun berbasis web yang menyatukan pencarian tanaman, panduan belajar, komunitas, kebutuhan berkebun, dan pemantauan kebun pribadi dalam satu pengalaman yang ramah pemula.

Proyek ini berupa static website interaktif. Seluruh fitur berjalan di browser menggunakan HTML, CSS, JavaScript, jQuery, dan data lokal tanpa backend.

## Daftar Isi

- [Tentang FloraVerse](#tentang-floraverse)
- [Fitur Utama](#fitur-utama)
- [Struktur Halaman](#struktur-halaman)
- [Cara Menjalankan](#cara-menjalankan)
- [Teknologi](#teknologi)
- [Arsitektur Proyek](#arsitektur-proyek)
- [Penyimpanan Data](#penyimpanan-data)
- [Responsive dan Accessibility](#responsive-dan-accessibility)
- [Asset dan Lisensi](#asset-dan-lisensi)
- [Catatan Pengembangan](#catatan-pengembangan)

## Tentang FloraVerse

Informasi dan aktivitas berkebun biasanya tersebar di banyak tempat. Pengguna mencari informasi tanaman di satu situs, belajar dari platform lain, membeli perlengkapan di marketplace, lalu mencatat perkembangan tanaman secara manual.

FloraVerse menyatukan alur tersebut:

```text
Temukan tanaman
      ↓
Pelajari cara merawat
      ↓
Siapkan kebutuhan berkebun
      ↓
Pantau perjalanan tanaman
      ↓
Berbagi dengan komunitas
```

Target utama FloraVerse adalah pemula, urban gardener, dan penghobi tanaman yang membutuhkan pengalaman berkebun yang jelas, terarah, dan menyenangkan.

## Fitur Utama

### Plant Match

Rekomendasi tanaman berdasarkan kondisi pengguna:

- Intensitas cahaya
- Lokasi penanaman
- Waktu yang tersedia untuk merawat
- Tujuan berkebun

### Ensiklopedia Tanaman

Katalog tanaman dengan pencarian dan filter berdasarkan kategori, tingkat kesulitan, serta kebutuhan cahaya. Setiap detail tanaman memuat informasi media tanam, kebutuhan air, suhu, pH, perawatan, hama, dan tips.

### Plant Lab

Media belajar interaktif untuk mencoba kombinasi air, cahaya, pupuk, dan media tanam tanpa memengaruhi tanaman pengguna.

### Kebunku dan Plant Journey

Dashboard kebun pribadi yang menyediakan:

- Garden Pulse
- Status kesehatan tanaman
- Fase pertumbuhan
- Task perawatan
- Progress tanaman
- Jurnal perkembangan
- Plant storytelling

### Komunitas

Pengguna dapat menemukan komunitas berdasarkan tanaman, metode, atau hobi. Halaman ini mendukung feed, filter, posting, komentar, suka, simpan, tantangan, dan FloraMap.

### FloraShop

Katalog kebutuhan berkebun dengan pencarian, kategori, sorting, wishlist, keranjang, dan Smart Garden Basket.

### Smart Garden Basket

Rekomendasi starter kit berdasarkan tanaman pilihan. Seluruh item kit dapat ditambahkan sekaligus ke keranjang dengan quantity yang tetap tergabung.

### Checkout

Alur checkout mencakup:

- Data penerima
- Alamat lengkap Indonesia
- Kota atau kabupaten dan kode pos
- Pengiriman reguler, same day, atau ambil sendiri
- Transfer bank, QRIS, e-wallet, atau COD
- Ringkasan subtotal, ongkir, dan total

Checkout merupakan demonstrasi frontend dan tidak memproses pembayaran nyata.

## Struktur Halaman

| Halaman | File | Fokus |
| --- | --- | --- |
| Beranda | `index.html` | Pengenalan ekosistem dan akses fitur utama |
| Tanaman | `plants.html` | Ensiklopedia, Plant Match, dan Plant Lab |
| Belajar | `learn.html` | Panduan, artikel, dan roadmap belajar |
| Komunitas | `community.html` | Komunitas, feed, challenge, dan FloraMap |
| Belanja | `shop.html` | Produk, Smart Garden Basket, cart, dan checkout |
| Kebunku | `garden.html` | Garden Pulse, Plant Journey, task, dan jurnal |
| Profil | `profile.html` | Ringkasan pengguna, XP, achievement, dan pengaturan |

## Cara Menjalankan

Tidak ada dependency yang perlu diinstal.

### Opsi 1: Local Server

Metode ini direkomendasikan agar perpindahan halaman dan resource eksternal berjalan konsisten.

```bash
python3 -m http.server 8000
```

Buka:

```text
http://localhost:8000
```

Alternatif menggunakan Node.js:

```bash
npx serve .
```

### Opsi 2: Buka Langsung

Buka `index.html` melalui browser. FloraVerse memiliki fallback persistence untuk membantu sinkronisasi cart saat dijalankan melalui protokol `file://`.

Koneksi internet tetap dibutuhkan untuk memuat CDN, font, dan foto eksternal.

## Teknologi

- HTML5
- CSS3
- Tailwind CSS melalui CDN
- JavaScript
- jQuery 3.7.1 melalui CDN
- Local browser storage
- Unsplash image URLs

Tidak menggunakan React, Vue, Angular, atau backend server.

## Arsitektur Proyek

```text
Floraverse/
├── assets/
│   ├── icons/
│   └── photos/
├── css/
│   ├── animations.css
│   ├── responsive.css
│   └── style.css
├── js/
│   ├── app.js
│   ├── communities.js
│   ├── garden.js
│   ├── guides.js
│   ├── journey.js
│   ├── plant-lab.js
│   ├── plant-match.js
│   ├── plants.js
│   ├── products.js
│   └── users.js
├── community.html
├── garden.html
├── index.html
├── learn.html
├── plants.html
├── profile.html
├── shop.html
├── PRODUCT_SPEC.md
└── README.md
```

### Pembagian Tanggung Jawab

| Lokasi | Tanggung jawab |
| --- | --- |
| `css/style.css` | Design system, komponen, modal, drawer, dan desktop layout |
| `css/responsive.css` | Penyesuaian mobile, tablet, dan breakpoint |
| `css/animations.css` | Animasi interaksi dan visual |
| `js/app.js` | Navigasi, cart, checkout, toast, modal, dan interaksi bersama |
| `js/plants.js` | Dataset tanaman dan URL foto |
| `js/products.js` | Dataset produk dan URL foto |
| `js/communities.js` | Dataset komunitas dan postingan |
| `js/garden.js` | Data kebun dan Garden Pulse |
| `js/guides.js` | Dataset panduan belajar |

## Penyimpanan Data

FloraVerse tidak memiliki backend. State interaktif disimpan di browser.

### Cart

Cart menggunakan satu sumber data dengan key:

```text
fv_cart
```

Mekanisme sinkronisasi:

- `localStorage` untuk persistence setelah refresh
- State sesi tab untuk perpindahan halaman melalui `file://`
- `BroadcastChannel` untuk sinkronisasi antar-tab jika didukung browser

Data cart menyimpan ID produk, nama, harga, quantity, dan gambar. Produk yang sama akan menambah quantity, bukan membuat baris duplikat.

### Data Lain

Wishlist dan hasil pesanan terakhir juga disimpan secara lokal di browser. Data tanaman, produk, komunitas, panduan, dan kebun berasal dari file JavaScript modular.

## Responsive dan Accessibility

Tampilan telah disesuaikan untuk:

- Smartphone kecil mulai 320px
- Smartphone standar dan besar
- Tablet portrait dan landscape
- Laptop
- Desktop hingga layar lebar

Perhatian khusus diberikan pada:

- Navigasi mobile berbentuk drawer
- Touch target yang nyaman
- Grid yang menyesuaikan viewport
- Form checkout mobile-friendly
- Modal dan cart yang mengikuti viewport
- Focus state untuk keyboard
- Reduced motion melalui `prefers-reduced-motion`
- Kontras teks dan label gambar
- Pencegahan horizontal overflow

## Asset dan Lisensi

- Foto tanaman dan produk menggunakan URL Unsplash sesuai Unsplash License.
- Icon lokal tersedia di `assets/icons/`.
- Font Outfit dan Nunito dimuat melalui Google Fonts.
- Tailwind CSS dan jQuery dimuat melalui CDN.

Untuk deployment offline penuh, unduh seluruh dependency dan foto eksternal lalu ubah URL menjadi asset lokal.

## Catatan Pengembangan

- Jalankan proyek melalui local server ketika melakukan pengembangan.
- Pertahankan ID elemen yang dipakai JavaScript saat mengubah markup.
- Muat file data sebelum `js/app.js` dan script halaman yang menggunakannya.
- Gunakan `fvImg()` untuk merender foto agar fallback tetap konsisten.
- Jangan menyimpan secret atau token API di source code.
- Verifikasi perubahan pada mobile dan desktop sebelum deployment.

Spesifikasi produk dan arahan desain lengkap tersedia di [`PRODUCT_SPEC.md`](PRODUCT_SPEC.md).

## Status

FloraVerse merupakan prototype frontend interaktif. Data pengguna, produk, komunitas, pembayaran, dan pengiriman digunakan untuk demonstrasi pengalaman produk.
