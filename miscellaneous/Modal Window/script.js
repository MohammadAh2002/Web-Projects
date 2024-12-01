'use strict';

const btnOpenmodal = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');

for(let i = 0; i < btnOpenmodal.length; i++){
    btnOpenmodal[i].addEventListener('click',OpenModal)
}

const btnclosemodal = document.querySelector('.close-modal');
btnclosemodal.addEventListener('click', CloseModal)

const overlay = document.querySelector('.overlay');
overlay.addEventListener('click', CloseModal)

function OpenModal(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
function CloseModal(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

document.addEventListener('keydown', function(e){

    if(e.key === "Escape" && !modal.classList.contains('hidden'))
        CloseModal();

})


