// Your code goes here
// Enlarge the photos
const imgsel = document.querySelectorAll("img");
imgsel.forEach(i => {
  i.addEventListener("dblclick", () => {
    i.classList.toggle("large");
  });
});

const title1 = document.querySelector("h1");
title1.addEventListener("click", () => {
  title1.style.color = "red";
  title1.style.transform = "scale(1.5)";
});

const nava = document.querySelectorAll("a");
nava.forEach(h => {
  h.addEventListener("mouseenter", () => {
    h.style.transform = "scale(1.2)";
  });
});
