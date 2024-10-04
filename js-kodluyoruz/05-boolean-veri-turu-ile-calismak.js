let isActive
console.log(Boolean(isActive)) // Çıktı false olacak 
// Çünkü bir değişkene atama yapılmadıysa basic hali false'tur.Çünkü içinde herhangi
//bir şey yoktur. 

let userName = "fds"
let isUserName = Boolean(userName)
console.log(isUserName) // Çıktı True olacak
// Çünkü userName değişkeninin içinde bir değer var.


// Bir tane bile true olsa ve(||) operatörü varsa sonuç true çıkar.
let x = "" || 0 || "javascript"
console.log(Boolean(x)) 


// Bir tane bile false olsa veya(&&) operatörü varsa sonuç false çıkar.
let y = "" && -2 && "javascript"
console.log(Boolean(y))
