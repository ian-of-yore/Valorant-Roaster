// total budget for all selected players
document.getElementById("calculate-players-budget").addEventListener("click", function () {
    const perPlayerCost = collectInputValueAsInteger("cost-per-player");
    const totalPlayers = listContainerLength();
    const playerExpenses = perPlayerCost * totalPlayers;
    setInnertextAsValue("player-expenses", playerExpenses);
})