import { ProxyState } from "../AppState.js";
import todoService from "../Services/TodoService.js";

//TODO Create the draw function
function _drawTodos() { 
 let ToDos = ProxyState.todos
 let template = `number of listed tasks ${ProxyState.todos.length} `
 ToDos.forEach(t => template += `<li>${toDoComp(t)}</li>`)
 document.getElementById("ToDos").innerHTML = template
}

function toDoComp(t){
  if (t.completed){return `<p style="text-decoration: line-through">${t.description}
  <button class="btn-light border: rounded" onclick="app.todoController.toggleTodoStatus('${t._id}')">-</button>
 <button class="btn-dark border: rounded" onclick="app.todoController.removeTodo('${t._id}')">X</button>
  </p>`}
  else{return `<p">${t.description}
  <button class="btn-light border: rounded" onclick="app.todoController.toggleTodoStatus('${t._id}')">-</button>
 <button class="btn-dark border: rounded" onclick="app.todoController.removeTodo('${t._id}')">X</button>
  </p>`}
}

export default class TodoController {
  constructor() {
    //TODO Remember to register your subscribers
    ProxyState.on("todos", _drawTodos)
    todoService.getTodos()
  }

  getTodos() {
    try {
      todoService.getTodos()
    } catch (error) {
      console.error(error)
    }
  }
  addTodo(e) {
    e.preventDefault();
    var form = e.target;
    //TODO build the todo object from the data that comes into this method
    var todo = {
      description: form.description.value,
    };

    try {
      todoService.addTodo(todo);
    } catch (error) {
      console.error(error)
    }
  }

  /**
 * This method takes in an id of the Todo that should be togggled as complete
 * @param {string} todoId 
 */
  toggleTodoStatus(todoId) {
    try {
      todoService.toggleTodoStatus(todoId);
    } catch (error) {
      console.error(error)
    }
  }

  /**
   * This method takes in an id of the Todo that should be removed
   * @param {string} todoId 
   */
  removeTodo(todoId) {
    try {
      todoService.removeTodo(todoId);
    } catch (error) {
      console.error(error)
    }
  }
}