// MAP İLE FILTER FARKI:
//map(): Bir fonksiyonu yineleyicinin her öğesine uygular
//filter(): Bir fonksiyonun doğru olduğu yineleyicinin tüm elemanlarını döndürür.

const USERS = ["AYSE", "MehMet", "TugCE", "AkSEL"]
// userName içinde orijinal isim kalsın.
// shortName içinde ilk harf büyük olsun.
// newName içinde ilk harf büyük olsun.
// {userName: "AYSE", shortName: "A.", newName: "Ayse"}

const NEW_USERS = USERS.map(user => user.toLowerCase())
console.log(NEW_USERS)

// const USERS_OBJ = USERS.map(user => 
//     {//Süslü parantez varsa return almak zorunda !
//         return {
//             userName: user, 
//             shortName:`${user[0]}.`, 
//             newName:`${user[0].toUpperCase()}${user.slice(1).toLowerCase()}`
//         } 
//     }
// )

const USERS_OBJ = USERS.map(user => 
    ({
    userName: user,
    shortName: `${user[0]}.`,
    newName: `${user[0].toUpperCase()}${ user.slice(1).toLowerCase() }`
    })
) // böyle iki şekilde de kullanılabilir.

console.log(USERS_OBJ)



// Bir dizinin tüm elemanlarını 2yle çarpmak
const NUMBERS = [ 3, 6, 13, 83, 158 ]
const NEW_NUMBERS = NUMBERS.map(number => 
    {return number*2}
) 
console.log(NEW_NUMBERS)


//Elemanların maaşlarına göre zam oranını değiştirip zamlamak.
const SALARIES = [ 1100, 13000, 2500, 4500, 1500, 25000, 2000 ]
const NEW_SALARIES = SALARIES.map(salary => 
    {
        if(salary[salary]>=3000){
            return salary*1.15
        }else{
            return salary*1.25
        }
    }   
)
console.log(NEW_SALARIES)