// Simple confetti effect on page load
window.onload = function() {
  for (let i = 0; i < 60; i++) {
    let confetti = document.createElement('div');
    confetti.style.position = 'fixed';
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.top = '-20px';
    confetti.style.width = '8px';
    confetti.style.height = '16px';
    confetti.style.background = `hsl(${Math.random()*360}, 70%, 60%)`;
    confetti.style.opacity = 0.7;
    confetti.style.borderRadius = '3px';
    confetti.style.zIndex = 9999;
    confetti.style.transition = 'top 2.5s linear';
    document.body.appendChild(confetti);
    setTimeout(() => {
      confetti.style.top = '100vh';
    }, 100);
    setTimeout(() => {
      confetti.remove();
    }, 2600);
  }
};