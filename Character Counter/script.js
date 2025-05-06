const textInput = document.getElementById('textInput');
const charCount = document.getElementById('charCount');

textInput.addEventListener('input', function() {
  const currentLength = textInput.value.length;
  const maxLength = textInput.getAttribute('maxlength');
  charCount.textContent = `${currentLength} / ${maxLength} characters`;
});
