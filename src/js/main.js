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


localStorage.setItem('OpenMsg', 'true mif');
console.log( localStorage.getItem('OpenMsg') ); // 1
