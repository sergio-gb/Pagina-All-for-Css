/*================= SEARCH ICONS============*/
const iconos = document.querySelectorAll('.main__card');

document.querySelector('#search-box').oninput = () => {
   var value = document.querySelector('#search-box').value.toLowerCase();
   iconos.forEach(_main__card =>{
      var filter = _main__card.getAttribute('data-search').toLowerCase();
      if(filter.indexOf(value) > -1) {
        _main__card.style.display = 'flex';
      }else {
        _main__card.style.display = 'none';
      };
   });
};
