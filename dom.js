document.body.style.background = '#f1c'

const title = document.querySelector('h1')

title.textContent = 'Dom Manipulation'

const sec = document.getElementById('second')

const idSec = document.querySelector('#second')

const fifth = document.querySelector('ul>:nth-child(5)')

const lists = document.querySelectorAll('ul, li')

const seconds = document.getElementsByClassName('second')

lists[0].textContent = 'clara'
lists[7].textContent = 'yomi'
fifth.textContent = 'kayode'
sec.textContent = 'first id'
idSec.textContent =  'second id'
seconds[0].textContent = 'paul'
seconds[1].textContent = 'samuel'

idSec.style.backgroundColor = 'aqua'
idSec.style