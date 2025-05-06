document.addEventListener('DOMContentLoaded', () => {
    const passwordInput = document.getElementById('password');
    const strengthBar = document.getElementById('strengthBar');
    const strengthText = document.getElementById('strengthText');
  
    passwordInput.addEventListener('input', () => {
      const password = passwordInput.value;
      let strength = 0;
  
      // Checking strength with regex
      if (password.length >= 6) strength++;
      if (password.match(/[A-Z]/)) strength++;
      if (password.match(/[0-9]/)) strength++;
      if (password.match(/[^a-zA-Z0-9]/)) strength++;
  
      // Update strength bar and text
      updateStrength(strength);
    });
  
    function updateStrength(strength) {
      switch(strength) {
        case 0:
          strengthBar.style.width = '0%';
          strengthBar.style.background = '#ddd';
          strengthText.textContent = '';
          break;
        case 1:
          strengthBar.style.width = '25%';
          strengthBar.style.background = 'red';
          strengthText.textContent = 'Very Weak';
          strengthText.style.color = 'red';
          break;
        case 2:
          strengthBar.style.width = '50%';
          strengthBar.style.background = 'orange';
          strengthText.textContent = 'Weak';
          strengthText.style.color = 'orange';
          break;
        case 3:
          strengthBar.style.width = '75%';
          strengthBar.style.background = 'yellowgreen';
          strengthText.textContent = 'Good';
          strengthText.style.color = 'yellowgreen';
          break;
        case 4:
          strengthBar.style.width = '100%';
          strengthBar.style.background = 'green';
          strengthText.textContent = 'Strong';
          strengthText.style.color = 'green';
          break;
      }
    }
  });
  