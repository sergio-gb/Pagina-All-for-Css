/*================= MENU RESPONSIVE ============*/
const menu = document.querySelector('#menu');
const nav = document.querySelector('#nav');

menu.addEventListener('click', () => {    
    nav.classList.toggle('header__ul--active');
});


/*================= SWITCH ============*/
const btnSwitch = document.getElementById('switch');

btnSwitch.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  btnSwitch.classList.toggle('active');

  if(document.body.classList.contains('dark')) {
    localStorage.setItem('dark-mode', 'true');
} else {
    localStorage.setItem('dark-mode', 'false');
}
});

if(localStorage.getItem('dark-mode') === 'true'){
	document.body.classList.add('dark');
	btnSwitch.classList.add('active');
} else {
	document.body.classList.remove('dark');
	btnSwitch.classList.remove('active');
};


/*================= HEART PALETTS ============*/
const icon = document.querySelector('.main__boxes');
        
icon.addEventListener('click', (e) => {    
    if (e.target && e.target.tagName === 'I') {
        e.target.classList.toggle('bxs-heart__red')        
    }    
});
