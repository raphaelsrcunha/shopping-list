import { verifyEmptyList } from "./verifyEmptyList.js";

const shoppingList = document.getElementById("shopping-list");

const deleteItem = (element) => {
    let confirmation = confirm("Are you sure that you want to delete this item?");

    if(confirmation) {
        element.remove();
        verifyEmptyList(shoppingList);
    }
}

export { deleteItem };