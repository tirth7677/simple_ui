const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnclosedmodal = document.querySelector('.close-modal');
const btnsopenmodal = document.querySelectorAll('.show-modal');

function openmodal() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

for (let i = 0; i < btnsopenmodal.length; i++) {
  btnsopenmodal[i].addEventListener('click', openmodal);
}

function closemodal() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

btnclosedmodal.addEventListener('click', closemodal);
overlay.addEventListener('click', closemodal);

document.addEventListener('keydown', function(a){
    console.log(a.key);
    if(a.key === 'Escape'){
        closemodal();
    }
})