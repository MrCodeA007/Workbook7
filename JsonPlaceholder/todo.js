`use strict`
const getInputEl = document.getElementById(`getInput`);
const buttonEl = document.getElementById(`addBtn`);
const todoEl = document.getElementById(`todo`);

buttonEl.addEventListener(`click`, () => {
    const todoId = getInputEl.value;
    const url =`https://jsonplaceholder.typicode.com/todos/${todoId}`;
    fetch(url)
    .then((response) => response.json())
    .then ((todo) => {

        todoEl.innerHTML = todo.title;
    });
});