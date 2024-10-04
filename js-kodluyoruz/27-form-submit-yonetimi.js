// FORM SUBMIT
let formDOM = document.querySelector('#userForm')
formDOM.addEventListener('submit',formSubmit)

function formSubmit(event){
    event.preventDefault() //default işlemi engeller. Sayfa yenilenmez.
    console.log("islem gerceklesti.")
}