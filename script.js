let coins = 100;

function spin() {
    if (coins < 10) {
        document.getElementById("result").textContent = "You're out of coins!";
        return;
    }

    coins -= 10;

    if (Math.random() < 0.3) {
        coins += 30;
        document.getElementById("result").textContent = "🎉 You won 30 coins!";
    } else {
        document.getElementById("result").textContent = "😢 You lost 10 coins.";
    }

    document.getElementById("coins").textContent = coins;
}
