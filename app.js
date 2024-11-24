
let btn = document.querySelector("button");
let clickCount = 0; 

 btn.addEventListener ("click", function () {
     let h3 = document.querySelector("h3")
     let randomColor = getRandomCOlor ();
     h3.innerText = randomColor ;
     
     let div = document.querySelector("div");
     div.style.backgroundColor = getRandomCOlor ();
     clickCount++;
     let p  = document.querySelector("p");
        p.innerText= clickCount ;
    

     console.log("color is Upadated");
 });

function  getRandomCOlor () {
     let red =  Math.floor(Math.random()*255);
     let green =  Math.floor(Math.random()*255);
     let Blue =  Math.floor(Math.random()*255);

     let color = `RGB(${red},${green},${Blue})`;
     return color ;
}