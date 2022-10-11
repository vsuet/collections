const formElement = document.getElementById('form');
const clearAllElement = document.getElementById('clear-all');
const sortElement = document.getElementById('sort');
let list = [];

function outputList() {
    const outputElement = document.getElementById('output-list');

    outputElement.innerHTML = '';
    for (const element of list) {
        outputElement.innerHTML += `<li>${element}</li>`;
    }
}

formElement.addEventListener('submit', function (event) {
    event.preventDefault();

    const value = document.getElementById('item-list').value;
    list.push(value);

    outputList();
});

clearAllElement.addEventListener('click', function () {
    list = [];
    outputList();
});

sortElement.addEventListener('click', function () {
    list.sort();
    outputList();
});