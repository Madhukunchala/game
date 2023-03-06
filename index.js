// Select the elements that contain the dice images and the winner text
const dice1 = document.querySelector(".img1");
const dice2 = document.querySelector(".img2");
const winner = document.querySelector("h1");

// Create an array with the paths to the dice images
const diceImages = [
    "dice1.png",
    "dice2.png",
    "dice3.png",
    "dice4.png",
    "dice5.png",
    "dice6.png",
];

// Add a click event listener to the document
document.addEventListener("click", function() {
    // Generate a random number between 0 and 5 for each dice
    const randomNumber1 = Math.floor(Math.random() * 6);
    const randomNumber2 = Math.floor(Math.random() * 6);

    // Set the src attribute of the dice images to the corresponding image path
    dice1.setAttribute("src", diceImages[randomNumber1]);
    dice2.setAttribute("src", diceImages[randomNumber2]);

    // Determine the winner and display the result
    if (randomNumber1 > randomNumber2) {
        winner.textContent = "🚩 Player 1 Wins!";
    } else if (randomNumber2 > randomNumber1) {
        winner.textContent = "Player 2 Wins! 🚩";
    } else {
        winner.textContent = "Draw!";
    }
});