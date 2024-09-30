// number veri turu
let price = 100;
let tax = 0.3;
let priceTax = price*tax;
console.log("Fiyat:" , price , 
    "KDV Orani:" , tax , 
    "KDV Tutari:" , priceTax
);

let totalPrice = price + priceTax;
console.log("Toplam Fiyat: " , totalPrice); 
//Önemli not: log içinde virgül yerine + kullanırsak boşluk bırakmadan yazar.
//, kullanırsak sonuç: Toplam Fiyat: 130
//+ Kullanırsak sonuç: Toplam Fiyat:130


// Arttirma ve azaltma işlemleri
let counter = 320;
counter++; 
console.log(counter);


// Sayı tek mi çift mi ? MOD ALMA
console.log(counter % 2); //321i 2ye böldüğümüzde kalan 1 olur çıktı 1 olacaktır.


// us alma
console.log(2 ** 5 ); //32


//asagi yuvarlama: Math.floor:
console.log(Math.floor(12,7)); //12


//yukari yuvarlama: Math.Ceil:
console.log(Math.floor(12,2)); //12

//yakina yuvarlama: Math.round:
console.log(Math.round(12.4)); //12


//String olarak alınmış sayıyı integer'a çevirme işlemi:
let stringNumber = "123"
let stringNumber2 = "1234"
console.log(stringNumber)
let realNumber = Number(stringNumber)
console.log(realNumber)
console.log(Number(stringNumber2))