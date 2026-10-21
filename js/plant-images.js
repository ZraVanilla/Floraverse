/* Single source of truth for plant catalog and plant images. */
const NUSANTARA_PLANT_GROUPS = {
  Sayuran: "Bawang Merah|Singkong|Labu Siam|Okra",
  Buah: "Semangka|Nanas Madu|Melon|Rambutan|Salak|Sirsak|Manggis|Sukun|Jambu Air",
  Herbal: "Daun Pandan|Kunyit|Sereh",
  "Pohon buah": "Durian",
  Pangan: "Petai|Kakao"
};
const NUSANTARA_EMOJI = {Sayuran:"🥬",Buah:"🍎",Herbal:"🌿",Bunga:"🌸",Hias:"🪴","Pohon buah":"🌳",Pangan:"🌾"};
const NUSANTARA_COLORS = ["#8BCB8A","#6FA8FF","#FFD45C","#FF9B70","#FF718D"];
const NUSANTARA_EASY = ["Sangat Mudah","Mudah","Sedang"];

Object.entries(NUSANTARA_PLANT_GROUPS).forEach(([kategori, names])=>{
  names.split("|").forEach((nama,index)=>{
    const id = window.slugify(nama);
    if(PLANTS.some(plant=>plant.id===id || plant.nama.toLowerCase()===nama.toLowerCase())) return;
    const easy=NUSANTARA_EASY[index % NUSANTARA_EASY.length];
    const indoor=["Hias","Herbal"].includes(kategori) && index % 3 === 0;
    PLANTS.push({id,nama,ilmiah:"Tanaman Nusantara",kategori,kesulitan:easy,panen:["Bunga","Hias"].includes(kategori)?"-":`${30+(index%8)*15} hari`,cahaya:indoor?"Bright Indirect":index%4===0?"Partial Sun":"Full Sun",air:kategori==="Hias"||kategori==="Pohon buah"?(index%3===0?"Sedang":"Jarang"):(index%3===0?"Banyak":"Sedang"),ph:"6.0–7.0",suhu:"20–32°C",media:kategori==="Hias"?"Media porous":"Tanah gembur + kompos",color:NUSANTARA_COLORS[index%NUSANTARA_COLORS.length],emoji:NUSANTARA_EMOJI[kategori],desc:`${nama} cocok untuk kebun rumah Indonesia dan dapat dimulai dari ${easy.toLowerCase()} dengan media yang sesuai.`,cara:"Pilih media yang gembur, beri cahaya sesuai kebutuhan, dan mulai dari penyiraman secukupnya.",perawat:"Amati daun dan media secara rutin; sesuaikan air dan pupuk dengan pertumbuhannya.",hama:"Pantau kutu daun, ulat, dan jamur.",tips:"Mulai dari pot yang memiliki drainase baik.",wilayah:"Nusantara",rating:4.3+(index%6)/10,buyers:80+(index%12)*35});
  });
});
PLANTS.forEach(plant=>{plant.kelembapan=plant.kelembapan||(["Hias","Herbal"].includes(plant.kategori)?"Sedang":"Sedang–tinggi");plant.ukuran=plant.ukuran||(["Pohon buah","Pangan"].includes(plant.kategori)?"Besar":["Hias","Bunga"].includes(plant.kategori)?"Kecil–sedang":"Sedang");plant.lokasi=plant.lokasi||(["Hias"].includes(plant.kategori)?"Dalam rumah, teras":["Pohon buah","Pangan"].includes(plant.kategori)?"Halaman, lahan":"Balkon, halaman")});

