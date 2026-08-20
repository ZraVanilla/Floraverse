/* Toko tanaman fisik — products sit on wooden shelves like a real nursery. */
const products=[['🪴','Monstera starter','Plants',185000,4.9],['🌵','Desert pebble pot','Pots',75000,4.8],['🌻','Pollinator seed mix','Seeds',45000,4.9],['✂️','Pruning snips','Tools',96000,4.7],['💧','Neem leaf tonic','Plant Care',68000,4.8],['🌿','Trailing pothos','Plants',85000,4.9],['🪴','Terracotta nest','Pots',88000,4.7],['🌱','Herb garden seeds','Seeds',39000,4.8]];
let cart=JSON.parse(localStorage.getItem('floraCart')||'[]');
const shelfUnit=document.querySelector('#shelfUnit');
const rot=['-2deg','1.5deg','-1deg','2deg','0deg','-1.5deg'];
function itemBody(p){
  const c=p[2];
  if(c==='Plants')return '<span class="splant"><i class="leaf a"></i><i class="leaf b"></i><i class="leaf c"></i><i class="stem"></i><i class="pot"></i></span>';
  if(c==='Pots')return '<span class="spot"></span>';
  if(c==='Seeds')return '<span class="packet"><b>'+p[0]+'</b><i>'+p[1].split(' ')[0]+'</i></span>';
  if(c==='Tools')return '<span class="tool">✂️</span>';
  return '<span class="bottle"><b>'+p[0]+'</b></span>';
}
function render(){
  const q=document.querySelector('#shopSearch').value.toLowerCase(),cat=document.querySelector('#categoryFilter').value;
  const list=products.filter(p=>(cat==='all'||p[2]===cat)&&p[1].toLowerCase().includes(q));
  if(!list.length){shelfUnit.innerHTML='<p class="empty">No items found. Try a different leaf.</p>';return}
  const rows=[];
  for(let i=0;i<list.length;i+=4){
    const row=list.slice(i,i+4);
    rows.push('<div class="shelf"><div class="shelf-items">'+row.map(p=>{
      const idx=products.indexOf(p);
      return '<button class="item" data-id="'+idx+'" style="--rt:'+rot[idx%rot.length]+'">'+itemBody(p)+'<span class="tag"><b>'+p[1]+'</b><i>'+money(p[3])+'</i><em>★ '+p[4]+' · '+p[2]+'</em></span><span class="quick-add" aria-label="Add to bag">+</span></button>';
    }).join('')+'</div><div class="shelf-board"></div></div>');
  }
  shelfUnit.innerHTML=rows.join('');
  shelfUnit.querySelectorAll('.item').forEach(b=>b.onclick=()=>openDetail(+b.dataset.id));
  shelfUnit.querySelectorAll('.quick-add').forEach(b=>b.addEventListener('click',e=>{e.stopPropagation();addToCart(+b.closest('.item').dataset.id);b.textContent='✓';setTimeout(()=>b.textContent='+',600)}));
}
function openDetail(id){
  const p=products[id];
  document.querySelector('#shopModalContent').innerHTML='<div class="tag-detail"><span class="tag-detail-art">'+p[0]+'</span><p class="eyebrow">'+p[2]+' · ★ '+p[4]+'</p><h2>'+p[1]+'</h2><p class="price">'+money(p[3])+'</p><p class="small">Grown and gathered with care for the FloraVerse greenhouse — ready for a sunny corner at home.</p><button class="button button-primary modal-add" data-id="'+id+'" style="margin-top:12px">Add to bag →</button></div>';
  document.querySelector('#shopModal').classList.add('open');
}
document.querySelector('#shopModalContent').onclick=e=>{
  const b=e.target.closest('.modal-add');
  if(b){addToCart(+b.dataset.id);document.querySelector('#shopModal').classList.remove('open')}
};
function addToCart(id){
  const existing=cart.find(x=>x.id===id);
  existing?existing.qty++:cart.push({id,qty:1});
  save();
  sfx.wood&&sfx.wood();
}
function save(){
  localStorage.setItem('floraCart',JSON.stringify(cart));
  document.querySelector('#cartCount').textContent=cart.reduce((s,x)=>s+x.qty,0);
  renderCart();
}
function renderCart(){
  const holder=document.querySelector('#cartItems');
  holder.innerHTML=cart.length?cart.map(x=>{let p=products[x.id];return '<div class="cart-item"><div class="cart-thumb">'+p[0]+'</div><div style="flex:1"><h3>'+p[1]+'</h3><p>'+money(p[3])+'</p><div class="quantity"><button data-change="-1" data-id="'+x.id+'">-</button><b>'+x.qty+'</b><button data-change="1" data-id="'+x.id+'">+</button></div></div></div>'}).join(''):'<p class="small">Your bag is waiting for its first seed.</p>';
  holder.querySelectorAll('[data-change]').forEach(b=>b.onclick=()=>{let x=cart.find(x=>x.id===+b.dataset.id);x.qty+=+b.dataset.change;if(x.qty<1)cart=cart.filter(y=>y!==x);save();sfx.pluck&&sfx.pluck()});
  document.querySelector('#cartTotal').textContent=cart.reduce((s,x)=>s+products[x.id][3]*x.qty,0);
}
document.querySelector('#shopSearch').oninput=render;
document.querySelector('#categoryFilter').onchange=render;
document.querySelector('#cartButton').onclick=()=>document.querySelector('#cartDrawer').classList.add('open');
document.querySelector('#closeCart').onclick=()=>document.querySelector('#cartDrawer').classList.remove('open');
render();
save();