/*
 *   Copyright (c) 2025 
 *   All rights reserved.
 */

const secret = document.querySelector("#secret");

secret.addEventListener("click", () => {
    window.location.href = "/entries.html";
});

function triggerAnimation() {
    const text = document.querySelector('#psst');
    text.classList.remove('show-animation');
    void text.offsetWidth;
    text.classList.add('show-animation');
}

setInterval(triggerAnimation, 30000);