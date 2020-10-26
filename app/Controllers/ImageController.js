import { ProxyState } from "../AppState.js";
import imageService from "../Services/ImageService.js";
//TODO Create methods for constructor, and rendering the image to the page
//      (you may wish to set it as a background image: https://www.w3schools.com/JSREF/prop_style_backgroundimage.asp)
function _drawImage(){
  let bImage = ProxyState.image && ProxyState.image.imageTemp ? ProxyState.image.imageTemp : "";
  document.getElementById("app").setAttribute("style", bImage);

}
export default class ImageController { 
  constructor(){
    this.getIMage()
     _drawImage()
     ProxyState.on("image", _drawImage)
  }
  getIMage() {
    try {
      imageService.getImage()
    } catch (error) {
      console.error(error)
    }
  }
}