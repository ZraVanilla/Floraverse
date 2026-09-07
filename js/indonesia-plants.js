/* Expanded Indonesian plant catalog. The core entries in plants.js remain curated; these
   entries make the encyclopedia and Plant Match useful beyond the starter collection. */
const NUSANTARA_PLANTS = {
  "Sayuran": [
    "Sawi Hijau","Sawi Putih","Pakcoy","Kailan","Kobis","Brokoli","Kembang Kol","Brussels Sprout",
    "Radis","Lobak Putih","Bit Merah","Ubi Jalar","Singkong","Ganyong","Garut","Talas Bogor",
    "Genjer","Daun Katuk","Daun Kelor","Daun Singkong","Daun Pepaya","Daun Melinjo","Daun Talas",
    "Leunca","Takokak","Rebung","Jantung Pisang","Buncis","Kacang Panjang","Kacang Kapri",
    "Kacang Tunggak","Kedelai Edamame","Labu Siam","Labu Kuning","Pare","Oyong","Labu Air",
    "Jagung Manis","Jagung Pulut","Okra","Asparagus","Artichoke","Daun Bawang","Bawang Merah",
    "Bawang Putih","Bawang Bombay","Kucai","Seledri","Jamur Tiram"
  ],
  "Buah": [
    "Pisang Ambon","Pisang Raja","Pisang Kepok","Pisang Cavendish","Pisang Mas","Pisang Tanduk",
    "Pepaya California","Pepaya Bangkok","Nanas Madu","Nanas Subang","Semangka","Melon","Blewah",
    "Duku","Langsat","Manggis","Rambutan Binjai","Rambutan Rapiah","Salak Pondoh","Salak Bali",
    "Sawo Manila","Sirsak","Srikaya","Markisa Ungu","Markisa Kuning","Belimbing Manis","Belimbing Wuluh",
    "Kedondong","Mengkudu","Kecapi","Kersen","Ciplukan","Bisbul","Matoa","Gandaria","Kuweni",
    "Pakoba","Namnam","Ceremai","Buni","Jamblang","Leci","Longan","Apel Malang","Pir",
    "Anggur","Buah Naga Merah","Buah Naga Putih","Kelengkeng Itoh","Nangka Mini","Cempedak"
  ],
  "Herbal": [
    "Temulawak","Kunyit","Kunyit Putih","Jahe Merah","Jahe Gajah","Lengkuas","Kencur","Temu Kunci",
    "Temu Ireng","Temu Putih","Bangle","Kapulaga Jawa","Kapulaga India","Kayu Manis","Cengkeh",
    "Pala","Lada Hitam","Lada Putih","Kemiri","Ketumbar","Jintan","Adas","Wijen","Sereh",
    "Daun Salam","Daun Jeruk","Daun Pandan","Daun Kari","Kecombrang","Pandan Wangi","Rosela",
    "Stevia","Binahong","Sambiloto","Pegagan","Meniran","Kumis Kucing","Mahkota Dewa","Mengkudu Herbal",
    "Lempuyang","Brotowali","Kayu Secang","Cincau Hijau","Lidah Mertua Herbal","Biji Selasih"
  ],
  "Bunga": [
    "Melati Putih","Melati Jepang","Kamboja Bali","Kamboja Jepang","Kenanga","Cempaka Putih","Cempaka Kuning",
    "Anggrek Dendrobium","Anggrek Vanda","Anggrek Cattleya","Anggrek Hitam","Anggrek Bulan Mini","Bougenvil",
    "Kembang Sepatu","Kembang Telang","Teratai Putih","Teratai Merah","Lotus","Kenikir Bunga","Zinnia",
    "Petunia","Marigold","Cosmos","Dahlia","Gladiol","Lili","Bakung","Sedap Malam","Anyelir",
    "Gerbera","Aster","Krisan","Tulip Tropis","Pacar Air","Tapak Dara","Bunga Kertas","Bunga Pukul Empat",
    "Bunga Matahari Mini","Bunga Matahari Merah","Bunga Matahari Kerdil","Bunga Telang Putih","Bunga Wijaya Kusuma",
    "Bunga Soka","Bunga Nusa Indah","Bunga Asoka"
  ],
  "Hias": [
    "Monstera Deliciosa","Monstera Adansonii","Philodendron Birkin","Philodendron Pink Princess","Philodendron Brasil",
    "Aglaonema Merah","Aglaonema Hijau","Aglaonema Siam Aurora","Dieffenbachia","Calathea Orbifolia",
    "Calathea Makoyana","Calathea Lancifolia","Maranta","Alocasia Polly","Alocasia Amazonica","Alocasia Macrorrhizos",
    "Anthurium Gelombang Cinta","Anthurium Jemani","Anthurium Bunga","Peace Lily","Lili Paris","Syngonium",
    "Pothos Hijau","Pothos Marble Queen","Sirih Gading Neon","Sirih Belanda","Hoya","Dischidia","Fittonia",
    "Peperomia","Begonia Rex","Begonia Maculata","Coleus","Pilea Peperomioides","Chinese Money Plant",
    "Palem Kuning","Palem Bambu","Palem Kipas","Palem Putri","Pandan Bali","Bambu Rejeki","Bonsai Beringin",
    "Bonsai Serut","Bonsai Kimeng","Bonsai Anting Putri","Paku Tanduk Rusa","Paku Sarang Burung","Pakis Boston",
    "Lidah Mertua","Lidah Mertua Moonshine","Zanzibar Gem","Karet Kebo","Pohon Uang"
  ],
  "Pohon buah": [
    "Durian Montong","Durian Musang King","Durian Kembang","Durian Petruk","Durian Bawor","Durian Sitokong",
    "Mangga Manalagi","Mangga Gedong Gincu","Mangga Golek","Mangga Indramayu","Mangga Garifta","Mangga Madu",
    "Jeruk Siam","Jeruk Keprok","Jeruk Nipis","Jeruk Purut","Jeruk Bali","Jeruk Lemon","Jeruk Sunkist",
    "Jeruk Dekopon","Alpukat Miki","Alpukat Hass","Alpukat Wina","Alpukat Kendil","Jambu Kristal",
    "Jambu Bol","Jambu Jamaika","Jambu Mede","Kelengkeng Diamond River","Kelengkeng Pingpong","Kelengkeng Merah",
    "Nangka Madu","Nangka Mini Tabulampot","Cempedak Madu","Rambutan Rapiah","Matoa Papua","Sukun","Kluwih",
    "Melinjo","Petai","Jengkol","Asam Jawa","Asam Kandis","Asam Gelugur","Kemiri Sunan","Pinang"
  ],
  "Pangan": [
    "Padi Ciherang","Padi Pandan Wangi","Padi Rojolele","Padi Inpari","Padi Merah","Padi Hitam",
    "Jagung Lokal","Jagung Ungu","Sorgum","Jawawut","Gandum Tropis","Hanjeli","Talas Belitung",
    "Talas Beneng","Ubi Kayu","Ubi Ungu","Ubi Madu","Gembili","Uwi","Porang","Garut Pangan",
    "Suweg","Gadung","Kacang Hijau","Kacang Tanah","Kacang Merah","Kacang Tolo","Kacang Bogor",
    "Kacang Koro","Kacang Kedelai","Kenari","Kemiri Pangan","Kelapa Genjah","Kelapa Gading",
    "Kelapa Hibrida","Kelapa Kopyor","Sagu","Aren","Nipah","Lontar","Pinang Muda","Tebu",
    "Kopi Arabika","Kopi Robusta","Kopi Liberika","Kakao","Teh","Vanili","Tembakau","Kapas"
  ]
};

