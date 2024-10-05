let items = [1, 2, 3, 4, 5]

//Array içinde array
let femaleUsers = ["Ayse","Hulya","Merve"]
let maleUsers = ["Ahmet","Hasan","Mehmet"]

items.unshift(femaleUsers)
items.push(maleUsers)
console.log(items)
console.log("Dizi Uzunlugu:"+items.length)


console.log("Arrayin ilk elemanının içindeki arrayin 2.elemanı:",items[0][2]) //merve
console.log("Ve onun lengthi:",items[0].length)

//Array içerisinden oge ayırmak -> splice(pos,item?)
let newItems = items.splice(2,4) //2den başla 4 eleman al
console.log("Ayrılmış yeni dizi:",newItems)

//Array içerisinde ogenin index bilgisini bulmak -> indexOf('value')
items.unshift("lorem")
items.push("ipsum")
console.log(items)
console.log("1.index:", items.indexOf('lorem')) //0 
console.log("Sonuncu index:", items.indexOf('ipsum')) //4
console.log("-----------")
//Array kopyalamak -> slice, [...ES6]
let copyItems = items
console.log(items)
copyItems.pop()
console.log("items:", items)
console.log("copyItems:", copyItems)
//doğru yöntem:
console.log("-----------")
copyItems = items.slice()
copyItems.pop()
console.log("items:", items)
console.log("copyItems:", copyItems , "Başarıyla kopyalandı.")


//Diğer array kopyalama yöntemi
let allUsers = [...femaleUsers,...maleUsers]
console.log("allUsers:", allUsers)


//Arraylerin içindeki bilgileri stringe çevirme 
console.log("Stringe çevirme:", allUsers.toString())
console.log("Stringe çevirme2:", allUsers.join(" --- "))


//İstediğimiz index bilgisine göre oge eklemek 
allUsers.splice(allUsers.length, 0, "Melisa")
console.log("allUsers'a eklendi:", allUsers)