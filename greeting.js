const form = document.querySelector(".js__form"),
    nameInput = form.querySelector("input"),
    greeting = document.querySelector(".js__greeting");

const USER_LS = "currentUser",
showing_CN = "showing";

function handleSubmit(){
    submit.preventDefault
}

fucntion askForName(){
    form.classList.add(showing_CN);
    nameInput.addEventListener("submit",handleSubmit);
}

function paintName(text){
    form.classList.remove(showing_CN);
    greeting.classList.add(showing_CN);
    greeting.innerText = `Hello${text}`;
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        askForName();
    }else{
        paintName(currentUser);
    }
}



function init(){
    loadName();
}

init();
