let h2 = document.getElementsByTagName('h2') // taglere göre çağırmak iyi değil.
// console.log(h2.title.innerHTML)

let title = document.getElementById('title') // yukardaki ile aynı yere girdik ama bu
title.innerHTML = "Degisen Bilgi"            // yöntem daha iyi.
console.log(title.innerHTML)


let link = document.querySelector("ul#list>li>a")
link.innerHTML += " Degişti"
// console.log(link.innerHTML) artık index.htmlde yazan link bilgisi yerine değisti
//yazıyor. tekrardan consolda yazdırmaya gerek yok.



let sameLink = document.querySelector('#kodluyoruzLink')
sameLink.innerHTML = "link bir kez daha değişti"

link.style.color = "red" 
link.classList.add('btn') //bu seçilen linke class ekledik.Eğer bootstrap bağlı 
//olsaydı artık bir buton olacaktı.