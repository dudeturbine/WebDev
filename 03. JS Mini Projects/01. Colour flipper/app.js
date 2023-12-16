const colors = ["green", "red", "rgba(133,122,244)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
    // egt random number 0-3 for out colors array
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber]
    color.textContent = colors[randomNumber]
});

function getRandomNumber() {
    return Math.floor(Math.random()*colors.length);
}