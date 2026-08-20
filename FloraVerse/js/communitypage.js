const board=document.querySelector('#communityBoard');
const rots=[-3,2,-2,3,-1,2,4,-3,0,1];
const widths=['270px','300px','250px','285px'];
communityRoots.forEach((root,i)=>{
  const replies=communityComments.filter(c=>c.rootPostId===root.id).length;
  const p=document.createElement('a');
  p.className='paper reveal';
  p.href='community_talkpage.html?id='+root.id;
  p.style.setProperty('--rot',rots[i%rots.length]+'deg');
  p.style.setProperty('--pw',widths[i%widths.length]);
  p.innerHTML='<span class="pin"></span><span class="paper-head"><b>'+root.author+'</b><time>'+root.time+'</time></span><span class="paper-tag">'+root.tag+'</span><h3>'+root.title+'</h3><p>'+root.content+'</p><span class="paper-foot"><span>♡ '+root.reactions+'</span><span>💬 '+replies+' replies</span></span>';
  board.append(p);
});
window.revealAll&&window.revealAll();