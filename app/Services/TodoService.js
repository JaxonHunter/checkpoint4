import { ProxyState } from "../AppState.js";
import Todo from "../models/Todo.js";
import { api } from "../Services/AxiosService.js";

let url = 'jaxon/todos/'


class TodoService {
  async getTodos() {
    console.log("Getting the Todo List");
    let res = await api.get(url);
    //TODO Handle this response from the server
    console.log(res)
    ProxyState.todos = res.data.data.map(d => new Todo(d))
  }

  async addTodo(todo) {
    let res = await api.post(url, todo);
    //TODO Handle this response from the server
    this.getTodos()
    console.log(todo);
  }

  async toggleTodoStatus(todoId) {
    let todo = await ProxyState.todos.find(todo => todo._id == todoId);
    //TODO Make sure that you found a todo,
    //		and if you did find one
    //		change its completed status to whatever it is not (ex: false => true or true => false)
    if (todo.completed == true) {todo.completed = false
    }else{todo.completed = true}
    let res = await api.put(url + todoId, todo);
    //TODO how do you trigger this change
    this.getTodos()
  }

  async removeTodo(todoId) {
    //TODO Work through this one on your own
    //		what is the request type
    //		once the response comes back, how do you update the state
    let todo = await ProxyState.todos.find(todo => todo._id == todoId)
    let res = await api.delete(url + todoId, todo)
    this.getTodos()
  }
}

const todoService = new TodoService();
export default todoService;