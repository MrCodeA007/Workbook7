const taskEl = document.getElementById("title");
const userIdEl = document.getElementById("userId");
const addBtnEl = document.getElementById("addBtn");
const messageEl = document.getElementById("message");

addBtnEl.addEventListener(`click`, () => {
  let bodydata = {
    title: taskEl.value,
    userId: userIdEl.value,
    id: '',
    completed: false,
  };
  console.log(bodydata);

  const options = {
    method: "POST", // adds new resource
    body: JSON.stringify(bodydata),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  };
const url = "http://localhost:3000/todos"
  fetch(url, options)
    .then((response) => response.json()) //parsed JSON
    .then((todo) => {
let message = "Success!" + todo.id;
messageEl.innerHTML = message;

        
        
      //parsed JSON goes into the div?
    //  user.innerHTML = todo.title;
    });
}); // create a message notifying success including the id of the newly created todo

