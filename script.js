const colorChangeButton = document.getElementById("colorChangeButton");
const body= document.querySelector("body");


colorChangeButton.addEventListener("click", () => {
    const randomColor = getRandomColor();
    body.style.backgroundColor = randomColor;
    
});

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}