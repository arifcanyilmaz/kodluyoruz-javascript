const PRODUCTS = ["Laptop", "Phone", "Speaker", "Desktop PC", "Server", "Mouse", "Keyboard"]

const userListDOM = document.querySelector('#userList')

PRODUCTS.forEach((product,counter) => {
    const liDOM = document.createElement('li')
    liDOM.innerHTML = `İtem ${++counter}: ${product}`
    userListDOM.append(liDOM)
})
//birden fazla işlem olduğu için {} kullandik. Normal bir fatarrow




// PRODUCTS.forEach((product, index, array) => array[index] = product + " 111" )
PRODUCTS.forEach((product, index, array) => array[index] = `${product.toUpperCase()}` )  // toUpperCase

console.log(PRODUCTS) //bu şekilde arraylerde kullanılabilir.




const numbers = [12, 24, 36] 
const numbers2 = [] 
numbers.forEach((numbers) => { numbers2.push(numbers+2) }) 
console.log(numbers)
console.log(numbers2)