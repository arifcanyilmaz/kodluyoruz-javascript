// İsim ekleme kısmı
let name = prompt("Lutfen Adinizi Giriniz:")
let myName = document.querySelector("#myName")
myName.innerHTML = name


// Saat kısmı
function showTime(){
    // Şu anki zamanı almak
    const today = new Date()
    // Saat,dakika,saniye ve gün almak
    let hour = today.getHours()
    let minute = today.getMinutes()
    let second = today.getSeconds()
    let day = today.getDay()
    // Günün sayı değil isim olması için dizi
    const daysofweek =["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi","Pazar"]

    if(hour < 10){
        hour = `0${hour}`
    }
    if(minute < 10){
        minute = `0${minute}`
    }
    if(second < 10){
        second = `0${second}`
    }


    // Saati yazdıran değişken
    let showClock = `${hour}:${minute}:${second} ${daysofweek[day]}`

    // Saati ekran yazdır
    document.querySelector("#myClock").innerHTML = showClock
}
// Her saniye güncellemeye yarıyor
setInterval(showTime, 1000);
showTime();