/* FloraVerse - journey.js - Plant Journey storytelling & progress helpers */
const JOURNEY_STORY = {
  "cabai-rawit":[
    {day:1, title:"Benih kecil memulai perjalanannya.", desc:"Semai 6 benih Cabai Rawit di rockwool. Jaga lembap."},
    {day:7, title:"Daun pertama muncul!", desc:"Kecambah 5/6. Pindah ke tempat terang tapi tidak terik."},
    {day:14, title:"Akar mulai kuat.", desc:"Daun sejati tumbuh. Siram pagi, beri pupuk ringan."},
    {day:28, title:"Cabai tumbuh semakin kuat.", desc:"Tinggi 12cm, daun rimbun. Cek hama bawah daun."},
    {day:48, title:"Bunga pertama akhirnya muncul!", desc:"Kurangi nitrogen, tambah K. Jangan goyang bunga."},
    {day:70, title:"Buah hijau mulai terbentuk.", desc:"Bungkus jika ada lalat buah."},
    {day:85, title:"Saatnya panen! 🌶️", desc:"Petik saat merah mengkilap. Panen bertahap lebih lama."}
  ],
  "tomat":[
    {day:1, title:"Semai Tomat Cherry.", desc:"Semai indoor, jaga suhu 20-28°C."},
    {day:14, title:"Pindah tanam & ajir.", desc:"Beri ajir bambu, ikat longgar."},
    {day:35, title:"Bunga pertama mekar.", desc:"Tambah kalsium boron cegah blossom end rot."},
    {day:60, title:"Buah hijau menggantung.", desc:"Pangkas tunas air tiap minggu."},
    {day:80, title:"Merah mengkilap - panen!", desc:"Panen pagi, simpan suhu ruang."}
  ]
};

function buildPlantJourney(plant){
  const panen=plant.panen && plant.panen!=="-" ? `Target panen ${plant.panen}.` : "Fokus pada pertumbuhan dan kesehatan tanaman.";
  return [
    {day:1, title:`Mulai menanam ${plant.nama}.`, desc:`Siapkan ${plant.media||"media tanam"} dan beri ${plant.cahaya||"cahaya yang sesuai"}.`},
    {day:7, title:"Akar mulai beradaptasi.", desc:`Jaga kelembapan ${plant.kelembapan||"media"} dan hindari genangan.`},
    {day:21, title:"Pertumbuhan mulai terlihat.", desc:`Amati daun dan sesuaikan penyiraman ${plant.air||"secukupnya"}.`},
    {day:35, title:"Tanaman memasuki fase aktif.", desc:`Berikan perawatan ${plant.kesulitan?.toLowerCase()||"rutin"} sesuai kebutuhan.`},
    {day:60, title:"Perkembangan semakin kuat.", desc:`${plant.tips||"Periksa hama dan kondisi media secara berkala."}`},
    {day:90, title:"Saatnya mengevaluasi hasil.", desc:panen}
  ];
}

PLANTS.forEach(plant=>{
  if(!JOURNEY_STORY[plant.id]) JOURNEY_STORY[plant.id]=buildPlantJourney(plant);
});

function getStory(plantId, day){
  const arr = JOURNEY_STORY[plantId] || [{day:1, title:"Perjalanan tanaman dimulai.", desc:"Amati cahaya, air, dan kondisi media secara rutin."}];
  // find closest <= day
  let cur = arr[0];
  for(let s of arr){ if(s.day <= day) cur=s; }
  return cur;
}

function xpForAction(action){
  const map={ "addPlant":10, "guide":20, "journal":10, "help":15, "journey":50, "challenge":40, "task":10 };
  return map[action]||5;
}
