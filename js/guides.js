/*
 * Guides - FloraVerse Ruang Belajar
 * Setiap panduan tertaut ke tanaman ensiklopedia lewat `plantId`, sehingga angka
 * (pH, suhu, hari panen, hama) selalu konsisten dengan data di js/plants.js.
 * Struktur langkah: langkah:[{t:"judul langkah", d:"penjelasan"}], checklist:[...]
 */
const GUIDES = [
  {id:"g01", judul:"Dasar Berkebun untuk Pemula", kategori:"Dasar berkebun", waktu:"8 menit", level:"Pemula", color:"#6FA8FF", emoji:"🌱", desc:"Mulai dari nol: alat, media, dan mindset berkebun.", plantId:"kangkung",
   konten:"Berkebun berhasil itu 80% persiapan: pilih tanaman yang sesuai kondisi rumah, siapkan media yang porous, dan konsisten menyiram. Mulailah dari tanaman yang sulit mati seperti kangkung (Sangat Mudah, panen 25–30 hari) atau kemangi (panen 30 hari), lalu naik level ke cabai dan tomat saat sudah percaya diri.",
   langkah:[
     {t:"Petakan sinar rumahmu", d:"Hitung berapa jam matahari langsung yang diterima spot yang tersedia. Full Sun butuh 6–8 jam (cabai, kangkung, matahari), Partial Sun cukup 3–6 jam (selada, mint, bayam)."},
     {t:"Pilih tanaman pertama yang memaafkan", d:"Kangkung darat dan kemangi hampir tidak punya hama di ensiklopedia dan tumbuh dalam sebulan - sempurna untuk membangun kepercayaan diri."},
     {t:"Siapkan wadah & media", d:"Pot 20cm berlubang drainase + campuran tanah gembur dan kompos. Lubang pot wajib ada; akar yang terendam air adalah awal busuk akar."},
     {t:"Tanam dan beri label tanggal", d:"Tulis tanggal tanam di label atau pot. Ini kunci untuk memantau umur tanaman, jadwal pupuk, dan perkiraan panen."},
     {t:"Bangun rutinitas 1 menit per hari", d:"Cek media dengan jari, amati daun, siram bila perlu. Konsisten sedikit lebih baik daripada banjir sekali seminggu."}
   ],
   checklist:["Pot berlubang drainase", "Media tanah gembur + kompos", "Benih kangkung / kemangi / bayam", "Label tanggal tanam", "Jadwal cek pagi hari"], populer:true},

  {id:"g02", judul:"Mengenal Media Tanam: Tanah, Sekam, Cocopeat", kategori:"Media tanam", waktu:"6 menit", level:"Pemula", color:"#FFD45C", emoji:"🌿", desc:"Perbandingan media tanam dan kapan menggunakannya.", plantId:"tomat",
   konten:"Media tanam menentukan akar bernapas atau busuk. Tanah gembur menyimpan air dan nutrisi, sekam bakar menciptakan porositas, cocopeat menahan kelembapan tanpa menggenang. Kombinasi keduanya adalah resep yang dipakai langsung oleh ensiklopedia: tomat memakai tanah + kompos + cocopeat, stroberi memakai tanah + sekam + cocopeat, sedangkan sukulen dan kaktus butuh media paling poros.",
   langkah:[
     {t:"Kenali tiga bahan dasar", d:"Tanah gembur memberi struktur dan nutrisi, sekam bakar melonggarkan media, cocopeat menjaga kelembapan merata."},
     {t:"Racik resep dasar 1:1:1", d:"Campur tanah, kompos, dan cocopeat/sekam dengan porsi sama. Uji dengan menggenggam: harus gembur, tidak lengket, tidak berdebu."},
     {t:"Sesuaikan dengan jenis tanaman", d:"Wortel butuh media dalam dan gembur agar umbinya lurus; anggrek tidak memakai tanah sama sekali (moss + pakis); kaktus memakai pasir + pumice."},
     {t:"Isi pot dengan benar", d:"Beri lapisan pecahan atau pumice 2–3cm di dasar, isi media hingga 2cm dari bibir pot. Jangan dipadatkan keras - akar butuh udara."},
     {t:"Segarkan media secara berkala", d:"Ganti 30–50% media tiap 6–12 bulan karena nutrisi habis dan struktur media runtuh."}
   ],
   checklist:["Tanah gembur sebagai dasar", "Sekam bakar / cocopeat untuk porositas", "Kompos matang (hitam, tidak berbau)", "Lapisan drainase di dasar pot", "Catat tanggal ganti media"], populer:true},

  {id:"g03", judul:"Cara Menyiram yang Benar (Jangan Overwater!)", kategori:"Penyiraman", waktu:"5 menit", level:"Pemula", color:"#8BCB8A", emoji:"💧", desc:"Kenali tanda overwater vs underwater dari daun.", plantId:"cabai-rawit",
   konten:"Penyiraman berlebih adalah penyebab kematian nomor satu tanaman pot. Kebutuhan tiap tanaman berbeda jauh: kangkung dan bayam haus (2x sehari saat kemarau), cabai dan tomat cukup 1x sehari, sedangkan kaktus dan sukulen hanya butuh disiram 7–10 hari sekali. Kunci uji sebelum menyiram ada di ujung jari Anda.",
   langkah:[
     {t:"Uji media dengan jari", d:"Tancapkan jari 2–3cm ke media. Masih lembab = tunda menyiram. Satu kebiasaan ini mencegah 90% kasus overwatering."},
     {t:"Siram ke media, bukan daun", d:"Daun yang basah semalaman mengundang jamur - late blight pada tomat dan embun tepung pada mentimun keduanya dipicu kelembapan daun tinggi."},
     {t:"Siram di pagi hari", d:"Air sempat meresap dan daun kering sebelum malam. Suhu pagi juga mengurangi penguapan yang sia-sia."},
     {t:"Baca sinyal daun", d:"Layu + media basah = overwater. Layu + media kering = kehausan. Daun kuning lembek yang gugur = akar tercekik air."},
     {t:"Sesuaikan dengan musim", d:"Naikkan frekuensi saat kemarau (bayam sampai 2x sehari), turunkan saat hujan - pot di luar tetap menerima air hujan."}
   ],
   checklist:["Cek jari sebelum menyiram", "Siram pagi, arahkan ke media", "Lubang pot tidak tersumbat", "Kaktus & sukulen: 7–10 hari sekali", "Amati daun sebagai indikator"], populer:true},

  {id:"g04", judul:"Panduan Pupuk: Kompos, NPK, dan AB Mix", kategori:"Pemupukan", waktu:"7 menit", level:"Menengah", color:"#FF9B70", emoji:"🧪", desc:"Kapan pakai organik vs sintetis, dosis aman.", plantId:"jeruk",
   konten:"Pupuk menggantikan nutrisi yang tercuci dari media pot. Kompos menjadi dasar yang aman, NPK seimbang memacu masa pertumbuhan daun, dan pupuk tinggi K dipakai saat tanaman masuk fase berbunga-berbuah - persis seperti jeruk kalamansi di ensiklopedia yang dianjurkan pupuk NPK buah. AB Mix adalah formulasi khusus hidroponik.",
   langkah:[
     {t:"Dasari dengan kompos", d:"Campur 20–30% kompos matang ke media saat tanam. Nutrisi lepas lambat dan struktur media ikut membaik."},
     {t:"NPK seimbang saat vegetatif", d:"1–2 minggu sekali dengan dosis setengah label. Batang dan daun tumbuh lebat untuk menopang buah nanti."},
     {t:"Alih ke pupuk buah saat berbunga", d:"Naikkan kandungan K, turunkan N. Energi tanaman diarahkan ke bunga dan buah, bukan daun baru."},
     {t:"Waspadai overdosis", d:"Ujung daun gosong atau keriting adalah tanda kelebihan pupuk. Siram habis media untuk melarutkan kelebihan garam."},
     {t:"Jaga ritme realistis", d:"Tanaman pot dewasa cukup 2 minggu sekali. Hentikan sementara saat tanaman stres - baru dipindah, terik ekstrem, atau sakit."}
   ],
   checklist:["Kompos sebagai pupuk dasar", "NPK seimbang masa vegetatif", "Pupuk tinggi K saat berbuah", "Mulai dari setengah dosis label", "Catat tanggal pupuk terakhir"], populer:false},

  {id:"g05", judul:"Hama & Penyakit: Kenali dan Atasi", kategori:"Hama & penyakit", waktu:"9 menit", level:"Menengah", color:"#FF718D", emoji:"🐛", desc:"Kutu daun, thrips, embun tepung - solusi organik.", plantId:"cabai-merah",
   konten:"Kenali musuhnya sebelum menyemprot. Ensiklopedia FloraVerse mencatat hama paling umum: kutu daun dan ulat pada cabai rawit, thrips dan tungau pada cabai merah keriting, late blight dan kutu kebul pada tomat, embun tepung pada mentimun, siput pada selada, sampai lalat buah pada mangga. Semuanya punya jalur pengendalian organik yang terbukti.",
   langkah:[
     {t:"Inspeksi mingguan", d:"Cek bagian bawah daun (koloni kutu daun), pucuk muda (thrips), dan bercak pada daun tua. Deteksi dini = perlakuan ringan."},
     {t:"Mulai dari cara fisik", d:"Petik ulat dengan tangan, sembur jet air untuk menjatuhkan kutu daun, pasang perangkap kuning untuk whitefly dan perangkap biru untuk thrips."},
     {t:"Neem oil sebagai lini kedua", d:"5ml per liter air, semprot sore hari agar tidak menyengat daun di bawah matahari, ulangi 5–7 hari. Aman untuk sayuran yang akan dipanen."},
     {t:"Isolasi tanaman sakit", d:"Late blight tomat menyebar cepat lewat percikan air. Pindahkan pot terinfeksi menjauh dan buang bagian yang parah."},
     {t:"Cegah lewat kebiasaan", d:"Jangan siram daun di sore hari, beri jarak antar pot agar sirkulasi lancar, dan buang daun tua dari permukaan media."}
   ],
   checklist:["Inspeksi bawah daun tiap minggu", "Neem oil siap pakai (5ml/L)", "Perangkap kuning & biru", "Pot 'karantina' untuk tanaman sakit", "Catat hama + tanggal kemunculan"], populer:true},

  {id:"g06", judul:"Hidroponik Wick System untuk Balkon", kategori:"Hidroponik", waktu:"10 menit", level:"Pemula", color:"#6FA8FF", emoji:"💧", desc:"Hidroponik tanpa pompa, modal <100rb.", plantId:"selada",
   konten:"Wick system adalah hidroponik paling sederhana: sumbu flanel menarik nutrisi dari reservoir ke media secara kapiler - tanpa listrik, tanpa pompa, tanpa listrik. Paling cocok untuk selada dan sawi; selada romaine di ensiklopedia tercatat panen 30–45 hari dengan pH ideal 6.0–7.0.",
   langkah:[
     {t:"Siapkan dua wadah bertingkat", d:"Pot kecil berlubang di atas, reservoir gelap di bawah (botol 5L dicat hitam agar lumut tidak tumbuh di nutrisi)."},
     {t:"Pasang sumbu flanel", d:"2–3 tali flanel sepanjang 20cm; ujung bawah menjulur 5cm ke dalam reservoir, ujung atas terbenam di media tanam."},
     {t:"Isi media campuran", d:"Cocopeat + hidroton 50:50 - cukup porous untuk menarik nutrisi, tapi tidak menggenang akar."},
     {t:"Racik nutrisi AB Mix", d:"Kekuatan 800–1000 ppm, pH dijaga sekitar 6.0 (tengah rentang selada 6.0–7.0). Cek dengan TDS meter dan kertas pH tiap minggu."},
     {t:"Pindah semai hari ke-7", d:"Semai dulu di rockwool, pindahkan ke netpot saat muncul 2–4 daun sejati - alur yang sama dengan panduan selada di ensiklopedia."},
     {t:"Panen 30–45 hari", d:"Petik daun luar lebih dulu agar tanaman terus memproduksi, atau panen penuh sekaligus untuk salad."}
   ],
   checklist:["Reservoir gelap 3–5 liter", "Sumbu flanel 2–3 tali", "AB Mix + TDS/pH meter", "Rockwool untuk semai", "Netpot yang pas ukurannya"], populer:true},

  {id:"g07", judul:"Urban Farming di Lahan 2x1 Meter", kategori:"Urban farming", waktu:"8 menit", level:"Pemula", color:"#FFD45C", emoji:"🏙️", desc:"Vertikal garden, rak susun, pot gantung.", plantId:"bayam",
   konten:"Lahan 2x1 meter cukup untuk pasokan sayur mingguan jika tanamannya dipilih cerdas. Kuncinya tiga: prioritaskan tanaman panen cepat (kangkung 25–30 hari, bayam 25–35 hari), manfaatkan dimensi vertikal, dan tanam bergiliran supaya panen tidak menumpuk di minggu yang sama.",
   langkah:[
     {t:"Bagi tiga lapis", d:"Lantai: kangkung dan bayam yang panen kilat. Tengah: pot cabai dan tomat. Atas: rak atau gantungan untuk herbal (basil, kemangi, mint)."},
     {t:"Gantung stroberi", d:"Stroberi Albion justru paling sehat di pot gantung - buah menggantung bersih, bebas serangan siput, dan memanfaatkan ruang yang terbuang."},
     {t:"Tanam bergiliran tiap 2 minggu", d:"Trik yang sama dengan bunga matahari di ensiklopedia: tabur batch baru tiap 2 minggu sehingga selalu ada yang siap panen."},
     {t:"Sediakan tandon air", d:"Irigasi tetes sederhana dari botol bekas menjaga tanaman tetap hidup saat Anda pergi 2–3 hari."},
     {t:"Rotasi kelompok tanaman", d:"Jangan menanam keluarga tanaman yang sama terus-menerus di media yang sama untuk memutus siklus hama."}
   ],
   checklist:["Rak 2–3 tingkat / gantungan", "Minimal 4 pot ukuran 20–30cm", "Benih panen cepat: kangkung, bayam, selada", "1 herbal aromatik sebagai anti-hama alami", "Tandon air / tetes sederhana"], populer:false},

  {id:"g08", judul:"Cara Membuat Kompos dari Sampah Dapur", kategori:"Composting", waktu:"12 menit", level:"Pemula", color:"#8BCB8A", emoji:"♻️", desc:"30 hari jadi kompos, tanpa bau.", plantId:"kemangi",
   konten:"Kompos mengubah sisa dapur menjadi pupuk gratis dalam 30–45 hari. Resepnya satu: dua bagian bahan 'coklat' (kering, kaya karbon) untuk setiap satu bagian bahan 'hijau' (basah, kaya nitrogen). Bau muncul hanya jika rasio ini terbalik - dan hasilnya langsung terpakai untuk media tanam kemangi yang butuh tanah gembur.",
   langkah:[
     {t:"Siapkan dua wadah bahan", d:"Hijau: sisa sayur, kulit buah, ampas kopi, daun segar. Coklat: daun kering, kertas, serbuk gergaji, sekam."},
     {t:"Susun berlapis", d:"5cm coklat, 2–3cm hijau, ulangi. Tutup lapisan teratas dengan coklat agar tidak berbau dan tidak menarik lalat."},
     {t:"Jaga lembap seperti peras spons", d:"Terlalu kering = proses berhenti; terlalu basah = bau amonia. Tambahkan bahan coklat bila terlalu basah."},
     {t:"Aduk tiap 5–7 hari", d:"Memasukkan oksigen mempercepat kerja mikroba. Kompos aktif akan terasa hangat di bagian tengah tumpukan."},
     {t:"Panen saat hitam dan gembur", d:"30–45 hari: warna gelap, tidak berbau, suhu sudah dingin. Ayak dan kembalikan bagian kasar ke batch baru. Campur 20–30% ke media tanam."}
   ],
   checklist:["Dua wadah bahan: hijau & coklat", "Rasio 2 coklat : 1 hijau", "Aduk mingguan", "Terlindung dari hujan langsung", "Uji lembap dengan peras spons"], populer:true},

  {id:"g09", judul:"Menanam Cabai Rawit hingga Panen 90 Hari", kategori:"Dasar berkebun", waktu:"10 menit", level:"Pemula", color:"#FF718D", emoji:"🌶️", desc:"Timeline lengkap cabai dari semai ke panen.", plantId:"cabai-rawit",
   konten:"Timeline lengkap cabai rawit (Capsicum frutescens) sesuai ensiklopedia: benih berkecambah 5–7 hari, pindah tanam umur 3–4 minggu, panen pertama 70–90 hari. Butuh Full Sun 6–8 jam, suhu 24–32°C, pH 6.0–7.0, dan media tanah gembur + kompos. Ini tanaman paling populer untuk kebun rumah karena tahan panas dan produktif.",
   langkah:[
     {t:"Semai (Hari 0–7)", d:"Rendam benih 2–4 jam, semai 0,5cm di media lembab, tutup hingga berkecambah. Suhu 24–32°C mempercepat perkecambahan."},
     {t:"Bibit (Hari 7–28)", d:"Kenalkan sinar cerah segera setelah sprout muncul agar tidak etiolasi (kurus menjulang). Siram tipis dan seleksi bibit paling sehat."},
     {t:"Pindah tanam (Hari 28–35)", d:"Pindahkan ke pot 20–30cm berisi tanah gembur + kompos. Pendam hingga pangkal daun pertama, lakukan sore hari."},
     {t:"Vegetatif (Hari 35–60)", d:"Full Sun penuh, siram 1x sehari, pupuk NPK seimbang 2 minggu sekali. Cubit pucuk di ketinggian 20cm untuk memacu percabangan."},
     {t:"Generatif (Hari 60–90)", d:"Bunga mulai muncul; jaga penyiraman konsisten karena stres air membuat bunga rontok. Pantau kutu daun dan ulat di sisi bawah daun; cegah layu fusarium dengan tidak menggenang media."},
     {t:"Panen (Hari 70–90)", d:"Petik saat warna hijau beralih ke merah untuk tingkat pedas maksimal. Panen rutin justru memacu bunga dan buah baru."}
   ],
   checklist:["Benih cabai rawit 5–10 butir", "Pot 20–30cm + tanah gembur & kompos", "Lokasi Full Sun 6–8 jam", "NPK seimbang untuk pupuk 2 mingguan", "Neem oil cadangan untuk kutu daun"], populer:true},

  {id:"g10", judul:"Tomat Cherry di Pot: Ajir & Pemangkasan", kategori:"Dasar berkebun", waktu:"7 menit", level:"Menengah", color:"#FF9B70", emoji:"🍅", desc:"Tunas air, ajir, dan kalsium untuk cegah busuk.", plantId:"tomat",
   konten:"Tomat cherry (Solanum lycopersicum) produktif di pot jika tiga hal diurus: ajir terpasang sejak muda, tunas air dipangkas rutin, dan daun tetap kering di malam hari. Suhu nyaman 20–28°C, pH 6.0–6.8, media tanah + kompos + cocopeat, dan panen pertama 75–85 hari.",
   langkah:[
     {t:"Semai dan seleksi bibit", d:"Semai 2–3 benih per lubang, pertahankan satu bibit terkuat. Semai langsung di pot akhir agar akar tidak stres."},
     {t:"Pindah lebih dalam", d:"Tanam hingga pangkal daun pertama - batang tomat akan menumbuhkan akar baru di bagian yang terkubur, membuat pijakan lebih kuat."},
     {t:"Pasang ajir di hari pertama", d:"Ikat batang utama ke ajir/bambu sejak minggu pertama dengan pola angka 8. Memasang ajir belakangan merusak akar."},
     {t:"Cubit tunas air mingguan", d:"Tunas air tumbuh di ketiak daun dan menyedot energi dari buah. Cubit saat masih kecil; lakukan di pagi kering agar luka cepat kering."},
     {t:"Siram pagi, jaga daun kering", d:"Arahkan air ke media. Daun basah semalaman adalah undangan utama late blight; pantau juga kutu kebul di sisi bawah daun."},
     {t:"Panen bertahap", d:"Mulai hari 75–85; petik saat buah merah mengilap untuk rasa termanis. Panen berkala memacu set buah berikutnya."}
   ],
   checklist:["Pot 30cm+ dan ajir", "Media tanah + kompos + cocopeat", "Rutinitas cubit tunas air", "Penyiraman pagi ke media", "Serbuk cangkang telur untuk cegah busuk pantat"], populer:false},

  {id:"g11", judul:"Merawat Sukulen agar Tidak Busuk", kategori:"Media tanam", waktu:"6 menit", level:"Pemula", color:"#8BCB8A", emoji:"🌵", desc:"Media poros, siram 10 hari sekali, sinar terang.", plantId:"sukulen",
   konten:"Sukulen Echeveria jarang mati karena kurang perhatian - kebanyakan mati karena kelebihan air. Tiga kuncinya: media super poros (sukulen mix), cahaya terang tidak terik (Bright Indirect, suhu 15–28°C), dan menyiram hanya saat media benar-benar kering.",
   langkah:[
     {t:"Ganti media dengan yang poros", d:"Gunakan sukulen mix atau campuran pumice, pasir, dan sedikit cocopeat. Tanah taman biasa adalah jebakan busuk akar."},
     {t:"Posisi Bright Indirect", d:"Cerah dekat jendela tanpa sinar siang langsung. Warna roset akan menebal cantik; terik membakar daun luar."},
     {t:"Siram saat media kering total", d:"Tusuk lidi ke media: jika keluar bersih dan kering, siram habis hingga air menetes dari lubang. Umumnya 7–10 hari sekali."},
     {t:"Jangan semprot daunnya", d:"Air yang terperangkap di antara roset memicu busuk. Arahkan selalu ke media. Pantau mealybug - bintil putih seperti kapas di pangkal daun."},
     {t:"Perbanyak dari daun", d:"Lepaskan daun sehat utuh, jemur lukanya 1–2 hari, letakkan di atas media kering. Tunas bayi muncul dalam 2–4 minggu."}
   ],
   checklist:["Media poros khusus sukulen", "Pot berlubang drainase", "Uji lidi sebelum menyiram", "Posisi terang tanpa terik", "Kuas halus untuk cek mealybug"], populer:true},

  {id:"g12", judul:"Panen Selada Hidroponik 35 Hari", kategori:"Hidroponik", waktu:"7 menit", level:"Pemula", color:"#6FA8FF", emoji:"🥬", desc:"Nutrisi 800ppm, pH 6.0, panen renyah.", plantId:"selada",
   konten:"Selada romaine (Lactuca sativa) adalah hidroponik tercepat untuk pemula: panen 30–45 hari. Satu tantangan utamanya - selada benci panas. Suhu ideal 15–22°C, jadi pilihkan spot teduh atau pasang naungan di siang terik. Nutrisi AB Mix 800–1000 ppm dengan pH 6.0–7.0.",
   langkah:[
     {t:"Semai di rockwool", d:"Basahi rockwool, tusuk lubang 5mm, masukkan satu benih. Simpan gelap 2–3 hari hingga berkecambah."},
     {t:"Kenalkan cahaya bertahap", d:"Hari ke-3 sampai ke-7 biasakan bibit di tempat terang teduh. Jaga suhu maksimal 22°C agar bibit tidak kurus tinggi."},
     {t:"Pindah ke netpot hari ke-7", d:"Saat akar mengintip keluar rockwool, pindahkan ke netpot dengan hidroton di sistem wick atau NFT."},
     {t:"Jaga nutrisi dan pH", d:"EC 800–1000 ppm, pH stabil 6.0–7.0. Cek dua hari sekali; tambahkan air bersih saat volume reservoir turun sebelum menambah nutrisi."},
     {t:"Waspadai siput dan aphid", d:"Siput memanjat dari reservoir di malam hari; periksa bagian dalam netpot dan pasang penghalang."},
     {t:"Panen dua cara", d:"Panen penuh di hari 30–45, atau petik daun luar setiap minggu agar satu tanaman terus memproduksi hingga sebulan lebih."}
   ],
   checklist:["Rockwool dan benih selada", "Netpot + hidroton", "AB Mix, EC 800–1000 ppm", "Alat ukur pH 6.0–7.0", "Naungan untuk suhu di atas 22°C"], populer:false},

  {id:"g13", judul:"Bunga Matahari: Tanam Berurutan Tiap 2 Minggu", kategori:"Dasar berkebun", waktu:"5 menit", level:"Pemula", color:"#FFD45C", emoji:"🌻", desc:"Agar taman selalu berbunga.", plantId:"matahari",
   konten:"Bunga matahari (Helianthus annuus) panen 70–85 hari dan paling ramah untuk anak-anak: tabur langsung, tumbuh cepat, hasilnya spektakuler dan disukai lebah. Trik dari ensiklopedia: tabur batch baru tiap 2 minggu agar taman selalu punya bunga dari awal hingga akhir musim.",
   langkah:[
     {t:"Tabur langsung di tempat akhir", d:"Bunga matahari benci dipindah. Tabur 1–2 benih sedalam 2cm langsung di titik Full Sun, jarak antar titik 30cm."},
     {t:"Siram rajin di minggu pertama", d:"Perkecambahan 5–10 hari; media tidak boleh kering di fase ini. Setelah tegak dan berdaun 4, kurangi frekuensi."},
     {t:"Beri ajir saat tinggi >1m", d:"Varietas tinggi mudah roboh ditiup. Ikat batang ke ajir dengan pola angka 8 agar tidak menghimpit batang."},
     {t:"Amati ulat grayak", d:"Hama utama bunga matahari di ensiklopedia; petik manual saat ditemukan, semprot neem oil bila membanjir."},
     {t:"Panen sesuai tujuan", d:"Untuk dekorasi: potong saat kelopak baru membuka. Untuk biji: tunggu kepala bunga menunduk dan biji menghitam, lalu jemur."},
     {t:"Ulangi batch tiap 2 minggu", d:"Tandai kalender tabur. Dengan siklus 70–85 hari, dua batch yang bergantian membuat bunga selalu ada."}
   ],
   checklist:["Benih matahari (tinggi atau mini)", "Spot Full Sun tanpa bayangan", "Ajir untuk varietas tinggi", "Label tanggal tiap batch", "Sarung tangan untuk panen biji"], populer:false},

  {id:"g14", judul:"Mawar Floribunda: Pangkas Miring 45°", kategori:"Hama & penyakit", waktu:"6 menit", level:"Menengah", color:"#FF718D", emoji:"🌹", desc:"Teknik pangkas untuk bunga lebat.", plantId:"mawar",
   konten:"Mawar floribunda (Rosa hybrid) rajin berbunga selama 60–90 hari jika dua kebiasaan dijaga: memangkas dengan benar di atas mata tunas setelah tiap siklus bunga, dan menjaga daun tetap kering. Ancaman utamanya thrips dan black spot - keduanya dicegah dengan sirkulasi udara dan kebersihan.",
   langkah:[
     {t:"Pangkas miring 45° di atas mata tunas", d:"Gunakan gunting tajam; potong 5mm di atas tunas yang menghadap ke luar semak. Tunas luar menghasilkan percabangan terbuka dan sirkulasi baik."},
     {t:"Buang cabang mati dan bersilangan", d:"Cabang yang saling menggesek menjadi pintu masuk jamur. Jadikan pemangkasan pascabunga (setiap 60–90 hari) sebagai rutinitas."},
     {t:"Siram media, bukan daun", d:"Daun basah di sore hari = undangan black spot. Siram pangkal di pagi hari; media tanah + sekam + kompos dengan pH 6.0–6.5."},
     {t:"Pantau thrips di kuncup", d:"Kuncup gagal membuka dan berbercak perunggu adalah tandanya. Semprot neem oil sore hari dan buang kuncup yang terlanjur rusak."},
     {t:"Pupuk NPK setelah memangkas", d:"Berikan NPK seimbang seminggu setelah pemangkasan untuk memulihkan energi; suhu nyaman 18–28°C."}
   ],
   checklist:["Gunting pangkas tajam & bersih", "Teknik 45° di atas mata tunas", "Neem oil untuk thrips", "NPK seimbang pasca pemangkasan", "Daun gugur dibuang, bukan dikomposkan"], populer:false},

  {id:"g15", judul:"Mint Invasif: Cara Mengendalikan", kategori:"Media tanam", waktu:"4 menit", level:"Pemula", color:"#8BCB8A", emoji:"🌿", desc:"Pisahkan pot, panen sering.", plantId:"mint",
   konten:"Mint (Mentha piperita) hampir mustahil mati - masalahnya justru ia terlalu semangat tumbuh dan menumpaskan tanaman tetangganya lewat akar pelari. Aturan emasnya satu: mint dapat pot sendiri, dan panenlah sesering mungkin. Panen pertama sekitar 30 hari.",
   langkah:[
     {t:"Mulai dari stek batang", d:"Potong batang 10cm, buang daun bagian bawah, tancapkan di air atau langsung ke media lembab. Akar muncul dalam sepekan."},
     {t:"Beri pot terpisah", d:"Akar pelari mint menyebar agresif; menanam campur berarti mendominasi tetangga. Pot 20cm khusus adalah 'pagar' hidupnya."},
     {t:"Jaga lembab, Partial Sun cukup", d:"Mint termasuk tanaman haus (kategori air Banyak). Media tidak boleh kering lama; 3–6 jam sinar sudah cukup bahagia."},
     {t:"Panen agresif", d:"Cubit pucuk dan pangkas batang mingguan - makin sering dipanen makin rimbun. Panen pagi untuk aroma terbaik."},
     {t:"Amati whitefly", d:"Sekawanan lalat putih kecil yang beterbangan saat daun disentuh. Sembur air lalu neem oil, dan kurangi pupuk nitrogen berlebih."}
   ],
   checklist:["Pot terpisah khusus mint", "Stek batang sehat 10cm", "Media selalu lembab", "Panen/cubit mingguan", "Cek whitefly di bawah daun"], populer:false},

  {id:"g16", judul:"Tabulampot Mangga Harum Manis", kategori:"Urban farming", waktu:"11 menit", level:"Menengah", color:"#FFD45C", emoji:"🥭", desc:"Mangga di pot 50cm, berbuah 3 tahun.", plantId:"mangga",
   konten:"Mangga harum manis (Mangifera indica) bisa berbuah di pot sejak umur 3–4 tahun jika berasal dari bibit okulasi - bukan biji. Kuncinya: pot besar 50cm dengan media tanah + kompos, pemangkasan bentuk sejak muda, dan pengawalan buah dari lalat buah. Suhu ideal 24–33°C dengan Full Sun.",
   langkah:[
     {t:"Beli bibit okulasi", d:"Bibit biji butuh 6–8 tahun dan rasa tidak menjamin sama dengan induknya. Okulasi berbuah 3–4 tahun dengan karakter buah yang terjaga."},
     {t:"Pot 50cm+ dengan media berat", d:"Tanah + kompos porsi 2:1. Media berat menopang tajuk besar dan menjaga pohon tidak roboh ditiup angin."},
     {t:"Bangun bentuk sejak muda", d:"Pangkas untuk membentuk 3 cabang utama dengan tajuk terbuka agar sinar menembus semua bagian pembawa buah."},
     {t:"Air dan nutrisi teratur", d:"Siram saat permukaan media kering, jangan menggenang. Pupuk buah tinggi P-K tiap 2 bulan pada musim tumbuh."},
     {t:"Bungkus buah saat pentil", d:"Begitu buah sebesar kelereng, bungkus dengan kantong kertas/plastik berlubang - cara paling efektif melindungi dari lalat buah."},
     {t:"Panen dengan gunting", d:"Tanda matang: bahu buah penuh dan lapisan lilin terbentuk. Gunting tangkai, jangan ditarik agar ranting tidak tercabut."}
   ],
   checklist:["Bibit okulasi bersertifikat", "Pot 50cm+ dan media tanah-kompos", "Gunting pangkas untuk bentuk", "Pupuk P-K tinggi tiap 2 bulan", "Kantong pembungkus buah"], populer:false},

  {id:"g17", judul:"Cahaya untuk Tanaman: Full Sun vs Partial Sun vs Indirect", kategori:"Cahaya", waktu:"6 menit", level:"Pemula", color:"#FFD45C", emoji:"☀️", desc:"Kenali kebutuhan cahaya tiap tanaman, dari cabai yang butuh terik hingga monstera yang suka teduh.", plantId:"anggrek",
   konten:"Cahaya adalah 'makanan' tanaman. Ensiklopedia membaginya tiga kelas: Full Sun 6–8 jam terik langsung (cabai, tomat, kangkung, bunga matahari, kaktus), Partial Sun 3–6 jam (selada, mint, bayam), dan Bright Indirect - terang tanpa sinar langsung (sukulen, lidah buaya, anggrek bulan). Salah menempatkan berarti tanaman jinjang atau daun gosong.",
   langkah:[
     {t:"Petakan sinar rumahmu", d:"Amati satu hari penuh dan catat jam berapa tiap titik mendapat matahari langsung. Arah barat dan selatan biasanya paling terik."},
     {t:"Cocokkan dengan label ensiklopedia", d:"Setiap tanaman punya label cahaya. Taruh Full Sun di teras terbuka; Bright Indirect seperti anggrek di dekat jendela kaca yang terbuka cahaya."},
     {t:"Baca sinyal kekurangan cahaya", d:"Batang kurus menjulang (etiolasi), daun kecil dengan jarak antar ruas lebar, warna pudar. Solusinya: pindah ke spot lebih terang."},
     {t:"Baca sinyal kelebihan cahaya", d:"Daun pucat kekuningan, bercak gosong kering, menggulung ke atas. Pasang shade net 30–40% atau geser ke tempat lebih teduh."},
     {t:"Putar pot tiap minggu", d:"Tanaman indoor tumbuh condong ke arah sinar. Memutar pot 90° mingguan menjaga bentuknya simetris."}
   ],
   checklist:["Peta sinar satu hari penuh", "Label cahaya tiap tanaman dicatat", "Shade net 30–40% cadangan", "Rutinitas putar pot mingguan"], populer:true},

  {id:"g18", judul:"Plant Journey: Memahami Fase Seed  Harvest", kategori:"Dasar berkebun", waktu:"7 menit", level:"Pemula", color:"#8BCB8A", emoji:"🌱", desc:"Belajar fase pertumbuhan dan task harian di Kebunku.", plantId:"cabai-rawit",
   konten:"Di FloraVerse, setiap tanaman di Kebunku berjalan melewati enam fase: Seed  Seedling  Growing  Flowering  Fruiting  Harvest. Memahami fase membuat Anda memberi apa yang dibutuhkan di waktu tepat - kelembapan di awal, nutrisi di pertengahan, dan pengendalian hama menjelang panen. Contoh lengkapnya: perjalanan cabai rawit selama 70–90 hari.",
   langkah:[
     {t:"Seed (0–2 minggu)", d:"Kelembapan dan kehangatan lebih penting daripada cahaya. Cabai berkecambah 5–7 hari pada suhu 24–32°C."},
     {t:"Seedling (2–4 minggu)", d:"Daun sejati muncul; kenalkan sinar secara bertahap dan pindah pot pada umur 3–4 minggu."},
     {t:"Growing (1–2 bulan)", d:"Fase paling rakus: daun dan batang tumbuh pesat. Siram teratur, beri pupuk N, dan mulai patroli kutu daun."},
     {t:"Flowering & Fruiting", d:"Turunkan nitrogen, naikkan kalium. Jaga air konsisten - stres air menjatuhkan bunga dan buah muda."},
     {t:"Harvest", d:"Panen di momen tepat tiap tanaman: cabai saat hijau beralih merah, tomat saat merah mengilap, selada sebelum batang bunga muncul."},
     {t:"Catat tiap fase di Kebunku", d:"Buka halaman Kebunku, mulai Day 1, selesaikan task harian, dan tulis jurnal - setiap aktivitas memberi XP."}
   ],
   checklist:["Buka halaman Kebunku", "Pilih tanaman dan mulai Day 1", "Selesaikan task harian (+10 XP)", "Tulis jurnal tiap fase (+10 XP)", "Bagikan journey ke komunitas saat panen"], populer:true},
];
