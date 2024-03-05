let div = document.querySelector(".div");
let circkle = document.querySelector(".circkle");

localStorage.setItem("theme", "light");

let body = document.querySelector(".body");
body.classList.add(localStorage.getItem("theme"));

div.addEventListener("click", () => {
  circkle.classList.toggle("active");
  if (circkle.classList.contains("active")) {
    localStorage.setItem("theme", "dark");

    body.classList.add(localStorage.getItem("theme"));
  } else {
    localStorage.setItem("theme", "light");

    body.classList.remove("dark");
    body.classList.add(localStorage.getItem("theme"));
  }
});
