let title = document.querySelector('#title_link')
title.addEventListener('click', function(evt) {
  evt.preventDefault()
  let title_section = document.querySelector(`#${ title.getAttribute('for') }`)
  title_section.classList.toggle('active')
})
let close_btns = document.querySelectorAll('.content button')
for(let btn of close_btns) {
  btn.addEventListener('click', function(evt) {
    evt.preventDefault()
    evt.target.parentNode.classList.toggle('active')
  })
}
