let userName = "arif"
const DOMAIN = "kodluyoruz.org"
let debt = 650
let debtTax = 0.32
let tax = debt * debtTax

let email = userName + "@" + DOMAIN
console.log("Merhaba",userName,"sitemize hoş geldin.","mail adresin:",email)

let infoMessage = `Merhaba ${userName} sitemize hos geldin. 
Mail adresin: ${email}
mail adresinin uzunluğu:  ${email.length}
kısa isminiz: ${email.slice(0,4)}.
borcunuz: ${debt += tax} TL
gunun saat bilgisi: ${new Date().getHours()}
`
console.log(infoMessage)
alert(infoMessage)
document.write(infoMessage)
//Her seferinde bu mesajı tekrardan yazmak yerine bu şekilde otomatikleştirmiş olduk.

