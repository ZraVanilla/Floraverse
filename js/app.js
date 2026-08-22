/* FloraVerse App — shared interactions (jQuery) */
$(function(){
  // Active nav
  const path = location.pathname.split('/').pop() || 'index.html';
  $('.nav-link').each(function(){
    const href = $(this).attr('href');
    if(href === path || (path==='' && href==='index.html')) $(this).addClass('active');
  });

  // Mobile menu
  $('#menuBtn').on('click', function(){ $('#mobileNav').toggleClass('hidden'); });

  // Toast
  window.toast = function(msg, icon="✨"){
    const $t = $(`<div class="toast"><span>${icon}</span><span>${msg}</span></div>`);
    $('#toastBox').append($t);
    setTimeout(()=> $t.fadeOut(300, ()=> $t.remove()), 2600);
  };

  // Cart (localStorage)
  const CART_KEY='fv_cart';
  const WISH_KEY='fv_wish';
  window.getCart = ()=> JSON.parse(localStorage.getItem(CART_KEY)||'[]');
  window.setCart = (c)=> localStorage.setItem(CART_KEY, JSON.stringify(c));
  window.getWish = ()=> JSON.parse(localStorage.getItem(WISH_KEY)||'[]');
  window.setWish = (w)=> localStorage.setItem(WISH_KEY, JSON.stringify(w));
  function updateCartBadge(){
    const c=getCart(); const n=c.reduce((a,b)=>a+b.qty,0);
    $('.cart-badge').text(n).toggle(n>0);
  }
  updateCartBadge();
  window.addToCart = function(id, qty=1){
    const prod = PRODUCTS.find(p=>p.id===id);
    let cart=getCart();
    const f=cart.find(x=>x.id===id);
    if(f) f.qty+=qty; else cart.push({id, qty, harga:prod.harga, nama:prod.nama});
    setCart(cart); updateCartBadge(); toast(`${prod.nama} ditambahkan ke keranjang`,'🛒');
    renderDrawerCart();
  };
  window.toggleWish = function(id){
    let w=getWish();
    if(w.includes(id)) w=w.filter(x=>x!==id); else w.push(id);
    setWish(w); toast(w.includes(id)?'Disimpan ke wishlist':'Dihapus dari wishlist', w.includes(id)?'💖':'🤍');
  };

  // Drawer cart
  window.openDrawer = function(){ $('#drawerBackdrop').addClass('open'); $('#cartDrawer').addClass('open'); renderDrawerCart(); }
  window.closeDrawer = function(){ $('#drawerBackdrop').removeClass('open'); $('#cartDrawer').removeClass('open'); }
  $('#drawerBackdrop').on('click', closeDrawer);
  $('#closeDrawer').on('click', closeDrawer);
  $('#cartBtn').on('click', openDrawer);

  window.renderDrawerCart = function(){
    const cart=getCart();
    const $list=$('#drawerList'); if(!$list.length) return;
    if(cart.length===0){ $list.html(`<div class="text-center py-16"><div class="text-5xl mb-3">🛒</div><p class="text-muted">Keranjang masih kosong</p><a href="shop.html" class="btn btn-primary mt-4">Belanja sekarang</a></div>`); $('#drawerTotal').text('Rp0'); return; }
    let total=0;
    $list.html(cart.map(item=>{
      const p=PRODUCTS.find(x=>x.id===item.id);
      total+= p.harga*item.qty;
      return `<div class="flex gap-3 items-center p-3 fv-card">
        <div class="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center text-2xl">${p.img}</div>
        <div class="flex-1 min-w-0"><p class="font-bold text-sm leading-tight truncate">${p.nama}</p><p class="text-sm text-muted">Rp${p.harga.toLocaleString('id-ID')} • x${item.qty}</p></div>
        <button class="w-8 h-8 rounded-full bg-gray-100 hover:bg-red-50 hover:text-red-500 flex items-center justify-center" onclick="removeFromCart('${item.id}')">✕</button>
      </div>`;
    }).join(''));
    $('#drawerTotal').text('Rp'+total.toLocaleString('id-ID'));
  };
  window.removeFromCart = function(id){
    let c=getCart().filter(x=>x.id!==id); setCart(c); updateCartBadge(); renderDrawerCart(); toast('Dihapus dari keranjang','🗑️');
  };
  window.checkoutSim = function(){
    if(getCart().length===0) return toast('Keranjang kosong','🛒');
    toast('Checkout berhasil! (simulasi)','🎉');
    setCart([]); updateCartBadge(); renderDrawerCart();
  };

  // Plant Match
  let pmStep=1; const pmAnswers={};
  window.openPlantMatch = function(){ pmStep=1; pmAnswers.cahaya=null; pmAnswers.lokasi=null; pmAnswers.waktu=null; pmAnswers.tujuan=null; renderPMStep(); $('#plantMatchModal').addClass('open'); }
  window.closePlantMatch = function(){ $('#plantMatchModal').removeClass('open'); }
  window.choosePM = function(k,v){ pmAnswers[k]=v; if(pmStep<4){ pmStep++; renderPMStep(); } else { renderPMResult(); } };
  window.prevPM = function(){ if(pmStep>1){ pmStep--; renderPMStep(); } };
  function renderPMStep(){
    const steps = {
      1:{q:"Seberapa banyak cahaya di tempatmu?", opts:[["Banyak","banyak"],["Sedang","sedang"],["Sedikit","sedikit"]], key:"cahaya"},
      2:{q:"Di mana kamu akan menanam?", opts:[["Rumah","rumah"],["Balkon","balkon"],["Halaman","halaman"],["Lahan","lahan"]], key:"lokasi"},
      3:{q:"Berapa waktu merawat?", opts:[["Jarang","jarang"],["Kadang","kadang"],["Sering","sering"]], key:"waktu"},
      4:{q:"Apa tujuan berkebun?", opts:[["Sayuran","sayuran"],["Buah","buah"],["Hias","hias"],["Herbal","herbal"]], key:"tujuan"},
    };
    const s=steps[pmStep];
    $('#pmStepNum').text(pmStep+'/4');
    $('#pmBar').css('width', (pmStep/4*100)+'%');
    $('#pmQuestion').text(s.q);
    $('#pmOptions').html(s.opts.map(([label,val])=> `<button onclick="choosePM('${s.key}','${val}')" class="w-full text-left p-4 rounded-2xl border-2 border-gray-100 hover:border-[#6FA8FF] hover:bg-[#EFF6FF] flex items-center justify-between group transition"><span class="font-semibold">${label}</span><span class="w-8 h-8 rounded-full bg-gray-100 group-hover:bg-[#6FA8FF] group-hover:text-white flex items-center justify-center">→</span></button>`).join(''));
    $('#pmPrev').toggle(pmStep>1);
    $('#pmResult').addClass('hidden'); $('#pmQuiz').removeClass('hidden');
  }
  function scorePlant(plant, ans){
    let s=0;
    // cahaya
    if(ans.cahaya==="banyak" && plant.cahaya==="Full Sun") s+=30;
    else if(ans.cahaya==="sedang" && plant.cahaya==="Partial Sun") s+=30;
    else if(ans.cahaya==="sedikit" && plant.cahaya==="Bright Indirect") s+=30;
    else if(ans.cahaya==="sedang" && plant.cahaya==="Full Sun") s+=15;
    // lokasi
    if(ans.lokasi==="balkon" && ["Sangat Mudah","Mudah"].includes(plant.kesulitan)) s+=20;
    else if(ans.lokasi==="rumah" && plant.kategori==="Hias") s+=20;
    else s+=10;
    // waktu
    if(ans.waktu==="jarang" && ["Sangat Mudah"].includes(plant.kesulitan)) s+=25;
    else if(ans.waktu==="kadang" && ["Mudah","Sedang"].includes(plant.kesulitan)) s+=25;
    else if(ans.waktu==="sering") s+=20;
    else s+=10;
    // tujuan
    if(ans.tujuan==="sayuran" && plant.kategori==="Sayuran") s+=25;
    else if(ans.tujuan==="buah" && plant.kategori==="Buah") s+=25;
    else if(ans.tujuan==="hias" && ["Hias","Bunga"].includes(plant.kategori)) s+=25;
    else if(ans.tujuan==="herbal" && plant.kategori==="Herbal") s+=25;
    else s+=5;
    // sedikit random untuk variasi
    s += Math.floor(Math.random()*6);
    return Math.min(98, s);
  }
  function renderPMResult(){
    $('#pmQuiz').addClass('hidden'); $('#pmResult').removeClass('hidden');
    $('#pmBar').css('width','100%');
    // hitung skor
    let scored = PLANTS.map(p=> ({...p, score: scorePlant(p, pmAnswers)})).sort((a,b)=> b.score-a.score).slice(0,3);
    // pastikan cabai/basil/tomat muncul jika relevan (sesuai spec contoh 93/89/84)
    // tapi biarkan algoritma — fallback contoh
    $('#pmResultList').html(scored.map((p,i)=> `
      <div class="fv-card p-4 flex gap-4 items-center ${i===0?'!border-[#6FA8FF] !bg-[#EFF6FF]':''}">
        <div class="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0" style="background:${p.color}18">${p.emoji}</div>
        <div class="flex-1 min-w-0">
          <p class="font-extrabold leading-none">${p.nama}</p>
          <p class="text-xs text-muted italic">${p.ilmiah}</p>
          <div class="flex gap-1.5 mt-1.5"><span class="pill pill-blue text-[10px]">${p.kategori}</span><span class="pill pill-green text-[10px]">${p.kesulitan}</span></div>
        </div>
        <div class="text-right">
          <div class="text-2xl font-black" style="color:${p.color}">${p.score}%</div>
          <div class="text-[10px] font-bold tracking-widest text-muted">COCOK</div>
          <button onclick="toast('Ditambahkan ke Kebunku','🌱'); closePlantMatch();" class="mt-1 text-xs font-bold px-3 py-1.5 rounded-full bg-[#252525] text-white hover:opacity-90">+ Kebunku</button>
        </div>
      </div>
    `).join(''));
  }

  // Like / Save / Join helpers (simulate)
  window.toggleLike = function(el){
    const $b=$(el); const liked=$b.hasClass('liked');
    if(liked){ $b.removeClass('liked bg-[#FF718D] text-white').addClass('bg-white'); $b.find('.cnt').text(parseInt($b.find('.cnt').text())-1); }
    else { $b.addClass('liked bg-[#FF718D] text-white'); $b.find('.cnt').text(parseInt($b.find('.cnt').text())+1); toast('Kamu menyukai postingan','💖'); }
  };
  window.toggleSave = function(el){
    const $b=$(el); $b.toggleClass('saved');
    if($b.hasClass('saved')){ $b.addClass('bg-[#FFD45C]'); toast('Disimpan','🔖'); } else { $b.removeClass('bg-[#FFD45C]'); toast('Dihapus dari simpanan',''); }
  };
  window.toggleJoin = function(el){
    const $b=$(el);
    if($b.text().includes('Bergabung')){ $b.text('✓ Bergabung').removeClass('bg-[#252525] text-white').addClass('bg-[#8BCB8A] text-white'); toast('Bergabung ke komunitas','🎉'); }
    else { $b.text('Bergabung').removeClass('bg-[#8BCB8A]').addClass('bg-[#252525] text-white'); toast('Keluar dari komunitas','👋'); }
  };

  // Reveal on scroll
  const obs = new IntersectionObserver(entries=>{
    entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('in'); });
  },{threshold:.15});
  document.querySelectorAll('.reveal').forEach(el=> obs.observe(el));

  // Close modals on backdrop
  $('.modal-backdrop').on('click', function(e){ if(e.target===this) $(this).removeClass('open'); });
});
