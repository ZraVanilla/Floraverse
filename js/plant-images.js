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
const nusantaraSlug = name => name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

Object.entries(NUSANTARA_PLANT_GROUPS).forEach(([kategori, names])=>{
  names.split("|").forEach((nama,index)=>{
    const id=nusantaraSlug(nama);
    if(PLANTS.some(plant=>plant.id===id || plant.nama.toLowerCase()===nama.toLowerCase())) return;
    const easy=NUSANTARA_EASY[index % NUSANTARA_EASY.length];
    const indoor=["Hias","Herbal"].includes(kategori) && index % 3 === 0;
    PLANTS.push({id,nama,ilmiah:"Tanaman Nusantara",kategori,kesulitan:easy,panen:["Bunga","Hias"].includes(kategori)?"-":`${30+(index%8)*15} hari`,cahaya:indoor?"Bright Indirect":index%4===0?"Partial Sun":"Full Sun",air:kategori==="Hias"||kategori==="Pohon buah"?(index%3===0?"Sedang":"Jarang"):(index%3===0?"Banyak":"Sedang"),ph:"6.0–7.0",suhu:"20–32°C",media:kategori==="Hias"?"Media porous":"Tanah gembur + kompos",color:NUSANTARA_COLORS[index%NUSANTARA_COLORS.length],emoji:NUSANTARA_EMOJI[kategori],desc:`${nama} cocok untuk kebun rumah Indonesia dan dapat dimulai dari ${easy.toLowerCase()} dengan media yang sesuai.`,cara:"Pilih media yang gembur, beri cahaya sesuai kebutuhan, dan mulai dari penyiraman secukupnya.",perawat:"Amati daun dan media secara rutin; sesuaikan air dan pupuk dengan pertumbuhannya.",hama:"Pantau kutu daun, ulat, dan jamur.",tips:"Mulai dari pot yang memiliki drainase baik.",wilayah:"Nusantara",rating:4.3+(index%6)/10,buyers:80+(index%12)*35});
  });
});
PLANTS.forEach(plant=>{plant.kelembapan=plant.kelembapan||(["Hias","Herbal"].includes(plant.kategori)?"Sedang":"Sedang–tinggi");plant.ukuran=plant.ukuran||(["Pohon buah","Pangan"].includes(plant.kategori)?"Besar":["Hias","Bunga"].includes(plant.kategori)?"Kecil–sedang":"Sedang");plant.lokasi=plant.lokasi||(["Hias"].includes(plant.kategori)?"Dalam rumah, teras":["Pohon buah","Pangan"].includes(plant.kategori)?"Halaman, lahan":"Balkon, halaman")});

