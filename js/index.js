const weathorbtn = document.querySelector(".weathorbtn");
const autoplaybtn = document.querySelector(".autoplaybtn");
const countryquizbtn = document.querySelector(".countryquizbtn");

const projectsids = ["weathor", "autoplay", "countryquiz"];

const showcurrentproct = (showid, hiddenids) => {
  document.querySelector(`#${showid}`).style.cssText =
    "display:block !important;";

  hiddenids.map((projid) => {
    document.querySelector(`#${projid}`).style.cssText =
      "display:none !important;";
  });
};

weathorbtn.addEventListener("click", () => {
  showcurrentproct("weathor", ["autoplay", "countryquiz"]);
});

autoplaybtn.addEventListener("click", () => {
  showcurrentproct("autoplay", ["weathor", "countryquiz"]);
});

countryquizbtn.addEventListener("click", () => {
  showcurrentproct("countryquiz", ["weathor", "autoplay"]);
});
