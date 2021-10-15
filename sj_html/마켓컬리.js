var bottom = document.querySelector('.bottom');
var wrapper = document.querySelector('#wrapper');
var bottomHeight = bottom.offsetTop;


function stickyNav() {
  //스크롤 이벤트가 발생되야
  var scrollY = window.scrollY;
  if(scrollY > bottomHeight ) {
    bottom.classList.add('stop');
    wrapper.classList.add('paddingTop');
  } else {
    bottom.classList.remove('stop');
    wrapper.classList.remove('paddingTop');
  }
  //stop클래스를 못짜겠음
}



window.addEventListener('scroll', stickyNav)