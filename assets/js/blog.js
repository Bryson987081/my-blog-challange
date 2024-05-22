const themeSwitcher = document.querySelector('#theme-switcher');
const conatiner =document.querySelector('.container');

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