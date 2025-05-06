$(document).ready(function() {
    let isDark = false;
  
    $('#toggleMode').click(function() {
      $('body').toggleClass('dark-mode light-mode');
      isDark = !isDark;
  
      if (isDark) {
        $('#toggleMode')
          .removeClass('bg-gray-800 hover:bg-gray-900')
          .addClass('bg-yellow-400 hover:bg-yellow-500')
          .text('Switch to Light Mode');
        alert('Switched to Dark Mode!');
      } else {
        $('#toggleMode')
          .removeClass('bg-yellow-400 hover:bg-yellow-500')
          .addClass('bg-gray-800 hover:bg-gray-900')
          .text('Switch to Dark Mode');
        alert('Switched to Light Mode!');
      }
    });
  });
  