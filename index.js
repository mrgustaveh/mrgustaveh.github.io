const spinnercontainer = document.querySelector("#spinner_container");
const scrollbtn = document.querySelector("#scroll");
const scrollbtntxt = document.querySelector("#btn_text");
const year = document.querySelector("#year");

const locations = [
  { id: 0, title: "about" },
  { id: 1, title: "projects" },
  { id: 2, title: "tools" },
  { id: 3, title: "contact" },
  { id: 4, title: "about" },
];

let locindex = 1;
const pagelocation = "#";

scrollbtn.addEventListener("click", () => {
  if (locindex === 4) locindex = locindex - 4;
  window.location = pagelocation + locations[locindex].title;
  scrollbtntxt.textContent = locations[locindex + 1].title;

  locindex += 1;
});

scrollbtntxt.textContent = locations[1]?.title;

setTimeout(() => {
  spinnercontainer.style.display = "none";
}, 2600);

const yeartoday = new Date().getUTCFullYear();
year.textContent = yeartoday;
