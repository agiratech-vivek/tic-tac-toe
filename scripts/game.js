function startNewGame(){
    if(players[0].name === "" || players[1].name === ""){
        alert("Please set player names for both the players") 
        return;
    }
    activePlayerName.textContent = players[activePlayer].name;
    gameAreaElement.style.display = "block";
}

function switchPlayer() {
    activePlayer ^= 1;
    activePlayerName.textContent = players[activePlayer].name;
}

function selectGameField(event) {
    const selectedField = event.target;
    if(selectedField.tagName !== "LI") return;

    const selectedRow = selectedField.dataset.row - 1;
    const selectedCol = selectedField.dataset.col - 1;
    if(gameData[selectedRow][selectedCol] > 0) {
        alert("Please select an empty block");
        return;
    }
    selectedField.textContent = players[activePlayer].symbol;
    selectedField.classList.add("disabled");

    gameData[selectedRow][selectedCol] = activePlayer + 1;
    console.log(gameData);

    switchPlayer();
}