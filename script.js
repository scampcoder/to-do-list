function get_todos() {
  let todos = [];
  let todos_str = localStorage.getItem("todo"); //retrieve todo list items inside localStorage
  if (todos_str !== null) {
    //if there are todo items
    todos = JSON.parse(todos_str); //used to parse the JSON data back to JavaScript so it can be used
  }
  return todos;
}

function add() {
  const task = document.getElementById("task").value; //retrieve input value of task

  let todos = get_todos(); //retrieve pre-existing items
  todos.push(task); //append new item
  localStorage.setItem("todo", JSON.stringify(todos)); //save returned strings to localStorage (setItem)

  show(); //implement show function

  return false; //avoid further action of click event
}

function clearDefault(a) {
  //checks if there is text in the input after adding and clears it
  if (a.defaultValue == a.value) {
    a.value = "";
  }
}

function remove() {
  const id = this.getAttribute("id"); //retrieve selected item to remove
  let todos = get_todos();
  todos.splice(id, 1); //remove the item from the array
  localStorage.setItem("todos", JSON.stringify(todos)); //store new array as a string

  show();

  return false;
}

function show() {
  let todos = get_todos(); //retrieve list items

  let html = "<ul>"; //initialize html var as the start of a list
  for (let i = 0; i < todos.length; i++) {
    html +=
      "<li>" +
      todos[i] +
      '<button class="remove" id="' +
      i +
      '">Delete</button> </li>'; //add a list item containing the each task and delete button
  }
  html += "</ul>"; //end list

  document.getElementById("todos").innerHTML = html; //put html var into the actual HTML in todos section

  let buttons = document.getElementsByClassName("remove"); //declare a var to represent all remove buttons
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", remove); //if each is clicked, run remove
  }
}

document.getElementById("add").addEventListener("click", add); //when add button clicked, run add
show();
