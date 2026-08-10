if(!document.querySelector('link[href="css/pixel-details.css"]')) document.head.insertAdjacentHTML('beforeend','<link rel="stylesheet" href="css/pixel-details.css">');
if(!document.querySelector('link[href="css/retro-modern.css"]')) document.head.insertAdjacentHTML('beforeend','<link rel="stylesheet" href="css/retro-modern.css">');
if(!document.querySelector('link[href="css/mobile.css"]')) document.head.insertAdjacentHTML('beforeend','<link rel="stylesheet" href="css/mobile.css">');
function money(n){return 'Rp'+n.toLocaleString('id-ID')}
function nav(active=''){return `<nav class="pixel-navbar container"><a class="brand" href="home.html">&#10047; FLORAVERSE</a><div class="nav-links"><a class="${active==='home'?'active':''}" href="home.html">Kebun</a><a class="${active==='forum'?'active':''}" href="forum.html">Forum</a><a class="${active==='market'?'active':''}" href="marketplace.html">Pasar</a><a class="${active==='flora'?'active':''}" href="florapedia.html">Florapedia</a><a class="${active==='donate'?'active':''}" href="donation.html">Donasi</a><a class="${active==='checkout'?'active':''}" href="checkout.html">Checkout</a><button class="sound-toggle" type="button" aria-pressed="false" aria-label="Nyalakan suara interaksi">SFX: OFF</button></div></nav>`}
function sprite(type){return `<span class="sprite ${type}"></span>`}
document.addEventListener('DOMContentLoaded',()=>{
 const hero=document.querySelector('.hero'); if(hero) hero.insertAdjacentHTML('afterbegin','<img class="pixel-burst hero-burst" src="assets/images/pixel-starburst.png" alt="" aria-hidden="true">');
 const page=document.body.dataset.page; const navTarget=document.querySelector('[data-nav]'); if(navTarget) navTarget.innerHTML=nav(page);
 const world=document.querySelector('.page-world'); if(world) world.insertAdjacentHTML('afterbegin','<div class="pixel-vine vine-left"></div><div class="pixel-vine vine-right"></div><img class="pixel-burst burst-a" src="assets/images/pixel-starburst.png" alt="" aria-hidden="true"><img class="pixel-burst burst-b" src="assets/images/pixel-starburst.png" alt="" aria-hidden="true"><div class="pixel-butterfly page-butterfly"><i></i></div>');
 if(page==='forum') document.querySelector('#threads').innerHTML=communityThreads.map(t=>`<article class="thread-note"><h3>${t.title}</h3><span class="avatar" style="--avatar:${t.user.color}"></span>${t.user.name} <span class="tag">${t.category}</span><span style="float:right">&#128172; ${t.replies}</span></article>`).join('');
 if(page==='market') document.querySelector('#products').innerHTML=marketplaceProducts.map((p,i)=>`<article class="product" data-category="${p.category}">${sprite(p.sprite)}<h3>${p.name}</h3><div class="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div><div class="price">${money(p.price)}</div><button class="pixel-btn add-cart" data-product="${i}">Tambah</button></article>`).join('');
 if(page==='flora') document.querySelector('#flora-list').innerHTML=florapediaEntries.map((p,i)=>`<article class="flora-entry"><div>${sprite(i%3===0?'flower':'leaf')}</div><h3>${p.name}</h3><em>${p.latin}</em><p>${p.desc}</p><span class="tag">${p.group}</span><span class="tag">${p.difficulty}</span></article>`).join('');
 if(page==='donate') document.querySelector('#organizations').innerHTML=donationOrganizations.map((o,i)=>`<article class="org"><h3>${sprite(i%2?'flower':'leaf')} ${o.name}</h3><p>${o.desc}</p><div class="progress" style="--value:${o.raised}%"><i></i></div><span>${o.raised}% dari ${o.target}</span> <a class="pixel-btn green" href="checkout.html">Donasi</a></article>`).join('');
 document.addEventListener('click',e=>{if(e.target.matches('.add-cart')){localStorage.setItem('floraCart',e.target.dataset.product);location.href='checkout.html'} if(e.target.matches('[data-success]')) document.querySelector('#success').classList.add('show')});
 const productIndex=localStorage.getItem('floraCart')||0; if(page==='checkout'){let p=marketplaceProducts[productIndex];document.querySelector('#order').innerHTML=`<div class="order-line"><span>${p.name}</span><strong>${money(p.price)}</strong></div><div class="order-line"><span>Biaya layanan hijau</span><strong>Rp2.000</strong></div><div class="order-line"><strong>Total</strong><strong>${money(p.price+2000)}</strong></div>`}
});

/* Synthesized UI sounds and compact pixel feedback. Playback begins only after a user interaction. */
document.addEventListener('DOMContentLoaded',()=>{
 const savedSound=localStorage.getItem('floraSound');
 let soundOn=savedSound!=='off', audioContext;
 if(savedSound===null)localStorage.setItem('floraSound','on');
 const intro=document.querySelector('.hero'); if(intro&&!document.querySelector('.sound-toggle')) intro.insertAdjacentHTML('afterbegin','<button class="sound-toggle intro-sound" type="button" aria-pressed="false" aria-label="Nyalakan suara interaksi">SFX: OFF</button>');
 const toggle=document.querySelector('.sound-toggle');
 const updateToggle=()=>{if(!toggle)return;toggle.textContent=`SFX: ${soundOn?'ON':'OFF'}`;toggle.setAttribute('aria-pressed',String(soundOn));toggle.setAttribute('aria-label',soundOn?'Matikan suara interaksi':'Nyalakan suara interaksi')};
 const tone=(frequency=440,duration=.055,type='square',volume=.035)=>{if(!soundOn)return;try{audioContext||=new (window.AudioContext||window.webkitAudioContext)();const now=audioContext.currentTime,oscillator=audioContext.createOscillator(),gain=audioContext.createGain();oscillator.type=type;oscillator.frequency.setValueAtTime(frequency,now);gain.gain.setValueAtTime(volume,now);gain.gain.exponentialRampToValueAtTime(.001,now+duration);oscillator.connect(gain).connect(audioContext.destination);oscillator.start(now);oscillator.stop(now+duration)}catch(_){} };
 const spark=(x,y,kind='tap')=>{const spark=document.createElement('i');spark.className=`tap-spark ${kind}`;spark.style.left=`${x}px`;spark.style.top=`${y}px`;spark.setAttribute('aria-hidden','true');document.body.appendChild(spark);spark.addEventListener('animationend',()=>spark.remove(),{once:true})};
 updateToggle();
 document.addEventListener('click',event=>{
  const control=event.target.closest('a,button,input,.product,.thread-note,.flora-entry,.org');
  if(!control)return;
  if(control.classList.contains('sound-toggle')){soundOn=!soundOn;localStorage.setItem('floraSound',soundOn?'on':'off');updateToggle();if(soundOn)tone(660,.09,'square',.045);return}
  const isAction=control.matches('button,.pixel-btn,.add-cart,[data-success]');
  tone(isAction?660:440,isAction?.075:.045,isAction?'square':'triangle',isAction?.045:.025);
  spark(event.clientX,event.clientY,isAction?'action':'tap');
  control.classList.remove('ui-feedback');void control.offsetWidth;control.classList.add('ui-feedback');
 });
 document.addEventListener('change',event=>{if(event.target.matches('input,select,textarea'))tone(520,.055,'triangle',.028)});
});
