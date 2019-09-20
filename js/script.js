console.log('podpiete');

function menuSwitch(visable) {
  const menus = document.querySelectorAll('.menu');
  const sideBar = document.querySelector('.side-menu');

  for(let men of menus){
    men.classList.toggle('active', visable);
    console.log('dziala');
  }
  console.log('side-bar to:', sideBar);
    sideBar.classList.toggle('size');
}

const hamburgers = document.querySelectorAll('.hamburger');

for(let hamb of hamburgers){
  hamb.addEventListener('click', function(e){
    e.preventDefault();
    console.log('klik');
    menuSwitch();
  });
}
