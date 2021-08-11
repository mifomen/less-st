let start = function (t1,t2) {
  let div1 = document.querySelector(t1);
  let div2 = document.querySelector(t2);
  div2.innerHTML = div1.innerHTML;
}

document.addEventListener("DOMContentLoaded", start('#div2', '#div1'));

let statusOfHidden = function (evt) {
  if (localStorage.getItem('headerMsgClosed')==='true') {
    return true;
  } else {

    if ( document.querySelector('#div2').getAttribute('data-hidden') ==='false') {
      document.querySelector('#div1').classList.remove('vh')
      document.querySelector('#div1').style.cssText=""
    }
    if ( document.querySelector('#div2').getAttribute('data-btn') ==='true') {

      console.log('headerMsgClosed= ' + localStorage.getItem('headerMsgClosed'))
      let closeBtns = document.querySelectorAll('.div1__btn');

      for (var closeBtn of closeBtns) {
        closeBtn.addEventListener('click', function() {
          localStorage.setItem('headerMsgClosed', 'true')
          this.parentNode.classList.add('vh')
          this.parentNode.style.cssText = "display: none;"
        })
      }
    }
  }
}
document.addEventListener("DOMContentLoaded", statusOfHidden)
