$(document).ready(function() {

    // Task 1: Display "Welcome" in div
    $("#welcomeDiv").text("Welcome to the Page!");
  
    // Task 2: Display "Goodbye" in another div
    $("#goodbyeDiv").text("Goodbye! See you soon.");
  
    // Task 3: On button click, show "Node Message" in the div
    $("#nodeButton").click(function() {
      $("#nodeDiv").text("This is a Node.js Message!");
    });
  
    // Task 4: On another button click, show your Name in the div
    $("#nameButton").click(function() {
      $("#nameDiv").text("My name is Ajay!");
    });
  
  });
  