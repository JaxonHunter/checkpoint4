//TODO create methods to retrieve data and save to the State
import { ProxyState } from "../AppState.js";
import Image from "../models/Image.js";
import { api } from "../Services/AxiosService.js";

let url = 'images'
class ImageService { 
  async getImage() {
    console.log("Getting the Image");
    let res = await api.get('images');
    //TODO Handle this response from the server

    ProxyState.image = new Image(res.data)

  }

}


const imageService = new ImageService();
export default imageService;