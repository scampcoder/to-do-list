function get_todos() {
  let todos = new Array;
  let todos_str = localStorage.getItem('todo'); //retrieve todo list items inside localStorage
  if(todos_str !== null) { //if there are todo items
    todos = JSON.parse(todos_str); //used to parse the JSON data back to JavaScript so it can be used
  }
  return todos;
};

function add() {
  const task = document.getElementById('task').value; //retrieve input value of task

  let todos = get_todos(); //retrieve pre-existing items
  todos.push(task); //append new item
  localStorage.setItem('todo', JSON.stringify(todos)); //save returned strings to localStorage (setItem)

  show(); //implement show function

  return false; //avoid further action of click event
}
