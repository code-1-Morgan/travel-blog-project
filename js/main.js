document.querySelector('#subBtn').addEventListener('click', submitContact)
const formDisplay = document.querySelector('#formSection')
const sentMessageSec = document.querySelector('#sentMessage')


function submitContact (){
    formDisplay.classList.toggle('hidden')
    sentMessageSec.classList.toggle('hidden')
}