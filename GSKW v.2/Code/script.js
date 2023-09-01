const menu_button = document.querySelectorAll('.h-Button');
const second_menu = document.querySelector('.showingMenu');

const cards = document.querySelectorAll('.card');

menu_button.forEach(button => {
    button.addEventListener('click', function(event) {
        switch (Array.from(menu_button).indexOf(event.target)) {
            case 0:
                second_menu.style.transform = 'translateX(300px)';
                break;
            default:
                second_menu.style.transform = 'translateX(-300px)';
                break;
        }
    });
});


cards.forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('flipped');
    });
});


const animatoinObject = document.querySelectorAll('.animationFlag');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log('ced')
      entry.target.style.transform = 'translateY(0px)';
      entry.target.style.transform = 'translateX(0px)';
      entry.target.style.opacity = '1';
      observer.unobserve(entry.target);
    }
  });
}, {rootMargin: '-700px 0px 0px'});
  
animatoinObject.forEach(element => {
  observer.observe(element);
});