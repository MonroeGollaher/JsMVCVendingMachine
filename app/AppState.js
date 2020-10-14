import Value from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import VendingMachine from "./Models/VendingMachine.js"
import MoneyBalance from "./Models/Money.js"

class AppState extends EventEmitter {
  /** @type {Value[]} */
  vendingMachine = new VendingMachine()
  moneyBalance = new MoneyBalance()
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
