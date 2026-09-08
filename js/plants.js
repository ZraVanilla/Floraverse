/* Custom dummy data for FloraVerse - Plant Encyclopedia */
const PLANTS = [
  {
    id: "cabai-rawit", nama:"Cabai Rawit", ilmiah:"Capsicum frutescens", kategori:"Sayuran", kesulitan:"Mudah", panen:"70–90 hari", cahaya:"Full Sun", air:"Sedang", ph:"6.0–7.0", suhu:"24–32°C", media:"Tanah gembur + kompos",
    color:"#FF718D", emoji:"🌶️",
    desc:"Cabai rawit adalah tanaman paling populer untuk kebun rumah. Tahan panas, produktif, dan cocok untuk pemula.",
    cara:"Semai benih 5–7 hari, pindah tanam setelah 3–4 minggu, beri sinar penuh dan siram teratur.",
    perawat:"Siram 1x sehari, pupuk 2 minggu sekali, pangkas daun tua.",
    hama:"Kutu daun, ulat, layu fusarium",
    tips:"Panen saat warna hijau ke merah untuk rasa paling pedas.",
    rating:4.8, buyers:1240
  },
  {
    id:"cabai-merah", nama:"Cabai Merah Keriting", ilmiah:"Capsicum annuum", kategori:"Sayuran", kesulitan:"Mudah", panen:"80–100 hari", cahaya:"Full Sun", air:"Sedang", ph:"5.5–6.8", suhu:"25–30°C", media:"Tanah + sekam bakar",
    color:"#FF9B70", emoji:"🌶️",
    desc:"Cabai merah keriting ideal untuk masakan harian, buah lebat dan perawatan mudah.", cara:"Sama seperti cabai rawit, butuh pot minimal 20cm.", perawat:"Butuh ajir saat mulai berbuah.", hama:"Thrips, tungau", tips:"Jemur benih sebelum semai agar germinasi tinggi.", rating:4.7, buyers:980
  },
  {
    id:"tomat", nama:"Tomat Cherry", ilmiah:"Solanum lycopersicum", kategori:"Buah", kesulitan:"Sedang", panen:"75–85 hari", cahaya:"Full Sun", air:"Sedang", ph:"6.0–6.8", suhu:"20–28°C", media:"Tanah + kompos + cocopeat",
    color:"#FF718D", emoji:"🍅",
    desc:"Tomat cherry manis, cocok untuk pot dan balkon. Buah kecil menggantung cantik.", cara:"Semai, pindah tanam, beri ajir, pangkas tunas air.", perawat:"Siram pagi, hindari daun basah malam.", hama:"Late blight, kutu kebul", tips:"Panen bertahap, petik saat merah mengkilap.", rating:4.9, buyers:1520
  },
  {
    id:"selada", nama:"Selada Romaine", ilmiah:"Lactuca sativa", kategori:"Sayuran", kesulitan:"Mudah", panen:"30–45 hari", cahaya:"Partial Sun", air:"Banyak", ph:"6.0–7.0", suhu:"15–22°C", media:"Rockwool / tanah gembur",
    color:"#8BCB8A", emoji:"🥬",
    desc:"Selada romaine renyah, cepat panen, ideal untuk hidroponik pemula.", cara:"Semai di rockwool, pindah ke netpot hidroponik hari ke-7.", perawat:"Jaga nutrisi AB Mix, pH stabil.", hama:"Siput, aphid", tips:"Panen daun luar dulu agar terus tumbuh.", rating:4.6, buyers:840
  },
  {
    id:"bayam", nama:"Bayam Hijau", ilmiah:"Amaranthus tricolor", kategori:"Sayuran", kesulitan:"Mudah", panen:"25–35 hari", cahaya:"Partial Sun", air:"Banyak", ph:"6.0–7.5", suhu:"25–30°C", media:"Tanah kompos",
    color:"#8BCB8A", emoji:"🥬",
    desc:"Bayam tumbuh sangat cepat, cocok untuk panen kilat di halaman sempit.", cara:"Tabur langsung, jarang 10cm.", perawat:"Siram 2x sehari musim kemarau.", hama:"Ulat grayak", tips:"Panen sebelum berbunga agar tidak pahit.", rating:4.5, buyers:610
  },
  {
    id:"kangkung", nama:"Kangkung Darat", ilmiah:"Ipomoea aquatica", kategori:"Sayuran", kesulitan:"Sangat Mudah", panen:"25–30 hari", cahaya:"Full Sun", air:"Banyak", ph:"5.5–7.0", suhu:"25–32°C", media:"Tanah / hidroponik",
    color:"#8BCB8A", emoji:"🥬",
    desc:"Kangkung darat paling toleran, bahkan bisa tanpa perawatan intensif.", cara:"Tabur benih langsung.", perawat:"Siram rutin, pupuk kompos.", hama:"Belalang", tips:"Potong 5cm dari pangkal, akan tumbuh lagi.", rating:4.7, buyers:720
  },
  {
    id:"wortel", nama:"Wortel Nantes", ilmiah:"Daucus carota", kategori:"Sayuran", kesulitan:"Sedang", panen:"70–80 hari", cahaya:"Full Sun", air:"Sedang", ph:"6.0–6.8", suhu:"16–24°C", media:"Tanah gembur dalam",
    color:"#FF9B70", emoji:"🥕",
    desc:"Wortel Nantes manis, umbi lurus, butuh media dalam dan gembur.", cara:"Tabur langsung, jangan pindah tanam.", perawat:"Jarang agar jarak 5cm, gemburkan tanah.", hama:"Lalat wortel", tips:"Panen saat ujung umbi nongol.", rating:4.4, buyers:430
  },
  {
    id:"stroberi", nama:"Stroberi Albion", ilmiah:"Fragaria × ananassa", kategori:"Buah", kesulitan:"Sedang", panen:"90–120 hari", cahaya:"Full Sun", air:"Sedang", ph:"5.5–6.5", suhu:"15–25°C", media:"Tanah + sekam + cocopeat",
    color:"#FF718D", emoji:"🍓",
    desc:"Stroberi manis-asam, cantik untuk pot gantung.", cara:"Bibit stolon, tanam di pot 20cm.", perawat:"Siram pagi, mulsa jerami.", hama:"Tungau, busuk buah", tips:"Buang bunga pertama agar tanaman kuat.", rating:4.8, buyers:890
  },
  {
    id:"timun", nama:"Mentimun Baby", ilmiah:"Cucumis sativus", kategori:"Sayuran", kesulitan:"Mudah", panen:"55–60 hari", cahaya:"Full Sun", air:"Banyak", ph:"6.0–7.0", suhu:"25–32°C", media:"Tanah kompos",
    color:"#8BCB8A", emoji:"🥒",
    desc:"Mentimun baby renyah, rajin berbuah jika diberi rambatan.", cara:"Tabur 2 benih/lubang, beri ajir.", perawat:"Siram rutin, pupuk K tinggi saat berbuah.", hama:"Embun tepung", tips:"Panen muda agar tidak pahit.", rating:4.5, buyers:560
  },
  {
    id:"terong", nama:"Terong Ungu", ilmiah:"Solanum melongena", kategori:"Sayuran", kesulitan:"Mudah", panen:"70–80 hari", cahaya:"Full Sun", air:"Sedang", ph:"5.5–6.5", suhu:"22–30°C", media:"Tanah + kompos",
    color:"#6FA8FF", emoji:"🍆",
    desc:"Terong ungu produktif, satu tanaman bisa panen berkali-kali.", cara:"Semai lalu pindah tanam 30x40cm.", perawat:"Pangkas daun bawah, pupuk rutin.", hama:"Kumbang terong", tips:"Petik saat kulit mengkilap.", rating:4.6, buyers:480
  },
  {
    id:"basil", nama:"Basil / Kemangi Manis", ilmiah:"Ocimum basilicum", kategori:"Herbal", kesulitan:"Mudah", panen:"30–40 hari", cahaya:"Full Sun", air:"Sedang", ph:"6.0–7.0", suhu:"20–30°C", media:"Tanah + kompos",
    color:"#8BCB8A", emoji:"🌿",
    desc:"Basil wangi untuk pasta dan teh, tumbuh cepat di pot kecil.", cara:"Tabur, jarang, panen pucuk.", perawat:"Cubit pucuk agar rimbun.", hama:"Siput", tips:"Jangan biarkan berbunga agar daun tetap wangi.", rating:4.9, buyers:1020
  },
  {
    id:"kemangi", nama:"Kemangi Lokal", ilmiah:"Ocimum citriodorum", kategori:"Herbal", kesulitan:"Sangat Mudah", panen:"30 hari", cahaya:"Full Sun", air:"Sedang", ph:"6.0–7.0", suhu:"25–32°C", media:"Tanah",
    color:"#8BCB8A", emoji:"🌿",
    desc:"Kemangi lokal wangi kuat, pendamping pecel dan lalapan.", cara:"Tabur langsung.", perawat:"Siram 1x sehari.", hama:"Hampir tidak ada", tips:"Panen pagi hari aroma paling kuat.", rating:4.7, buyers:670
  },
  {
    id:"mawar", nama:"Mawar Floribunda", ilmiah:"Rosa hybrid", kategori:"Bunga", kesulitan:"Sedang", panen:"60–90 hari berbunga", cahaya:"Full Sun", air:"Sedang", ph:"6.0–6.5", suhu:"18–28°C", media:"Tanah + sekam + kompos",
    color:"#FF718D", emoji:"🌹",
    desc:"Mawar floribunda rajin berbunga, warna cerah.", cara:"Stek atau bibit okulasi, pot 25cm.", perawat:"Pangkas setelah berbunga, pupuk NPK.", hama:"Thrips, black spot", tips:"Pangkas miring 45° di atas mata tunas.", rating:4.7, buyers:540
  },
  {
    id:"matahari", nama:"Bunga Matahari", ilmiah:"Helianthus annuus", kategori:"Bunga", kesulitan:"Mudah", panen:"70–85 hari", cahaya:"Full Sun", air:"Sedang", ph:"6.0–7.5", suhu:"20–30°C", media:"Tanah gembur",
    color:"#FFD45C", emoji:"🌻",
    desc:"Bunga matahari ceria, tinggi dan mencolok, disukai lebah.", cara:"Tabur langsung 30cm.", perawat:"Beri ajir jika tinggi >1m.", hama:"Ulat grayak", tips:"Tanam berurutan tiap 2 minggu untuk bunga terus.", rating:4.8, buyers:610
  },
  {
    id:"mangga", nama:"Mangga Harum Manis", ilmiah:"Mangifera indica", kategori:"Pohon buah", kesulitan:"Sedang", panen:"3–4 tahun", cahaya:"Full Sun", air:"Sedang", ph:"5.5–7.0", suhu:"24–33°C", media:"Tanah + kompos",
    color:"#FFD45C", emoji:"🥭",
    desc:"Mangga harum manis legendaris, bisa tabulampot.", cara:"Bibit okulasi, pot 50cm.", perawat:"Pangkas bentuk, pupuk buah.", hama:"Lalat buah", tips:"Bungkus buah saat pentil.", rating:4.8, buyers:310
  },
  {
    id:"sukulen", nama:"Sukulen Echeveria", ilmiah:"Echeveria elegans", kategori:"Sukulen", kesulitan:"Mudah", panen:"-", cahaya:"Bright Indirect", air:"Jarang", ph:"6.0–6.5", suhu:"15–28°C", media:"Sukulen mix",
    color:"#8BCB8A", emoji:"🪴",
    desc:"Sukulen roset cantik, warna pastel.", cara:"Daun diperbanyak, letak terang.", perawat:"Siram saat media kering.", hama:"Mealybug", tips:"Jangan semprot daun, siram ke media.", rating:4.7, buyers:920
  },
  {
    id:"jeruk", nama:"Jeruk Kalamansi", ilmiah:"Citrofortunella microcarpa", kategori:"Pohon buah", kesulitan:"Mudah", panen:"6–8 bulan", cahaya:"Full Sun", air:"Sedang", ph:"5.5–6.5", suhu:"22–32°C", media:"Tanah + sekam",
    color:"#FFD45C", emoji:"🍊",
    desc:"Jeruk mini rajin berbuah, asam segar untuk minuman.", cara:"Bibit cangkok, pot 30cm.", perawat:"Pupuk NPK buah.", hama:"Kutu daun", tips:"Panen saat oranye penuh.", rating:4.6, buyers:420
  },
  {
    id:"alpukat", nama:"Alpukat Mentega", ilmiah:"Persea americana", kategori:"Pohon buah", kesulitan:"Sedang", panen:"3–5 tahun", cahaya:"Full Sun", air:"Sedang", ph:"6.0–6.5", suhu:"20–28°C", media:"Tanah + kompos",
    color:"#8BCB8A", emoji:"🥑",
    desc:"Alpukat mentega pulen, nilai ekonomi tinggi.", cara:"Bibit okulasi.", perawat:"Jangan genang.", hama:"Ulat kipat", tips:"Panen saat kulit agak kusam.", rating:4.9, buyers:340
  },
  {
    id:"lavender", nama:"Lavender", ilmiah:"Lavandula angustifolia", kategori:"Herbal", kesulitan:"Sedang", panen:"90–120 hari", cahaya:"Full Sun", air:"Jarang", ph:"6.5–8.0", suhu:"15–25°C", media:"Pasir + kompos",
    color:"#6FA8FF", emoji:"🌸",
    desc:"Lavender wangi menenangkan, butuh drainase bagus.", cara:"Semai, pindah pot 15cm.", perawat:"Jangan overwater.", hama:"Busuk akar", tips:"Pangkas bunga kering untuk pembungaan ulang.", rating:4.6, buyers:390
  },
  {
    id:"mint", nama:"Mint / Peppermint", ilmiah:"Mentha piperita", kategori:"Herbal", kesulitan:"Sangat Mudah", panen:"30 hari", cahaya:"Partial Sun", air:"Banyak", ph:"6.0–7.0", suhu:"15–25°C", media:"Tanah lembab",
    color:"#8BCB8A", emoji:"🌿",
    desc:"Mint menyegarkan, invasif - tanam di pot sendiri.", cara:"Stek batang, tancap.", perawat:"Siram rutin, panen sering.", hama:"Whitefly", tips:"Jangan tanam campur, mint akan dominan.", rating:4.8, buyers:740
  },
  {
    id:"lidah-buaya", nama:"Lidah Buaya", ilmiah:"Aloe vera", kategori:"Hias", kesulitan:"Sangat Mudah", panen:"-", cahaya:"Bright Indirect", air:"Jarang", ph:"7.0–8.5", suhu:"20–30°C", media:"Pasir",
    color:"#8BCB8A", emoji:"🪴",
    desc:"Lidah buaya multifungsi, tahan banting.", cara:"Anakan, pot 15cm.", perawat:"Siram 10 hari sekali.", hama:"Hampir tidak ada", tips:"Gel bisa untuk luka ringan.", rating:4.7, buyers:660
  },
  {
    id:"anggrek", nama:"Anggrek Bulan", ilmiah:"Phalaenopsis amabilis", kategori:"Bunga", kesulitan:"Sulit", panen:"-", cahaya:"Bright Indirect", air:"Sedang", ph:"5.5–6.5", suhu:"18–28°C", media:"Moss + pakis",
    color:"#FF718D", emoji:"🌸",
    desc:"Anggrek bulan elegan, berbunga tahan lama.", cara:"Bibit kultur jaringan.", perawat:"Siram 2x seminggu, pupuk anggrek.", hama:"Bekicot", tips:"Jangan pindah pot saat berbunga.", rating:4.9, buyers:510
  }
];
