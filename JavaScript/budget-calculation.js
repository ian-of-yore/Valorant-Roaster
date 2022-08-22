// function to calculate the budget for all selected players
function totalPlayerExpenses() {
    const perPlayerCost = collectInputValueAsInteger("cost-per-player");
    const totalPlayers = listContainerLength();
    return playerExpenses = perPlayerCost * totalPlayers;
}


// budget for all selected players
document.getElementById("calculate-players-budget").addEventListener("click", function () {
    const playerExpenses = totalPlayerExpenses();
    setInnertextAsValue("player-expenses", playerExpenses)
})

// Total budget for the roaster including players, managers and coach
document.getElementById("calculate-total-budget").addEventListener("click", function () {
    const managerCost = collectInputValueAsInteger("cost-manager");
    const coachCost = collectInputValueAsInteger("cost-coach");
    const playersExpenses = totalPlayerExpenses();
    const calculateTotalBudget = playersExpenses + managerCost + coachCost;
    setInnertextAsValue("total-expenses", calculateTotalBudget)
})