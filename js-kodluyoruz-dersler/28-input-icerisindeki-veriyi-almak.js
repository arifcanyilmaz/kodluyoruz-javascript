// FORM SUBMIT
let formDOM = document.querySelector('#userForm')
formDOM.addEventListener('submit',formSubmit)


function formSubmit(event){
    event.preventDefault() //default işlemi engeller. Sayfa yenilenmez.
    console.log("islem gerceklesti.")
    let scoreInputDOM = document.querySelector('#score')
    console.log(scoreInputDOM.value)
    let formTitle = document.querySelector('#formTitle')
    formTitle.innerHTML = `Formum:${scoreInputDOM.value}`
}