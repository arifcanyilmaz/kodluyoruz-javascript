// MAP İLE FILTER FARKI:
//map(): Bir fonksiyonu yineleyicinin her öğesine uygular
//filter(): Bir fonksiyonun doğru olduğu yineleyicinin tüm elemanlarını döndürür.


//5 harften fazla olanlar ??
const PRODUCTS = ["Mic", "Cable", "Speaker", "Desktop PC", "Server", "Mouse", "Keyboard"]
const NEW_PRODUCTS = PRODUCTS.filter(product => product.length>5)
console.log(NEW_PRODUCTS)


//aktif kullanıcılar
const USERS = [
    {fullName: "Ayşe Sümer", isActive: false},
    {fullName: "Ahmet Urgan", isActive: true},
    {fullName: "Asya Basar", isActive: true},
    {fullName: "Aksel Durmaz", isActive: false}
]
const ACTIVE_USERS = USERS.filter(user => user.isActive === true)
console.log(JSON.stringify(ACTIVE_USERS))


//Ödev
const PERSONS = [{
    name: "Adem",
    age: 25,
    languages: ["JavaScript", "CSS"],
},
{
    name: "Oğuz",
    age: 33,
    languages: ["Java", "HTML"],
}]

const OLD_PERSON = PERSONS.filter(person => person.age > 30)
console.log("Yaşı 30'dan büyük olanlar:",JSON.stringify(OLD_PERSON))

const KNOW_JS = PERSONS.filter(person => person.languages.includes("JavaScript"))
console.log("Javascript bilenler:",JSON.stringify(KNOW_JS))
