// console.log('work')

let div1 = document.querySelector('#div1');
let div2 = document.querySelector('#div2');

// console.log(div1.innerHTML)

let start = function (t1,t2) {
  t1.innerHTML = t2.innerHTML;
  // console.log('start')
}

start(div2, div1);

// console.log(div1.innerHTML)
// console.log(div2.innerHTML)

let Div1CloseBtn = document.querySelector('.div1__btn')

// console.log(Div1CloseBtn)

Div1CloseBtn.addEventListener('click', function() {
  div1.classList.add('vh')
  Div1CloseBtn.classList.add('vh')
  console.log('close')
})



 document.addEventListener("DOMContentLoaded", () => {
    // alert("DOM готов!");
    div1.classList.remove('vh')
  });


localStorage.setItem('OpenMsg', 'true mif');
console.log( localStorage.getItem('OpenMsg') ); // 1
