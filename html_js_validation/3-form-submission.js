document.getElementById('submitForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (!name || !email) {
        document.getElementById('error').textContent = 'Please fill in all required fields.';
        document.getElementById('success').textContent = '';
    } else {
        document.getElementById('error').textContent = '';
        document.getElementById('success').textContent = 'Form submitted successfully!';
    }
});
