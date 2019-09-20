console.log('podpiete');

function menuSwitch(hamb) {
  const menus = document.querySelectorAll('.menu');
  const sideBar = document.querySelector('.side-menu');
  const shortMenu = document.querySelector('.sr-menu');
  const fullMenu = document.querySelector('.fl-menu');
  const medMenu = document.querySelector('.md-menu');

  //for(let men of menus){
  //  men.classList.toggle('active', visable);
  //}

  if (hamb.classList.contains('ham-sr')){
    shortMenu.classList.toggle('not-active');
    sideBar.classList.add('size-fl');
    sideBar.classList.remove('size-sr');
    medMenu.classList.toggle('not-active');
    medMenu.classList.toggle('active');
  } else if (hamb.classList.contains('ham-md')){
    shortMenu.classList.toggle('not-active');
    sideBar.classList.remove('size-fl');
    sideBar.classList.add('size-sr');
    medMenu.classList.toggle('not-active');
    medMenu.classList.toggle('active');
  }
}

const hamburgers = document.querySelectorAll('.hamburger');

for(let hamb of hamburgers){
  hamb.addEventListener('click', function(e){
    e.preventDefault();
    hamb = this;
    console.log('hamb to', hamb);
    menuSwitch(hamb);

  });
}
