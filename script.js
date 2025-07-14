let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('fa-times'); // switch to close icon
  menuIcon.classList.toggle('fa-bars');  // switch back to hamburger
  navbar.classList.toggle('active');     // toggle navbar
};
