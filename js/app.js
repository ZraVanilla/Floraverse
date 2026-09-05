/* FloraVerse App - shared interactions (jQuery) */
/* Shared photo renderer for plants and products. */
window.fvImg = function(obj, cls){
  if(!obj || !obj.img) return `<span class="image-fallback" aria-hidden="true">${(obj?.nama||'?').slice(0,1)}</span>`;
  const fallback = `<span class="image-fallback" aria-label="${(obj.nama||'Tanaman').replace(/"/g,'')}">${(obj.nama||'?').slice(0,1)}</span>`.replace(/"/g,'&quot;');
  return `<img src="${obj.img}" alt="${(obj.nama||'').replace(/"/g,'')}" loading="lazy" class="${cls||''}" onerror="this.outerHTML=decodeURIComponent('${encodeURIComponent(fallback)}')">`;
};
$(function(){
  $('#cartBtn').attr({'aria-label':'Buka keranjang','title':'Buka keranjang'});
  // Smoothly transition only between internal document pages.
  $(document).on('click', 'a[href]', function(event){
    const link=this;
    const href=link.getAttribute('href');
    if(event.defaultPrevented || event.button!==0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || !href || href[0]==='#' || href.startsWith('javascript:') || link.target==='_blank' || link.hasAttribute('download')) return;
    let destination;
    try { destination=new URL(href, window.location.href); } catch { return; }
    if(destination.origin!==window.location.origin || destination.pathname===window.location.pathname && destination.search===window.location.search) return;
    event.preventDefault();
    if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){ window.location.href=destination.href; return; }
    document.body.classList.add('is-leaving');
    window.setTimeout(()=>{ window.location.href=destination.href; }, 190);
  });
  // Active nav
  const path = location.pathname.split('/').pop() || 'index.html';
  $('.nav-link').each(function(){
    const href = $(this).attr('href');
    if(href === path || (path==='' && href==='index.html')) $(this).addClass('active');
  });

  // Mobile menu - slide from left
  $('#menuBtn').each(function(){
    const $btn = $(this);
    $btn.addClass('menu-toggle').html('<span></span><span></span><span></span>');
    $btn.attr('aria-label', 'Toggle menu');
    $btn.attr('aria-expanded', 'false');
  });

  // Build mobile nav panel from desktop nav links
  const navLinks = [];
  $('nav .hidden.lg\\:flex a.nav-link, nav .hidden.lg\\>flex a.nav-link').each(function(){
    navLinks.push({ href: $(this).attr('href'), text: $(this).text() });
  });
  // Fallback: if selector didn't match, hardcode the links
  if(navLinks.length === 0){
    navLinks.push(
      {href:'index.html', text:'Beranda'},
      {href:'plants.html', text:'Tanaman'},
      {href:'learn.html', text:'Belajar'},
      {href:'community.html', text:'Komunitas'},
      {href:'shop.html', text:'Belanja'},
      {href:'garden.html', text:'Kebunku'},
      {href:'profile.html', text:'Profil'}
    );
  }
  const $mobilePanel = $(`
    <div class="mobile-nav-backdrop" id="mobileNavBackdrop"></div>
    <div class="mobile-nav-panel" id="mobileNavPanel">
      <div class="mobile-nav-header">
        <a href="index.html" class="wordmark text-xl">Flora<span>Verse</span></a>
        <button id="closeMobileNav" class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm font-bold hover:bg-gray-200 transition">✕</button>
      </div>
      <div class="mobile-nav-links">
        ${navLinks.map(l => {
          const isActive = l.href === path || (path === '' && l.href === 'index.html');
          return `<a href="${l.href}" class="nav-link ${isActive ? 'active' : ''}">${l.text}</a>`;
        }).join('')}
      </div>
    </div>
  `);
  $('body').append($mobilePanel);

  function openMobileNav(){
    $('#mobileNavPanel').addClass('open');
    $('#mobileNavBackdrop').addClass('open');
    $('#menuBtn').addClass('is-open').attr('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }
  function closeMobileNav(){
    $('#mobileNavPanel').removeClass('open');
    $('#mobileNavBackdrop').removeClass('open');
    $('#menuBtn').removeClass('is-open').attr('aria-expanded', 'false');
    document.body.style.overflow = '';
  }
  $('#menuBtn').on('click', function(){
    if($('#mobileNavPanel').hasClass('open')) closeMobileNav();
    else openMobileNav();
  });
  $('#closeMobileNav, #mobileNavBackdrop').on('click', closeMobileNav);

  // Plain emoji mode: keep the original Unicode emoji rendering instead of sprite conversion.
  const FV_EMOJI_CLASSES = {};

  function fvEmojiMarkup(icon='✨'){
    return icon;
  }

  function replaceEmojiTextNodes(){
    return;
  }

  window.toast = function(msg, icon="✨"){
    const $t = $(`<div class="toast">${fvEmojiMarkup(icon)}<span>${msg}</span></div>`);
    $('#toastBox').append($t);
    setTimeout(()=> $t.fadeOut(300, ()=> $t.remove()), 2600);
  };

  // Cart (localStorage)
  const CART_KEY='fv_cart';
  const WISH_KEY='fv_wish';
  window.getCart = ()=> {
    try { return JSON.parse(localStorage.getItem(CART_KEY)||'[]'); }
    catch { localStorage.removeItem(CART_KEY); return []; }
  };
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
    if(!prod || qty<=0) return;
    let cart=getCart();
    const f=cart.find(x=>x.id===id);
    if(f) f.qty+=qty; else cart.push({id, qty, harga:prod.harga, nama:prod.nama, image:prod.img});
    setCart(cart); updateCartBadge(); toast(`${prod.nama} ditambahkan ke keranjang`,'🛒');
    renderDrawerCart();
  };
  window.toggleWish = function(id){
    let w=getWish();
    if(w.includes(id)) w=w.filter(x=>x!==id); else w.push(id);
    setWish(w); toast(w.includes(id)?'Disimpan ke wishlist':'Dihapus dari wishlist', w.includes(id)?'💖':'🤍');
  };

  // Drawer cart (safe fallback if drawer elements don't exist)
  window.openDrawer = window.openDrawer || function(){
    if($('#cartDrawer').length){
      $('#drawerBackdrop').addClass('open');
      $('#cartDrawer').addClass('open');
      renderDrawerCart();
    }
  };
  window.closeDrawer = window.closeDrawer || function(){
    $('#drawerBackdrop').removeClass('open');
    $('#cartDrawer').removeClass('open');
  };
  if($('#drawerBackdrop').length) $('#drawerBackdrop').on('click', closeDrawer);
  if($('#closeDrawer').length) $('#closeDrawer').on('click', closeDrawer);
  $('#cartBtn').on('click', function(){ openDrawer(); });

  window.renderDrawerCart = function(){
    const cart=getCart();
    const $list=$('#drawerList'); if(!$list.length) return;
    if(cart.length===0){ $list.html(`<div class="text-center py-16"><div class="text-5xl mb-3">🛒</div><p class="text-muted">Keranjang masih kosong</p><a href="shop.html" class="btn btn-primary mt-4">Belanja sekarang</a></div>`); $('#drawerTotal').text('Rp0'); return; }
    let total=0;
    $list.html(cart.map(item=>{
      const p=PRODUCTS.find(x=>x.id===item.id);
      if(!p) return '';
      total+= p.harga*item.qty;
      return `<div class="flex gap-3 items-center p-3 fv-card">
        <div class="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center overflow-hidden">${fvImg(p,'w-full h-full object-cover')}</div>
        <div class="flex-1 min-w-0"><p class="font-bold text-sm leading-tight truncate">${p.nama}</p><p class="text-sm text-muted">Rp${p.harga.toLocaleString('id-ID')} • x${item.qty}</p></div>
        <button class="w-8 h-8 rounded-full bg-gray-100 hover:bg-red-50 hover:text-red-500 flex items-center justify-center" onclick="removeFromCart('${item.id}')">✕</button>
      </div>`;
    }).join(''));
    $('#drawerTotal').text('Rp'+total.toLocaleString('id-ID'));
  };
  window.removeFromCart = window.removeFromCart || function(id){
    let c=getCart().filter(x=>x.id!==id); setCart(c); updateCartBadge(); renderDrawerCart(); toast('Dihapus dari keranjang','🗑️');
  };
  window.clearCart = window.clearCart || function(){
    setCart([]); updateCartBadge(); renderDrawerCart(); toast('Keranjang dikosongkan','🧹');
  };
  window.checkoutSim = window.checkoutSim || function(){
    window.openCheckout();
  };
  window.openCheckout = window.openCheckout || function(){
    if(getCart().length===0) return toast('Keranjang kosong','🛒');
    if(!$('#checkoutModal').length) return window.location.href='shop.html?checkout=1';
    updateCheckoutSummary(); $('#checkoutModal').addClass('open'); closeDrawer();
  };
  window.closeCheckout = function(){ $('#checkoutModal').removeClass('open'); };
  window.updateCheckoutSummary = function(){
    const cart=getCart(); let subtotal=0;
    $('#checkoutSummary').html(cart.map(item=>{
      const p=PRODUCTS.find(x=>x.id===item.id); if(!p) return '';
      subtotal+=p.harga*item.qty;
      return `<div class="flex items-center gap-2 text-sm"><div class="w-9 h-9 rounded-lg overflow-hidden bg-white flex-shrink-0">${fvImg(p,'w-full h-full object-cover')}</div><span class="flex-1 min-w-0 truncate">${p.nama} × ${item.qty}</span><b>Rp${(p.harga*item.qty).toLocaleString('id-ID')}</b></div>`;
    }).join(''));
    const fee=parseInt($('input[name="delivery"]:checked').data('fee')||0,10);
    $('#checkoutSubtotal').text('Rp'+subtotal.toLocaleString('id-ID')); $('#checkoutDelivery').text(fee?'Rp'+fee.toLocaleString('id-ID'):'Gratis'); $('#checkoutTotal').text('Rp'+(subtotal+fee).toLocaleString('id-ID'));
  };
  window.placeOrder = function(event){
    event.preventDefault();
    const form=event.currentTarget;
    if(!form.checkValidity()){ form.reportValidity(); return; }
    const order={id:'FV-'+Date.now().toString().slice(-6), createdAt:new Date().toISOString(), items:getCart(), recipient:new FormData(form).get('recipient'), payment:new FormData(form).get('payment'), delivery:new FormData(form).get('delivery')};
    localStorage.setItem('fv_last_order',JSON.stringify(order)); setCart([]); updateCartBadge(); closeCheckout(); if(typeof closeCartModal==='function') closeCartModal(); toast(`Pesanan ${order.id} berhasil dibuat`,'✅');
  };
  $(document).on('change','input[name="delivery"]', updateCheckoutSummary);

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
    // tapi biarkan algoritma - fallback contoh
    $('#pmResultList').html(scored.map((p,i)=> `
      <div class="fv-card p-4 flex gap-4 items-center ${i===0?'!border-[#6FA8FF] !bg-[#EFF6FF]':''}">
        <div class="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 overflow-hidden" style="background:${p.color}18">
          ${fvImg(p,'w-full h-full object-cover')}
        </div>
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
