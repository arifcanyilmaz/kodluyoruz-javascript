let userFormDOM = document.querySelector('#userForm')
userFormDOM.addEventListener('submit',formHandler)

let userListDOM = document.querySelector('#userList')

let lastUserListDOM = document.querySelector('#lastUserList')

lastUserListDOM.innerHTML =  `     
${localStorage.getItem('name')}
<span class="badge text-bg-primary rounded-pill"> ${localStorage.getItem('score')}</span>`

lastUserListDOM.classList.add('list-group-item')



const alertDOM = document.querySelector('#alert')
const alertFunction = (alertType,title,message) => `
<div class="alert alert-${alertType} alert-dismissible fade show" role="alert">
  <strong>${title}</strong> ${message}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`
localStorage.getItem('name')
localStorage.getItem('score')


function formHandler(event){
    event.preventDefault() //Sayfayı yenileme. Sadece kal.
    
    const USER_NAME_LABEL = document.querySelector('#userName')
    const SCORE_LABEL = document.querySelector('#score')

    if(USER_NAME_LABEL.value && SCORE_LABEL.value && parseInt(SCORE_LABEL.value) <= 100 && parseInt(SCORE_LABEL.value) >= 0){
        addItem(USER_NAME_LABEL.value,SCORE_LABEL.value)
        resetItem(USER_NAME_LABEL,SCORE_LABEL)
        alertDOM.innerHTML = alertFunction("success","Giriş Başarılı!","")
    }else if (!USER_NAME_LABEL.value || !SCORE_LABEL.value){
        alertDOM.innerHTML = alertFunction("warning","Hatalı Giriş!","Eksik Bilgi Girdiniz!")
    }else {
        alertDOM.innerHTML = alertFunction("danger","Hatalı Giriş!","Not 0-100 dışında olamaz!")
        resetItem(USER_NAME_LABEL,SCORE_LABEL)
    }
    
}



const addItem = (userName,score) => {
    let liDOM = document.createElement('li')
    liDOM.innerHTML = `     
    ${userName} 
    <span class="badge text-bg-primary rounded-pill"> ${score}</span>`
    liDOM.classList.add('list-group-item','d-flex','justify-content-between','align-items-center')
    userListDOM.append(liDOM)
    localStorage.setItem('name',userName)
    localStorage.setItem('score',score)
}

function resetItem(username,score){ //Bilgileri submit diyip gönderdikten sonra kutuları boşalt.
    username.value = ""
    score.value = ""
}