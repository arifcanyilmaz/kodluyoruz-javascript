// let weatherForecast = parseInt(prompt("Hava tahmininizi giriniz:"))
// let info = document.querySelector("#info")


// switch(true){
//     case (weatherForecast >= 20):
//         info.innerHTML = "Hava güneşli ve sıcak";
//         break; 
//     case (weatherForecast <=19 && weatherForecast >= 10):
//         info.innerHTML = "Hava serin";
//         break;
//     case (weatherForecast <=9):
//         info.innerHTML = "Hava soğuk";
//         break;
//     default:
//         info.innerHTML = "Geçersiz bir tahmin girdiniz!"    
// }

let letter = "adfgt";
// Write your code here
switch(true){
    case (letter[0] == "a" || "e" || "i" || "o" || "u"):
        console.log("A");
        break;
    case (letter[0] == "b,c,d,f,g"):
        console.log("B");
        break;
    case (letter[0] == "h,j,k,l,m"):
        console.log("C");
        break;
    case (letter[0] == "n,p,q,r,s,t,v,w,x,y,z"):
        console.log("D")
        break;
}