let stepNumber = prompt("Kaçıncı Adıma Kadar Hesaplansın:")


function fibonacci(stepNumber,s1=0,s2=1,nextTerm=0){
    console.log(stepNumber)
    if(stepNumber<=1){
        return console.log("Geçersiz sayı girişi!")
    }
    for(let i = 1; i <= stepNumber; i++){
        console.log(nextTerm)
        nextTerm = s1 + s2
        s1 = s2
        s2 = nextTerm
    }
    return nextTerm-1
}

let title = document.querySelector("#title")
title.innerHTML = `Girdiğiniz değerin fibonacci dizisinin toplamı: ${fibonacci(stepNumber)}`

//4 Adım Fibonacci dizisi:
//0 1 1 2 = 4
//5 Adım Fibonacci dizisi:
//0 1 1 2 3 = 7
