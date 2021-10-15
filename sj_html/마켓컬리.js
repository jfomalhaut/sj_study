var bottom = document.querySelector('.bottom');
var bottomHeight = bottom.offsetTop;


function stickyNav() {
  //스크롤 이벤트가 발생되야
  var scrollY = window.scrollY;
  if(scrollY > bottomHeight ) {
    bottom.classList.add('stop');
  } else {
    bottom.classList.remove('stop');
  }
  //stop클래스를 못짜겠음
}



window.addEventListener('scroll', stickyNav)