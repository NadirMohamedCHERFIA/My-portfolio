const maj = document.querySelector('.maj');
const textLoad = ()=>{
    setTimeout(()=>{
        alert(maj);
        maj.innerText="Embedded Systems Engineer";
    },0);
    setTimeout(()=>{
        maj.innerText="Industrial Engineering Student";
    },4000);
    setTimeout(()=>{
        maj.innerText="FrontEnd Developer";
    },8000);
}
textLoad();
setInterval(textLoad,12000);
