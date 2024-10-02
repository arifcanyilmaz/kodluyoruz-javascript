localStorage.setItem('number',11) //sayı atamak
localStorage.getItem('number') //sayıyı çağırmak


let user = {userName: "arifcanyilmaz", isActive: true}

localStorage.setItem('userInfo', JSON.stringify(user) )

let userInfo = localStorage.getItem('userInfo') // bilgiyi al
userInfo = JSON.parse(userInfo)
console.log(userInfo)
