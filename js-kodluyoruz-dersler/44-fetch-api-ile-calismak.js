//JSON DOSYADAN VERİ ÇEKMEK
fetch("js-kodluyoruz-dersler/data/settings.json").then(
    response => response.json()
    
).then(responseJson =>{
    console.log(responseJson)
    console.log(responseJson.userName)
})



//API ÜZERİNDEN VERİ ÇEKMEK
let userListDOM = document.querySelector('#userList')


fetch('https://jsonplaceholder.typicode.com/posts').then(
    response => response.json()
).then(jsons => 
    jsons.forEach((json,index) => {
        //console.log(index+".Title: "+jsons[index].title)
        let liDOM = document.createElement('li')
        liDOM.innerHTML = `${index}.Title: ${jsons[index].title}`
        userListDOM.append(liDOM)
    })
)



