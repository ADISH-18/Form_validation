const validateForm = () => {
    let isValid = true;
    document.querySelectorAll('.input-group span').forEach(span => span.textContent = '');

    // Validate first name
    const firstname = document.getElementById('firstname');
    const hasLetters = /[A-Za-z]/;
    if (!firstname.value.trim()) {
        document.getElementById('error-message-fname').textContent = "First name is required.";
        isValid = false;
    } else if (!hasLetters.test(firstname.value)) {
        document.getElementById('error-message-fname').textContent = "First name must contain letters only.";
        isValid = false;
    } else if (firstname.value.trim().length <=2) {
        document.getElementById('error-message-fname').textContent = "First name must be at least 2 characters.";
        isValid = false;
    }
    else{
        document.getElementById('error-message-fname').textContent="";
    }

    // Validate last name
    const lastName = document.getElementById('lastname');
    if (!lastName.value.trim()) {
        document.getElementById('error-message-lname').textContent = "Last name is required.";
        isValid = false;
    } else if (!hasLetters.test(lastName.value)) {
        document.getElementById('error-message-lname').textContent = "Last name must contain letters only.";
        isValid = false;
    }
    else if(lastName.length<=2){
        document.getElementById('error-message-lname').textContent = "Last name Should be at least 2 characters.";
    }
    else{
        document.getElementById('error-message-lname').textContent = "";
    }

    // Validate city
    const city = document.getElementById('city');
    if (!city.value.trim()) {
        document.getElementById('error-message-city').textContent = "City is required.";
        isValid = false;
    } else if (!hasLetters.test(city.value)) {
        document.getElementById('error-message-city').textContent = "City must contain letters only.";
        isValid = false;
    }

    // Validate phone number
    const phoneNumber = document.getElementById('phoneNumber');
    const phoneRegex = /^\d{10}$/;
    if(phoneNumber.length===0){
        document.getElementById('error-message-phone').textContent = "Phone number is required.";
    }
    else if (!phoneNumber.value.trim() || !phoneRegex.test(phoneNumber.value.trim())) {
        document.getElementById('error-message-phnno').textContent = "Phone number must be exactly 10 digits.";
        isValid = false;
    }
    else{
        document.getElementById('error-message-phnno').textContent = "";
    }

    // Validate email
    const email = document.getElementById('email');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim() || !emailRegex.test(email.value.trim())) {
        document.getElementById('error-message-email').textContent = "Please enter a valid email address.";
        isValid = false;
    }

    // Validate address
    const address = document.getElementById('address');
    if (!address.value.trim()) {
        document.getElementById('error-message-addr').textContent = "Address is required.";
        isValid = false;
    } else if (!hasLetters.test(address.value)) {
        document.getElementById('error-message-addr').textContent = "Address must contain letters only.";
        isValid = false;
    }

    return isValid;
};

document.querySelector('form').addEventListener('submit', (event) => {
    if (!validateForm()) {
        event.preventDefault();
    }
    else{
        alert("Thankyou for your time! we will contact you shortly!")
    }
});
