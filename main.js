const picElement = document.querySelector('.lampwhite');
console.log(picElement);
picElement.src = 'img/white_lamp.png';


const buttonElement = document.querySelector('.btn');
console.log(buttonElement);

buttonElement.addEventListener('click', function() {
    picElement.setAttribute('src', 'img/yellow_lamp.png');

})