document.addEventListener('DOMContentLoaded', () => {
  const card = document.querySelector('.flip-main');
  
  if (card) {
    card.addEventListener('click', () => {
      card.classList.toggle('is-flipped');
    });
  }
});
