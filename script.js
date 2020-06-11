function get_todos() {
  let todos = new Array;
  let todos_str = localStorage.getItem('todo'); //retrieve todo list items inside localStorage
  if(todos_str !== null) { //if there are todo items
    todos = JSON.parse(todos_str); //used to parse the JSON data back to JavaScript so it can be used
  }
  return todos;
}
