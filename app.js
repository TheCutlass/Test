// ساعت

function updateClock() {

    const clock = document.getElementById("clock");

    const now = new Date();

    clock.innerHTML = now.toLocaleTimeString();

}

updateClock();

setInterval(updateClock,1000);


// تغییر تم

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click",()=>{

    document.body.classList.toggle("light");

});