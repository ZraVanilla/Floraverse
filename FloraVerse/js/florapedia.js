/* Ruang belajar botani — an open botanical journal on a wooden desk. */
const flora=[
 ['🪴','Monstera deliciosa','Tropical','Easy','Southern Mexico','Rainforest understory','Bright, indirect','When top soil dries','Its split leaves help it weather tropical rain.'],
 ['🌸','Anthurium andraeanum','Indoor','Medium','Colombia & Ecuador','Humid lowland forest','Bright, indirect','Weekly','Its colorful "flower" is actually a modified leaf.'],
 ['🌵','Aloe vera','Succulent','Easy','Arabian Peninsula','Dry, rocky regions','Full sun','Every 2–3 weeks','The gel has long been used to soothe minor skin irritation.'],
 ['🌻','Helianthus annuus','Flower','Easy','North America','Open grasslands','Full sun','When dry','Young flower heads follow the sun across the sky.'],
 ['🌳','Rhizophora mucronata','Tree','Medium','Indo-Pacific','Tidal coastlines','Full sun','Salt-tolerant','Its prop roots create nurseries for fish.']
];
const el=id=>document.querySelector(id);
let idx=0,flipping=false;
function render(){
  const p=flora[idx];
  el('#bookArt').textContent=p[0];
  el('#bookLatin').textContent=p[1];
  el('#bookFact').textContent='"'+p[8]+'"';
  el('#folioL').textContent=idx+1;
  el('#bookCat').textContent=p[2]+' · '+p[3];
  el('#bookName').textContent=p[1];
  el('#bookSub').textContent=p[1];
  el('#bookDetails').innerHTML='<div><dt>Origin</dt><dd>'+p[4]+'</dd></div><div><dt>Habitat</dt><dd>'+p[5]+'</dd></div><div><dt>Light</dt><dd>'+p[6]+'</dd></div><div><dt>Water</dt><dd>'+p[7]+'</dd></div>';
  el('#folioR').textContent=idx+2;
  document.querySelectorAll('#bookIndex button').forEach(b=>b.classList.toggle('active',+b.dataset.i===idx));
}
function flip(dir){
  if(flipping)return;flipping=true;
  sfx.flip&&sfx.flip();
  const right=el('#pageRight');
  right.classList.add('flipping');
  setTimeout(()=>{
    idx=(idx+dir+flora.length)%flora.length;
    render();
    right.classList.remove('flipping');
    flipping=false;
  },300);
}
el('#bookNext').onclick=()=>flip(1);
el('#bookPrev').onclick=()=>flip(-1);
el('#bookIndex').innerHTML=flora.map((p,i)=>'<button data-i="'+i+'" aria-label="Jump to '+p[1]+'">'+p[0]+'</button>').join('');
el('#bookIndex').onclick=e=>{
  const b=e.target.closest('button');if(!b)return;
  idx=+b.dataset.i;render();
};
el('#quillBtn').onclick=()=>{
  const sheet=el('#writeSheet');
  const opening=!sheet.classList.contains('open');
  sheet.classList.toggle('open',opening);
  sfx.wood&&sfx.wood();
  if(opening)el('#writeArea').focus();
};
el('#writeSheet').addEventListener('submit',e=>{
  e.preventDefault();
  const area=el('#writeArea'),ok=el('#writeOk');
  ok.classList.add('show');
  sfx.ink&&sfx.ink();
  setTimeout(()=>{ok.classList.remove('show');el('#writeSheet').classList.remove('open');area.value=''},2400);
});
render();