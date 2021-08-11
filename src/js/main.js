
let start = function (t1,t2) {
  let div1 = document.querySelector(t1);
  let div2 = document.querySelector(t2);
  div2.innerHTML = div1.innerHTML;
  console.log(t1 + ' in ' + t2)
}

// start('#div2', '#div1');

document.addEventListener("DOMContentLoaded", start('#div2', '#div1'));

let closeBtns = document.querySelectorAll('.div1__btn')


for (btn of closeBtns) {
  btn.addEventListener('click', function() {
    if (this.parentNode.getAttribute('data-hidden') ==='true')
    {
      this.parentNode.classList.add('vh')
      this.parentNode.style.cssText = "display: none;"
    }
    // console.log('close ' + this.parentNode.id)
  })
}


document.addEventListener("DOMContentLoaded", () => {
    document.querySelector('#div1').classList.remove('vh')
  });

localStorage.setItem('OpenMsg', 'true mif');
console.log( localStorage.getItem('OpenMsg') ); // 1
