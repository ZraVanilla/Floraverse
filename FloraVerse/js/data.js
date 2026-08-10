const users = [
  {name:'Alya Hijau', color:'#e84b4f'}, {name:'Bima Botani', color:'#3a9bdc'}, {name:'Citra Kebun', color:'#c36bd7'}, {name:'Danu Daun', color:'#ffc943'}
];
const communityThreads = [
  {title:'Daun monstera saya menguning, apa penyebabnya?', user:users[0], replies:18, category:'Perawatan Tanaman'},
  {title:'Bantu identifikasi bunga ungu di halaman rumah', user:users[1], replies:9, category:'Identifikasi Flora'},
  {title:'Panen pertama kebun balkon ukuran 1 meter!', user:users[2], replies:24, category:'Showcase Kebun'},
  {title:'Media tanam ramah lingkungan dari kompos dapur', user:users[3], replies:12, category:'Perawatan Tanaman'},
  {title:'Daftar pohon lokal untuk peneduh pekarangan', user:users[0], replies:31, category:'Aksi Hijau'},
  {title:'Eksperimen menyemai biji bunga matahari', user:users[1], replies:7, category:'Showcase Kebun'}
];
const marketplaceProducts = [
  {name:'Monstera Mini', price:75000, category:'Tanaman', sprite:'leaf'}, {name:'Lidah Mertua', price:45000, category:'Tanaman', sprite:'leaf'}, {name:'Pot Terakota', price:35000, category:'Pot', sprite:'pot'}, {name:'Sekop Kebun Mini', price:28000, category:'Alat', sprite:'tool'}, {name:'Kaktus Bintang', price:42000, category:'Tanaman', sprite:'cactus'}, {name:'Pupuk Kompos', price:30000, category:'Alat', sprite:'bag'}, {name:'Pot Gantung Anyam', price:65000, category:'Pot', sprite:'pot'}, {name:'Benih Marigold', price:18000, category:'Benih', sprite:'flower'}, {name:'Sirih Gading', price:55000, category:'Tanaman', sprite:'leaf'}, {name:'Botol Semprot', price:25000, category:'Alat', sprite:'tool'}
];
const florapediaEntries = [
  {name:'Monstera Deliciosa', latin:'Monstera deliciosa', group:'Tanaman Hias Daun', difficulty:'Mudah', desc:'Daun berlubang yang menyukai cahaya terang tak langsung.'},
  {name:'Lidah Mertua', latin:'Dracaena trifasciata', group:'Sukulen', difficulty:'Mudah', desc:'Penyaring udara tangguh untuk pemula.'},
  {name:'Kembang Sepatu', latin:'Hibiscus rosa-sinensis', group:'Bunga', difficulty:'Sedang', desc:'Bunga tropis cerah yang mengundang kupu-kupu.'},
  {name:'Jahe Merah', latin:'Zingiber officinale', group:'Tanaman Obat', difficulty:'Sedang', desc:'Rimpang hangat yang mudah tumbuh di pot.'},
  {name:'Sirih Gading', latin:'Epipremnum aureum', group:'Tanaman Hias Daun', difficulty:'Mudah', desc:'Sulur hijau kuning untuk sudut teduh.'},
  {name:'Lidah Buaya', latin:'Aloe vera', group:'Sukulen', difficulty:'Mudah', desc:'Daun berdaging dengan manfaat menenangkan.'},
  {name:'Kemangi', latin:'Ocimum basilicum', group:'Tanaman Obat', difficulty:'Mudah', desc:'Aroma segar untuk dapur dan penyerbuk.'},
  {name:'Anggrek Bulan', latin:'Phalaenopsis amabilis', group:'Bunga', difficulty:'Menantang', desc:'Pesona bunga putih yang menyukai kelembapan.'}
];
const donationOrganizations = [
  {name:'Hutan Kita', desc:'Menanam pohon lokal dan memulihkan koridor satwa.', raised:72, target:'Rp50.000.000'},
  {name:'Sahabat Mangrove', desc:'Menjaga pesisir lewat pembibitan mangrove komunitas.', raised:58, target:'Rp35.000.000'},
  {name:'Kebun Sekolah Hijau', desc:'Membawa kebun belajar dan kompos ke ruang kelas.', raised:84, target:'Rp20.000.000'},
  {name:'Benih Nusantara', desc:'Melindungi benih tanaman pangan lokal.', raised:43, target:'Rp45.000.000'}
];
