import { deleteItem } from "./deleteItem.js";
import { verifyEmptyList } from "./verifyEmptyList.js";

const shoppedList = document.getElementById("shopped-list");
const shoppingList = document.getElementById("shopping-list");

let counter = 0;

export function createItemList(item) {
    const itemList = document.createElement("li");
    const containerItemList = document.createElement("div");
    containerItemList.classList.add("item-list-container");

    const containerItemName = document.createElement("div");
    containerItemName.classList.add("name-item-container");

    const containerCheckbox = document.createElement("div");
    containerCheckbox.classList.add("checkbox-container");

    const checkboxInput = document.createElement("input");
    checkboxInput.type = "checkbox";
    checkboxInput.classList.add("checkbox-input");
    checkboxInput.id = "checkbox-" + counter++;

    const checkboxLabel = document.createElement("label");
    checkboxLabel.setAttribute("for", checkboxInput.id);

    checkboxLabel.addEventListener("click", function(event) {
        const checkboxInput = event.currentTarget.querySelector(".checkbox-input");
        const customizedCheckbox = event.currentTarget.querySelector(".customized-checkbox");
        const itemTitle = event.currentTarget.closest("li").querySelector("#item-title");
        if(checkboxInput.checked) {
            customizedCheckbox.classList.add("checked");
            itemTitle.style.textDecoration = "line-through";
            shoppedList.appendChild(itemList);
        } else {
            customizedCheckbox.classList.remove("checked");
            itemTitle.style.textDecoration = "none";
            shoppingList.appendChild(itemList);
        }
    })

    const customizedCheckbox = document.createElement("div");
    customizedCheckbox.classList.add("customized-checkbox");

    checkboxLabel.appendChild(checkboxInput);
    checkboxLabel.appendChild(customizedCheckbox);

    containerCheckbox.appendChild(checkboxLabel);
    containerItemName.appendChild(containerCheckbox);


    const nameItem = document.createElement("p");
    nameItem.id = "item-title";
    nameItem.innerText = item;
    containerItemName.appendChild(nameItem);

    const containerButtons = document.createElement("div");
    const buttonRemove = document.createElement("button");
    buttonRemove.classList.add("button-action");

    const imgRemove = document.createElement("img");
    imgRemove.src = "./assets/delete.svg";
    imgRemove.alt = "delete";

    buttonRemove.addEventListener("click", function() {
        deleteItem(itemList);
    });

    buttonRemove.appendChild(imgRemove);
    containerButtons.appendChild(buttonRemove);

    const buttonEdit = document.createElement("button");
    buttonEdit.classList.add("button-action");

    const imgEdit = document.createElement("img");
    imgEdit.src = "./assets/edit.svg";
    imgEdit.alt = "edit";
    buttonEdit.appendChild(imgEdit);

    containerButtons.appendChild(buttonEdit);

    containerItemList.appendChild(containerItemName);
    containerItemList.appendChild(containerButtons);
 
    const itemDate = document.createElement("p");
    itemDate.innerText = `${new Date().toLocaleDateString("en-CA", {weekday: "long"})} (${new Date().toLocaleDateString()}) - ${new Date().toLocaleTimeString("en-CA", {hour:"numeric", minute:"numeric"})}`;
    itemDate.classList.add("item-list-text");
 
    itemList.appendChild(containerItemList);

    itemList.appendChild(itemDate);

    return itemList;
}