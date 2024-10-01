let price = "100"
let user = "guest"
console.log("Price:",price)
console.log("user:",user)

// == Eşitse
console.log("1-) price == 1" ,price == 1) //false
console.log("2-) price == 100",price == 100)//true kendisi otomatik olarak integera çeviriyor.

// === Hem değeri hem de türü eşitse
console.log("3-) price === 100",price === 100,"çünkü türü farklı")

// != Eşit değilse
console.log("4-) price != 1",price != 1) //eşit değilse true dönecek.
console.log("Kullanıcı misafir değil mi?" , user != "guest")

// < Küçükse
console.log("price < 1000", price < 1000)//true

// <= Kücük veya esitse
console.log("price <= 100" , price <= 100)//kücük değil ama eşit oldugu icin true

// > Büyükse
console.log("price > 100", price >100)//false

// >= Büyük veya eşitse
console.log("price >= 100" , price >= 100)

// && Ve: bir tanesine bile false olsa false döner.
price = 0
console.log(price > 0 && user !="arif") //bi tane bile yanlış olsa false döner
console.log(price >= 0 && user !="mehmet") //ikisi de doğru true döner.

// || Veya: bir tanesi bile true olsa true döner.
price = 100
user = "arif"
console.log(price > 100 || user == "arif")
console.log(price < 1000 || user !="arif")

// ! değildir(tersi)
console.log(price > 100 && !user == "guest")
console.log(price < 1000 || !user == "arif")
console.log(!!2)
