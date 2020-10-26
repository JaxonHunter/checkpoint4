export default class Image {
  constructor(data){
    this.id = data.id,
    this.url = data.url,
    this.large_url = data.large_url || data.url,
    this.source_id = data.source_id
  }
  get imageTemp() {
    return `background-image: url('${this.large_url}');  height: 100vh;`
  }
}