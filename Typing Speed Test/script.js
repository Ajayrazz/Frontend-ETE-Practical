const quotes = [
    "The quick brown fox jumps over the lazy dog",
    "Practice makes perfect",
    "Typing speed improves with daily practice",
    "Consistency is the key to success",
    "JavaScript makes websites interactive"
  ];
  
  let timeLeft = 30;
  let timer;
  let score = 0;
  
  const quoteDisplay = document.getElementById('quote');
  const inputArea = document.getElementById('inputArea');
  const timeLeftDisplay = document.getElementById('timeLeft');
  const scoreDisplay = document.getElementById('score');
  const startBtn = document.getElementById('startBtn');
  
  function startGame() {
    resetGame();
    loadNewQuote();
    inputArea.disabled = false;
    inputArea.focus();
  
    timer = setInterval(updateTimer, 1000);
  }
  
  function resetGame() {
    timeLeft = 30;
    score = 0;
    inputArea.value = '';
    timeLeftDisplay.textContent = timeLeft;
    scoreDisplay.textContent = score;
    clearInterval(timer);
  }
  
  function loadNewQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteDisplay.textContent = quotes[randomIndex];
  }
  
  function updateTimer() {
    if (timeLeft > 0) {
      timeLeft--;
      timeLeftDisplay.textContent = timeLeft;
    } else {
      clearInterval(timer);
      endGame();
    }
  }
  
  function endGame() {
    inputArea.disabled = true;
    quoteDisplay.textContent = `Time's up! You scored ${score} words.`;
  }
  
  inputArea.addEventListener('input', () => {
    if (inputArea.value.trim() === quoteDisplay.textContent) {
      score++;
      scoreDisplay.textContent = score;
      inputArea.value = '';
      loadNewQuote();
    }
  });
  
  startBtn.addEventListener('click', startGame);
  