//To Do Section
let input = document.getElementById("muhinput")
let addtolist = document.getElementById("addtolistbtn");
let bank = document.getElementById("bank");

addtolist.addEventListener('click', function()
{
 let item  = document.createElement('li');
 item.innerText = input.value

 if(!item.innerText) {
     addtolist.addEventListener(alert("I didn't get any letters :-("));
 }

else {
 bank.appendChild(item);
 input.value = '';
}

item.addEventListener('click', function()
{
    item.style.transition = '0.5s';
 item.style.color = "gray";
}
)

item.addEventListener('dblclick', function()
{
    item.style.textShadow = '40px 0px 20px';
    item.style.transitionDelay = '0.2s'
    item.style.opacity = '0';
    setTimeout(() => {
        bank.removeChild(item);
    }, 350);
}
)

}

)