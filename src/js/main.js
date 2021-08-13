'use strict'

let WidgetButton = document.querySelector('.js-close-widget')
let Widget = document.querySelector('.widget')

WidgetButton.addEventListener('click', function (evt) {
  Widget.classList.toggle('vh')
  localStorage.setItem('WidgetClosed', 'true');
})

let deleteWidget = function () {
  localStorage.removeItem('WidgetClosed')
  return true
  // return console.log('removeItemWidgetClosed')
}

// console.log( localStorage.getItem('WidgetClosed') ); // 1

function readyWidget() {
  if (!localStorage.getItem('WidgetClosed')) {
    return Widget.classList.remove('vh')
  }  else {
   return Widget.classList.add('vh')
 }
}
document.addEventListener("DOMContentLoaded", readyWidget);
