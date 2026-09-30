/* FloraVerse - motion.js
   The interaction half of the motion layer: cross-document page transitions,
   sliding nav/filter indicators, scroll-reveal cascade, list re-render enter.
   Loaded after app.js. No framework, no build step. */
(function(){
  'use strict';

  var lastInput = -1e9;
  var reduced = function(){ return window.matchMedia('(prefers-reduced-motion: reduce)').matches; };
  var crossDocVT = function(){
    return !!document.startViewTransition && ('navigation' in window);
  };

  /* ===== 1. PAGE TRANSITIONS ===== */
  window.FV_Motion = {
    /* Returns true when the browser will carry the swap itself. */
    navigate: function(url){
      if(reduced() || !crossDocVT()) return false;
      window.location.assign(url);
      return true;
    }
  };

  window.addEventListener('pagereveal', function(event){
    if(!event.viewTransition) return;
    /* The new document is snapshotted right after this: stop the enter
       animation and settle every reveal that is already on screen. */
    document.body.style.animation = 'none';
    var vh = window.innerHeight;
    document.querySelectorAll('.reveal:not(.in)').forEach(function(el){
      var rect = el.getBoundingClientRect();
      if(rect.top < vh && rect.bottom > 0){
        el.style.transition = 'none';
        el.classList.add('in');
      }
    });
  });

  /* ===== 2. SLIDING NAV / FILTER INDICATOR ===== */
  var ACTIVE_SEL ='.nav-link.active, .cat-pill.active, .pcat.active, .gcat.active, ' +
                   '.commFilter.active, .feedTab.active, .levelBtn.active, .pv-tab.is-active';
  var GROUP_SELECTORS = ['.navbar .nav-link', '.feedTab', '.commFilter', '.cat-pill',
                         '.pcat', '.gcat', '.levelBtn', '.pv-tab'];

  function place(group, instant){
    var ind = group.querySelector(':scope > .fv-ind');
    if(!ind) return;
    var target = group.querySelector(ACTIVE_SEL);
    if(!target){ ind.classList.remove('is-on'); return; }
    var g = group.getBoundingClientRect();
    var t = target.getBoundingClientRect();
    if(!t.width){ ind.classList.remove('is-on'); return; }
    /* abs children are placed from the padding edge, rects come from the
       border edge — subtract the border so the block sits exactly on the pill */
    var gs = window.getComputedStyle(group);
    var bx = parseFloat(gs.borderLeftWidth) || 0;
    var by = parseFloat(gs.borderTopWidth) || 0;
    if(instant) ind.style.transition = 'none';
    ind.style.transform = 'translate(' + (t.left - g.left - bx) + 'px,' + (t.top - g.top - by) + 'px)';
    ind.style.width = t.width + 'px';
    ind.style.height = t.height + 'px';
    ind.style.borderRadius = window.getComputedStyle(target).borderRadius;
    ind.classList.add('is-on');
    if(instant){ void ind.offsetWidth; ind.style.transition = ''; }
  }

  function placeAll(instant){
    document.querySelectorAll('.fv-ind-group').forEach(function(group){ place(group, instant); });
  }

  function buildIndicators(){
    var byParent = new Map();
    GROUP_SELECTORS.forEach(function(sel){
      document.querySelectorAll(sel).forEach(function(el){
        var parent = el.parentElement;
        if(!parent) return;
        var rec = byParent.get(parent) || {sel:sel, n:0};
        rec.n++;
        byParent.set(parent, rec);
      });
    });
    byParent.forEach(function(rec, parent){
      if(rec.n < 2 || parent.querySelector(':scope > .fv-ind')) return;
      if(parent.closest('.mobile-nav-panel')) return;
      var ind = document.createElement('span');
      ind.className = 'fv-ind';
      ind.setAttribute('aria-hidden', 'true');
      parent.appendChild(ind);
      parent.classList.add('fv-ind-group');
      parent.dataset.fvInd = rec.sel === '.pv-tab' ? 'blue' : 'dark';
      place(parent, true);
      /* Layout can still shift after fonts or images settle; keep the block
         pinned to its pill. Repositioning never changes the group's own box,
         so this cannot loop. */
      if(window.ResizeObserver) new ResizeObserver(function(){ place(parent, false); }).observe(parent);
    });
  }

  var rebuildTimer = 0;
  function scheduleRebuild(){
    if(rebuildTimer) return;
    rebuildTimer = window.setTimeout(function(){
      rebuildTimer = 0;
      buildIndicators();
      placeAll(false);
    }, 120);
  }

  function watchIndicators(){
    new MutationObserver(function(muts){
      var touched = new Set();
      muts.forEach(function(m){
        var t = m.target;
        if(t.nodeType !== 1 || !t.closest || t.classList.contains('fv-ind')) return;
        var group = t.closest('.fv-ind-group');
        if(group) touched.add(group);
      });
      touched.forEach(function(group){ place(group, false); });
      scheduleRebuild();
    }).observe(document.body, {subtree:true, childList:true, attributes:true, attributeFilter:['class']});
  }

  /* ===== 3. SCROLL REVEAL CASCADE =====
     Only what is on screen at load gets a cascade; everything below the fold
     reveals immediately when it arrives so scrolling never feels laggy. */
  function staggerReveals(){
    var n = 0;
    document.querySelectorAll('.reveal').forEach(function(el){
      var rect = el.getBoundingClientRect();
      var delay = 0;
      if(rect.top < window.innerHeight && rect.bottom > 0) delay = Math.min(n++, 3);
      el.style.setProperty('--rv-i', String(delay));
    });
  }

  /* ===== 4. LIST RE-RENDER ENTER =====
     Only suppressed while the user is still typing, plus a short per-list
     cooldown so one burst of mutations animates once. */
  var LISTS = ['feedList', 'plantsGrid', 'productsGrid', 'guidesGrid', 'myPlantsGrid',
               'savedList', 'taskList', 'journalList', 'tipsList', 'addPlantList',
               'pmResultList', 'cartModalList', 'drawerList', 'commSidebar'];

  function animateList(list){
    if(list.classList.contains('fv-list-out')) return;
    var now = performance.now();
    if(now - lastInput < 350) return;
    if(now - (list._fvLast || -1e9) < 400) return;
    if(!list.children.length) return;
    var n = 0;
    Array.prototype.forEach.call(list.children, function(child){
      if(!child.style.getPropertyValue('--i')){
        child.style.setProperty('--i', String(Math.min(n, 10)));
      }
      n++;
    });
    list.classList.add('fv-stagger');
    list._fvLast = now;
  }

  /* ===== 4b. FILTER → RESULT CHOREOGRAPHY =====
     Selecting a filter dips the list that is leaving, then settles it with the
     stagger above, so the swap reads as old-leave / new-arrive. The capture
     listeners below run before the page's own change/click handlers render. */
  var LIST_FOR = [
    ['#filterKategori,#filterKesulitan,#filterCahaya,#sortBy,.cat-pill', 'plantsGrid'],
    ['#filterGuideKat,.gcat,.levelBtn', 'guidesGrid'],
    ['#filterProdKat,#sortProd,.pcat,#filterBest,#filterBeginner', 'productsGrid'],
    ['#filterGarden', 'myPlantsGrid'],
    ['.feedTab', 'feedList'],
    ['.commFilter', 'commSidebar'],
    ['.pv-tab', 'savedList']
  ];
  var PILL_SEL = '.cat-pill,.pcat,.gcat,.levelBtn,.commFilter,.feedTab,.pv-tab';

  function listFor(el){
    for(var i = 0; i < LIST_FOR.length; i++){
      if(el.matches && el.matches(LIST_FOR[i][0])) return LIST_FOR[i][1];
    }
    return null;
  }
  function armDip(el){
    var id = listFor(el);
    var list = id && document.getElementById(id);
    if(!list) return;
    list.classList.add('fv-list-out');
    list.classList.remove('fv-stagger');
    window.clearTimeout(list._fvDip);
    list._fvDip = window.setTimeout(function(){
      list._fvDip = 0;
      list.classList.remove('fv-list-out');
      animateList(list);
    }, reduced() ? 0 : 160);
  }

  function watchLists(){
    LISTS.forEach(function(id){
      var list = document.getElementById(id);
      if(!list) return;
      list.setAttribute('data-fv-list', '');
      animateList(list);
      new MutationObserver(function(){ animateList(list); }).observe(list, {childList:true});
    });
  }

  /* ===== BOOT ===== */
  /* Only real typing suppresses the stagger. Selects and checkboxes fire
     `input` too, and a filter pick is exactly the moment we want to animate. */
  document.addEventListener('input', function(e){
    var t = e.target;
    if(!t) return;
    var typing = t.tagName === 'TEXTAREA' ||
                 (t.tagName === 'INPUT' && (!t.type || t.type === 'text' || t.type === 'search'));
    if(typing) lastInput = performance.now();
  }, true);
  document.addEventListener('change', function(e){
    if(e.target && e.target.tagName === 'SELECT') armDip(e.target);
  }, true);
  document.addEventListener('click', function(e){
    var t = e.target;
    var pill = t && t.closest ? t.closest(PILL_SEL) : null;
    if(pill) armDip(pill);
  }, true);

  function init(){
    staggerReveals();
    buildIndicators();
    watchIndicators();
    watchLists();
    if(document.fonts && document.fonts.ready) document.fonts.ready.then(function(){ placeAll(false); });
    window.addEventListener('load', function(){ placeAll(false); });
    window.addEventListener('resize', function(){ placeAll(false); });
  }

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
