function hello(firstName){
    console.log(`Merhaba ${firstName}`)
}

hello("JavaScript")

const helloFuncV1 = (firstName) => { console.log(`Merhaba ${firstName}`) }
helloFuncV1("helloFuncV1") 
// Yanlış Kullanım Örneği


const helloFuncV2 = firstName => console.log(`Merhaba ${firstName}`)
helloFuncV2("helloFuncV2")
// Eğer tek parametreyse parantez kalkar. 
// Eğer tek işlem olacaksa süslü parantez kalkar.

const helloFuncV3 = (firstName , lastName) => 
console.log(`Merhaba ${firstName} ${lastName}`)
helloFuncV3("Arif","Yılmaz")


const helloFuncV4 = (firstName , lastName) =>{
let info = `Merhaba ${firstName} ${lastName}`
console.log(info)
return info 
}

helloFuncV4("Arifcan","Yılmaz") 