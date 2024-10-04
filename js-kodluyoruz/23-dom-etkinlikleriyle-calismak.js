let greeting = document.querySelector("#greeting")
let info = document.querySelector("#info")

greeting.addEventListener("click", domClick)  
info.addEventListener("mouseover", domOver)  

function domClick(){
    console.log("tiklandi")
    console.log(this.innerHTML = "Arif")
    greeting.style.color == "red" ? greeting.style.color = "black" : greeting.style.color = "red"  
}

function domOver(){
    info.innerHTML = "Yılmaz"
    this.style.color == "aqua" ? this.style.color = "pink" : this.style.color = "aqua"
}
