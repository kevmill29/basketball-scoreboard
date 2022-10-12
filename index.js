/* HOME */
let homeScoreEl = document.getElementById('home-score')
let homeScoreBtn1 = document.getElementById("home-add1-btn")
let homeScoreBtn2 = document.getElementById("home-add2-btn")
let homeScoreBtn3 = document.getElementById("home-add3-btn")
let homeScoreBtn4 = document.getElementById("home-sub1-btn")
let homeScoreBtn5 = document.getElementById("home-sub2-btn")
let homeScoreBtn6 = document.getElementById("home-sub3-btn")


/* GUEST */
let guestScoreEl = document.getElementById('guest-score')
let guestScoreBtn1 = document.getElementById("guest-add1-btn")
let guestScoreBtn2 = document.getElementById("guest-add2-btn")
let guestScoreBtn3 = document.getElementById("guest-add3-btn")
let guestScoreBtn4 = document.getElementById("guest-sub1-btn")
let guestScoreBtn5 = document.getElementById("guest-sub2-btn")
let guestScoreBtn6 = document.getElementById("guest-sub3-btn")

/* RESET */
let homeResetBtn = document.getElementById("hreset-score")
let guestResetBtn = document.getElementById("greset-score")

let homeScore = 0
let guestScore = 0

/* HOME FUNCTION SECTION */

function homeAdd1(){
 homeScore += 1
 homeScoreEl.textContent = homeScore 
}

function homeAdd2(){
 homeScore += 2
 homeScoreEl.textContent = homeScore 
}

function homeAdd3(){
 homeScore += 3
 homeScoreEl.textContent = homeScore 
}

function homeSub1(){
 homeScore -= 1
 homeScoreEl.textContent = homeScore 
}

function homeSub2(){
 homeScore -= 2
 homeScoreEl.textContent = homeScore 
}

function homeSub3(){
 homeScore -= 3
 homeScoreEl.textContent = homeScore} 
 
 function homeReset(){
    homeScore = 0
    homeScoreEl.textContent = homeScore
}
 
/* AWAY FUNCTION SECTION */

function guestAdd1(){
 guestScore += 1
 guestScoreEl.textContent = guestScore 
}

function guestAdd2(){
 guestScore += 2
 guestScoreEl.textContent = guestScore 
}

function guestAdd3(){
 guestScore += 3
 guestScoreEl.textContent = guestScore 
}

function guestSub1(){
 guestScore -= 1
 guestScoreEl.textContent = guestScore 
}

function guestSub2(){
 guestScore -= 2
 guestScoreEl.textContent = guestScore 
}

function guestSub3(){
 guestScore -= 3
 guestScoreEl.textContent = guestScore 
}

function guestReset(){
    guestScore = 0
    guestScoreEl.textContent = guestScore
}