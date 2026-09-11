/* FloraVerse - Plant Lab (simulation) - dummy educational simulation, not scientific diagnosis */
const PLANT_LAB_DEFAULT = { water:50, sun:60, fert:40, soil:70 };

function plantLabEvaluate(params){
  // params: 0-100
  let health = 100;
  let messages = [];
  let emoji = "🌿";
  let status = "Sehat";
  let color = "#8BCB8A";

  if(params.water < 20){ health -= 30; messages.push("Air terlalu sedikit  tanaman layu, daun menguning."); status="Layu"; color="#FF9B70"; emoji="🥀"; }
  else if(params.water > 85){ health -= 25; messages.push("Air terlalu banyak  risiko busuk akar. Kurangi penyiraman."); status="Overwater"; color="#6FA8FF"; emoji="💧"; }

  if(params.sun < 15){ health -= 30; messages.push("Cahaya terlalu rendah  pertumbuhan melambat."); status="Kurang Cahaya"; color="#FFD45C"; emoji="🌑"; }
  else if(params.sun > 90){ health -= 15; messages.push("Cahaya sangat terik  daun bisa terbakar."); }

  if(params.fert < 15){ health -= 10; messages.push("Pupuk rendah  pertumbuhan tidak optimal, tapi masih aman."); }
  else if(params.fert > 85){ health -= 20; messages.push("Pupuk berlebih  risiko burn. Siram untuk bilas."); status="Over Fertilized"; color="#FF718D"; emoji="🧪"; }

  if(params.soil < 25){ health -= 25; messages.push("Media buruk  drainase buruk, akar sesak."); }

  if(health >= 85){ status="Sehat"; color="#8BCB8A"; emoji="🌿"; }
  else if(health >= 60){ status="Perlu Perhatian"; color="#FFD45C"; emoji="🌱"; }
  else if(health >= 35){ status="Stressed"; color="#FF9B70"; emoji="🍂"; }
  else { status="Kritis"; color="#FF718D"; emoji="🥀"; }

  if(messages.length===0) messages.push("Kondisi ideal! Pertahankan perawatan ini.");
  return { health: Math.max(0, Math.min(100, health)), messages, status, color, emoji };
}

function renderPlantLab(containerId, initialPlantId){
  const $c = $("#"+containerId);
  if(!$c.length) return;
  let params = {...PLANT_LAB_DEFAULT};
  let plant = PLANTS.find(p=>p.id===initialPlantId) || PLANTS[0];

  function draw(){
    const res = plantLabEvaluate(params);
    $c.html(`
      <div class="grid grid-cols-1 lg:grid-cols-5 gap-5">
        <div class="lg:col-span-2 fv-card white p-5 text-center relative overflow-hidden">
          <div class="absolute -top-6 -right-6 w-24 h-24 rounded-full opacity-10" style="background:${plant.color}"></div>
          <p class="font-black text-sm flex items-center justify-center gap-2">🔬 Plant Lab <span class="pill pill-yellow text-xs">Simulasi Edukasi</span></p>
          <div class="w-32 h-32 mx-auto mt-4 rounded-[28px] flex items-center justify-center text-6xl relative" style="background:${res.color}18; border:3px solid ${res.color}30; filter: ${res.health<50?'saturate(.7)':''}">
             ${fvImg(plant,'w-full h-full object-cover rounded-[24px]')}
            <span class="absolute -top-2 -right-2 pill text-xs font-black" style="background:${res.color}; color:#fff">${res.status}</span>
          </div>
          <p class="font-black mt-3">${plant.nama}</p><p class="text-xs italic text-muted -mt-1">${plant.ilmiah}</p>
          <div class="flex justify-between text-xs font-bold mt-3"><span>Kesehatan Simulasi</span><span>${res.health}%</span></div>
          <div class="progress-track mt-1"><div class="progress-fill shimmer" style="width:${res.health}%; background:${res.color}"></div></div>
          <p class="text-xs text-muted mt-2">*Bukan diagnosis ilmiah - hanya simulasi untuk belajar.</p>
          <div class="flex gap-2 mt-3 justify-center">
            <button onclick="$('#plantLabModal').removeClass('open')" class="btn btn-ghost text-xs px-3 py-2 hidden lg:flex">Tutup</button>
            <button class="btn btn-primary text-xs px-3 py-2 lab-reset">↺ Reset Ideal</button>
          </div>
        </div>
        <div class="lg:col-span-3 space-y-4">
          ${[
            {key:'water', label:'💧 Air', min:'Kering', max:'Becek', val:params.water},
            {key:'sun', label:'☀️ Cahaya', min:'Redup', max:'Terik', val:params.sun},
            {key:'fert', label:'🧪 Pupuk', min:'Rendah', max:'Tinggi', val:params.fert},
            {key:'soil', label:'🌿 Media', min:'Buruk', max:'Ideal', val:params.soil}
          ].map(s=>`
            <div class="fv-card white p-4">
              <div class="flex justify-between text-sm font-black"><span>${s.label}</span><span class="pill pill-white text-xs lab-val-${s.key}">${s.val}</span></div>
              <input type="range" min="0" max="100" value="${s.val}" data-key="${s.key}" class="lab-range w-full mt-2 accent-[#6FA8FF]">
              <div class="flex justify-between text-xs text-muted font-semibold"><span>${s.min}</span><span>${s.max}</span></div>
            </div>
          `).join('')}
          <div class="fv-card yellow p-4">
            <p class="font-black text-sm">💡 Feedback Edukasi</p>
            <ul class="text-sm mt-2 space-y-1 list-disc pl-5">
              ${res.messages.map(m=>`<li>${m}</li>`).join('')}
            </ul>
            <div class="flex gap-2 mt-3">
              <button class="btn btn-dark text-xs lab-apply flex-1">Terapkan ke Kebunku (simulasi)</button>
              <a href="learn.html" class="btn bg-white border text-xs flex-1 text-center">Baca Panduan </a>
            </div>
          </div>
        </div>
      </div>
    `);
    // bind
    $c.find('.lab-range').on('input', function(){
      const k=$(this).data('key'); params[k]=parseInt(this.value);
      $c.find('.lab-val-'+k).text(params[k]);
      // live preview for performance: just update health bar & feedback without full re-render? For simplicity re-render
      // debounce
      clearTimeout(window._labTimer);
      window._labTimer=setTimeout(draw, 250);
    });
    $c.find('.lab-reset').on('click', ()=>{ params={...PLANT_LAB_DEFAULT}; draw(); toast('Reset ke kondisi ideal','🔬'); });
    $c.find('.lab-apply').on('click', ()=> toast('Simulasi diterapkan - cek Garden Pulse','✨'));
  }
  draw();

  // expose for external plant switch
  $c.data('setPlant', (newId)=>{ plant=PLANTS.find(p=>p.id===newId)||plant; draw(); });
}
