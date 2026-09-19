/* ═══════════════════════════════════════════════════════
   FloraVerse — profile.js
   Rendering logic for profile page.
   Reads data from window.FloraVerse.profileData.
   localStorage key: floraverse:profile:v1
   ═══════════════════════════════════════════════════════ */
(function () {
  'use strict';

  var DATA = window.FloraVerse.profileData;
  if (!DATA) { console.error('FloraVerse.profileData missing'); return; }

  var ACT_ICON = { water: '💧', guide: '📖', badge: '🏅', join: '👥', level: '⬆️', plant: '🌱', harvest: '🧺', task: '✅' };
  var TABS = ['tanaman', 'panduan', 'aktivitas'];
  var KEY = 'floraverse:profile:v1';
  var GUIDES_PER_PAGE = 6;

  /* ============ UTIL ============ */
  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function pad(n) { return n < 10 ? '0' + n : '' + n; }
  function dkey(d) { return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()); }
  function addDays(d, n) { var x = new Date(d); x.setDate(x.getDate() + n); return x; }
  function startOfDay(d) { var x = new Date(d); x.setHours(0, 0, 0, 0); return x; }
  function mondayOf(d) { var x = startOfDay(d); x.setDate(x.getDate() - ((x.getDay() + 6) % 7)); return x; }
  function fmtDate(d) { return d.toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' }); }
  function fmtNum(n) { return Number(n).toLocaleString('id-ID'); }
  function fmtViews(v) { return v >= 1000 ? (v / 1000).toFixed(1).replace('.', ',') + 'rb' : String(v); }
  function relTime(ts) {
    var m = Math.floor((Date.now() - ts) / 60000);
    if (m < 1) return 'Baru saja';
    if (m < 60) return m + ' menit lalu';
    var h = Math.floor(m / 60);
    if (h < 24) return h + ' jam lalu';
    var d = Math.floor(h / 24);
    if (d < 7) return d + ' hari lalu';
    return fmtDate(new Date(ts));
  }
  function initials(name) {
    var w = String(name).trim().split(/\s+/).filter(Boolean);
    if (!w.length) return '?';
    if (w.length === 1) return w[0].slice(0, 2).toUpperCase();
    return (w[0][0] + w[1][0]).toUpperCase();
  }
  function statusClass(s) { return 'pf-st-' + String(s).toLowerCase(); }
  function catClass(c) { return 'pf-cat-' + String(c).toLowerCase(); }
  function emptyBox(icon, text, href, cta) {
    return '<div class="pf-empty"><b>' + icon + '</b>' + esc(text) +
      (href ? '<br><a class="pf-btn" href="' + href + '">' + esc(cta) + '</a>' : '') + '</div>';
  }

  /* ============ STATE ============ */
  var NOW = new Date();
  var TODAY = dkey(startOfDay(NOW));
  var YESTERDAY = dkey(addDays(startOfDay(NOW), -1));
  var WEEK = dkey(mondayOf(NOW));
  var S = loadState();
  var guidesShown = GUIDES_PER_PAGE;

  function loadState() {
    var s = null;
    try { s = JSON.parse(localStorage.getItem(KEY)); } catch (e) { s = null; }
    if (!s || typeof s !== 'object' || s.v !== 1) {
      s = { v: 1, xp: 340, gp: 215, level: 8, streak: 12, lastActive: YESTERDAY, date: TODAY,
            done: {}, gpToday: 0, weekKey: WEEK, weekDone: 1, profile: {}, acts: [] };
    }
    ['xp', 'gp', 'level', 'streak', 'gpToday', 'weekDone'].forEach(function (k) {
      if (typeof s[k] !== 'number' || isNaN(s[k]) || s[k] < 0) s[k] = 0;
    });
    if (s.level < 1) s.level = 1;
    if (!s.done || typeof s.done !== 'object') s.done = {};
    if (!s.profile || typeof s.profile !== 'object') s.profile = {};
    if (!Array.isArray(s.acts)) s.acts = [];
    if (s.date !== TODAY) { s.date = TODAY; s.done = {}; s.gpToday = 0; }
    if (s.weekKey !== WEEK) { s.weekKey = WEEK; s.weekDone = 0; }
    if (s.lastActive !== TODAY && s.lastActive !== YESTERDAY) s.streak = 0;
    return s;
  }
  function saveState() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { /* abaikan */ } }
  function doneCount() { return DATA.tasks.filter(function (t) { return S.done[t.id]; }).length; }
  function prof() {
    return {
      name: S.profile.name || DATA.user.name,
      tagline: S.profile.tagline || DATA.user.tagline,
      bio: S.profile.bio || DATA.user.bio
    };
  }

  /* ============ RENDER ============ */
  function renderNav() {
    var p = prof();
    var navUser = $('#navUser');
    if (navUser) {
      navUser.innerHTML = '<span class="pf-mini-av">' + esc(initials(p.name)) + '</span><span class="pf-uname">' +
        esc(p.name) + '</span><span class="pf-lvchip" id="navLv">Lv ' + S.level + '</span>';
    }
    /* Also update the project's existing navbar user pill if present */
    var projectNavLv = document.querySelector('.navbar .bg-\\[\\#FFD45C\\]');
    if (projectNavLv) projectNavLv.textContent = 'Lv ' + S.level;
    var projectNavName = document.querySelector('nav .text-sm.font-bold');
    if (projectNavName) projectNavName.textContent = p.name;
    var projectNavAv = document.querySelector('nav .bg-\\[\\#6FA8FF\\]');
    if (projectNavAv) projectNavAv.textContent = initials(p.name);
  }

  var C = 2 * Math.PI * 68;
  function heroHtml() {
    var p = prof(), u = DATA.user;
    var latest = DATA.badges.filter(function (b) { return b.earned; })
      .sort(function (a, b) { return a.date < b.date ? 1 : -1; }).slice(0, 3);
    var latestHtml = latest.length
      ? latest.map(function (b) { return '<span class="pf-pill">' + b.emoji + ' ' + esc(b.name) + '</span>'; }).join('')
      : '<span class="pf-note">Belum ada badge</span>';
    return '<div class="pf-wrap pf-hero__in">' +
      '<div class="pf-avatar"><svg class="pf-ring" viewBox="0 0 148 148" aria-hidden="true">' +
        '<circle class="pf-ring__bg" cx="74" cy="74" r="68"/>' +
        '<circle class="pf-ring__arc" id="ringArc" cx="74" cy="74" r="68" stroke-dasharray="' + C.toFixed(2) + '" stroke-dashoffset="' + C.toFixed(2) + '"/></svg>' +
        '<div class="pf-avatar__in" id="heroInit">' + esc(initials(p.name)) + '</div></div>' +
      '<div class="pf-hero__id">' +
        '<h1 id="heroName">' + esc(p.name) + '</h1>' +
        '<p class="pf-hero__tag">' + esc(p.tagline) + ' · <b id="heroLv">Lv ' + S.level + '</b></p>' +
        '<p class="pf-hero__bio">' + esc(p.bio) + '</p>' +
        '<div class="pf-hero__meta"><span>📅 Bergabung sejak ' + esc(u.joined) + '</span><span>📍 ' + esc(u.place) + '</span>' +
          '<span class="pf-streak" id="streak"></span></div>' +
        '<div class="pf-latest"><span class="pf-latest__lbl">Badge terbaru:</span>' + latestHtml + '</div>' +
      '</div>' +
      '<div class="pf-hero__side">' +
        '<div class="pf-stats">' +
          '<span>🪴 <b>' + DATA.plants.length + '</b> Tanaman</span>' +
          '<span>👥 <b>' + DATA.communities.length + '</b> Komunitas</span>' +
          '<span>📖 <b>' + DATA.guides.length + '</b> Panduan</span>' +
          '<span title="Green Points dipakai untuk belanja dan reward. XP dipakai untuk naik level.">✨ <b id="statGp"></b> Green Points <em class="pf-gp-today" id="gpToday"></em></span>' +
        '</div>' +
        '<div class="pf-xp"><div class="pf-xp__row"><span id="xpText"></span><small id="xpLeft"></small></div>' +
          '<div class="pf-bar" role="progressbar" aria-label="Progres XP" id="xpBar" aria-valuemin="0" aria-valuemax="' + u.levelXp + '"><div class="pf-bar__fill" id="xpFill"></div></div></div>' +
        '<div class="pf-hero__btns">' +
          '<button class="pf-btn" data-action="share" type="button">↗ Bagikan</button>' +
          '<button class="pf-btn pf-btn--dark" data-action="edit" type="button">✏️ Edit</button>' +
        '</div>' +
      '</div></div>';
  }
  function updateHeroDynamic() {
    var max = DATA.user.levelXp, pct = Math.min(100, Math.round(S.xp / max * 100));
    var set = function (id, txt) { var el = $('#' + id); if (el) el.textContent = txt; };
    set('xpText', S.xp + ' / ' + max + ' XP');
    set('xpLeft', (max - S.xp) + ' XP lagi ke Lv ' + (S.level + 1));
    set('heroLv', 'Lv ' + S.level);
    set('navLv', 'Lv ' + S.level);
    set('statGp', fmtNum(S.gp));
    set('gpToday', S.gpToday > 0 ? '+' + S.gpToday + ' GP hari ini' : '');
    set('streak', '🔥 ' + S.streak + ' hari berturut-turut');
    var f = $('#xpFill'); if (f) f.style.width = pct + '%';
    var b = $('#xpBar'); if (b) b.setAttribute('aria-valuenow', S.xp);
    var r = $('#ringArc'); if (r) r.style.strokeDashoffset = (C * (1 - pct / 100)).toFixed(2);
  }
  function renderHero() {
    $('#hero').innerHTML = heroHtml();
    requestAnimationFrame(function () { requestAnimationFrame(updateHeroDynamic); });
    updateHeroDynamic();
  }

  function renderGarden() {
    var box = $('#garden');
    if (!DATA.plants.length) { box.outerHTML = emptyBox('🌱', 'Kebunmu masih kosong. Mulai tanam tanaman pertamamu!', 'plants.html', 'Jelajahi tanaman'); return; }
    box.innerHTML = DATA.plants.map(function (p) {
      return '<a class="pf-gcard" href="garden.html#' + esc(p.id) + '"><span class="pf-tile ' + catClass(p.cat) + '" aria-hidden="true">' + p.emoji + '</span>' +
        '<b>' + esc(p.name) + '</b><small>Day ' + p.day + '</small>' +
        '<span class="pf-chip ' + statusClass(p.status) + '">' + esc(p.status) + '</span></a>';
    }).join('');
  }

  function renderTasks() {
    var box = $('#tasks'), total = DATA.tasks.length, done = doneCount(), left = total - done;
    if (!total) { box.innerHTML = ''; return; }
    var ok = left === 0;
    var head = ok
      ? '<h3>🎉 Semua tanaman sudah dirawat hari ini</h3><span class="pf-note">Kembali lagi besok untuk menjaga streak-mu.</span>'
      : '<h3>🌤️ ' + left + ' tanaman butuh perawatan hari ini</h3><span class="pf-note">Selesai: ' + done + '/' + total + ' · +' + DATA.taskXp + ' XP &amp; +' + DATA.taskGp + ' GP per tugas</span>';
    box.innerHTML = '<div class="pf-tasks' + (ok ? ' pf-tasks--ok' : '') + '"><div class="pf-tasks__hd">' + head + '</div><ul>' +
      DATA.tasks.map(function (t) {
        var d = !!S.done[t.id];
        return '<li class="pf-task' + (d ? ' done' : '') + '">' +
          '<button class="pf-task__check" type="button" data-action="task" data-id="' + esc(t.id) + '"' + (d ? ' disabled aria-pressed="true"' : ' aria-pressed="false"') +
          ' aria-label="' + (d ? 'Selesai: ' : 'Tandai selesai: ') + esc(t.text) + '">✓</button>' +
          '<span class="pf-task__txt">' + t.icon + ' ' + esc(t.text) + '</span>' +
          '<span class="pf-task__rw">+' + DATA.taskXp + ' XP · +' + DATA.taskGp + ' GP</span></li>';
      }).join('') + '</ul></div>';
  }

  function renderJourney() {
    var box = $('#journey');
    if (!DATA.plants.length) { box.innerHTML = emptyBox('🗺️', 'Perjalanan kebunmu dimulai saat kamu menanam.', null); return; }
    var counts = [0, 0, 0, 0];
    DATA.plants.forEach(function (p) { counts[DATA.statusStage[p.status] || 0]++; });
    var dom = 0;
    counts.forEach(function (c, i) { if (c >= counts[dom]) dom = i; });
    var steps = DATA.stages.map(function (s, i) {
      return '<div class="pf-step' + (i < dom ? ' done' : i === dom ? ' now' : '') + '"><span class="pf-dot"></span>' + esc(s) + '<small>' + counts[i] + ' tanaman</small></div>';
    }).join('');
    var top = DATA.plants.slice().sort(function (a, b) { return b.progress - a.progress; }).slice(0, 2);
    var list = top.map(function (p) {
      return '<li><span><i class="' + (p.status === 'Flowering' ? 'f' : '') + '"></i>' + esc(p.name) + ' — ' + esc(p.status) + '</span><span>' + p.day + ' hari · ' + p.progress + '%</span></li>';
    }).join('');
    box.innerHTML = '<div class="pf-steps"><div class="pf-steps__line"><div class="pf-steps__fill" style="width:' + (dom / 3 * 100) + '%"></div></div>' + steps + '</div>' +
      '<p class="pf-jsum">Sebagian besar tanamanmu ada di tahap <b>' + esc(DATA.stages[dom]) + '</b>.</p>' +
      '<ul class="pf-jlist">' + list + '</ul>';
  }

  function renderKomu() {
    var box = $('#komu');
    if (!DATA.communities.length) { box.innerHTML = '<li>' + emptyBox('👥', 'Kamu belum bergabung ke komunitas mana pun.', 'community.html', 'Cari komunitas') + '</li>'; return; }
    box.innerHTML = DATA.communities.map(function (c) {
      return '<li><span class="pf-tile ' + catClass(c.cat) + '" aria-hidden="true">' + c.emoji + '</span>' +
        '<div class="pf-clist__txt"><b>' + esc(c.name) + '</b><small>' + fmtNum(c.members) + ' anggota · Aktif ' + esc(c.active) + '</small></div>' +
        '<div class="pf-clist__act"><span class="pf-chip pf-role' + (c.role === 'Moderator' ? ' pf-role--mod' : '') + '">' + esc(c.role) + '</span>' +
        '<a class="pf-link" href="community.html">Buka</a></div></li>';
    }).join('');
  }

  function renderBadges() {
    var earned = DATA.badges.filter(function (b) { return b.earned; }).length;
    $('#badgeCount').textContent = earned + ' / ' + DATA.badges.length + ' diraih';
    $('#badges').innerHTML = DATA.badges.map(function (b) {
      return '<button type="button" class="pf-badge' + (b.earned ? '' : ' locked') + '" data-id="' + b.id + '" aria-pressed="false" aria-describedby="badgeInfo">' +
        '<span class="pf-b-ico" aria-hidden="true">' + b.emoji + '</span>' + esc(b.name) + (b.earned ? '' : ' <span aria-label="terkunci">🔒</span>') + '</button>';
    }).join('');
  }
  function showBadge(id) {
    var b = null;
    DATA.badges.forEach(function (x) { if (x.id === id) b = x; });
    if (!b) return;
    var status = b.earned ? '✅ Diraih' + (b.date ? ' pada ' + fmtDate(new Date(b.date + 'T00:00:00')) : '') : '🔒 Terkunci';
    $('#badgeInfo').innerHTML = '<b>' + esc(b.name) + '</b> — ' + status + '<br>Syarat: ' + esc(b.req);
  }

  function renderWeekly() {
    var g = DATA.weeklyGoal, d = Math.min(S.weekDone, g), pct = Math.round(d / g * 100);
    $('#weekly').innerHTML = '<div class="pf-weekly__row"><span>🎯 Target minggu ini</span><span>' + d + '/' + g + '</span></div>' +
      '<p class="pf-note" style="margin-top:4px">' + (d >= g ? 'Target tercapai. Kerja bagus!' : 'Selesaikan ' + g + ' tugas perawatan minggu ini.') + '</p>' +
      '<div class="pf-bar"><div class="pf-bar__fill" style="width:' + pct + '%"></div></div>';
  }

  function seeded(i) { var x = Math.sin(i * 12.9898 + 7.13) * 43758.5453; return x - Math.floor(x); }
  function heatLevel(c) { return c === 0 ? 0 : c <= 2 ? 1 : c <= 5 ? 2 : c <= 7 ? 3 : 4; }
  function renderHeat() {
    var today = startOfDay(NOW), start = addDays(mondayOf(today), -11 * 7), html = '', total = 0, active = 0;
    for (var i = 0; i < 84; i++) {
      var d = addDays(start, i), daysAgo = Math.round((today - d) / 86400000);
      if (daysAgo < 0) { html += '<span class="pf-cell off"></span>'; continue; }
      var c;
      if (daysAgo === 0) c = doneCount() * 3;
      else { c = Math.floor(seeded(i) * 9); if (daysAgo <= 12 && c < 1) c = 1; }
      total += c; if (c > 0) active++;
      var tip = fmtDate(d) + ': ' + c + ' aksi';
      html += '<span class="pf-cell l' + heatLevel(c) + (daysAgo === 0 ? ' today' : '') + '" title="' + tip + '" aria-label="' + tip + '"></span>';
    }
    $('#heat').innerHTML = html;
    $('#heatSum').innerHTML = '<b>' + total + ' aksi</b><span>dalam 12 minggu terakhir</span><span>' + active + ' hari aktif · streak 🔥 ' + S.streak + ' hari</span>';
  }

  function allActs() {
    var seed = DATA.acts.map(function (a) { return { t: a.t, text: a.text, ts: Date.now() - a.min * 60000 }; });
    return S.acts.concat(seed).sort(function (a, b) { return b.ts - a.ts; });
  }
  function renderPanelTanaman() {
    var el = $('#panel-tanaman');
    if (!DATA.plants.length) { el.innerHTML = emptyBox('🌱', 'Belum ada tanaman di koleksimu.', 'plants.html', 'Jelajahi tanaman'); return; }
    el.innerHTML = '<div class="pf-pgrid">' + DATA.plants.map(function (p) {
      var planted = fmtDate(addDays(startOfDay(NOW), -p.day));
      return '<article class="pf-pcard"><div class="pf-pcard__top"><span class="pf-tile ' + catClass(p.cat) + '" aria-hidden="true">' + p.emoji + '</span>' +
        '<div><h3>' + esc(p.name) + '</h3><em>' + esc(p.latin) + '</em></div></div>' +
        '<div class="pf-pcard__chips"><span class="pf-chip ' + catClass(p.cat) + '">' + esc(p.cat) + '</span><span class="pf-chip ' + statusClass(p.status) + '">' + esc(p.status) + '</span></div>' +
        '<div class="pf-pcard__meta"><span>Ditanam ' + planted + '</span><span>' + p.progress + '%</span></div>' +
        '<div class="pf-bar" role="progressbar" aria-label="Pertumbuhan ' + esc(p.name) + '" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + p.progress + '"><div class="pf-bar__fill" style="width:' + p.progress + '%"></div></div></article>';
    }).join('') + '</div>';
  }
  function renderPanelPanduan() {
    var el = $('#panel-panduan');
    if (!DATA.guides.length) { el.innerHTML = emptyBox('📖', 'Kamu belum menulis panduan.', 'learn.html', 'Mulai menulis'); return; }
    var shown = DATA.guides.slice(0, guidesShown);
    el.innerHTML = '<ul class="pf-glist">' + shown.map(function (g) {
      return '<li><div><b>' + esc(g[0]) + '</b></div><div class="meta"><span class="pf-chip ' + catClass(g[1]) + '">' + esc(g[1]) + '</span>' +
        '<span>👁 ' + fmtViews(g[2]) + ' dilihat</span><span>' + fmtDate(addDays(startOfDay(NOW), -g[3])) + '</span></div></li>';
    }).join('') + '</ul>' +
      (guidesShown < DATA.guides.length
        ? '<button class="pf-btn pf-more" type="button" data-action="more-guides">Muat lebih banyak (' + (DATA.guides.length - guidesShown) + ')</button>'
        : '<p class="pf-note" style="text-align:center;margin-top:16px">Semua ' + DATA.guides.length + ' panduan sudah ditampilkan.</p>');
  }
  function renderPanelAktivitas() {
    var el = $('#panel-aktivitas'), acts = allActs();
    if (!acts.length) { el.innerHTML = emptyBox('🕒', 'Belum ada aktivitas.', null); return; }
    el.innerHTML = '<ul class="pf-feed">' + acts.map(function (a) {
      return '<li><span class="pf-feed__ic" aria-hidden="true">' + (ACT_ICON[a.t] || '🌿') + '</span><div class="pf-feed__tx">' + esc(a.text) +
        '<span class="pf-feed__tm">' + relTime(a.ts) + '</span></div></li>';
    }).join('') + '</ul>';
  }

  /* ============ TABS ============ */
  function selectTab(name, focus) {
    if (TABS.indexOf(name) < 0) name = 'tanaman';
    TABS.forEach(function (t) {
      var tab = $('#tab-' + t), panel = $('#panel-' + t), on = t === name;
      tab.setAttribute('aria-selected', on ? 'true' : 'false');
      tab.tabIndex = on ? 0 : -1;
      panel.hidden = !on;
      if (on && focus) tab.focus();
    });
    try { history.replaceState(null, '', '#' + name); } catch (e) { /* file:// tertentu */ }
  }

  /* ============ ACTIONS ============ */
  function toast(msg) {
    var box = $('#toasts'), t = document.createElement('div');
    t.className = 'pf-toast'; t.textContent = msg; box.appendChild(t);
    setTimeout(function () { t.classList.add('out'); }, 2600);
    setTimeout(function () { if (t.parentNode) t.parentNode.removeChild(t); }, 3000);
  }
  function addAct(t, text) { S.acts.unshift({ t: t, text: text, ts: Date.now() }); if (S.acts.length > 50) S.acts.length = 50; }

  function completeTask(id) {
    var task = null;
    DATA.tasks.forEach(function (t) { if (t.id === id) task = t; });
    if (!task || S.done[id]) return;
    S.done[id] = 1;
    S.xp += DATA.taskXp; S.gp += DATA.taskGp; S.gpToday += DATA.taskGp; S.weekDone += 1;
    if (S.lastActive !== TODAY) { S.streak = (S.lastActive === YESTERDAY) ? S.streak + 1 : 1; S.lastActive = TODAY; }
    addAct('task', task.text);
    var leveled = false;
    while (S.xp >= DATA.user.levelXp) { S.xp -= DATA.user.levelXp; S.level++; leveled = true; addAct('level', 'Naik ke Level ' + S.level); }
    saveState();
    renderTasks(); renderWeekly(); renderHeat(); renderPanelAktivitas(); updateHeroDynamic(); renderNav();
    toast('+' + DATA.taskXp + ' XP · +' + DATA.taskGp + ' GP');
    if (leveled) setTimeout(function () { toast('🎉 Naik ke Level ' + S.level + '!'); }, 700);
    if (doneCount() === DATA.tasks.length) setTimeout(function () { toast('Semua tanaman sudah dirawat hari ini 🌿'); }, leveled ? 1500 : 700);
  }

  function copyText(t) {
    if (navigator.clipboard && window.isSecureContext) return navigator.clipboard.writeText(t);
    return new Promise(function (res, rej) {
      var ta = document.createElement('textarea');
      ta.value = t; ta.style.position = 'fixed'; ta.style.opacity = '0';
      document.body.appendChild(ta); ta.select();
      var ok = false; try { ok = document.execCommand('copy'); } catch (e) { ok = false; }
      document.body.removeChild(ta);
      if (ok) res(); else rej();
    });
  }
  function shareProfile() {
    var url = location.href.split('#')[0];
    copyText(url).then(function () { toast('Link profil disalin'); }, function () { toast('Gagal menyalin. Salin manual dari address bar.'); });
  }

  function openEdit() {
    var p = prof(), f = $('#editForm');
    f.elements.name.value = p.name; f.elements.tagline.value = p.tagline; f.elements.bio.value = p.bio;
    var dlg = $('#editDlg');
    if (typeof dlg.showModal === 'function') dlg.showModal(); else dlg.setAttribute('open', '');
    f.elements.name.focus();
  }
  function closeEdit() {
    var dlg = $('#editDlg');
    if (typeof dlg.close === 'function') dlg.close(); else dlg.removeAttribute('open');
  }

  /* ============ EVENTS (delegasi) ============ */
  document.addEventListener('click', function (e) {
    var badge = e.target.closest ? e.target.closest('.pf-badge') : null;
    if (badge) {
      $$('.pf-badge').forEach(function (b) { b.setAttribute('aria-pressed', b === badge ? 'true' : 'false'); });
      showBadge(badge.getAttribute('data-id')); return;
    }
    var el = e.target.closest ? e.target.closest('[data-action]') : null;
    if (!el) return;
    var a = el.getAttribute('data-action');
    if (a === 'task') completeTask(el.getAttribute('data-id'));
    else if (a === 'tab') selectTab(el.getAttribute('data-tab'), false);
    else if (a === 'share') shareProfile();
    else if (a === 'edit') openEdit();
    else if (a === 'close-edit') closeEdit();
    else if (a === 'more-guides') { guidesShown += GUIDES_PER_PAGE; renderPanelPanduan(); }
  });
  document.addEventListener('mouseover', function (e) {
    var b = e.target.closest ? e.target.closest('.pf-badge') : null;
    if (b) showBadge(b.getAttribute('data-id'));
  });
  document.addEventListener('focusin', function (e) {
    var b = e.target.closest ? e.target.closest('.pf-badge') : null;
    if (b) showBadge(b.getAttribute('data-id'));
  });
  var tabsEl = $('#tabs');
  if (tabsEl) {
    tabsEl.addEventListener('keydown', function (e) {
      var i = -1;
      TABS.forEach(function (t, n) { if ($('#tab-' + t) === document.activeElement) i = n; });
      if (i < 0) return;
      if (e.key === 'ArrowRight') { e.preventDefault(); selectTab(TABS[(i + 1) % TABS.length], true); }
      else if (e.key === 'ArrowLeft') { e.preventDefault(); selectTab(TABS[(i + TABS.length - 1) % TABS.length], true); }
      else if (e.key === 'Home') { e.preventDefault(); selectTab(TABS[0], true); }
      else if (e.key === 'End') { e.preventDefault(); selectTab(TABS[TABS.length - 1], true); }
    });
  }
  var editForm = $('#editForm');
  if (editForm) {
    editForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var f = e.target.elements, name = f.name.value.trim();
      if (!name) { f.name.focus(); return; }
      S.profile = { name: name, tagline: f.tagline.value.trim(), bio: f.bio.value.trim() };
      saveState(); renderNav(); renderHero(); closeEdit(); toast('Profil diperbarui');
    });
  }
  var editDlg = $('#editDlg');
  if (editDlg) {
    editDlg.addEventListener('click', function (e) { if (e.target === e.currentTarget) closeEdit(); });
  }
  window.addEventListener('hashchange', function () { selectTab(location.hash.replace('#', ''), false); });

  /* ============ INIT ============ */
  try {
    renderNav(); renderHero(); renderGarden(); renderTasks(); renderJourney();
    renderKomu(); renderBadges(); renderWeekly(); renderHeat();
    renderPanelTanaman(); renderPanelPanduan(); renderPanelAktivitas();
    selectTab(location.hash.replace('#', '') || 'tanaman', false);
  } catch (err) {
    console.error('FloraVerse profil gagal dirender:', err);
    var app = $('#app'), hero = $('#hero'), errEl = $('#appError');
    if (app) app.style.display = 'none';
    if (hero) hero.style.display = 'none';
    if (errEl) errEl.style.display = 'block';
  }
})();
