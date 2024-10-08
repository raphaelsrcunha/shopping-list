const emptyListMessage = document.getElementById("empty-list-message");

export function verifyEmptyList(list) {
    if(list.querySelectorAll("li").length === 0) {
        emptyListMessage.style.display = "block";
    } else {
        emptyListMessage.style.display = "none";
    }
}