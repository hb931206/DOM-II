// Your code goes here
// Enlarge the photos
const imgsel = document.querySelectorAll("img");
imgsel.forEach(i => {
  i.addEventListener("dblclick", () => {
    i.classList.toggle("large");
  });
});

const title1 = document.querySelector("h1");
title1.addEventListener("mouseenter", () => {
  title1.style.color = "red";
  title1.style.transform = "scale(1.5)";
});

title1.addEventListener("mouseleave", () => {
  title1.style.transform = "scale(1)";
  title1.style.color = "black";
});

const nava = document.querySelectorAll("a");
nava.forEach(h => {
  h.addEventListener("mouseenter", () => {
    h.style.transform = "scale(1.2)";
  });
});

const form = document.getElementById("form");

form.addEventListener(
  "focus",
  event => {
    event.target.style.background = "#dbc3ad";
    event.target.style.color = "black";
  },
  true
);

form.addEventListener(
  "blur",
  event => {
    event.target.style.background = "";
  },
  true
);

document.addEventListener("keydown", logKey);

function logKey(e) {
  console.log(e.code);
}

window.addEventListener("load", event => {
  console.log("page is fully loaded");
});

const foot = document.querySelector("footer");
foot.addEventListener("click", () => {
  foot.classList.toggle("blue");
});
