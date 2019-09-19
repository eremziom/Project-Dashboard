console.log('podpiete');

function menuSwitch(visable) {
  const menus = document.querySelectorAll('.menu')
  for(let men of menus){
    men.classList.toggle('active', visable);
    console.log('dziala');
  }
}

const hamburgers = document.querySelectorAll('.hamburger')

for(let hamb of hamburgers){
  hamb.addEventListener('click', function(e){
    e.preventDefault();
    console.log('klik');
    menuSwitch();
  })
}
