// Key - Value Doğru şekilde oluşturmak
let laptop1 = {
    brand: "Apple",             //Key -> brand    value -> "Apple"
    model: "Macbook Pro",
    "2kg": 2,
    modelName: "Macbook Pro" 
}

console.log(laptop1.brand, laptop1["brand"] ) //Apple - Apple
console.log(laptop1.model, laptop1["model"]) //Macbook Pro - Macbook Pro
console.log(laptop1["2kg"]) //2


//Key'e Yeni Bilgi Eklemek
laptop1.brand = "Mac"
laptop1["brand"] = "Mac" //Aynı şey
console.log(laptop1.brand) //Apple yerine Mac oldu.

//Key Bilgisiyle Uğraşmak
laptop1.brand += "ten"
console.log(laptop1.brand) //Mac yerine Macten oldu

//Yeni Key Eklemek
laptop1.version = "10.15.7"
console.log(laptop1.version) //"10.15.7"

//Key Bilgilerine Ulaşmak(keys)
keys = Object.keys(laptop1)
console.log(keys) //brand,model,2kg,modelName,version
console.log(Object.keys(laptop1)) //brand,model,2kg,modelName,version

keys.forEach(key => {
    console.log(key) //brand,model,2kg,modelName,version 
});

//Value Bilgilerine Ulaşmak(values)
console.log(Object.values(laptop1)) //Macten, Macbook Pro, 2, Macbook Pro, 10.15.7
values = Object.values(laptop1)
values.forEach(value => {
    console.log(value) //Macten, Macbook Pro, 2, Macbook Pro, 10.15.7
});


//ÖRNEK
let show = {
    showName:"How I Met Your Mother",
    characters:[
    {

  	name:"Ted",
  	age: 35,
  	job: ["Architect"]
  },
  {
  	name: "Robin",
  	age: 32,
  	job: ["News Anchor", "Pop-Star"]
  }
  ]
};

console.log(show.characters[1].job[1])