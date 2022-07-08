let span = document.querySelector("span");
let body = document.querySelector("body");
const colorPicker= document.getElementById("colorPicker");
colorPicker.addEventListener("input",()=>{
    document.body.style.backgroundColor= colorPicker.value;
    span.innerText=colorPicker.value;

})

function generate(){
    let randomColor="";
    let chars="0123456789abcdef";
    for(i=0;i<6;i++){
        randomColor+=chars[Math.floor(Math.random()*16)];}
        span.innerText="#"+randomColor;
        body.style.backgroundColor=span.innerText;
        colorPicker.value=span.innerText;
}
