/* Single source of truth for the expanded product catalog and its images. */
const SHOP_COMMON_EXTRAS = [];

const shopSlug=value => value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");

window.PRODUCT_IMAGES = {
  default: "https://loremflickr.com/640/480/gardening?lock=0",
  "benih-cabai-rawit-50-biji": "https://asset.kompas.com/crops/gcV_0a22iNicHYdNP_S5pT3Sppo=/0x0:1000x667/1200x800/data/photo/2022/06/06/629d7a949e846.jpg",
  "benih-tomat-cherry-30-biji": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjBwfWs48TcfXBYEYrkYh710iAje2COCKfGL6wBXokXo7alvM-dp03kT2G&s=10",
  "benih-bunga-matahari-10-biji": "https://images.alodokter.com/dk0z4ums3/image/upload/v1603936303/attached_image/ini-manfaat-biji-bunga-matahari-yang-belum-banyak-diketahui.jpg",
  "benih-selada-romaine": "https://bibitbunga.com/wp-content/uploads/2017/02/Benih-Selada-Romaine-Maximus-100-Pil-Rijk-Zwaan-300x300.jpg",
  "bibit-cabai-rawit-siap-tanam-3-batang": "https://bibitbunga.com/wp-content/uploads/2021/06/rug-1621672163930-0.jpeg.jpg",
  "bibit-tomat-cherry-siap-tanam": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaU8_dwHmG1q1LwPL9E_nKX1HM93xLG1BcXN9nKAs-c-qBXi3xMG7ih6U&s=10",
  "bibit-selada-romaine-siap-tanam": "https://bibitbunga.com/wp-content/uploads/2017/02/Benih-Selada-Romaine-Maximus-100-Pil-Rijk-Zwaan-300x300.jpg",
  "pot-keramik-20cm-putih": "https://images.tokopedia.net/img/cache/700/VqbcmM/2022/2/1/905c9f1b-51d3-46b0-99db-c26705155503.jpg.webp",
  "polybag-25x25-10pcs": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE3SOYpqroUoll3fUbBuZcwHNS6S6A1TUp1Ml2GH9PhB2rMp0-BPxEo6wQ&s=10",
  "pot-gantung-18cm": "https://filebroker-cdn.lazada.co.id/kf/S6a78aa015b804346913246bcc5e32895j.jpg",
  "media-tanam-premium-5kg": "https://cms.gokomodo.com/wp-content/uploads/2023/07/Blog-Media-Tanam-Pot.jpeg",
  "sekam-bakar-3kg": "https://bisatani.com/wp-content/uploads/2023/12/sekam-bakar.jpg",
  "cocopeat-block-650gr": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTko_uSyRHWqu7NPrF8t1D_N2xIhdRa19Z3sPSFwXgqrGUc2mI-V51f3xmc&s=10",
  "kompos-organik-5kg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFn2XlqnmcBvr9AL2kqwyAIeA5nTXGEkZDDKZt42_dJ-Gg8vRckd3Uvh0&s=10",
  "pupuk-organik-cair-500ml": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpIV1SBnnfuE5rHUUXAwMC38vJ3iSP15r-znsVYmzzpE3T3smA6xDAAuFs&s=10",
  "pupuk-kalsium-boron": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiTdbfPVnHbTbuluhN-O4mrekrWaLgZchzT64V1iKMc9yA9vs9UDHzTbQW&s=10",
  "sprayer-2l-biru": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSezpGS6pLJisUHhMBiCjqoZve36XqR5f1Y6JCcAPp3JHcB_RetDBFAboa9&s=10",
  "gunting-tanaman-tajam": "https://img.lazcdn.com/g/p/fbea1ceb21685012c74dedff69872ca3.jpg_720x720q80.jpg",
  "sekop-mini-kayu": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROrsqNkfIFLBki87MotjETHrWE46zohWRnX7U6mSGmCw&s=10",
  "starter-kit-hidroponik-6-lubang": "https://down-id.img.susercontent.com/file/b35375155c0848683dd0b5e9d26c91c1",
  "nutrisi-ab-mix-500ml": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT47nfGAiL5o-RetHSMJdQdRhBo3RSminbNFXIHbMnhlFvaLd-BxmRVFIQ&s=10",
  "netpot-5cm-20pcs": "https://down-id.img.susercontent.com/file/21e6ff47a3cf91b4033cb0f6c753038e",
  "neem-oil-100ml-obat-hama-organik": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReqBX1k0DXGpo9qsH4Pelt48dZt4BDEjWEl6p8Genb8CSC0mLqaWVbOx0&s=10",
  "pupuk-daun-plant-care-spray": "https://p16-oec-sg.ibyteimg.com/tos-alisg-i-aphluv4xwc-sg/6232b1f284354d3399082e1c3d8545d4~tplv-aphluv4xwc-resize-webp:800:1067.webp?dr=15592&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=e1be8f53&idc=my&from=2378011839",
  "anti-hama-organik-spray-250ml": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTph6UWGUSJEn23Dc_VAZ7wniRkKF-7YebpY6lury_JScwYN9seXV6JZTQ&s=10",
  "chili-starter-kit-bundling": "https://asset.kompas.com/crops/gcV_0a22iNicHYdNP_S5pT3Sppo=/0x0:1000x667/1200x800/data/photo/2022/06/06/629d7a949e846.jpg",
  "tomato-starter-kit": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj99I3jrlRbLwLfdt_679a41MJ5pePzHSTlhQnLosgdw&s",
  "herb-starter-kit-basil-mint": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7EtbXENOUMd6kKxo72FVX2ibubnPPFAxDZHJy4V_ubeRv_gzJBgOqCVOx&s=10"
};
