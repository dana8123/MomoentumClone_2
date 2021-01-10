const clockBox = document.querySelector("clock__box");
const clockTitle = document.querySelector("h1");

function getTime(){
    const time = new Date();
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
}

function init(){
    setInterval(getTime,1000);
};

init();