const PLANT_IMAGES = {
  default: "https://commons.wikimedia.org/wiki/Special:FilePath/Plant.jpg?width=640",

  "cabai-rawit": "https://images.unsplash.com/photo-1588252303782-cb80119abd6d?auto=format&fit=crop&w=640&q=80",
  "cabai-merah": "https://sukamenak-cikeusal.desa.id/wp-content/uploads/2023/08/62bb1bb0b7595.jpg",
  "tomat": "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=640&q=80",
  "selada": "https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?auto=format&fit=crop&w=640&q=80",
  "bayam": "https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=640&q=80",
  "kangkung": "https://unair.ac.id/wp-content/uploads/2019/12/Ilustrasi-oleh-masandy-com.jpg",
  "wortel": "https://images.unsplash.com/photo-1445282768818-728615cc910a?auto=format&fit=crop&w=640&q=80",
  "stroberi": "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=640&q=80",
  "timun": "https://images.unsplash.com/photo-1604977042946-1eecc30f269e?auto=format&fit=crop&w=640&q=80",
  "terong": "https://images.unsplash.com/photo-1615484477778-ca3b77940c25?auto=format&fit=crop&w=640&q=80",
  "basil": "https://images.unsplash.com/photo-1618375569909-3c8616cf7733?auto=format&fit=crop&w=640&q=80",
  "mawar": "https://images.unsplash.com/photo-1496062031456-07b8f162a322?auto=format&fit=crop&w=640&q=80",
  "matahari": "https://images.unsplash.com/photo-1470509037663-253afd7f0f51?auto=format&fit=crop&w=640&q=80",
  "mangga": "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=640&q=80",
  "jeruk": "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?auto=format&fit=crop&w=640&q=80",
  "alpukat": "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&w=640&q=80",
  "lavender": "https://images.unsplash.com/photo-1499002238440-d264edd596ec?auto=format&fit=crop&w=640&q=80",
  "mint": "https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?auto=format&fit=crop&w=640&q=80",
  "lidah-buaya": "https://asset.kompas.com/crops/Bs1FyeWLdjfA2KRSsr8LMnd7bAg=/0x0:1000x667/1200x800/data/photo/2023/09/20/650b15cb5dadc.jpg",
  "anggrek": "https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?auto=format&fit=crop&w=640&q=80",
  "kemangi": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiHua-CU9liuLZ3jiefJ7PjbjOdRhnQCfHyX-S5BUhZuj0Iy2Y0513SmxJFv9ye4Vx_jB82-wqrn4JmHf6eXT_cFWGC4ayQIjRJrZ7IQ7x1uUEE96ilgzEiDPY9XJpK8Ct7ix61nCwxazCRLZMq3BB9YcmZJlkIcbUq_vtjWr4FPJVt7C2szd1xm5qXzKJV/s720/ilustrasi-tanaman-kemangi-atau-ocimum-sanctum-1746512743013_43.jpeg",
  "sukulen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyKx6T_Ltu49caRJKsluFOwS3Rcja0jEyBjGIVyv99o28tIWkyrT-s3is&s=10",

  "bawang-merah": "https://commons.wikimedia.org/wiki/Special:FilePath/Bawang%20Merah.jpg?width=640",
  "daun-pandan": "https://commons.wikimedia.org/wiki/Special:FilePath/Daun%20Pandan.jpg?width=640",
  "semangka": "https://commons.wikimedia.org/wiki/Special:FilePath/Semangka.jpg?width=640",
  "nanas-madu": "https://commons.wikimedia.org/wiki/Special:FilePath/Nanas%20Madu.jpg?width=640",
  "melon": "https://commons.wikimedia.org/wiki/Special:FilePath/Melon.jpg?width=640",
  "okra": "https://commons.wikimedia.org/wiki/Special:FilePath/Okra.jpg?width=640",
  "durian": "https://commons.wikimedia.org/wiki/Special:FilePath/Durian.jpg?width=640",
  "petai": "https://commons.wikimedia.org/wiki/Special:FilePath/Petai.jpg?width=640",
  "kakao": "https://commons.wikimedia.org/wiki/Special:FilePath/Kakao.jpg?width=640",
  "singkong": "https://commons.wikimedia.org/wiki/Special:FilePath/Singkong.jpg?width=640",
  "labu-siam": "https://commons.wikimedia.org/wiki/Special:FilePath/Labu%20Siam.jpg?width=640",
  "manggis": "https://commons.wikimedia.org/wiki/Special:FilePath/Manggis.jpg?width=640",
  "rambutan": "https://commons.wikimedia.org/wiki/Special:FilePath/Rambutan.jpg?width=640",
  "salak": "https://commons.wikimedia.org/wiki/Special:FilePath/Salak.jpg?width=640",
  "sirsak": "https://commons.wikimedia.org/wiki/Special:FilePath/Sirsak.jpg?width=640",
  "kunyit": "https://commons.wikimedia.org/wiki/Special:FilePath/Kunyit.jpg?width=640",
  "sereh": "https://commons.wikimedia.org/wiki/Special:FilePath/Sereh.jpg?width=640",
  "sukun": "https://commons.wikimedia.org/wiki/Special:FilePath/Sukun.jpg?width=640",
  "jambu-air": "https://commons.wikimedia.org/wiki/Special:FilePath/Jambu%20Air.jpg?width=640",
};

window.PLANT_IMAGES = PLANT_IMAGES;
window.getPlantImage = function(plantId){
  return PLANT_IMAGES[plantId] || PLANT_IMAGES.default;
};

if(Object.keys(PLANT_IMAGES).length - 1 !== PLANTS.length){
  throw new Error(`Mapping gambar tanaman tidak lengkap: ${Object.keys(PLANT_IMAGES).length - 1}/${PLANTS.length}`);
}
