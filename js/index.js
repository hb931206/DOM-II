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
  h.addEventListener("mouseover", () => {
    h.style.transform = "scale(1.3)";
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

function zoom(event) {
  event.preventDefault();

  scale += event.deltaY * -0.01;

  // Restrict scale
  scale = Math.min(Math.max(0.125, scale), 4);

  // Apply scale transform
  el.style.transform = `scale(${scale})`;
}

let scale = 1;
const el = document.querySelector("h1");
el.addEventListener("wheel", zoom);
