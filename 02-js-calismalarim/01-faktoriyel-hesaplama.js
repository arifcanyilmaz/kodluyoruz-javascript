let number = prompt("Lütfen bir sayı giriniz: ")


function factorial(number){
   if(number<1){ 
    
    return 1
   }

   return number * factorial(number-1)
}

let title = document.querySelector("#title")

title.innerHTML = `Girdiğiniz sayının faktoriyel sonucu: ${factorial(number)}`

