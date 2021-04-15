const toggleBtn = document.querySelector('.navbar__toggleBtn');
const menu = document.querySelector('.navbar__menu');
const list = document.querySelector('.navbar__menu li ul');
const icons = document.querySelector('.navbar__icons');
const themed = document.querySelector('.themed');


toggleBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
  icons.classList.toggle('active');
});


menu.addEventListener('click', () => {
    list.classList.toggle('active');
   // icons.classList.toggle('active');
});

themed.addEventListener('click', () => {
  themed.classList.toggle('active');
  document.documentElement.classList.toggle("dark")
});

