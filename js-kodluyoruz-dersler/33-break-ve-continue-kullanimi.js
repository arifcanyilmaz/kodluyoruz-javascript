const LOREM_LIST = ['lorem', 'ipsum', 'dolor', 'amet', 'consectetur', 'adipising','elit']

let counter = 0

// for(counter ; counter < 10 ; counter++){
//     if(counter === 5){
//         break
//     }
//     console.log(counter)
// }// 4'e kadar yazdırır.

// for(counter ; counter < 10 ; counter++){
//     if(counter === 5){
//         continue
//     }
//     console.log(counter)
// }// 5 haric yazdırır.

const UL_DOM = document.querySelector('#userList')

for(let i=0; i < LOREM_LIST.length; i++){
    if(LOREM_LIST[i] === 'amet') {continue}
    const liDOM = document.createElement('li')
    liDOM.innerHTML = `Ad ${i}: ${LOREM_LIST[i]}`
    UL_DOM.append(liDOM)
}