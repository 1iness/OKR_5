const input = document.getElementById('userInput');
const output = document.getElementById('output');

input.addEventListener('input', ({ target }) => {
    output.textContent = target.value.split(' ').join('_');
});