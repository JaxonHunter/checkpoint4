export default class Todo {
  constructor(data) {
    this._id = data._id
    this.completed = data.completed
    this.user = data.user
    this.description = data.description

  }
get Template() {
  return /*html*/`
  <div className="row"><div className="col">
  ${this.description}
  <button class="btn btn-light" onclick="app.todoController.toggleTodoStatus(${this._id})">/</button>
  <button class="btn btn-dark" onclick="app.todoController.removeTodo(${this._id})">X</button>
  </div></div>
  `
}

}