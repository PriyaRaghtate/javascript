const clock=document.querySelector("#clock")
const d=document.querySelector("#date")
setInterval(function (){
    let date=new Date();
    // console.log(date.toLocaleDateString());
    clock.innerHTML=date.toLocaleTimeString();
    d.innerHTML=date.toLocaleDateString();
},1000);


