/* Per-plant shop coverage for the expanded Nusantara catalog. */
const SHOP_COMMON_EXTRAS = [
  ["Pot Terracotta 15cm","Pot",18000,"🪴"],["Pot Terracotta 25cm","Pot",32000,"🪴"],["Polybag Besar 40x40","Pot",22000,"🪴"],
  ["Media Tanah Organik 10kg","Media Tanam",28000,"🌿"],["Cocopeat 5kg","Media Tanam",24000,"🥥"],["Sekam Bakar 5kg","Media Tanam",18000,"🌾"],
  ["Kompos Kascing 2kg","Pupuk",22000,"♻️"],["Pupuk NPK Buah 1kg","Pupuk",35000,"🧪"],["Pupuk Daun Organik 500ml","Pupuk",24000,"🧪"],
  ["Sekop Tangan Stainless","Tools",28000,"🪓"],["Sarung Tangan Kebun","Tools",18000,"🧤"],["Sprayer Tekan 5L","Tools",65000,"💦"],
  ["Label Tanaman 20pcs","Tools",12000,"🏷️"],["Tray Semai 128 Lubang","Tools",26000,"🧊"],["pH Meter Tanah Digital","Tools",85000,"📏"],
  ["Kit Hidroponik Wick 12 Lubang","Hydroponics",95000,"💧"]
];

let shopGeneratedId=1000;
PLANTS.forEach((plant, index)=>{
  const seedCategory=["Hias","Pohon buah"].includes(plant.kategori) ? "Bibit" : "Benih";
  const seedLabel=seedCategory==="Bibit" ? "Bibit" : "Benih";
  PRODUCTS.push({
    id:`nusantara-product-${shopGeneratedId++}`,
    nama:`${seedLabel} ${plant.nama}`,
    kategori:seedCategory,
    harga:seedCategory==="Bibit" ? 18000 + (index%5)*7000 : 9000 + (index%6)*3000,
    rating:4.4 + (index%6)/10,
    ulas:40 + (index%9)*18,
    badge:index%7===0 ? "Beginner Pick" : index%11===0 ? "Popular" : "",
    emoji:plant.emoji, img:PRODUCT_PHOTOS[seedCategory] || null, related:plant.id, stok:30 + (index%8)*10
  });
  PRODUCTS.push({
    id:`nusantara-product-${shopGeneratedId++}`,
    nama:`Paket Media & Nutrisi ${plant.nama}`,
    kategori:"Bundling",
    harga:38000 + (index%7)*6000,
    rating:4.5 + (index%5)/10,
    ulas:25 + (index%8)*15,
    badge:index%9===0 ? "Recommended" : "",
    emoji:"🎁", img:PRODUCT_PHOTOS.Bundling || null, related:plant.id, stok:15 + (index%6)*5
  });
});

SHOP_COMMON_EXTRAS.forEach(([nama,kategori,harga,emoji], index)=>{
  PRODUCTS.push({
    id:`common-product-${index+1}`, nama, kategori, harga, rating:4.5 + (index%5)/10,
    ulas:65 + index*11, badge:index%4===0 ? "Recommended" : "", emoji, img:PRODUCT_PHOTOS[kategori] || null, related:"", stok:40 + index*5
  });
});

PRODUCTS.forEach(product=>{
  const plant=PLANTS.find(p=>p.id===product.related);
  product.isi=product.isi || (product.kategori==="Benih" ? "1 sachet benih" : product.kategori==="Bibit" ? "1 bibit siap tanam" : product.kategori==="Bundling" ? "1 paket" : "1 unit");
  product.manfaat=product.manfaat || (plant ? `Mendukung perawatan ${plant.nama}` : "Membantu perawatan kebun sehari-hari");
  product.cocokUntuk=product.cocokUntuk || (plant ? plant.nama : "Beragam tanaman");
});
