// convert the innerText to an integer value
function setInnertextToInteger(input) {
    const objectValue = document.getElementById(input);
    const objectValueString = objectValue.innerText;
    return objectValueInt = parseInt(objectValueString);
}

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

// set inputValue to an element
function setInputValueToElement(objectId, objectValue) {
    const element = document.getElementById(objectId);
    return element.value = objectValue;
}

// collect innerText from element
function collectInnerText(objectId) {
    const objectValue = document.getElementById(objectId);
    return objectValue.innerText;
}

// update player to the list-container
function addPlayerToListContainer(playerNameId, listContainerId) {
    const playerName = collectInnerText(playerNameId);
    const listContainer = document.getElementById(listContainerId);
    const newLi = document.createElement("li");
    newLi.innerText = playerName;
    return listContainer.appendChild(newLi);
}

// disable the player button after pressing once
function disableSelectButton(buttonId) {
    const buttonSelectPlayer = document.getElementById(buttonId);
    return buttonSelectPlayer.disabled = true;
}