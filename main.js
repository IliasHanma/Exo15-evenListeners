// # Exercice :
// >*En utilisant les class du fichier style.css*

// >*Cherche des methodes pour résoudre les énoncés suivants :*

// ### 1. Met un écouteur d'événement sur le h1, rajoute la class text-error
let myH1 = document.querySelector('h1');
myH1.classList.add("text-error");

// let monH1 = document.querySelector("h1");

// monH1.addEventListener("click",()=>{
//     monH1.setAttribute("class","text-error")
// })

// ### 2. Au double clique du h3, la class text-error
let myH3 = document.querySelector('h3');
myH3.addEventListener("dblclick", () => {
    myH3.classList.add("text-error");
});
// ### 3. Ajoute la class text-style, quand on clique sur le paragraphe,
//  trouve une methode qui retire la class si elle est déjà sur le paragraphe
// let myP = document.querySelectorAll('p')[0];
// myP.addEventListener("click", () => {
//     myP.classList.add('text-style');
// })


let p = document.querySelector("p");
p.addEventListener("click", ()=>{
    p.classList.toggle("text-style")
});
// let removeClass;

// removeClass.addEventListener("click",()=>{
//     if(myP.classList.add('text-style')){
//         myP.classList.remove('text-error');
//     }
// })


// ### 4. Dans l'avant dernier paragraphe, tu as trois span,    jcréer un programme
//  qui met la class bolder sur le mot sur le quel on clique 
let avDernierP = document.querySelectorAll('p')[1];
let childSpan = Array.from(avDernierP.children);
console.log(childSpan);

childSpan.forEach(element => {
    element.addEventListener('click', () => {
        element.classList.add('bolder');

    });

})



// ### 5. Dans le dernier paragraphe tu as trois span,, créer un programme
//  qui rajoute la class "bolder-red" sur le mot sur le quel on clique mais retire cette class
//   au deux autres, si elles l'ont !

// let lastP = document.querySelectorAll('p')[2];
// let child2Span = Array.from(lastP.children);
// // console.log(child2Span);

// child2Span.forEach(element => {
//     element.addEventListener('click', () =>{
//         element.classList.add('bolder-red');
//     })
    
// })

// for(let i in child2Span){
//     console.log(child2Span[1]);
// }

let span=document.querySelectorAll("p")[2].children;
console.log(span);
let tabSpan=Array.from(span);

tabSpan[0].addEventListener("click",()=>{
    tabSpan[0].setAttribute("class","bolder-red")
    tabSpan[1].classList.remove("bolder-red");
    tabSpan[2].classList.remove("bolder-red")
})

tabSpan[1].addEventListener("click",()=>{
    tabSpan[1].setAttribute("class","bolder-red")
    tabSpan[0].classList.remove("bolder-red");
    tabSpan[2].classList.remove("bolder-red")
    
})

tabSpan[2].addEventListener("click",()=>{
    tabSpan[2].setAttribute("class","bolder-red")
    tabSpan[1].classList.remove("bolder-red");
    tabSpan[0].classList.remove("bolder-red")
})





