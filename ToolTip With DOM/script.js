document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('hoverButton');
  
    // Create tooltip element dynamically
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.innerText = 'I am a Tooltip!';
  
    // Append tooltip inside container
    document.querySelector('.container').appendChild(tooltip);
  
    // Show tooltip on mouseenter
    button.addEventListener('mouseenter', function (e) {
      tooltip.style.left = (button.offsetLeft + button.offsetWidth / 2 - tooltip.offsetWidth / 2) + 'px';
      tooltip.style.top = (button.offsetTop - tooltip.offsetHeight - 10) + 'px';
      tooltip.style.opacity = 1;
    });
  
    // Hide tooltip on mouseleave
    button.addEventListener('mouseleave', function () {
      tooltip.style.opacity = 0;
    });
  });
  