// let userName = prompt ("Kullanıcı adınızı yazınız:")
// let info = document.querySelector("#info")

// // ternary kullanımı:
// // kosul ? doğruysa : yanlissa

// info.innerHTML = `${userName.length>0 ? userName : "bilgi yok"} `

var money;
var canBuy = 
    (money < 17) ? "Satın alamazsın..":
    (money > 30) ? "Satın alabilirsin..":
    "Para miktarını girmen gerekmektedir..";

console.log(canBuy) 
