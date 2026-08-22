/* Soft nature sounds via Web Audio API + scroll-reveal + global micro-interactions. No external assets. */
(()=>{
  let ctx=null,active=false;
  function audio(){if(!ctx){const AC=window.AudioContext||window.webkitAudioContext;if(!AC)return null;ctx=new AC()}if(ctx.state==='suspended')ctx.resume();return ctx}
  function tone(freq,dur,type,vol,when,freq2){const a=audio();if(!a)return;const o=a.createOscillator(),g=a.createGain(),t=a.currentTime+(when||0);o.type=type||'sine';o.frequency.setValueAtTime(freq,t);if(freq2)o.frequency.exponentialRampToValueAtTime(freq2,t+dur);g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(vol||.05,t+.006);g.gain.exponentialRampToValueAtTime(.0001,t+dur);o.connect(g).connect(a.destination);o.start(t);o.stop(t+dur+.05)}
  function noise(dur,vol,hp,freq){const a=audio();if(!a)return;const len=a.sampleRate*dur,b=a.createBuffer(1,len,a.sampleRate),d=b.getChannelData(0);for(let i=0;i<len;i++)d[i]=Math.random()*2-1;const n=a.createBufferSource();n.buffer=b;const g=a.createGain(),f=a.createBiquadFilter(),t=a.currentTime;f.type=hp?'highpass':'lowpass';f.frequency.value=freq||900;g.gain.setValueAtTime(vol||.04,t);g.gain.exponentialRampToValueAtTime(.0001,t+dur);n.connect(f).connect(g).connect(a.destination);n.start(t)}
  addEventListener('pointerdown',()=>{active=true;audio()},{passive:true,once:true});
  addEventListener('keydown',()=>{active=true;audio()},{passive:true,once:true});
  window.sfx={
    click(){tone(340,.09,'triangle',.05,0,180)},
    wood(){tone(170,.11,'square',.03,0,120);noise(.05,.03,false,650)},
    hover(){noise(.045,.011,true,1800)},
    paper(){noise(.12,.045,true,500);tone(300,.1,'triangle',.02,0,220)},
    flip(){noise(.16,.05,true,420);tone(250,.14,'triangle',.022,0,175)},
    ink(){noise(.09,.04,true,2400);tone(520,.05,'triangle',.02)},
    chime(){[0,4,7,12].forEach((s,i)=>tone(587*Math.pow(2,s/12),.55,'sine',.024,i*.07))},
    bloom(){tone(392,.35,'sine',.03,0,784);tone(523,.4,'sine',.02,.12,659)},
    grow(){tone(150,.5,'sine',.035,0,430)},
    pluck(){tone(440,.06,'triangle',.028,0,540)}
  };
  const INTR='button,a,.clickable,[data-sfx]';
  let lastHover=0;
  document.addEventListener('pointerdown',e=>{const t=e.target.closest(INTR);if(active&&t)sfx.click()},{passive:true});
  document.addEventListener('mouseover',e=>{const t=e.target.closest(INTR+',.paper,.item,.leaf-object,.board-leaf');if(!t||!active)return;const now=Date.now();if(now-lastHover<30)return;lastHover=now;sfx.hover()},{passive:true});
  const io='IntersectionObserver' in window?new IntersectionObserver(es=>es.forEach(en=>{if(en.isIntersecting){en.target.classList.add('in');io.unobserve(en.target)}}),{threshold:.12}):null;
  window.revealAll=()=>document.querySelectorAll('.reveal:not([data-r])').forEach(el=>{el.setAttribute('data-r','1');io?io.observe(el):el.classList.add('in')});
  window.revealAll();
})();