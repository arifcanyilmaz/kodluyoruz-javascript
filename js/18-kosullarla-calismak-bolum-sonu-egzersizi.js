let score = prompt("Notunuzu giriniz:")
let info = document.querySelector("#info")
const SMILE = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-smile-fill" viewBox="0 0 16 16">
  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5M4.285 9.567a.5.5 0 0 1 .683.183A3.5 3.5 0 0 0 8 11.5a3.5 3.5 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683M10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8"/>
</svg>
`
const SAD = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-frown-fill" viewBox="0 0 16 16">
  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m-2.715 5.933a.5.5 0 0 1-.183-.683A4.5 4.5 0 0 1 8 9.5a4.5 4.5 0 0 1 3.898 2.25.5.5 0 0 1-.866.5A3.5 3.5 0 0 0 8 10.5a3.5 3.5 0 0 0-3.032 1.75.5.5 0 0 1-.683.183M10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8"/>
</svg>
`
if(score>=0 && score<=100){
    info.classList.add("text-primary")
    info.innerHTML = SMILE
    if(score>=90){
        info.innerHTML += "AA"
    }else if(score>=85){
        info.innerHTML += "BA"
    }else if(score>=80){
        info.innerHTML += "BB"
    }else if(score>=75){
        info.innerHTML += "CB"
    }else if(score>=70){
        info.innerHTML += "CC"
    }else if(score>=65){
        info.innerHTML += "DC"
    }else if(score>=60){
        info.innerHTML += "DD"
    }else if(score>=50){
        info.innerHTML += "FD"
    }else if(score>=0){
        info.innerHTML = "FF"  
        info.classList.remove("text-primary")
        info.classList.add("text-danger")
        info.innerHTML += SAD
    }
}else{
    info.innerHTML = "Geçersiz not girdiniz!"
}


