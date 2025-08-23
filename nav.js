// Load the shared nav fragment and mark the active link.
(function(){
  function loadNav(){
    var container = document.getElementById('site-nav');
    if(!container) return;
    fetch('nav.html').then(function(res){
      if(!res.ok) throw new Error('Failed to load nav');
      return res.text();
    }).then(function(html){
      container.innerHTML = html;

      // determine current file name
      var p = location.pathname.split('/').pop();
      if(!p) p = 'index.html';
      // when served as '/', map to index.html
      if(p === '') p = 'index.html';

      var links = container.querySelectorAll('a');
      links.forEach(function(a){ a.classList.remove('active'); });

      // try exact match first
      var sel = container.querySelector('a[href="' + p + '"]');
      if(!sel){
        // try index for root
        if((p === 'index.html' || p === '/') ) sel = container.querySelector('a[href="index.html"]');
      }
      if(sel) sel.classList.add('active');
    }).catch(function(err){
      console.error('nav load error', err);
    });
  }

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', loadNav);
  else loadNav();
})();
