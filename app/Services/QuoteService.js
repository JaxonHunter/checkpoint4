//TODO create methods to retrieve data and update the State
import { ProxyState } from "../AppState.js";
import Quote from "../models/Quote.js";
import { api } from "../Services/AxiosService.js";

class QuoteService { 

  async getquote(){
    let res = await api.get('quotes')
    ProxyState.quote = new Quote(res.data.quote)
    console.log(res.data.quote);
  }
}

const quoteService = new QuoteService();
export default quoteService;