// Function to generate dynamic input fields
function generateInputFields(numFields) {
    const inputContainer = document.getElementById('inputContainer');
    inputContainer.innerHTML = '';
    
    for (let i = 1; i <= numFields; i++) {
        const inputField = document.createElement('input');
        inputField.type = 'text';
        inputField.name = 'field' + i;
        inputField.placeholder = 'Field ' + i;
        inputContainer.appendChild(inputField);
    }
}

// Function to validate the form
function validateForm(e) {
    e.preventDefault();

    const numFields = parseInt(document.getElementById('numFields').value);
    const inputFields = document.querySelectorAll('#inputContainer input');

    let isFormValid = true;
    for (let i = 0; i < numFields; i++) {
        if (inputFields[i].value.trim() === '') {
            isFormValid = false;
            break;
        }
    }

    if (isFormValid) {
        alert('Form is valid. Submitting the form...');
        e.target.submit();
    } else {
        alert('Please fill in all fields.');
    }
}

document.getElementById('dynamicForm').addEventListener('submit', validateForm);

document.getElementById('numFields').addEventListener('change', function () {
    const numFields = parseInt(this.value);
    generateInputFields(numFields);
});

generateInputFields(1);
