/*
 *   Copyright (c) 2026 
 *   All rights reserved.
 */
const fourth = document.getElementById("fourthentry_title");

function triggerAnimation() {
    fourth.innerText = "ERROR"
    sleep(300).then(() => { fourth.innerText = "ID=WORLD-CORRUPTED"})
    sleep(600).then(() => { fourth.innerText = "JUMPER-REQUIRED=GJ"})
    sleep(900).then(() => { fourth.innerText = "This world is not accessible yet..."})
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

setInterval(triggerAnimation, 10000);