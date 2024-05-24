const themeSwitcher = document.querySelector('#theme-switcher');
const conatiner =document.querySelector('.container');
const storedUserInput = localStorage.getItem('userInput')
const usernameInput = document.querySelector('#username');
const titleInput = document.querySelector('#title');
const contentInput = document.querySelector('#content');
const backButton = document.querySelector('#back');
const postDiv = document.querySelector('#post');
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

function redirectToHomePage () {
    window.location.href = 'index.html';
}

backButton.addEventListener('click', function (event) {
    event.preventDefault();
    redirectToHomePage();
})

const displayPost = function () {
const data = localStorage.getItem("userInputs");
const inputs= JSON.parse(data) || [];
for (let input of inputs) {
    const userInputs = document.createElement('div');
    const username = document.createElement('h1');
    const title = document.createElement('h2');
    const content = document.createElement('p');
    userInputs.append(username, title, content);
    username.textContent = input.username;
     title.textContent = input.title;
     content.textContent = input.content;
   postDiv.append(userInputs);

}
};
 displayPost();
