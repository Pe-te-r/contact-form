document.addEventListener('DOMContentLoaded', () => {
    const submitButton = document.getElementById('submit');
    const firstNameInput = document.querySelector('input[name="firstname"]');
    const lastNameInput = document.querySelector('input[name="lastName"]');
    const emailInput = document.querySelector('input[name="email"]');
    const queryTypeInputs = document.querySelectorAll('input[name="queryType"]');
    const messageInput = document.querySelector('textarea');
    const consentCheckbox = document.querySelector('input[type="checkbox"]');

    
    submitButton.addEventListener('click', (event) => {
        event.preventDefault();
        let valid = true;
        // console.log(lastNameInput.nextElementSibling)
  
      // Clear previous error messages
      document.querySelectorAll('.error').forEach(error => error.style.display = 'none');
  
      // Validate first name
      if (firstNameInput.value.trim() === '') {
        firstNameInput.nextElementSibling.style.display = 'block';
        valid = false;
      }
  
      // Validate last name
      if (lastNameInput.value.trim() === '') {
        lastNameInput.nextElementSibling.style.display = 'block';
        valid = false;
      }
  
      // Validate email
      if (emailInput.value.trim() === '') {
        emailInput.nextElementSibling.style.display = 'block';
        valid = false;
      } else {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
          emailInput.nextElementSibling.style.display = 'block';
          valid = false;
        }
      }
  
      // Validate query type
      let queryTypeSelected = false;
      queryTypeInputs.forEach(input => {
        if (input.checked) {
          queryTypeSelected = true;
        }
      });
      if (!queryTypeSelected) {
        queryTypeInputs[0].parentElement.parentElement.nextElementSibling.style.display = 'block';
        valid = false;
      }
  
      // Validate message
      if (messageInput.value.trim() === '') {
        messageInput.nextElementSibling.style.display = 'block';
        valid = false;
      }
  
      // Validate consent checkbox
      if (!consentCheckbox.checked) {
        consentCheckbox.parentElement.nextElementSibling.style.display = 'block';
        valid = false;
      }
  
      if (valid) {
        // Log form details to the console
        const formData = {
          firstName: firstNameInput.value,
          lastName: lastNameInput.value,
          email: emailInput.value,
          queryType: document.querySelector('input[name="queryType"]:checked').value,
          message: messageInput.value,
          consent: consentCheckbox.checked,
        };
        console.log(formData);
  
        // Clear the form (optional)
        firstNameInput.value = '';
        lastNameInput.value = '';
        emailInput.value = '';
        queryTypeInputs.forEach(input => input.checked = false);
        messageInput.value = '';
        consentCheckbox.checked = false;
  
        // Show success message (optional)
        alert('Form submitted successfully!');
      }
    });
  });
  