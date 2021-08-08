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


localStorage.setItem('OpenMsg', 'true mif');
console.log( localStorage.getItem('OpenMsg') ); // 1

// document.addEventListener("DOMContentLoaded", start);
