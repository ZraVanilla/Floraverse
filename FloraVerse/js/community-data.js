/* Shared community data. communitypage.html lists the root posts; community_talkpage.html renders one thread as a root system. */
const communityRoots=[
 {id:1,title:'Why are my Monstera leaves turning yellow?',content:'Two lower leaves have faded this week. I water once a week and it sits near a bright window.',author:'Rani',time:'12 min ago',avatar:'🌿',reactions:18,replies:12,tag:'Monstera care'},
 {id:2,title:"What's the best soil mix for Monstera?",content:'I just repotted mine and want the mix to drain well while still holding moisture.',author:'Amir',time:'25 min ago',avatar:'💧',reactions:12,replies:8,tag:'Soil & repotting'},
 {id:3,title:'My plant keeps growing aerial roots...',content:'Are they normal? Should I guide them into the pot or leave them to climb?',author:'Fia',time:'40 min ago',avatar:'🪴',reactions:23,replies:15,tag:'Monstera care'},
 {id:4,title:'Best plants for beginners?',content:'I want something low maintenance that still feels alive in a small apartment.',author:'Maya',time:'1 hour ago',avatar:'🪟',reactions:31,replies:18,tag:'Beginner'},
 {id:5,title:"What's this plant growing by my window?",content:'It appeared in an old pot. Leaves are thick, glossy, and heart-shaped.',author:'Dito',time:'16 min ago',avatar:'🫧',reactions:9,replies:8,tag:'Plant ID'}
];
const communityComments=[
 /* Thread 1 — Rani's yellow Monstera */
 {id:'c1',rootPostId:1,parentId:1,type:'reply',author:'Amir',time:'10 min ago',avatar:'💧',text:'It may be overwatering. Let the soil dry first.',meta:'6 reactions · 2 replies'},
 {id:'c2',rootPostId:1,parentId:1,type:'reply',author:'Nisa',time:'8 min ago',avatar:'☀️',text:'Check the lighting — mine improved near a bright window.',meta:'9 reactions · 3 replies'},
 {id:'c3',rootPostId:1,parentId:1,type:'reply',author:'Fia',time:'5 min ago',avatar:'🪴',text:'Mine did that after I changed pots. Root stress can show up later.',meta:'4 reactions · 1 reply'},
 {id:'c1a',rootPostId:1,parentId:'c1',type:'reply',author:'Rani',time:'7 min ago',avatar:'🌱',text:'That was it for me. The roots were sitting in water.',meta:'3 reactions · 1 reply'},
 {id:'c1b',rootPostId:1,parentId:'c1',type:'reply',author:'Dito',time:'6 min ago',avatar:'🫧',text:'A pot with drainage holes help a lot.',meta:'2 reactions · 1 reply'},
 {id:'c2a',rootPostId:1,parentId:'c2',type:'reply',author:'Maya',time:'4 min ago',avatar:'🪟',text:'Bright indirect light made the biggest difference for mine.',meta:'5 reactions · 1 reply'},
 {id:'c2b',rootPostId:1,parentId:'c2',type:'reply',author:'Fia',time:'3 min ago',avatar:'🍃',text:'Avoid sudden moves; let it adjust for a week.',meta:'1 reaction · 1 reply'},
 {id:'c3a',rootPostId:1,parentId:'c3',type:'reply',author:'Amir',time:'2 min ago',avatar:'🌾',text:'Damaged roots can make older leaves yellow first.',meta:'4 reactions · 1 reply'},
 {id:'c1a1',rootPostId:1,parentId:'c1a',type:'reply',author:'Nisa',time:'now',avatar:'🪴',text:'I will check mine tonight. Thank you!',meta:'1 reaction · 1 reply'},
 {id:'c1a1a',rootPostId:1,parentId:'c1a1',type:'reply',author:'Amir',time:'now',avatar:'💧',text:'Good luck! Let the top inch dry out before watering.',meta:'1 reaction'},
 {id:'c1b1',rootPostId:1,parentId:'c1b',type:'reply',author:'Nisa',time:'5 min ago',avatar:'🪴',text:'Yes! Terracotta pots help the soil dry faster.',meta:'2 reactions'},
 {id:'c2c',rootPostId:1,parentId:'c2',type:'reply',author:'Dito',time:'2 min ago',avatar:'🫧',text:'Also check the pot is not too big for the plant.',meta:'1 reaction'},
 {id:'c2a1',rootPostId:1,parentId:'c2a',type:'reply',author:'Rani',time:'3 min ago',avatar:'🌱',text:'I moved mine closer to the window today.',meta:'1 reaction'},
 {id:'c2b1',rootPostId:1,parentId:'c2b',type:'reply',author:'Maya',time:'2 min ago',avatar:'🪟',text:'It helps to rotate the pot weekly as well.',meta:'1 reaction'},
 {id:'c3a1',rootPostId:1,parentId:'c3a',type:'reply',author:'Fia',time:'1 min ago',avatar:'🍃',text:'That matches what I saw — the older leaves yellowed first.',meta:'2 reactions'},
 /* Thread 2 — Amir's soil mix */
 {id:'e1',rootPostId:2,parentId:2,type:'reply',author:'Nisa',time:'20 min ago',avatar:'🪴',text:'Try coco coir + perlite + orchid bark for good drainage.',meta:'5 reactions · 1 reply'},
 {id:'e1a',rootPostId:2,parentId:'e1',type:'reply',author:'Dito',time:'18 min ago',avatar:'🫧',text:'Orchid bark really opens up the mix.',meta:'2 reactions'},
 {id:'e2',rootPostId:2,parentId:2,type:'reply',author:'Rani',time:'14 min ago',avatar:'🌱',text:'I add a handful of worm castings too.',meta:'4 reactions'},
 {id:'e3',rootPostId:2,parentId:2,type:'reply',author:'Maya',time:'9 min ago',avatar:'🪟',text:'Avoid heavy garden soil — it stays soggy for days.',meta:'3 reactions'},
 /* Thread 3 — Fia's aerial roots */
 {id:'f1',rootPostId:3,parentId:3,type:'reply',author:'Maya',time:'35 min ago',avatar:'🪟',text:'Totally normal! They help the plant climb.',meta:'7 reactions · 1 reply'},
 {id:'f1a',rootPostId:3,parentId:'f1',type:'reply',author:'Fia',time:'30 min ago',avatar:'🍃',text:'So should I give it a moss pole?',meta:'1 reaction'},
 {id:'f2',rootPostId:3,parentId:3,type:'reply',author:'Amir',time:'22 min ago',avatar:'💧',text:'You can guide them into the pot or onto a support.',meta:'5 reactions'},
 {id:'f3',rootPostId:3,parentId:3,type:'reply',author:'Rani',time:'12 min ago',avatar:'🌱',text:'Mine wrapped around the shelf — looks great.',meta:'6 reactions'},
 /* Thread 4 — Maya's beginner question */
 {id:'g1',rootPostId:4,parentId:4,type:'reply',author:'Amir',time:'50 min ago',avatar:'💧',text:'Pothos or snake plant — both are forgiving.',meta:'8 reactions · 1 reply'},
 {id:'g1a',rootPostId:4,parentId:'g1',type:'reply',author:'Maya',time:'41 min ago',avatar:'🪟',text:'Snake plant it is, then!',meta:'2 reactions'},
 {id:'g2',rootPostId:4,parentId:4,type:'reply',author:'Fia',time:'33 min ago',avatar:'🍃',text:'ZZ plant barely needs any light.',meta:'6 reactions'},
 {id:'g3',rootPostId:4,parentId:4,type:'reply',author:'Dito',time:'20 min ago',avatar:'🫧',text:'Spider plants grow fast and share babies.',meta:'5 reactions'},
 /* Thread 5 — Dito's plant ID */
 {id:'h1',rootPostId:5,parentId:5,type:'reply',author:'Nisa',time:'12 min ago',avatar:'☀️',text:'Heart-shaped glossy leaves sound like a philodendron.',meta:'4 reactions · 1 reply'},
 {id:'h1a',rootPostId:5,parentId:'h1',type:'reply',author:'Dito',time:'8 min ago',avatar:'🫧',text:'It has white streaks on the leaves.',meta:'1 reaction'},
 {id:'h2',rootPostId:5,parentId:5,type:'reply',author:'Fia',time:'5 min ago',avatar:'🪴',text:'White streaks — that could be a variegated pothos.',meta:'3 reactions'}
];