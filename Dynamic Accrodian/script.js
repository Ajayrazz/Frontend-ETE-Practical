$(document).ready(function() {
    // Toggle the display of the content when the header is clicked
    $(".accordion-header").click(function() {
      // Close any currently open accordion content
      $(".accordion-content").not($(this).next()).slideUp();
      
      // Toggle the clicked item's content
      $(this).next().slideToggle();
      
      // Optionally, toggle the background color of the clicked header
      $(this).toggleClass("active");
    });
  });
  