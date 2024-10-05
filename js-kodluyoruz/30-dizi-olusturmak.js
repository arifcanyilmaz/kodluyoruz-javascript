let domain = "kodluyoruz"
let isActive = false
let items = [1, 2, 3, isActive, domain]
let items2 = [10 , 25, 55, 85]
console.log(items)

items += [1, 2, 3]
console.log(items)

let emptyArray = [] //boş liste

console.log(items.length)

//ilk eleman
console.log("İlk Eleman:",items[0]) 

//son eleman
console.log("Son eleman:",items[items.length-1]) 

//array olup olmadığını kontrol eder. True döndürür.
console.log("Array kontrolü:",Array.isArray(items)) 

//Ortadaki elemanı verir
console.log("Ortadaki eleman:",items[Math.floor(items.length/2)]) 

//Sona eleman ekleme
items2.push(50)
console.log("50 Sona geldi:", items2)

//Başa eleman ekleme
items2.unshift(38)
console.log("38 Başa geldi:", items2)

//Sondan eleman çıkarma
let lastItem = items2.pop()
console.log("Sondaki eleman çıkartıldı:", lastItem)
console.log("Yeni dizi:", items2)

//İlk elemanı çıkarma
let firstItem = items2.shift()
console.log("Baştaki eleman çıkartıldı:", firstItem)
console.log("Yeni dizi:", items2)

//Array icindeki bir ögeyi değiştirme
items2[1] = "arif"
console.log("Yeni dizi:", items2,"25 çıktı,Arif geldi")

