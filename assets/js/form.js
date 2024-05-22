const usernameInput = document.querySelector('#username');
const titleInput = document.querySelector('#title');
const contentInput = document.querySelector('#content');
const submitButton = document.querySelector('#submit');
const msgDiv = document.querySelector('#msg');

function displayMessage(type, message) {
msgDiv.textContent = message;
msgDiv.setAttribute('class', type);
}

submitButton.addEventListener('click', function (event) {
event.preventDefault();

const userInputs = JSON.parse(localStorage.getItem('userInputs')) || [];

const userInput = {
    username: usernameInput.value.trim(),
    title: titleInput.value.trim(), 
    content: contentInput.value.trim(), 
}

const username = document.querySelector('#username').value
const title = document.querySelector('#title').value
const content = document.querySelector('#content').value

if (username === ''){
    displayMessage('error', 'Username cannot be blank');
} else if ( title === '') {
    displayMessage('error', 'Title cannot be blank');
} else if (content === ''){
    displayMessage('error', 'Content cannot be blank');
} else {


}

userInputs.push(userInput);

localStorage.setItem('userInputs', JSON.stringify(userInputs));
});





