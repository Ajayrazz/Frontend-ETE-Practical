function showPrime() {
    const primeNumber = 17; // You can change this to any prime number
    document.getElementById('primeDisplay').innerText = "Prime Number: " + primeNumber;
  }
  
  function showFriends() {
    const friendName = "Rahul"; // Change to your friend's name
    let output = "";
    for (let i = 0; i < 3; i++) {
      output += `<p>${friendName}</p>`;
    }
    document.getElementById('friendNames').innerHTML = output;
  }
  