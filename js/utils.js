/* Shared utilities — loaded before all other JS files. */
window.slugify = function(name){
  return name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
};

/* Lucide icons (loaded on every page except profile.html, which has its own boot). */
window.renderIcons = function(){
  if(window.lucide && typeof lucide.createIcons === 'function') lucide.createIcons();
};
if(window.lucide){
  renderIcons();
  document.addEventListener('DOMContentLoaded', renderIcons);
  new MutationObserver(function(){
    if(document.querySelector('i[data-lucide]')) renderIcons();
  }).observe(document.documentElement, {childList:true, subtree:true});
}
