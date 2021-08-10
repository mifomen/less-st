<<<<<<< HEAD
// console.log('work')

let start = function (t1,t2) {
  let div1 = document.querySelector(t1);
  let div2 = document.querySelector(t2);
  div2.innerHTML = div1.innerHTML;
  console.log(t1 + ' in ' + t2)
}

console.log(document.querySelector('#div1'))
console.log(document.querySelector('#div2'))
console.log(document.querySelector('#div3'))

start('#div1', '#div2');
// start('#div1', '#div3')
// start('#div1', '#div3');
// console.log(div1.innerHTML)
// console.log(div2.innerHTML)

let closeBtns = document.querySelectorAll('.div1__btn')

// console.log(closeBtns)
for (btn of closeBtns) {
  btn.addEventListener('click', function() {
    // this.parentElement.classList.add('vh')
    this.parentNode.classList.add('vh')
    console.log('close ' + this.parentNode.id)
  })
}


document.addEventListener("DOMContentLoaded", () => {
    // alert("DOM готов!");
    div2.classList.remove('vh')
  });
=======
let start = function () {
  let div1 = document.querySelector('#div2');
  let div2 = document.querySelector('#div1');
  return div1.innerHTML = div2.innerHTML;
}
document.addEventListener("DOMContentLoaded", () => {
  start();
});

let Div1CloseBtn = document.querySelector('.div1__btn')
console.log(Div1CloseBtn)

// for (button of Div1CloseBtn)  {
Div1CloseBtn.addEventListener('click', function() {
  document.querySelector('#div2').classList.add('vh')
  // button.classList.add('vh')
  console.log('close')
})
// }

console.log(Div1CloseBtn)
>>>>>>> da083d0f80f8ad550d413f463914be0035b7a9cb


localStorage.setItem('OpenMsg', 'true mif');
console.log( localStorage.getItem('OpenMsg') ); // 1

// document.addEventListener("DOMContentLoaded", start);
