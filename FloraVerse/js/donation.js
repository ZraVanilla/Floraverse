/* Tabungan Pohon — a growing savings tree. Growth controls branch/leaf density; every donation adds a bloom. */
const projects=[
 {id:'mangrove',target:75000000,raised:50250000,seed:7,scale:156,baseFlowers:8},
 {id:'garden',target:30000000,raised:12600000,seed:13,scale:128,baseFlowers:4}
];
const saved=JSON.parse(localStorage.getItem('floraDonations')||'{}');
/* viewBox is "0 0 scale 100": x maps to 0..scale, y to 0..100. X()/Y() keep every part inside the canvas. */
function treeSVG(growth,scale,seed){
  const H=100;
  const X=x=>x*scale, Y=y=>y*H;
  let n=1;
  const r=i=>{const x=Math.sin(seed*127.1+i*311.7)*43758.5453;return x-Math.floor(x)};
  const P=[],F=[];
  const limb=(x1,y1,x2,y2,w1,w2,c)=>{
    const wx1=w1*scale,wx2=w2*scale;
    return '<path d="M'+(X(x1)-wx1/2).toFixed(2)+' '+Y(y1).toFixed(2)+' L'+(X(x2)-wx2/2).toFixed(2)+' '+Y(y2).toFixed(2)+' L'+(X(x2)+wx2/2).toFixed(2)+' '+Y(y2).toFixed(2)+' L'+(X(x1)+wx1/2).toFixed(2)+' '+Y(y1).toFixed(2)+' Z" fill="'+c+'"/>';
  };
  const leaf=(x,y,size,rot)=>{
    const col=n%2?'#3c7a48':'#5f9c52';
    return '<g transform="translate('+X(x).toFixed(2)+','+Y(y).toFixed(2)+') rotate('+rot.toFixed(1)+')"><ellipse rx="'+size.toFixed(2)+'" ry="'+(size*0.55).toFixed(2)+'" fill="'+col+'"/><path d="M'+(-size*0.9).toFixed(2)+' 0 L'+(size*0.9).toFixed(2)+' 0" stroke="#c9dc9a" stroke-width="'+Math.max(.6,size*.1).toFixed(2)+'"/></g>';
  };
  const flower=(x,y,sc)=>{
    const pr=(1.7*sc).toFixed(2);
    return '<g class="flower" transform="translate('+X(x).toFixed(2)+','+Y(y).toFixed(2)+')">'
      +'<line x1="0" y1="0" x2="0" y2="'+(3.2*sc).toFixed(2)+'" stroke="#3c7a48" stroke-width="'+(0.8*sc).toFixed(2)+'"/>'
      +'<circle cx="0" cy="-2.1" r="'+pr+'" fill="#f6c453"/>'
      +'<circle cx="2" cy="-0.7" r="'+pr+'" fill="#f8d071"/>'
      +'<circle cx="1.25" cy="1.75" r="'+pr+'" fill="#f6c453"/>'
      +'<circle cx="-1.25" cy="1.75" r="'+pr+'" fill="#f8d071"/>'
      +'<circle cx="-2" cy="-0.7" r="'+pr+'" fill="#f6c453"/>'
      +'<circle cy="0.9" r="'+(1*sc).toFixed(2)+'" fill="#3c7a48"/>'
      +'<circle r="'+(1.15*sc).toFixed(2)+'" fill="#c0522a"/></g>';
  };
  /* deeper canopy = more branches and more bloom spots as the tree matures */
  const maxDepth=growth>=0.8?3:(growth>=0.55?2:1);
  const branch=(x,y,ang,len,w,depth)=>{
    const gl=len*growth,x2=x+Math.cos(ang)*gl,y2=y-Math.sin(ang)*gl;
    P.push(limb(x,y,x2,y2,w,w*0.5,depth===0?'#5d4026':'#6d4a2b'));
    n++;
    if(depth<maxDepth){
      const kids=depth===0?3:(depth===1?3:2);
      for(let k=0;k<kids;k++){
        const a=ang+(k-(kids-1)/2)*0.55+(r(n*9+1)-0.5)*0.26;
        branch(x2,y2,a,len*0.63,Math.max(w*0.6,0.012),depth+1);
      }
    }
    if(depth>=1){
      F.push([x2,y2]);
      P.push(leaf(x2,y2,4.6+2.8*growth,r(n)*60-30));
      P.push(leaf(x2+0.02,y2-0.015,3.6+2.2*growth,r(n+7)*70-35));
    }
  };
  const trunkH=0.14+0.22*growth;
  P.push(limb(0.5,1,0.5,1-trunkH,0.05,0.03,'#4c331f'));
  P.push(leaf(0.5,1-trunkH,4.2+2.4*growth,-24));
  P.push(leaf(0.51,1-trunkH-0.01,3.4+2*growth,26));
  branch(0.5,1-trunkH,Math.PI/2,0.36,0.034,0);
  return '<svg class="tree-svg" viewBox="0 0 '+scale+' '+H+'" preserveAspectRatio="xMidYMax meet" aria-hidden="true">'+P.join('')+F.map(f=>flower(f[0],f[1],0.85+0.4*growth)).join('')+'</svg>';
}
function draw(project){
  const holder=document.querySelector('#'+project.id+'-tree');
  const growth=Math.max(.5,Math.min(1,project.raised/project.target));
  holder.innerHTML=treeSVG(growth,project.scale,project.seed);
  project.flowers=[].slice.call(holder.querySelectorAll('.flower'));
  project.events=Math.max(project.events||0,project.baseFlowers);
  showFlowers(project,true);
  updatePlaque(project);
}
function updatePlaque(project){
  const pct=Math.round(project.raised/project.target*100);
  document.querySelector('#'+project.id+'-pct').style.width=pct+'%';
  document.querySelector('#'+project.id+'-amount').textContent=money(project.raised)+' of '+money(project.target);
  document.querySelector('#'+project.id+'-num').textContent=pct+'%';
}
function showFlowers(project,silent){
  const prev=project.shown||0;
  const show=Math.min(project.events,project.flowers.length);
  for(let i=0;i<show;i++){
    const f=project.flowers[i];
    f.classList.add('show');
    if(!silent&&(i<show-1||i<prev))f.classList.add('noanim');
  }
  project.shown=show;
}
function toast(project,msg){
  const t=document.querySelector('#'+project.id+'-toast');
  t.textContent=msg;t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'),2600);
}
projects.forEach(p=>{p.raised+=(+saved[p.id]||0);draw(p)});
document.querySelectorAll('.amount').forEach(b=>b.onclick=()=>{
  const group=b.closest('.amounts');
  group.querySelectorAll('.amount').forEach(x=>x.classList.remove('active'));
  b.classList.add('active');
  sfx.pluck&&sfx.pluck();
});
document.querySelectorAll('.donate').forEach(btn=>btn.onclick=()=>{
  const p=projects.find(x=>x.id===btn.dataset.project);
  const amount=+btn.closest('.plaque').querySelector('.amount.active').dataset.amount;
  p.raised+=amount;p.events++;saved[p.id]=(+saved[p.id]||0)+amount;
  localStorage.setItem('floraDonations',JSON.stringify(saved));
  const holder=document.querySelector('#'+p.id+'-tree');
  const growth=Math.max(.5,Math.min(1,p.raised/p.target));
  holder.innerHTML=treeSVG(growth,p.scale,p.seed);
  p.flowers=[].slice.call(holder.querySelectorAll('.flower'));
  showFlowers(p,false);
  updatePlaque(p);
  sfx.bloom&&sfx.bloom();
  const log=document.querySelector('#'+p.id+'-donors');
  const li=document.createElement('li');li.className='grow-in';
  li.innerHTML='<b>Tamu</b><span>'+money(amount)+'</span>';
  log.prepend(li);
  while(log.children.length>4)log.lastElementChild.remove();
  toast(p,'Rp'+money(amount)+' planted. Terima kasih! 🌱');
});