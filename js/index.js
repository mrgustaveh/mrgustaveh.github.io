const aboutBtn = document.querySelector("#about-bnt");
const medicBtn = document.querySelector("#medic-btn");
const nobisBtn = document.querySelector("#nobis-btn");
const echoBtn = document.querySelector("#echo-btn");
const bikkeBtn = document.querySelector("#bikke-btn");
const autoPlayBtn = document.querySelector("#autoplay-btn");
const audioPlayerBtn = document.querySelector("#audioplayer-btn");

const showcurrentprojt = (showid, hiddenids) => {
  if (showid == "about") aboutBtn.classList.add("activebutton");
  else {
    aboutBtn.classList.remove("activebutton");
  }

  if (showid == "project-medic") medicBtn.classList.add("activebutton");
  else {
    medicBtn.classList.remove("activebutton");
  }

  if (showid == "project-nobis") nobisBtn.classList.add("activebutton");
  else {
    nobisBtn.classList.remove("activebutton");
  }

  if (showid == "project-echo") echoBtn.classList.add("activebutton");
  else {
    echoBtn.classList.remove("activebutton");
  }

  if (showid == "project-bikke") bikkeBtn.classList.add("activebutton");
  else {
    bikkeBtn.classList.remove("activebutton");
  }

  if (showid == "project-autoplay") autoPlayBtn.classList.add("activebutton");
  else {
    autoPlayBtn.classList.remove("activebutton");
  }

  if (showid == "project-audioplayer")
    audioPlayerBtn.classList.add("activebutton");
  else {
    audioPlayerBtn.classList.remove("activebutton");
  }

  document.querySelector(`#${showid}`).style.cssText = `display:${
    showid == "about" ? "content" : "unset"
  } !important;`;

  hiddenids.map((projid) => {
    document.querySelector(`#${projid}`).style.cssText =
      "display:none !important;";
  });
};

aboutBtn.addEventListener("click", () => {
  showcurrentprojt("about", [
    "project-medic",
    "project-nobis",
    "project-echo",
    "project-bikke",
    "project-autoplay",
    "project-audioplayer",
  ]);
});

medicBtn.addEventListener("click", () => {
  showcurrentprojt("project-medic", [
    "about",
    "project-nobis",
    "project-echo",
    "project-bikke",
    "project-autoplay",
    "project-audioplayer",
  ]);
});

nobisBtn.addEventListener("click", () => {
  showcurrentprojt("project-nobis", [
    "about",
    "project-medic",
    "project-echo",
    "project-bikke",
    "project-autoplay",
    "project-audioplayer",
  ]);
});

echoBtn.addEventListener("click", () => {
  showcurrentprojt("project-echo", [
    "about",
    "project-medic",
    "project-nobis",
    "project-bikke",
    "project-autoplay",
    "project-audioplayer",
  ]);
});

bikkeBtn.addEventListener("click", () => {
  showcurrentprojt("project-bikke", [
    "about",
    "project-medic",
    "project-nobis",
    "project-echo",
    "project-autoplay",
    "project-audioplayer",
  ]);
});

autoPlayBtn.addEventListener("click", () => {
  showcurrentprojt("project-autoplay", [
    "about",
    "project-medic",
    "project-nobis",
    "project-bikke",
    "project-echo",
    "project-audioplayer",
  ]);
});

audioPlayerBtn.addEventListener("click", () => {
  showcurrentprojt("project-audioplayer", [
    "about",
    "project-medic",
    "project-nobis",
    "project-bikke",
    "project-autoplay",
    "project-echo",
  ]);
});
