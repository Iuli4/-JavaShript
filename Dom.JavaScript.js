const tag_h1 = document.querySelector(".title");
tag_h1.innerHTML = "Salut";
tag_h1.style.color ="purple";
console.log(tag_h1);


const boty_color = document.querySelector("body")
// function color(param) {
//     addEventListener("click",()=>{
//         param.style.backgroundColor ="pink";
//         })
// }
// color(boty_color)
const paragraf = document.createElement("p")
paragraf.innerHTML ="1992"
paragraf.className ="Age"
boty_color.appendChild(paragraf)