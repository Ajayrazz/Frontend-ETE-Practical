$(document).ready(function() {
    // Open modal
    $('#openModal').click(function() {
      $('#myModal').removeClass('hidden');
    });
  
    // Close modal when clicking the close button
    $('.close').click(function() {
      $('#myModal').addClass('hidden');
    });
  
    // Optional: Close modal when clicking outside the modal content
    $(window).click(function(e) {
      if ($(e.target).is('#myModal')) {
        $('#myModal').addClass('hidden');
      }
    });
  });
  