import { ProxyState } from "../AppState.js";
import {vendingService} from "../Services/ItemsService.js";


// Private
function _draw() {
  let balanceElem = document.getElementById("moneyTotal")
      balanceElem.innerText = ProxyState.moneyBalance.balance

      console.log("I drew")
}

//Public
export default class ValuesController {
  constructor() {
    ProxyState.on("vendingMachine", _draw)
    ProxyState.on("moneyBalance", _draw)
    _draw()

  }

  buyItem(userChoice){
    vendingService.buyItem(userChoice)
    
  }

  addFunds(fundAmount){
    vendingService.addFunds(fundAmount)
  }

}

