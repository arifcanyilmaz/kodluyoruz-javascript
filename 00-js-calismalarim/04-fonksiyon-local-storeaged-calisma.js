let counter = localStorage.getItem('counter')

if(!counter){
    counter = 0
}

// H1 ve buton taglerine ulaştığımız kısım
let counterDOM = document.querySelector("#counter")
let increaseDOM = document.querySelector("#increase")
let decreaseDOM = document.querySelector("#decrease")

counterDOM.innerHTML = counter

// Eventler 
increaseDOM.addEventListener("click",clickEvent)
decreaseDOM.addEventListener("click",clickEvent)


// Event Fonksiyonu
function clickEvent(){
    console.log(this.id)
    if(this.id == "increase"){
        counterDOM.innerHTML = ++counter
        localStorage.setItem('counter',counter)
    }else if(this.id == "decrease"){
        counterDOM.innerHTML = --counter
        localStorage.setItem('counter',counter)
    }
}

