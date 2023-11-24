const oasisbtn = document.querySelector(".oasisbtn");
const weathorbtn = document.querySelector(".weathorbtn");
const autoplaybtn = document.querySelector(".autoplaybtn");
const potterapbtn = document.querySelector(".potterapbtn");
const veestrmdesignbtn = document.querySelector(".veestrmdesignbtn");
const autoplaydesignbtn = document.querySelector(".autoplaydesignbtn");
const oasisdesignbtn = document.querySelector(".oasisdesignbtn");

const cat_designbtn = document.querySelector(".cat_design");
const cat_developbtn = document.querySelector(".cat_develop");

const yeartext = document.querySelector(".yeartext");

const showcurrentprojt = (showid, hiddenids) => {
  document.querySelector(`#${showid}`).style.cssText =
    "display:block !important;";

  hiddenids.map((projid) => {
    document.querySelector(`#${projid}`).style.cssText =
      "display:none !important;";
  });
};

oasisbtn.addEventListener("click", () => {
  showcurrentprojt("oasisstays", [
    "weathor",
    "autoplay",
    "potterapp",
    "oasisstaysdesign",
    "oasisstaysdesign",
    "veestream",
  ]);
});

weathorbtn.addEventListener("click", () => {
  showcurrentprojt("weathor", [
    "oasisstays",
    "autoplay",
    "potterapp",
    "oasisstaysdesign",
    "oasisstaysdesign",
    "veestream",
  ]);
});

autoplaybtn.addEventListener("click", () => {
  showcurrentprojt("autoplay", [
    "oasisstays",
    "weathor",
    "potterapp",
    "oasisstaysdesign",
    "oasisstaysdesign",
    "veestream",
  ]);
});

potterapbtn.addEventListener("click", () => {
  showcurrentprojt("potterapp", [
    "oasisstays",
    "weathor",
    "autoplay",
    "oasisstaysdesign",
    "oasisstaysdesign",
    "veestream",
  ]);
});

const showdesignprojects = () => {
  cat_designbtn.style.cssText = "background-color:#323232";
  cat_developbtn.style.cssText = "background-color: rgba(38, 38, 38, 0.75)";

  const designprojectsbtn = document.querySelectorAll(".proj_designbtn");
  const devprojectsbtn = document.querySelectorAll(".proj_developmntbnt");

  devprojectsbtn.forEach((bnt) => {
    bnt.style.cssText = "display:none !important";
  });

  designprojectsbtn.forEach((btn) => {
    btn.style.cssText = "display:flex !important";
  });

  showcurrentprojt("veestream", [
    "oasisstays",
    "weathor",
    "autoplay",
    "potterapp",
    "oasisstaysdesign",
    "autoplaydesign",
  ]);
};

const showdevelopmentprojectcs = () => {
  cat_developbtn.style.cssText = "background-color:#323232";
  cat_designbtn.style.cssText = "background-color: rgba(38, 38, 38, 0.75)";

  const devprojectsbtn = document.querySelectorAll(".proj_developmntbnt");
  const designprojectsbtn = document.querySelectorAll(".proj_designbtn");

  designprojectsbtn.forEach((btn) => {
    btn.style.cssText = "display:none !important";
  });

  devprojectsbtn.forEach((btn) => {
    btn.style.cssText = "display:flex !important";
  });

  showcurrentprojt("autoplay", [
    "weathor",
    "oasisstays",
    "potterapp",
    "autoplaydesign",
    "oasisstaysdesign",
    "veestream",
  ]);
};

cat_designbtn.addEventListener("click", () => showdesignprojects());
cat_developbtn.addEventListener("click", () => showdevelopmentprojectcs());

autoplaydesignbtn.addEventListener("click", () => {
  showcurrentprojt("autoplaydesign", ["oasisstaysdesign", "veestream"]);
});
oasisdesignbtn.addEventListener("click", () => {
  showcurrentprojt("oasisstaysdesign", ["autoplaydesign", "veestream"]);
});
veestrmdesignbtn.addEventListener("click", () => {
  showcurrentprojt("veestream", ["autoplaydesign", "oasisstaysdesign"]);
});

showdevelopmentprojectcs();

const date = new Date();
yeartext.textContent = date.getFullYear();
