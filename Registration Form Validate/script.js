function validateForm() {
    // Get form values
    var firstName = document.getElementById('firstName').value.trim();
    var lastName = document.getElementById('lastName').value.trim();
    var address = document.getElementById('address').value.trim();
    var email = document.getElementById('email').value.trim();
    var password = document.getElementById('password').value.trim();
    var mobile = document.getElementById('mobile').value.trim();

    // First Name: only alphabets and min 6 characters
    var nameRegex = /^[A-Za-z]+$/;
    if (!nameRegex.test(firstName) || firstName.length < 6) {
        alert("First name must contain only letters and be at least 6 characters long.");
        return false;
    }

    // Last Name: should not be empty
    if (lastName === "") {
        alert("Last name cannot be empty.");
        return false;
    }

    // Address: should not be empty
    if (address === "") {
        alert("Address cannot be empty.");
        return false;
    }

    // Email validation
    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address (example: name@domain.com).");
        return false;
    }

    // Password: min 5 characters
    if (password.length < 5) {
        alert("Password must be at least 5 characters long.");
        return false;
    }

    // Mobile Number: exactly 10 digits
    var mobileRegex = /^\d{10}$/;
    if (!mobileRegex.test(mobile)) {
        alert("Mobile number must be exactly 10 digits.");
        return false;
    }

    // If all validations pass
    alert("Registration Successful!");
    return true;
}
