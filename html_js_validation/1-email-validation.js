function validateEmail() {
    const email = document.getElementById('email').value;
    const errorElement = document.getElementById('error');

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (emailRegex.test(email)) {
        errorElement.textContent = '';
        return true;
    } else {
        errorElement.textContent = 'Please enter a valid email address.';
        return false;
    }
}

document.getElementById('emailForm').addEventListener('submit', function (e) {
    if (!validateEmail()) {
        e.preventDefault();
    }
});
