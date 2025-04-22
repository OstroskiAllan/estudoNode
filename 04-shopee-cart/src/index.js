import * as cartService from "./services/cart.js";
import createItem from "./services/item.js";

const myCart = [];
const myWishList = [];

console.log("Welcome to the your Shopee Cart!");

const item1 = await createItem("Estojo", 20.99, 1);
const item2 = await createItem("Estojo1", 39.99, 3);

await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

await cartService.calculateTotal(myCart);

await cartService.displayCart(myCart)

await cartService.removeItemmy(myCart, )
// await cartService.deleteItem(myCart, item2.name)

// await cartService.calculateTotal(myCart);

// console.log(item2.subtotal());