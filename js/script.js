const hamburgers = document.querySelectorAll('.hamburger');

for(let hamb of hamburgers){
  hamb.addEventListener('click', function(e){
    e.preventDefault();
    hamb = this;
    menuSwitch(hamb);
  });
}

function menuSwitch(hamb) {

  const shortMenu = document.querySelector('.sr-menu');
  const fullMenu = document.querySelector('.fl-menu');
  const contMenu = document.querySelector('.menu-container');
  const hambFl = document.querySelector('.ham-fl');
  const navbar = document.querySelector('.navbar-top');

  if (hamb.classList.contains('ham-sr')){
    shortMenu.classList.toggle('hide');
    contMenu.classList.toggle('cont-size-fl');
    fullMenu.classList.toggle('show');
    hambFl.classList.toggle('ham-md');
    navbar.classList.toggle('slide');
  } else if (hamb.classList.contains('ham-md')){
    shortMenu.classList.toggle('hide');
    contMenu.classList.toggle('cont-size-fl');
    fullMenu.classList.toggle('show');
    hambFl.classList.toggle('ham-md');
    navbar.classList.toggle('slide');
  }
}
