function checkPassword() {
    const enteredPassword = document.getElementById('password').value;
    const correctPassword = 'love you mine'; // Replace 'yourpassword' with the actual password

    const messageElement = document.getElementById('message');
    if (enteredPassword === correctPassword) {
        messageElement.textContent = 'Password correct!';
        messageElement.style.color = 'green';
        // You can redirect or show additional content here
    } else {
        messageElement.textContent = 'Incorrect password. Please try again.';
        messageElement.style.color = 'red';
    }
}
