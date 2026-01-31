let homescore = document.getElementById("home-score")
let guestscore = document.getElementById("guest-score")

let Hscore = 0
let Gscore = 0

function homeadd1() {
    Hscore += 1 
    homescore.textContent = Hscore
}

function homeadd2() {
    Hscore += 2 
    homescore.textContent = Hscore
}

function homeadd3() {
    Hscore += 3 
    homescore.textContent = Hscore
}


function guestadd1() {
    Gscore += 1 
    guestscore.innerText = Gscore
}

function guestadd2() {
    Gscore += 2 
    guestscore.innerText = Gscore
}

function guestadd3() {
    Gscore += 3 
    guestscore.innerText = Gscore
}

function newgame() {
    guestscore.innerText = 0
    homescore.textContent = 0
    Hscore = 0
    Gscore = 0
}