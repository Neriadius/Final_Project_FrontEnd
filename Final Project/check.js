$(document).ready(function(){
    document.addEventListener('DOMContentLoaded', () => {
        const form = document.getElementById('userForm');
        const hobbiesFeedback = document.getElementById('hobbiesFeedback');
        const resultDiv = document.getElementById('result');
    
        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            let isValid = form.checkValidity();
    
            const password = form.querySelector('#password');
            const confirm = form.querySelector('#confirmPassword');
            if (password.value !== confirm.value) {
                confirm.setCustomValidity("Passwords do not match");
                isValid = false;
            } else {
                confirm.setCustomValidity("");
            }
    
            const checkedHobbies = form.querySelectorAll('input[name="hobbies"]:checked');
            if (checkedHobbies.length === 0) {
                hobbiesFeedback.style.display = 'block';
                isValid = false;
            } else {
                hobbiesFeedback.style.display = 'none';
            }
    
            form.classList.add('was-validated');
    
            if (!isValid) return;
            const data = {
                firstName: form.firstName.value,
                lastName: form.lastName.value,
                email: form.email.value,
                password: form.password.value,
                gender: form.gender.value,
                hobbies: Array.from(checkedHobbies).map(h => h.value),
                country: form.country.value
            };
    
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts', { 
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data)
                });
                const result = await response.json();
    
                resultDiv.innerHTML = `<div class="alert alert-success">Form submitted successfully! Received ID: ${result.id}</div>`;
                form.reset();
                form.classList.remove('was-validated');
            } catch (error) {
                resultDiv.innerHTML = `<div class="alert alert-danger">Error submitting form: ${error}</div>`;
            }
        });
    });
});
