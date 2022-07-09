const scrollTracker = document.querySelector("#scroll-tracker");
const topDiv = document.querySelector(".top");
const projectImgs = document.querySelectorAll("project-img");

const scrollTrackTimeline = new ScrollTimeline({
  source: document.scrollingElement,
  orientation: "block",
  scrollOffsets: [CSS.px(topDiv.clientHeight), CSS.percent(100)],
});

scrollTracker.animate(
  {
    transform: ["scaleX(0)", "scaleX(1)"],
  },
  {
    duration: 1,
    timeline: scrollTrackTimeline,
  }
);

projectImgs.forEach((image) => {
  image.animate(
    {
      opacity: ["0", "1"],
      transform: ["translateY(-200)", "translateY(0)"],
    },
    {
      duration: 1,
      easing: "linear",
      timeline: new ScrollTimeline({
        scrollOffsets: [
          { target: image, edge: "end", threshold: "1" },
          { target: image, edge: "start", threshold: "1" },
        ],
      }),
    }
  );
});
