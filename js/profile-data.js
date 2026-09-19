/* ═══════════════════════════════════════════════════════
   FloraVerse — profile-data.js
   Single source of truth for profile page data.
   Exposes: window.FloraVerse.profileData
   localStorage: floraverse:profile:v1
   ═══════════════════════════════════════════════════════ */
window.FloraVerse = window.FloraVerse || {};

window.FloraVerse.profileData = {
  user: {
    name: 'Izra',
    tagline: 'Urban Gardener · Plant Keeper',
    bio: 'Pemula yang jatuh cinta pada cabai dan sukulen. Berkebun di balkon 2x1m — belajar, berbagi, panen.',
    joined: 'Mar 2026', place: 'Balkon 2x1m', levelXp: 500
  },
  stages: ['Menanam', 'Tumbuh', 'Berbunga', 'Panen'],
  statusStage: { Seed: 0, Growing: 1, Flowering: 2, Harvest: 3 },
  plants: [
    { id: 'cabai',    name: 'Cabai Rawit',    latin: 'Capsicum frutescens',   cat: 'Sayuran', emoji: '🌶️', day: 28,  status: 'Growing',   progress: 45 },
    { id: 'tomat',    name: 'Tomat Cherry',   latin: 'Solanum lycopersicum',  cat: 'Buah',    emoji: '🍅', day: 42,  status: 'Flowering', progress: 70 },
    { id: 'selada',   name: 'Selada Romaine', latin: 'Lactuca sativa',        cat: 'Sayuran', emoji: '🥬', day: 18,  status: 'Growing',   progress: 30 },
    { id: 'basil',    name: 'Basil',          latin: 'Ocimum basilicum',      cat: 'Herbal',  emoji: '🌿', day: 35,  status: 'Growing',   progress: 55 },
    { id: 'matahari', name: 'Bunga Matahari', latin: 'Helianthus annuus',     cat: 'Bunga',   emoji: '🌻', day: 52,  status: 'Flowering', progress: 80 },
    { id: 'kaktus',   name: 'Kaktus Mini',    latin: 'Cactaceae',             cat: 'Sukulen', emoji: '🌵', day: 120, status: 'Growing',   progress: 35 }
  ],
  tasks: [
    { id: 't-cabai',    text: 'Siram Cabai Rawit',            icon: '💧' },
    { id: 't-matahari', text: 'Beri pupuk Bunga Matahari',    icon: '🧪' },
    { id: 't-tomat',    text: 'Cek hama daun Tomat Cherry',   icon: '🔍' }
  ],
  taskXp: 10, taskGp: 5, weeklyGoal: 5,
  communities: [
    { name: 'Pecinta Cabai',          members: 1240, emoji: '🌶️', cat: 'Sayuran', role: 'Member',    active: '2 jam lalu' },
    { name: 'Hidroponik Indonesia',   members: 2100, emoji: '💧', cat: 'Herbal',  role: 'Member',    active: '35 menit lalu' },
    { name: 'Cactus & Succulent ID',  members: 3200, emoji: '🌵', cat: 'Sukulen', role: 'Moderator', active: '1 hari lalu' },
    { name: 'Home Gardening Pemula',  members: 2650, emoji: '🌱', cat: 'Sayuran', role: 'Member',    active: '5 jam lalu' }
  ],
  badges: [
    { id: 'sprout',   name: 'First Sprout',      emoji: '🌱', earned: true,  date: '2026-03-14', req: 'Tanam tanaman pertamamu.' },
    { id: 'water',    name: 'Water Wizard',      emoji: '💧', earned: true,  date: '2026-04-02', req: 'Siram tanaman 30 kali.' },
    { id: 'explorer', name: 'Garden Explorer',   emoji: '🧭', earned: true,  date: '2026-05-20', req: 'Buka 5 panduan berbeda.' },
    { id: 'helper',   name: 'Community Helper',  emoji: '🤝', earned: true,  date: '2026-08-30', req: 'Bantu jawab 10 pertanyaan di komunitas.' },
    { id: 'chili',    name: 'Chili Champion',    emoji: '🌶️', earned: false, date: '',           req: 'Panen cabai sebanyak 3 kali.' },
    { id: 'thumb',    name: 'Green Thumb',       emoji: '🌿', earned: false, date: '',           req: 'Rawat 10 tanaman sekaligus.' },
    { id: 'harvest',  name: 'Harvest Hero',      emoji: '🧺', earned: false, date: '',           req: 'Panen 10 tanaman berbeda.' },
    { id: 'parent',   name: 'Plant Parent',      emoji: '🪴', earned: false, date: '',           req: 'Jaga satu tanaman sampai 150 hari.' }
  ],
  guides: [
    ['Cara menyemai cabai rawit dari biji', 'Sayuran', 2140, 6],
    ['Media tanam ringan untuk balkon sempit', 'Sayuran', 1820, 14],
    ['Jadwal siram sukulen agar akar tidak busuk', 'Sukulen', 3050, 22],
    ['Pupuk organik dari sisa dapur', 'Sayuran', 1490, 30],
    ['Mengatasi kutu daun pada tomat cherry', 'Buah', 980, 41],
    ['Menanam basil di pot kecil', 'Herbal', 1210, 48],
    ['Bunga matahari mini: dari biji sampai mekar', 'Bunga', 1730, 55],
    ['Memilih pot dengan drainase yang benar', 'Sayuran', 860, 63],
    ['Berapa jam cahaya matahari yang dibutuhkan tanaman?', 'Sayuran', 2410, 70],
    ['Pangkas cabai agar bercabang dan lebat', 'Sayuran', 1120, 78],
    ['Kompos ember untuk pemula', 'Sayuran', 1950, 86],
    ['Selada romaine: panen daun bertahap', 'Sayuran', 740, 94],
    ['Mengenali tanda kekurangan nitrogen', 'Sayuran', 690, 102],
    ['Vertical garden dari botol bekas', 'Herbal', 2670, 110],
    ['Menyiram saat musim hujan', 'Sayuran', 520, 118],
    ['Stek batang mint dalam air', 'Herbal', 1340, 126],
    ['Cara menyerbuki tomat secara manual', 'Buah', 810, 134],
    ['Rutinitas 10 menit merawat kebun balkon', 'Sayuran', 2280, 142]
  ],
  acts: [
    { t: 'water',  text: 'Menyiram Tomat Cherry',                                        min: 180 },
    { t: 'guide',  text: 'Menerbitkan panduan "Rutinitas 10 menit merawat kebun balkon"', min: 60 * 26 },
    { t: 'badge',  text: 'Mendapat badge Community Helper',                              min: 60 * 50 },
    { t: 'join',   text: 'Bergabung ke Home Gardening Pemula',                           min: 60 * 24 * 4 },
    { t: 'water',  text: 'Menyiram Bunga Matahari',                                      min: 60 * 24 * 5 },
    { t: 'level',  text: 'Naik ke Level 8',                                              min: 60 * 24 * 6 },
    { t: 'plant',  text: 'Menanam Selada Romaine',                                       min: 60 * 24 * 18 },
    { t: 'harvest',text: 'Memanen Kangkung dari pot balkon',                             min: 60 * 24 * 25 }
  ]
};
