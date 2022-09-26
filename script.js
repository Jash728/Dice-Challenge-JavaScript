var randomNumber1 = Math.floor(Math.random() * 6) + 1;
// console.log(`dice${randomNumber1}`);

var imageSrc = `images/dice${randomNumber1}.png`;

document.querySelectorAll("img")[0].setAttribute("src", imageSrc);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
// console.log(`dice${randomNumber1}`);

var imageSrc2 = `images/dice${randomNumber2}.png`;

document.querySelectorAll("img")[1].setAttribute("src", imageSrc2);


if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
} else {
    document.querySelector("h1").innerHTML = "Draw!";
}