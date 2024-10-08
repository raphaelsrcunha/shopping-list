import { createItemList } from "./createItemList.js";
import { verifyEmptyList } from "./verifyEmptyList.js";

const item = document.getElementById("input-item");
const shoppingList = document.getElementById("shopping-list");


export function addItem(event) {
    event.preventDefault();

    const itemList = createItemList(item.value);
    shoppingList.appendChild(itemList);
    verifyEmptyList(shoppingList);
}