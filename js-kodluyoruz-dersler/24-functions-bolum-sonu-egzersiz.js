let counter = 0
let counterDOM = document.querySelector("#counter")
let increaseDOM = document.querySelector("#increase")
let decreaseDOM = document.querySelector("#decrease")

counterDOM.innerHTML = counter

increaseDOM.addEventListener("click",clickEvent)
decreaseDOM.addEventListener("click",clickEvent)


function clickEvent(){
    console.log(this.id)
    if(this.id == "increase"){
        counterDOM.innerHTML = ++counter
    }else if(this.id == "decrease"){
        counterDOM.innerHTML = --counter
    }
}




