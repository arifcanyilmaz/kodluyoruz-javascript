let price = 123
let stringPrice = "123"
let hasPassword = true
//typeof türünü anlamamıza yarar.
console.log(
    "Price:" , typeof(price) 
)
console.log(
    "stringPrice:" , typeof(stringPrice) 
)
console.log(
    "hasPassword" , typeof(hasPassword) 
)

//birbaşka yöntem
console.log(typeof("11") === "string")//türler eşit mi diye karşılaştırıyor.True döner.



//string bilgileri int ve float'a dönüştürmek
let number1 = "12px"
let number2 = "10px"
console.log(
    "number1" , parseInt(number1),
    //"number2" , number(number2) bu kısım hata verecek çünkü
    //number içinde sadece sayı olan stringleri çevirir.
    //parse ise sayı ile başlıyorsa sayının bittiği yere olan kısmı çevirir.
)

//parseFloat: number ile 11.2 gibi bir sayıyı almak istediğimizde hata verir.
//bunu parsefloat ile çevirmiş olmamız gerekir.
let number3 = "13.3px"
console.log(
    "number3" , parseFloat(number3) //parseInt ile 13 olacak.
)


//int değerden stringe dönüşüm
let number4 = 55
number4 = number4.toString()
console.log(number4,typeof(number4))