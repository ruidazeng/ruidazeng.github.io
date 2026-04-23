(function(){
  var cardHtml = '\
<div class="media author-card content-widget-hr">\
    <img class="avatar mr-3 avatar-circle" src="images/byx.jpg" alt="Ruida Zeng">\
    <div class="media-body">\
        <h5 class="card-title"><a href="https://www.ruidazeng.com/">Ruida Zeng</a></h5>\
        <h6 class="card-subtitle">Computer Scientist</h6>\
        <p class="card-text">My interests include artificial intelligence and computer security.</p>\
        <ul class="network-icon" aria-hidden="true">\
            <li>\
                <a href="mailto:ruida_zeng@alumni.brown.edu">\
                    <i class="fas fa-envelope"></i>\
                </a>\
            </li>\
            <li>\
                <a href="https://instagram.com/ruidaaa" target="_blank" rel="noopener noreferrer">\
                    <i class="fas fa-camera-retro"></i>\
                </a>\
            </li>\
            <!--\
            <li>\
                <a href="https://www.linkedin.com/in/ruidazeng/" target="_blank" rel="noopener noreferrer">\
                    <i class="fab fa-linkedin"></i>\
                </a>\
            </li>\
            -->\
            <li>\
                <a href="https://github.com/ruidazeng" target="_blank" rel="noopener noreferrer">\
                    <i class="fab fa-github"></i>\
                </a>\
            </li>\
            <li>\
                <a href="https://scholar.google.com/citations?user=7ITZq9MAAAAJ" target="_blank" rel="noopener noreferrer">\
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" role="img" width="1em" height="1em" style="vertical-align:-0.125em"><path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 100 14 7 7 0 000-14z"/></svg>\
                </a>\
            </li>\
        </ul>\
    </div>\
 </div>';
  function insertCard(){
    var el = document.getElementById('author-card');
    if(el){ el.innerHTML = cardHtml; }
  }
  if(document.readyState !== 'loading') insertCard();
  else document.addEventListener('DOMContentLoaded', insertCard);
})();
