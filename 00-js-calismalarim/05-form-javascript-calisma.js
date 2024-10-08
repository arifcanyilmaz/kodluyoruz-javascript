//Genel listeleri jsye çekmek
let userFormDOM = document.querySelector('#userForm')
userFormDOM.addEventListener('submit',formHandler)

let userListDOM = document.querySelector('#userList')


//Alert
const alertDOM = document.querySelector('#alert')
const alertFunction = (type,title,message) => `
<div class="alert alert-${type} alert-dismissible fade show" role="alert">
  <strong>${title}</strong> ${message}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`

//LocalStoregdan verileri yükle
window.addEventListener('DOMContentLoaded',loadItemsFromLocaleStorage)


//LocalStorageden veri silme eventi
//deleteBtn.addEventListener('submit',deleteItemsFromLocalStorage)
//LocalStorage'den veriyi silme
function deleteItemsFromLocalStorage(userName){
    console.log("aaaaaaa",userName)
    let items = JSON.parse(localStorage.getItem('userList'))
    items.forEach(item => {
        localStorage.removeItem('userList')
    });
    console.log('silindi')
}

//Submit basınca gelişecek olaylar
function formHandler(event){
    event.preventDefault()
    const USER_NAME_LABEL = document.querySelector('#userName')
    const SCORE_LABEL = document.querySelector('#score')
    let formColor = isSuccess(SCORE_LABEL.value)


    if(USER_NAME_LABEL && SCORE_LABEL && parseInt(SCORE_LABEL.value) <= 100 && parseInt(SCORE_LABEL.value) >= 0 && USER_NAME_LABEL.value.trim() != ""){
        //console.log(typeof(JSON.stringify(USER_NAME_LABEL)))
        addItem(USER_NAME_LABEL.value,SCORE_LABEL.value,formColor)
        alertDOM.innerHTML = alertFunction("success","Başarılı İşlem!","Adınız ve Notunuz Kaydedildi!")
        saveToLocalStorage(USER_NAME_LABEL.value,SCORE_LABEL.value,formColor)
        resetItem(USER_NAME_LABEL,SCORE_LABEL)
    }else if(!USER_NAME_LABEL.value || !SCORE_LABEL.value || USER_NAME_LABEL.value.trim() === "" ){
        alertDOM.innerHTML = alertFunction("warning","Hatalı Giriş!","Ad veya Not Bilgisi Yok!")
        resetItem(USER_NAME_LABEL,SCORE_LABEL)
    }else{
        alertDOM.innerHTML = alertFunction("danger","Hatalı Giriş!","Not Bilgisi 0-100 Arasında Olmalıdır!")
        resetItem(USER_NAME_LABEL,SCORE_LABEL)    
    }
}


//Listeye item ekleme
function addItem(userName, score, isSuccess) {
    let liDOM = document.createElement('li');
    liDOM.innerHTML = `
    <span>${userName}</span>
    <span class="badge text-bg-dark rounded-pill ms-2"> ${score}</span> 
    <button id="deleteBtn${userName}" onclick="deleteItemsFromLocalStorage('${userName}')" type="button" class="btn-close ms-auto" data-bs-dismiss="alert" aria-label="Close"></button>`;
    // let deleteBtn = liDOM.getElementById('deleteBtn'+userName)
    // deleteBtn.addEventListener('click',deleteItemsFromLocalStorage)

    liDOM.classList.add('list-group-item', 'list-group-item-action', 'd-flex', 'align-items-center');
    liDOM.classList.add('list-group-item-' + isSuccess);
    userListDOM.append(liDOM);
}


//Score Başarılı mı Kontrol
function isSuccess(score){
    if(parseInt(score) >= 85){
        return "success"
    }else if(parseInt(score) >= 50){
        return "warning"
    }else if(parseInt(score) >=0){
        return "danger"
    }
}

//Reset İşlemi
function resetItem(userName,score){
    userName.value = ""
    score.value = ""
}

//LocalStorage'a kaydetme
function saveToLocalStorage(userName,score,isSuccess){
    let items = JSON.parse(localStorage.getItem('userList')) || []
    items.push({userName,score,isSuccess})
    localStorage.setItem('userList',JSON.stringify(items))
}

//LocalStorage'dan veriyi çekme
function loadItemsFromLocaleStorage(){
    let items = JSON.parse(localStorage.getItem('userList')) || []
    items.forEach(item => {
        addItem(item.userName,item.score,item.isSuccess)
    });
}

