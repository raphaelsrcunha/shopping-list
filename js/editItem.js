const editItem = (element) => {
    let newItem = prompt("Type here the item's new name: ");

    if(newItem !== null && newItem.trim() !== "") {
        const newTextItem = element.querySelector("#item-title");
        newTextItem.textContent = newItem;
    }
}