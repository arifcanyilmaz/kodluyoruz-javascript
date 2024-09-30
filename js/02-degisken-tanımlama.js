// var ile değişken tanımlama
// var serverName = "kodluyoruz.org"
// console.log(serverName);
//***************************************************

// let ile değişken tanımlama
let serverName = "kodluyoruz.org";
console.log(serverName + " bu şekilde ekleme yapılabilir.");
//veya
serverName += " ikinci yolla ekleme";
console.log(serverName);
// **************************************************


// const ile değişken tanımlama
// const password; BU KULLANIM HATALI CONST KULLANDIYSAN O SATIRDA DEĞERİ ATAYACAKSIN
const password = "dffsdfds";
console.log(password);
// password += "ddsadfds";
// console.log(password) BU KISIMDA HATA ALDIK ÇÜNKÜ CONST İLE TANIMLANAN DEĞERDE 
// DEĞİŞİKLİK YAPILAMAZ.



// const: bilgi değişmeyecekse kullanılır.
// let: değişkendeki değer değişebilecekse kullanılır.
// var: pek tercih edilmez. kodun okunuş sırasını umursamadan çalışır.