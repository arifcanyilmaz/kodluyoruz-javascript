let userName = prompt("Kullanıcı adını giriniz:")
let age = prompt("Yaşınızı giriniz:")

if(userName && age >= 18){
    console.log("ehliyet alabilir.")
}else if (!userName) {
    console.log("kullanıcı adınız yok.")
}else if ((age >= 18)){
    console.log("yaş bilginiz yok veya 18 yaşından kücüksünüz")
}