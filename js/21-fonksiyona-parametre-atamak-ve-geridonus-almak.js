// Temel Kurallar:
// 1: Bir fonksiyon bir veya birden fazla parametre alabilir. Hiç almayabilir.
// 2: Bir fonksiyon dışarı bilgi gönderebilir(return) veya göndermeyebilir.
// 3: Mümkünse fonksiyonun bağımlılıklarını azaltmak gerekir.

let firstName = "Lorem"

function greetings(firstName = "Arif") { // Buraya gönderdiğimiz firstname parametre. Değişkenle bağımsız.
    // console.log(`Merhaba ${firstName ? firstName : "Adsız"}`)
    console.log(`Merhaba ${firstName}`)
}

function greetings2(firstName,lastName){
    let info = `Merhaba ${firstName} ${lastName}`
    return info
}


greetings("Mehmet") //Buradaki bilgi ezer. Mehmet yazdırır.
greetings2("Arif","yılmaz") // Herhangi bir şey console a yazdırmaz.
console.log(greetings2("Arif","yılmaz")) // Bu şekilde yazdırılır.

let greetingsInfo = greetings2("Arif","Yılmaz") // Bu şekilde de yazdırılır.
console.log(greetingsInfo)


function myExam(fonksiyonexam){
    fonksiyonexam = document.querySelector("#fonksiyonexam")
    fonksiyonexam.innerHTML = "FONKSİYON ÇALIŞMAM"
}

myExam()



function domIdWriteInfo(id,info) {
    let domObject = document.querySelector(`#${id}`)
    domObject.innerHTML = info
}
domIdWriteInfo("info",greetings2("arif","yılmaz")) //İlk kısım html kısmında seçeceğimiz id. 
//İkinci kısım vermek istediğimiz mesaj.

let htmlInfo = `<span style="color:red">Color RED</span>`

domIdWriteInfo("greeting",htmlInfo)
