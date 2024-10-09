let email = "arifyilmaz@gmail.com"
let firstName = "arif"
let lastName = "yilmaz"

//karakter uzunluğunu bulma
console.log(email.length)

//n. karakteri bulma
console.log(firstName[3].toLocaleUpperCase()) //f olacak

// büyük harf / kücük harf
firstName = firstName.toUpperCase()
console.log(firstName)
firstName = firstName.toLocaleLowerCase()


// string icinde istediğimiz bilgiyi aramak
let find = email.search("@") // @ işaretinin sırasını bulur
console.log(find)

// belli bir yere kadar stringi almak
console.log(email.slice(0,10)) //arifyilmaz yazacak
console.log(email.slice(10)) //10'dan sonrasını al demek bu. Yani @gmail.com olacak.
let DOMAIN = email.slice( email.search("@")+1) // bu şekilde harmanlayabiliriz.
console.log(DOMAIN) //gmail.com yazacak 

console.log(DOMAIN.slice(0,DOMAIN.indexOf(".")))//gmail.com'da sadece gmaili almak.

console.log(email.slice(0,email.indexOf(lastName))) //mail üzerinde sadece firstnamei bulma.


// bilgiyi değiştirme --> replace
email = email.replace('gmail.com','kodluyoruz.org')
console.log(email)


//istediğim bilgi var mı ? --> includes 
console.log(email.includes('@gmail.com') ) //false gelecek
console.log(email.includes('@kodluyoruz.org') ) //true gelecek


//neyle başlayıp bitti? --> endswith,startswith
console.log(email.startsWith(firstName)) //true dönecek
console.log(email.endsWith('.com')) // false dönecek çünkü .org ile bitiyor.


//ilk harflerini büyük yapmak
let fullName=
`Tam adiniz: ${firstName[0].toUpperCase()}${firstName.slice(1).toLocaleLowerCase()} ${lastName[0].toUpperCase()}${lastName.slice(1).toLocaleLowerCase()}`
console.log(fullName)


//Yazıyı Tersine çevirme
let s = "arif"
let reverseStr = s.split('').reverse().join('') 
//split('') char olarak dizi yapar.
//reverse() ters çevirir.
//join('') solda tanımladığımız değişkene atar