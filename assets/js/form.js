const usernameInput = document.querySelector('#username');
const titleInput = document.querySelector('#title');
const contentInput = document.querySelector('#content');
const submitButton = document.querySelector('#submit');

submitButton.addEventListener('click', function (event) {
event.preventDefault();

const userInputs = JSON.parse(localStorage.getItem('userInputs')) || [];

const userInput = {
    username: usernameInput.value.trim(),
    title: titleInput.value.trim(), 
    content: contentInput.value.trim(), 
}
userInputs.push(userInput);

localStorage.setItem('userInputs', JSON.stringify(userInputs));
});
