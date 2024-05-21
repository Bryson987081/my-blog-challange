const textInput = {
    username: document.getElementById('username').value,
    title: document.getElementById('title').value,
    content: document.getElementById('content').value,
};

const textInputJSON = JSON.stringify(textInput);

localStorage.setItem('textInput', textInputJSON);