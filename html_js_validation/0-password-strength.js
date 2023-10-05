// Function to validate the password
function validatePassword() {
    const password = document.getElementById('password').value;
    const errorElement = document.getElementById('error');
    
    // Regular expressions for each of the password criteria
    const length = /.{8,}/; 
    const uppercase = /[A-Z]/;
    const lowercase = /[a-z]/;
    const digit = /\d/;
    const specialCharacter = /[!@#$%^&*]/;

    if (
        length.test(password) &&
        uppercase.test(password) &&
        lowercase.test(password) &&
        digit.test(password) &&
        specialCharacter.test(password)
    ) {
        errorElement.textContent = '';
        return true;
    } else {
        errorElement.textContent = 'Password must meet all criteria.';
        return false;
    }
}

document.getElementById('passwordForm').addEventListener('submit', function (e) {
    e.preventDefault();

    if (validatePassword()) {
        alert('Form Submitted successfully...');
        e.target.submit();
    }
});
