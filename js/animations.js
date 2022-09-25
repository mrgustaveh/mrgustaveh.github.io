const titleObserver = new IntersectionObserver((titlEntries) => {
  titlEntries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("title_show");
    } else {
      entry.target.classList.remove("title_show");
    }
  });
});

const appTitleObserver = new IntersectionObserver((appTitlEntries) => {
  appTitlEntries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("app_title_show");
    } else {
      entry.target.classList.remove("app_title_show");
    }
  });
});

const descObserver = new IntersectionObserver((descEntries) => {
  descEntries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("app_description_show");
    } else {
      entry.target.classList.remove("app_description_show");
    }
  });
});

const imgObserver = new IntersectionObserver((imgEntries) => {
  imgEntries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("img_show");
    } else {
      entry.target.classList.remove("img_show");
    }
  });
});

const stackObserver = new IntersectionObserver((stackEntries) => {
  stackEntries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("tech_show");
    } else {
      entry.target.classList.remove("tech_show");
    }
  });
});

const toolObserver = new IntersectionObserver((toolEntries) => {
  toolEntries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("tool_show");
    } else {
      entry.target.classList.remove("tool_show");
    }
  });
});

const titlesHidden = document.querySelectorAll(".title_hidden");
titlesHidden.forEach((el) => titleObserver.observe(el));

const appTitlesHidden = document.querySelectorAll(".app_title_hidden");
appTitlesHidden.forEach((el) => appTitleObserver.observe(el));

const appDescriptions = document.querySelectorAll(".app_description");
appDescriptions.forEach((el) => descObserver.observe(el));

const projectImgs = document.querySelectorAll(".img_hidden");
projectImgs.forEach((el) => imgObserver.observe(el));

const projectStack = document.querySelectorAll(".tech_hidden");
projectStack.forEach((el) => stackObserver.observe(el));

const tools = document.querySelectorAll(".tool_hidden");
tools.forEach((el) => toolObserver.observe(el));
