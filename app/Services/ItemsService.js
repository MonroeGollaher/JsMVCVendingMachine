import { ProxyState } from "../AppState.js";

class VendingService {
    buyItem(userChoice){  
      let moneyBalance = ProxyState.moneyBalance.balance
      let vendingMachine = ProxyState.vendingMachine

      if(moneyBalance >= vendingMachine.items[userChoice]){
        moneyBalance -= vendingMachine.items[userChoice]
        ProxyState.moneyBalance.balance = moneyBalance  
        ProxyState.moneyBalance = ProxyState.moneyBalance 
      }

        console.log(ProxyState.moneyBalance.balance)
    }

    addFunds(fundAmount){
        ProxyState.moneyBalance.balance += fundAmount
    }
  }

  export const vendingService = new VendingService()

