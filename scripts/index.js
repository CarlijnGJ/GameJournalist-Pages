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

document.addEventListener("DOMContentLoaded", () => {
  const words = ['Carlijn', 'Halfdraak'];
  const el = document.getElementById('naam'), h1 = el.parentElement;
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const TYPE = 110, DELETE = 55, HOLD = 1800, GAP = 350;
  let i = 0;
  const wait = ms => new Promise(r => setTimeout(r, ms));
  async function loop() {
    while (true) {
        await wait(HOLD);
        h1.classList.add('typing');
        for (let t = el.textContent; t.length; ) { 
            t = t.slice(0, -1); 
            el.textContent = t; 
            await wait(DELETE); 
        }
        h1.classList.remove('typing');
        await wait(GAP);
        i = (i + 1) % words.length;
        h1.classList.add('typing');
        for (const ch of words[i]) {
            el.textContent += ch; 
            await wait(TYPE); 
        }
        h1.classList.remove('typing');
    }
  }
  loop();
});

const btns = document.querySelectorAll('.filters button');
const cards = document.querySelectorAll('#projects .card');
btns.forEach(b => b.addEventListener('click', () => {
  btns.forEach(x => x.setAttribute('aria-pressed', x === b));
  const f = b.dataset.f;
  cards.forEach(c => { c.hidden = f !== 'all' && c.dataset.s !== f; });
}));