
// set a value as innerText of an element
function setInnertextAsValue(elementId, elementValue) {
    const element = document.getElementById(elementId);
    return element.innerText = elementValue;
}

// Collect input value and convert it to integer
function collectInputValueAsInteger(objectId) {
    const objectValue = document.getElementById(objectId);
    const objectValueString = objectValue.value;
    return objectValueInt = parseInt(objectValueString);
}

// collect innerText from element
function collectInnerText(objectId) {
    const objectValue = document.getElementById(objectId);
    return objectValue.innerText;
}

// count the number of items inside the list
function listContainerLength() {
    const listItems = document.getElementById("list-container").getElementsByTagName("li");
    return listItems.length;
}

// update player to the list-container
function addPlayerToListContainer(playerNameId, listContainerId) {
    const addedPlayerNumber = listContainerLength();
    if (addedPlayerNumber >= 5) {
        alert("You can't select more than five players");
        return
    };
    const playerName = collectInnerText(playerNameId);
    const listContainer = document.getElementById(listContainerId);
    const newLi = document.createElement("li");
    newLi.innerText = playerName;
    return listContainer.appendChild(newLi);
}

// disable the player button after pressing once
function disableSelectButton(buttonId) {
    const buttonSelectPlayer = document.getElementById(buttonId);
    buttonSelectPlayer.disabled = true;
    buttonSelectPlayer.classList.remove("bg-blue-600");
    buttonSelectPlayer.classList.remove("hover:bg-blue-700");
    buttonSelectPlayer.classList.add("cursor-not-allowed");
    buttonSelectPlayer.classList.add("bg-gray-500");
}

