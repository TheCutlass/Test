// =========================
// MyServer Lite
// =========================

// ساعت

function updateClock() {

    const now = new Date();

    document.getElementById("clock").textContent =
        now.toLocaleTimeString();

}

updateClock();

setInterval(updateClock,1000);


// مرورگر

const browser = navigator.userAgent;

let browserName = "Unknown";

if(browser.includes("Firefox")){

    browserName = "Firefox";

}else if(browser.includes("Edg")){

    browserName = "Edge";

}else if(browser.includes("Chrome")){

    browserName = "Chrome";

}else if(browser.includes("Safari")){

    browserName = "Safari";

}

document.getElementById("browser").textContent = browserName;


// اندازه صفحه

function updateScreen(){

    document.getElementById("screenSize").textContent =
    window.innerWidth + " × " + window.innerHeight;

}

updateScreen();

window.addEventListener("resize",updateScreen);


// تغییر تم

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click",()=>{

    document.body.classList.toggle("light");

});


// کپی دستور

function copyCommand(id){

    const text = document.getElementById(id).textContent;

    navigator.clipboard.writeText(text);

    alert("Copied:\n" + text);

}