const PLANT_IMAGES = {
  default: "asset/img/plants/plant-e0e2d1.jpg",

  "cabai-rawit": "asset/img/plants/photo-1588252303782-cb80119abd6d-5dd8e0.avif",
  "cabai-merah": "asset/img/plants/62bb1bb0b7595-151e1b.jpg",
  "tomat": "asset/img/plants/photo-1592924357228-91a4daadcfea-6d3516.avif",
  "selada": "asset/img/postingan/photo-1622206151226-18ca2c9ab4a1-409e8e.avif",
  "bayam": "asset/img/plants/photo-1576045057995-568f588f82fb-d90dc8.avif",
  "kangkung": "https://unair.ac.id/wp-content/uploads/2019/12/Ilustrasi-oleh-masandy-com.jpg",
  "wortel": "asset/img/plants/photo-1445282768818-728615cc910a-c74ff8.avif",
  "stroberi": "asset/img/plants/photo-1464965911861-746a04b4bca6-ec1e38.avif",
  "timun": "asset/img/plants/photo-1604977042946-1eecc30f269e-682abc.avif",
  "terong": "asset/img/plants/photo-1615484477778-ca3b77940c25-b6e2a3.avif",
  "basil": "asset/img/plants/photo-1618375569909-3c8616cf7733-d20b2d.avif",
  "mawar": "asset/img/plants/photo-1496062031456-07b8f162a322-2f0326.avif",
  "matahari": "asset/img/plants/photo-1470509037663-253afd7f0f51-02f662.avif",
  "mangga": "asset/img/plants/photo-1553279768-865429fa0078-541eeb.avif",
  "jeruk": "asset/img/plants/photo-1611080626919-7cf5a9dbab5b-2280bd.avif",
  "alpukat": "asset/img/plants/photo-1523049673857-eb18f1d7b578-c9f2c5.avif",
  "lavender": "asset/img/postingan/photo-1499002238440-d264edd596ec-7f376d.avif",
  "mint": "asset/img/plants/photo-1628556270448-4d4e4148e1b1-d7ffc2.avif",
  "lidah-buaya": "asset/img/plants/650b15cb5dadc-f17873.jpg",
  "anggrek": "asset/img/postingan/photo-1567225557594-88d73e55f2cb-154b95.avif",
  "kemangi": "asset/img/plants/ilustrasi-tanaman-kemangi-atau-ocimum-sanctum-1746512743013-bbab7a.jpg",
  "sukulen": "asset/img/postingan/images-0790a6.jpg",

  "bawang-merah": "asset/img/plants/bawang-20merah-79f725.jpg",
  "daun-pandan": "asset/img/plants/daun-20pandan-cdc156.jpg",
  "semangka": "asset/img/plants/semangka-3a913b.jpg",
  "nanas-madu": "asset/img/plants/nanas-20madu-c660db.jpg",
  "melon": "asset/img/plants/melon-885ac1.jpg",
  "okra": "asset/img/plants/okra-b655dd.jpg",
  "durian": "asset/img/plants/durian-a018c5.jpg",
  "petai": "asset/img/plants/petai-01293b.jpg",
  "kakao": "asset/img/plants/kakao-5dd124.jpg",
  "singkong": "asset/img/plants/singkong-383def.jpg",
  "labu-siam": "asset/img/plants/labu-20siam-031d02.jpg",
  "manggis": "asset/img/plants/manggis-ca32c7.jpg",
  "rambutan": "asset/img/plants/rambutan-5924a5.jpg",
  "salak": "asset/img/plants/salak-3c8d74.jpg",
  "sirsak": "asset/img/plants/sirsak-6fa20c.jpg",
  "kunyit": "asset/img/plants/kunyit-9f2db8.jpg",
  "sereh": "asset/img/plants/sereh-89da0a.jpg",
  "sukun": "asset/img/plants/sukun-cd9b76.jpg",
  "jambu-air": "asset/img/plants/jambu-20air-18bd4d.jpg",
};

window.PLANT_IMAGES = PLANT_IMAGES;
window.getPlantImage = function(plantId){
  return PLANT_IMAGES[plantId] || PLANT_IMAGES.default;
};

if(Object.keys(PLANT_IMAGES).length - 1 !== PLANTS.length){
  throw new Error(`Mapping gambar tanaman tidak lengkap: ${Object.keys(PLANT_IMAGES).length - 1}/${PLANTS.length}`);
}
