const themeSwitcher = document.querySelector('#theme-switcher');
const conatiner =document.querySelector('.container');
const storedUserInput = localStorage.getItem('userInput')
const usernameInput = document.querySelector('#username');
const titleInput = document.querySelector('#title');
const contentInput = document.querySelector('#content');

let mode = 'dark';

themeSwitcher.addEventListener('click', function (){
    if (mode === 'dark') {
        mode = 'light';
        conatiner.setAttribute ('class', 'light');
    }
    else {
        mode = 'dark';
        conatiner.setAttribute('class', 'dark');
    }
});

function redirectToHomePage() {
    window.location.href = 'index.html';
}