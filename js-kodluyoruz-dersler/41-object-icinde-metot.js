let user1 = {
    firstName: "Bilgin",
    lastName: "Uzman", 
    score: [1, 2, 3, 4],
    isActive: true,
    fullName: function(){
        return `${this.firstName} ${this.lastName}`
    }
}

console.log(user1.fullName())

var birey = {
	isim: 'Ali',
	soyisim: 'Veli',
	dogumYili: 1989,
	merhabaDe: (age) => `Merhaba, ben ${birey.isim} ${birey.soyisim}, ${age} yaşındayım`,
}
birey.yasHesapla = function () {
	return 2021 - this.dogumYili
}
console.log(birey.merhabaDe(birey.yasHesapla()))


function yaz(){console.log("Merhaba Kodluyoruz")}
yaz("name")

let [,pronoun,,name]=["Merhaba","benim","adım","Mehmet"];

console.log(pronoun)
console.log(name)


let person={name:"Selin",city:"Ankara",favoriteColor:"aqua blue"}; 
let {name:foo}=person;
console.log(foo)