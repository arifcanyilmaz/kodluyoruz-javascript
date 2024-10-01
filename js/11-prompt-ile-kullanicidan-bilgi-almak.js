let fullName = prompt("Lutfen Adinizi Giriniz: ")
let firstName
let lastName

firstName = fullName.slice(0,fullName.indexOf(" "))
lastName = fullName.slice(fullName.indexOf(" "))


let greeting = document.querySelector("#greeting")
greeting.innerHTML = "Hos geldiniz!"
greeting.innerHTML = `${greeting.innerHTML} <small style="color:red">${firstName}</small>${lastName}`