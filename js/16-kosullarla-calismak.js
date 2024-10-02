let userName = prompt("Kullanıcı Adını giriniz:")

let greeting = document.querySelector("#greeting")
console.log(userName.length)

if(userName.length >= "10") {
    console.log(`Kullanıcı bilginiz: ${userName}`)
    greeting.innerHTML = userName 
}
else if(userName.length == 0){
    console.log("bilgi yok")
} 
else {
    console.log(`Kullanıcı adınız çok kısa: ${userName}`)
}