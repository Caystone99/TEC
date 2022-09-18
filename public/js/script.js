const hamburgerBtn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');


hamburgerBtn.addEventListener('click', ()=>{
    hamburgerBtn.classList.toggle('open');
    nav.classList.toggle('flex');
    nav.classList.toggle('hidden');
})

