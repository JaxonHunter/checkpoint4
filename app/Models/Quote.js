export default class Quote {
  constructor(data){
    this.id =data.id
    
    this.author = data.author
    this.body = data.body
  }
  get quoTemp(){
    return `<div class="text-center">
    <p>${this.body}</p>
    <p>-${this.author}</p>
    </div>`
  }
}