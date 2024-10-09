let items

try{ 
    items.forEach(item => {
        console.log(item)
    });
}catch(error){
    console.log("hata yönetimi düzgün calisiyor")
    items = [1, 2, 3]
    items.forEach(item => {
        console.log(item)
    });
}

let info = "kodluyoruz"
console.log(info)