const NUSANTARA_EMOJI = {
  "Sayuran":"🥬", "Buah":"🍎", "Herbal":"🌿", "Bunga":"🌸", "Hias":"🪴", "Pohon buah":"🌳", "Pangan":"🌾"
};
const NUSANTARA_COLORS = ["#8BCB8A", "#6FA8FF", "#FFD45C", "#FF9B70", "#FF718D"];
const NUSANTARA_EASY = ["Sangat Mudah", "Mudah", "Sedang"];

function nusantaraSlug(name){
  return "nusantara-" + name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

Object.entries(NUSANTARA_PLANTS).forEach(([kategori, names])=>{
  names.forEach((nama, index)=>{
    const id=nusantaraSlug(nama);
    if(PLANTS.some(p=>p.id===id || p.nama.toLowerCase()===nama.toLowerCase())) return;
    const easy=NUSANTARA_EASY[index % NUSANTARA_EASY.length];
    const indoor=["Hias","Herbal"].includes(kategori) && index % 3 === 0;
    PLANTS.push({
      id, nama, ilmiah:"Tanaman Nusantara", kategori, kesulitan:easy,
      panen:["Bunga","Hias"].includes(kategori) ? "-" : `${30 + (index % 8) * 15} hari`,
      cahaya:indoor ? "Bright Indirect" : index % 4 === 0 ? "Partial Sun" : "Full Sun",
      air:kategori==="Hias" || kategori==="Pohon buah" ? (index % 3 === 0 ? "Sedang" : "Jarang") : index % 3 === 0 ? "Banyak" : "Sedang",
      ph:"6.0–7.0", suhu:"20–32°C", media:kategori==="Hias" ? "Media porous" : "Tanah gembur + kompos",
      color:NUSANTARA_COLORS[index % NUSANTARA_COLORS.length], emoji:NUSANTARA_EMOJI[kategori], img:null,
      desc:`${nama} cocok untuk kebun rumah Indonesia dan dapat dimulai dari ${easy.toLowerCase()} dengan media yang sesuai.`,
      cara:"Pilih media yang gembur, beri cahaya sesuai kebutuhan, dan mulai dari penyiraman secukupnya.",
      perawat:"Amati daun dan media secara rutin; sesuaikan air dan pupuk dengan pertumbuhannya.",
      hama:"Pantau kutu daun, ulat, dan jamur.", tips:"Mulai dari pot yang memiliki drainase baik.", wilayah:"Nusantara",
      rating:4.3 + (index % 6) / 10, buyers:80 + (index % 12) * 35
    });
  });
});

const NUSANTARA_CATEGORY_PHOTOS = {
  "Sayuran":"https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=640&q=75",
  "Buah":"https://images.unsplash.com/photo-1619566636858-adf3ef46400b?auto=format&fit=crop&w=640&q=75",
  "Herbal":"https://images.unsplash.com/photo-1618375569909-3c8616cf7733?auto=format&fit=crop&w=640&q=75",
  "Bunga":"https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=640&q=75",
  "Hias":"https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=640&q=75",
  "Pohon buah":"https://images.unsplash.com/photo-1591073113125-e46713c829ed?auto=format&fit=crop&w=640&q=75",
  "Pangan":"https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=640&q=75"
};
PLANTS.forEach(plant=>{
  plant.kelembapan=plant.kelembapan || (["Hias","Herbal"].includes(plant.kategori) ? "Sedang" : "Sedang–tinggi");
  plant.ukuran=plant.ukuran || (["Pohon buah","Pangan"].includes(plant.kategori) ? "Besar" : ["Hias","Bunga"].includes(plant.kategori) ? "Kecil–sedang" : "Sedang");
  plant.lokasi=plant.lokasi || (["Hias"].includes(plant.kategori) ? "Dalam rumah, teras" : ["Pohon buah","Pangan"].includes(plant.kategori) ? "Halaman, lahan" : "Balkon, halaman");
  if(!plant.img) plant.img=NUSANTARA_CATEGORY_PHOTOS[plant.kategori] || NUSANTARA_CATEGORY_PHOTOS.Sayuran;
});
