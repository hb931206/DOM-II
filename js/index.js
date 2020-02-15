// Your code goes here
const button = document.querySelectorAll(".btn");

button.forEach(but => {
  but.addEventListener("dblclick", () => {
    but.style.backgroundColor = "red";
  });
});

const imgsel = document.querySelectorAll("img");
imgsel.forEach(i => {
  i.addEventListener("dblclick", () => {
    i.classList.toggle("large");
  });
});
