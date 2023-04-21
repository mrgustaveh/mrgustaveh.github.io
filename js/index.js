const spinnercontainer = document.querySelector("#spinner_container");
const scrollbtn = document.querySelector("#scroll");
const scrollbtntxt = document.querySelector("#btn_text");
const copyemailbtn = document.querySelector("#copyemail");
const copytxt = document.querySelector("#copytxt");
const copyicon = document.querySelector("#copyicon");
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
}, 1650);

copyemailbtn.addEventListener("click", () => {
  navigator.clipboard.writeText("developer.aj12@gmail.com");
  copyicon.textContent = "done";
  copytxt.textContent = "Email Copied";

  setTimeout(() => {
    copytxt.textContent = "Copy Email";
    copyicon.textContent = "content_copy";
  }, 2000);
});

const yeartoday = new Date().getUTCFullYear();
year.textContent = yeartoday;
