import { ProxyState } from "../AppState.js";
import quoteService from "../Services/QuoteService.js";
//TODO Create methods for constructor, and rendering the quote to the page
function _drawQuote() { 
  let Quote = ProxyState.quote && ProxyState.quote.quoTemp ? ProxyState.quote.quoTemp : '';
  document.getElementById("quote").innerHTML = Quote
 }
 

export default class QuoteController { 
  constructor(){
  this.GetQuote()
  ProxyState.on("quote", _drawQuote)
  _drawQuote()
  }
  GetQuote(){
    try {
      quoteService.getquote()
    }
    catch (e) {
      console.error(e)
    }
  }
}