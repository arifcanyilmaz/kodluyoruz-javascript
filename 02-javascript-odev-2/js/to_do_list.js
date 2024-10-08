let userFormDOM = document.querySelector('#userForm') //Formu çektik
userFormDOM.addEventListener('submit', formHandler)

let listDOM = document.querySelector('#list') //Listemiz

let toastDOM = document.querySelector('#liveToast') //Bildirimimiz

//Bildirim gösterme ve ayarlama fonksiyonu
const toastFunction = (type,title,message) =>`
<div style="width:300px; position: fixed; margin-bottom: -2%;" class="mt-1 alert alert-${type} alert-dismissible fade show" role="alert">
  <strong>${title}</strong> ${message}
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
`

function formHandler(event){
    event.preventDefault()
    const TASK = document.querySelector('#task')
    const maxTaskLenght = 130
    const taskLenght = TASK.value.length


    if( taskLenght <= maxTaskLenght ){
        if ((TASK.value.trim() !== "")){
            newElement(TASK.value)
            saveToLocalStorage(TASK.value)
            resetItem(TASK)
            toastDOM.innerHTML = toastFunction("success","Başarılı!","Öge eklendi.")
        } else {
            toastDOM.innerHTML = toastFunction("warning","Uyarı!","Liste ögesi boş olamaz.")
        }
    }else{
        toastDOM.innerHTML = toastFunction("danger","Hata!","Öge çok uzun.")
        resetItem(TASK)
    } 

}

//Listeye Eleman Ekleme
function newElement(task,index){
    //Ekleme
    let liDOM = document.createElement('li')
    liDOM.className = "list-group-item d-flex justify-content-between align-items-center"; //
    liDOM.innerHTML = `<p class="text-dark mt-3 inText ">${task}</p>
    <button class="btn-close border-1" aria-label="Close">&times;</button> `
    listDOM.append(liDOM)
    removeItem(liDOM)
    isDone(liDOM,task)
}

//Listeden Elemen Silme
function removeItem(liDOM){
    liDOM.querySelector('.btn-close').addEventListener('click',function(){
        liDOM.remove()
    })
}

//Listedeki Task Yapıldı mı Sonrası
function isDone(liDOM,){
    liDOM.addEventListener('click',function(){
        //Rengi değişti
        liDOM.className += " bg-info"
        liDOM.style.transition = 'background-color 0.7s'
        
        //Yazının Altı Çizildi
        const inText = liDOM.querySelector('.inText')
        inText.style.textDecoration = 'line-through'

        //İkon Başa Eklendi
        if(!liDOM.querySelector('svg')){
            const checkIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-check2-circle" viewBox="0 0 16 16">
            <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0"/>
            <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z"/>
            </svg>`;
            liDOM.insertAdjacentHTML('afterbegin', checkIcon)
        }
    })
}

//İşlemden Sonra Inputu Temizleme
function resetItem(task){
    task.value = ""
}

//LS'ye Verileri Kaydetme
function saveToLocalStorage(task){
    let jobs = JSON.parse(localStorage.getItem('list')) || []
    jobs.push({task})
    localStorage.setItem('list',JSON.stringify(jobs))

}

//LS'den Verileri Çekme
window.addEventListener('DOMContentLoaded',loadItemsFromLocaleStorage)
function loadItemsFromLocaleStorage(){
    let jobs = JSON.parse(localStorage.getItem('list')) || []
    jobs.forEach((job,index) => {
        newElement(job.task,index)
        console.log(job.task,index)
    });
}

//Çalışırken Öğrendiklerim
//1-event çağırırken örneğin formHandler'ı () ile çağırırsak sayfa açılır açılmaz çalışır.
//2-trim() baştaki ve sondaki boş karakterleri siler.