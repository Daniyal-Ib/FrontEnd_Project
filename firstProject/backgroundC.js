function changeBackgroundColor() {
    const colors = ["#ff9999", "#99ccff", "#66ff99", "#ffcc99", "#ff99cc"];
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
}

document.getElementById("colorButton").addEventListener("click", changeBackgroundColor);