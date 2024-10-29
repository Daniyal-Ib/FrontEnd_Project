document.querySelector('form').addEventListener('submit', function(event) {
    let emailField = document.getElementById('subscribe');
    let email = emailField.value;
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        event.preventDefault();
    }
});
