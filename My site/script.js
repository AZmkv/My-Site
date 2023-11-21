
  document.addEventListener('DOMContentLoaded', function() {
    var stars = document.querySelectorAll('.star');
    var confirmationMessage = document.getElementById('confirmationMessage');
  
    var hasVoted = false; // Додайте змінну для відстеження того, чи вже голосували.
  
    function handleStarClick() {
      if (!hasVoted) {
        var rating = this.getAttribute('data-value');
  
        // Додаємо клас "selected" для всіх зірок з меншим або рівним значенням вибраної оцінки.
        stars.forEach(function(star) {
          if (star.getAttribute('data-value') <= rating) {
            star.classList.add('selected');
          } else {
            star.classList.remove('selected');
          }
        });
  
        // Змінюємо текст повідомлення в залежності від вибраної оцінки.
        switch (parseInt(rating)) {
          case 1:
          case 2:
            confirmationMessage.textContent = 'Дякуємо за вашу оцінку. Ми намагатимемось покращити роботу нашого сайту. Приносимо вибачення за незручності.';
            break;
          case 3:
            confirmationMessage.textContent = 'Дякуємо за 3 зірочки. Ми вдосконалимо наш сайт, щоб він був зручнішим в користуванні.';
            break;
          case 4:
            confirmationMessage.textContent = 'Дякуємо за 4 зірочки. Ми вдосконалимо наш сайт, щоб він був зручнішим в користуванні.';
            break;
          case 5:
            confirmationMessage.textContent = 'Дуже дякуємо, що ви задоволені нашим сайтом:).';
            break;
        }
  
        hasVoted = true; // Встановлюємо прапорець, що користувач вже проголосував.
        stars.forEach(function(star) {
          star.removeEventListener('click', handleStarClick);
        });
      }
    }
  
    stars.forEach(function(star) {
      star.addEventListener('click', handleStarClick);
    });
  });