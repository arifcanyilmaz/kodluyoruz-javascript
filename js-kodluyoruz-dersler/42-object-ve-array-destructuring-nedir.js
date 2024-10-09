let settings = {
    userName: "loremIpsum",
    password: "BadPassword",
    isActive: false,
    ip: "127.0.0.1",
    serverName: "kodluyoruz.org"
}

//Bilgilere bu şekilde ulaşabiliriz
let fullName = settings.userName
console.log(fullName)


//Obje içindeki bilgilerin tek seferde alınması
let {userName: user, password, isActive, ip: serverIp, serverName} = settings
console.log(user, password, isActive, serverIp, serverName)
console.log(password)
console.log(serverIp)
//Hem destructuring hem rename yapmış olduk.


//Obje içindeki bazı bilgilerin çıkartılması
let {userName: userName2, password: password2, isActive: isActive2, ...newSetting} = settings
console.log(userName2) //loremIpsum
//onsole.log(ip) not defined hatası!
userName2 = "arif"
console.log(userName2)


//Objenin destructuring ile kopyalanması
//Hatalı yöntem
// let settings2 = settings
// settings2.userName = "Degisen Bilgi"
// console.log(settings2.userName)
// console.log(settings)  ------------->İkisinde de değişen bilgi oldu. 
// console.log(settings2) ------------->İkisinde de değişen bilgi oldu. 
//Doğru Yöntem  
let settings2 = {...settings}
settings2.userName = "Degisen Bilgi"
console.log(settings) //userName: loremIpsum
console.log(settings2)//userName: Degisen Bilgi


//Destructuring Örneği Arrayle
let score = [100, 200, 300, 400]
let [number1, number2, ...otherNumbers] = score
console.log(score)
console.log(number1, number2, otherNumbers) //otherNumbers 300 ve 400den oluşan bir array oldu.
