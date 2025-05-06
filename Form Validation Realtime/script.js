const form = document.getElementById('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');

function validateName() {
  if (nameInput.value.trim() === '') {
    nameError.classList.remove('hidden');
    return false;
  } else {
    nameError.classList.add('hidden');
    return true;
  }
}

function validateEmail() {
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailInput.value.match(emailPattern)) {
    emailError.classList.remove('hidden');
    return false;
  } else {
    emailError.classList.add('hidden');
    return true;
  }
}

function validatePassword() {
  if (passwordInput.value.length < 6) {
    passwordError.classList.remove('hidden');
    return false;
  } else {
    passwordError.classList.add('hidden');
    return true;
  }
}

// Real-time validation
nameInput.addEventListener('input', validateName);
emailInput.addEventListener('input', validateEmail);
passwordInput.addEventListener('input', validatePassword);

// Form submission
form.addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent form submission

  const isNameValid = validateName();
  const isEmailValid = validateEmail();
  const isPasswordValid = validatePassword();

  if (isNameValid && isEmailValid && isPasswordValid) {
    alert('Form submitted successfully!');
    form.reset();
    nameError.classList.add('hidden');
    emailError.classList.add('hidden');
    passwordError.classList.add('hidden');
  }
});
