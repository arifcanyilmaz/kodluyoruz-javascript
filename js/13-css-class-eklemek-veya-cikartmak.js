let greeting = document.querySelector("#greeting") //greetingin idsine erişme

greeting.classList.add("text-primary","title") //classına eklemek yapma
greeting.classList.add("new-info","third-class","btn-danger")

greeting.classList.remove("new-info") //classtan silme

console.log(greeting.classList) //consol'a yazdırma