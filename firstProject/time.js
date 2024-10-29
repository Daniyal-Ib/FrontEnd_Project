function displayDateTime() {
    let now = new Date();
    let formattedDate = now.toLocaleDateString('en-US', {
        year: 'numeric', month: 'long', day: 'numeric',
        
    });
    document.getElementById("dateTime").innerText = formattedDate;
    }

setInterval(displayDateTime, 1000);

document.getElementById("timeButton").addEventListener("click", function() {
    // Получаем текущее время
    let time = new Date().toLocaleTimeString();

    // Выводим его в элемент с id "timeDisplay"
    document.getElementById("timeDisplay").textContent = time;
});

