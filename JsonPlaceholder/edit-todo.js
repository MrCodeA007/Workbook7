`use strict`
const userIdEl = document.getElementById(`userId`);
const idEl = document.getElementById(`id`);
const titleEl = document.getElementById(`title`);
const upBtnEl = document.getElementById(`upBtn`);


upBtnEl.addEventListener(`click`, () => {
    let bodydata = {
        title: titleEl.value, 
        userId: userIdEl.value,
        id: idEl.value,
        completed: false,
    };
})
// function btnGetClicked() {
//     const url = "http://localhost:3000/todos"
//     fetch(url, option)
// }