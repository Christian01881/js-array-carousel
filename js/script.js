// Consegna:
// Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.
// MILESTONE 1
// Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo un'immagine grande al centro: avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull'aspetto logico.
// MILESTONE 2
// Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal.
// Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
// Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.
// MILESTONE 3
// Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.


/*
`
<div class="slide show">
    <img src="./img/01.webp" alt="spiderman">
</div>
`
*/ 


const images = [
    'img/01.webp',
    'img/02.webp',
    'img/03.webp',
    'img/04.webp',
    'img/05.webp',
];

const slider = document.querySelector('.slider');
const thumbnail = document.getElementById('thumbnail');
let slide = '';
let nail = '';
let currentSlideIndex = 0;

for(let i = 0; i < images.length; i++){

    slide += `<div class="slide">
        <img src="${images[i]}" alt="superhero-${i}">
    </div>
    `;
    nail += `<div class="Thumbheigth">
        <img src="${images[i]}" alt"super-${i}">
    </div>
    `;
}

slider.innerHTML += slide;
thumbnail.innerHTML += nail;
document.querySelectorAll('.slide')[currentSlideIndex].classList.add('show');
document.querySelectorAll('.Thumbheigth')[currentSlideIndex].classList.add('CPM-image-opacity');


const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

next.addEventListener('click', goNext)

function goNext(){
    document.querySelectorAll('.Thumbheigth')[currentSlideIndex].classList.remove('CPM-image-opacity');
    document.querySelectorAll('.slide')[currentSlideIndex].classList.remove('show');
    if(currentSlideIndex === images.length - 1){
        currentSlideIndex = 0;
    } else{
        currentSlideIndex++;
    }
    document.querySelectorAll('.Thumbheigth')[currentSlideIndex].classList.add('CPM-image-opacity');
    document.querySelectorAll('.slide')[currentSlideIndex].classList.add('show');
};

prev.addEventListener('click', goBack)

function goBack(){
    document.querySelectorAll('.Thumbheigth')[currentSlideIndex].classList.remove('CPM-image-opacity');
    document.querySelectorAll('.slide')[currentSlideIndex].classList.remove('show');
    if(currentSlideIndex === 0){
        currentSlideIndex = images.length - 1;
    } else{
        currentSlideIndex--;
    }
    document.querySelectorAll('.Thumbheigth')[currentSlideIndex].classList.add('CPM-image-opacity');
    document.querySelectorAll('.slide')[currentSlideIndex].classList.add('show');
};
