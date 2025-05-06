$(document).ready(function() {
    let currentIndex = 0;
    const images = $('.carousel img');
    const totalImages = images.length;
  
    function showImage(index) {
      images.removeClass('active');
      images.eq(index).addClass('active');
    }
  
    $('#next').click(function() {
      currentIndex = (currentIndex + 1) % totalImages;
      showImage(currentIndex);
    });
  
    $('#prev').click(function() {
      currentIndex = (currentIndex - 1 + totalImages) % totalImages;
      showImage(currentIndex);
    });
  
    // Optional: Auto-slide every 5 seconds
    setInterval(function() {
      $('#next').click();
    }, 5000);
  });
  