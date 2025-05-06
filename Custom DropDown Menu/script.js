$(document).ready(function() {
    // Show dropdown when clicking the input
    $("#searchInput").on("focus", function() {
      $("#dropdownList").slideDown();
    });
  
    // Filter dropdown items based on input
    $("#searchInput").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $(".dropdown-item").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
      });
    });
  
    // Select item and set it to the input
    $(".dropdown-item").on("click", function() {
      var selectedText = $(this).text();
      $("#searchInput").val(selectedText);
      $("#dropdownList").slideUp();
    });
  
    // Close dropdown if clicked outside
    $(document).on("click", function(event) {
      if (!$(event.target).closest('.dropdown').length) {
        $("#dropdownList").slideUp();
      }
    });
  });
  