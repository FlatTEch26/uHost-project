var backdrop = document.querySelector('.backdrop');
var selectPlanButtons = document.querySelectorAll('.plan button');
var modal = document.querySelector('.modal');
var modalNoButton = document.querySelector('.modal__action--negative');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');
var ctaButton = document.querySelector('.main-nav__item--cta');
// console.dir(backdrop);
// console.dir(selectPlanButtons);

for(var i = 0; i < selectPlanButtons.length; i++) {
  selectPlanButtons[i].addEventListener('click', function() {
    // modal.style.display = "block";
    // backdrop.style.display = 'block';
    modal.classList.add('open');
    backdrop.style.display = "block";
    setTimeout(function() {
      backdrop.classList.add('open');
      }, 10);
    });
}
  backdrop.addEventListener("click", function() {
    // mobileNav.style.display = 'none';
    mobileNav.classList.remove('open');
    closeModal();
  });

  if(modalNoButton) {
    modalNoButton.addEventListener("click", closeModal);
  }

  function closeModal() {
    // backdrop.style.display = "none";
    // modal.style.display = "none";
     if(modal) {
      modal.classList.remove('open');
     }
     backdrop.classList.remove('open'); 
      setTimeout(function() {
        backdrop.style.display = "none";
        }, 200);
  }

toggleButton.addEventListener('click', function() {
  // mobileNav.style.display = 'block';
  // backdrop.style.display = 'block';
  mobileNav.classList.add('open');
  backdrop.style.display = "block";
  setTimeout(function() {
  backdrop.classList.add('open');
  }, 10);
});

ctaButton.addEventListener('animationstart', function(){
  console.log('Animation started', event);
});
ctaButton.addEventListener('animationend', function(){
  console.log('Animation end', event);
});
ctaButton.addEventListener('animationiteration', function(){
  console.log('Animation iteration', event);
});
 