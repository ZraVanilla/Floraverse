/* Garden dummy - FloraVerse Kebunku */
const MY_GARDEN = [
  {
    id:"g1", plantId:"cabai-rawit", nama:"Cabai Rawit", emoji:"🌶️", color:"#FF718D",
    day:28, stage:"Growing", stageIndex:2,
    stages:["Seed","Seedling","Growing","Flowering","Fruiting","Harvest"],
    health:"Healthy", water:"Moderate", light:"Full Sun", fert:"Recommended",
    progress:45,
    tasks:[
      {id:"t1", text:"Siram pagi (250ml)", done:true},
      {id:"t2", text:"Cek hama daun bawah", done:false},
      {id:"t3", text:"Beri pupuk organik (5gr)", done:false}
    ],
    journal:[
      {date:"Hari 1", note:"Semai 6 benih, tutup tipis."},
      {date:"Hari 7", note:"Berkecambah 5/6 🌱"},
      {date:"Hari 21", note:"Pindah tanam ke pot 20cm."},
      {date:"Hari 28", note:"Daun 8 helai, tinggi 12cm."}
    ]
  },
  {
    id:"g2", plantId:"tomat", nama:"Tomat Cherry", emoji:"🍅", color:"#FF9B70",
    day:42, stage:"Flowering", stageIndex:3,
    stages:["Seed","Seedling","Growing","Flowering","Fruiting","Harvest"],
    health:"Needs Fertilizer", water:"Moderate", light:"Full Sun", fert:"Needed",
    progress:68,
    tasks:[
      {id:"t1", text:"Tambah kalsium boron", done:false},
      {id:"t2", text:"Ikat ke ajir", done:true},
      {id:"t3", text:"Pangkas tunas air", done:false}
    ],
    journal:[
      {date:"Hari 1", note:"Semai indoor."},
      {date:"Hari 14", note:"Pindah tanam, beri ajir."},
      {date:"Hari 35", note:"Bunga pertama muncul!"}
    ]
  },
  {
    id:"g3", plantId:"selada", nama:"Selada Romaine", emoji:"🥬", color:"#8BCB8A",
    day:18, stage:"Growing", stageIndex:2,
    stages:["Seed","Seedling","Growing","Harvest"],
    health:"Healthy", water:"Banyak", light:"Partial Sun", fert:"AB Mix 800ppm",
    progress:55,
    tasks:[
      {id:"t1", text:"Cek pH 6.0", done:false},
      {id:"t2", text:"Tambah nutrisi", done:false}
    ],
    journal:[
      {date:"Hari 7", note:"Pindah ke netpot hidroponik."},
      {date:"Hari 18", note:"Daun 6 helai, segar."}
    ]
  },
  {
    id:"g4", plantId:"basil", nama:"Basil", emoji:"🌿", color:"#8BCB8A",
    day:35, stage:"Growing", stageIndex:2,
    stages:["Seed","Seedling","Growing","Harvest"],
    health:"Needs Water", water:"Sedang", light:"Full Sun", fert:"Ringan",
    progress:72,
    tasks:[
      {id:"t1", text:"Siram sekarang 💧", done:false},
      {id:"t2", text:"Cubit pucuk", done:true}
    ],
    journal:[
      {date:"Hari 10", note:"Tumbuh rimbun."},
      {date:"Hari 35", note:"Wangi kuat, siap panen pucuk."}
    ]
  },
  {
    id:"g5", plantId:"matahari", nama:"Bunga Matahari", emoji:"🌻", color:"#FFD45C",
    day:52, stage:"Flowering", stageIndex:3,
    stages:["Seed","Seedling","Growing","Flowering","Harvest"],
    health:"Healthy", water:"Sedang", light:"Full Sun", fert:"Ringan",
    progress:80,
    tasks:[
      {id:"t1", text:"Beri ajir", done:true}
    ],
    journal:[
      {date:"Hari 52", note:"Kuncup mulai terbuka!"}
    ]
  },
  {
    id:"g6", plantId:"kaktus", nama:"Kaktus Mini", emoji:"🌵", color:"#8BCB8A",
    day:120, stage:"Growing", stageIndex:1,
    stages:["Seed","Growing"],
    health:"Healthy", water:"Jarang", light:"Full Sun", fert:"Tidak perlu",
    progress:90,
    tasks:[
      {id:"t1", text:"Siram 7 hari lagi", done:true}
    ],
    journal:[
      {date:"Hari 1", note:"Adopsi kaktus mini."},
      {date:"Hari 120", note:"Tumbuh 2 anakan baru."}
    ]
  }
];

const GARDEN_PULSE = [
  {plant:"Cabai Rawit", plantId:"cabai-rawit", status:"Perlu disiram", icon:"💧", color:"#6FA8FF", action:"Siram sekarang"},
  {plant:"Tomat Cherry", plantId:"tomat", status:"Waktunya pemupukan", icon:"🧪", color:"#FF9B70", action:"Beri pupuk"},
  {plant:"Kemangi", plantId:"kemangi", status:"Sehat", icon:"🟢", color:"#8BCB8A", action:"Lihat"},
];

function persistGarden(){
  localStorage.setItem('fv_garden_state', JSON.stringify(MY_GARDEN));
}
let savedGarden=null;
try{ savedGarden=JSON.parse(localStorage.getItem('fv_garden_state')||'null'); }catch(error){ localStorage.removeItem('fv_garden_state'); }
if(Array.isArray(savedGarden)){
  savedGarden.forEach(saved=>{
    const current=MY_GARDEN.find(plant=>plant.id===saved.id);
    if(current) Object.assign(current, saved);
  });
}
