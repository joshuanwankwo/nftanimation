let start = gsap.timeline({ paused: true, reversed: true });

const lKey = document.querySelector(".key-left");
const rKey = document.querySelector(".key-right");
const tKey = document.querySelector(".key-top");
const bKey = document.querySelector(".key-btm");

const key1 = document.querySelector(".key1");
const key2 = document.querySelector(".key2");
const key3 = document.querySelector(".key3");
const key4 = document.querySelector(".key4");

const all = [key1, key2, key3, key4];

start.to(
  ".leftfill",
  {
    fill: "#00FFFF",
    duration: 1,
    delay: 1,
  },
  1
);

start.to(
  ".rightfill",
  {
    fill: "#00FFFF",
    duration: 1,
    delay: 1,
  },
  1
);

start.to(
  "#top-gear",
  {
    opacity: 0,
    duration: 2,
    delay: 1,
  },
  3
);
start.to(
  "#btm-gear",
  {
    opacity: 0,
    duration: 2,
    delay: 1,
  },
  3
);
start.to(
  ".leftdoor",
  {
    x: "-100%",
    duration: 2,
    delay: 1,
  },
  3
);
start.to(
  ".rightdoor",
  {
    x: "100%",
    duration: 2,
    delay: 1,
  },
  3
);

start.to(
  ".leftgears",
  {
    opacity: 0,
  },
  2
);

start.to(
  ".rightgears",
  {
    opacity: 0,
  },
  2
);
start.to(
  "#main-gear",
  {
    opacity: 0,
  },
  2
);

lKey.addEventListener("mouseenter", (e) => {
  // end.play();
  document.querySelector(".key1").classList.add("active");
  if (
    key2.classList.contains("active") &&
    key3.classList.contains("active") &&
    key4.classList.contains("active")
  ) {
    document.querySelector(".left1").style.transform = "rotate(45deg)";
    document.querySelector(".left2").style.transform = "rotate(45deg)";
    document.querySelector(".right1").style.transform = "rotate(45deg)";
    document.querySelector(".right2").style.transform = "rotate(45deg)";
    document.querySelector(".rightgears").style.transform = "rotate(45deg)";
    document.querySelector(".leftgears").style.transform = "rotate(45deg)";
    document.querySelector(".key1").style.transform =
      "rotate(45deg) translate(105px, -30px)";
    document.querySelector(".key2").style.transform =
      "rotate(45deg) translate(-105px, 15px)";
    document.querySelector(".key3").style.transform =
      "rotate(45deg) translate(15px ,105px)";
    document.querySelector(".key4").style.transform =
      "rotate(45deg) translate(-25px,-105px)";

    document.querySelector(".innergear1").style.transform = "rotate(-180deg)";
    document.querySelector(".innergear2").style.transform = "rotate(-180deg)";
    document.querySelector(".innergear3").style.transform = "rotate(-180deg)";
    document.querySelector(".innergear4").style.transform = "rotate(-180deg)";
  }

  start.play();

  if (
    !key2.classList.contains("active") ||
    !key3.classList.contains("active") ||
    !key4.classList.contains("active")
  ) {
    start.reverse();
  }
});

rKey.addEventListener("mouseenter", (e) => {
  // end.play();
  document.querySelector(".key2").classList.add("active");
  if (
    key1.classList.contains("active") &&
    key3.classList.contains("active") &&
    key4.classList.contains("active")
  ) {
    // start.play();

    document.querySelector(".left1").style.transform = "rotate(45deg)";
    document.querySelector(".left2").style.transform = "rotate(45deg)";
    document.querySelector(".right1").style.transform = "rotate(45deg)";
    document.querySelector(".right2").style.transform = "rotate(45deg)";
    document.querySelector(".rightgears").style.transform = "rotate(45deg)";
    document.querySelector(".leftgears").style.transform = "rotate(45deg)";
    document.querySelector(".key1").style.transform =
      "rotate(45deg) translate(105px, -30px)";
    document.querySelector(".key2").style.transform =
      "rotate(45deg) translate(-105px, 15px)";
    document.querySelector(".key3").style.transform =
      "rotate(45deg) translate(15px ,105px)";
    document.querySelector(".key4").style.transform =
      "rotate(45deg) translate(-25px,-105px)";

    document.querySelector(".innergear1").style.transform = "rotate(-180deg)";
    document.querySelector(".innergear2").style.transform = "rotate(-180deg)";
    document.querySelector(".innergear3").style.transform = "rotate(-180deg)";
    document.querySelector(".innergear4").style.transform = "rotate(-180deg)";
  }

  start.play();

  if (
    !key1.classList.contains("active") ||
    !key3.classList.contains("active") ||
    !key4.classList.contains("active")
  ) {
    start.reverse();
  }
});

tKey.addEventListener("mouseenter", (e) => {
  // end.play();
  document.querySelector(".key3").classList.add("active");
  if (
    key1.classList.contains("active") &&
    key2.classList.contains("active") &&
    key4.classList.contains("active")
  ) {
    // start.play();

    document.querySelector(".left1").style.transform = "rotate(45deg)";
    document.querySelector(".left2").style.transform = "rotate(45deg)";
    document.querySelector(".right1").style.transform = "rotate(45deg)";
    document.querySelector(".right2").style.transform = "rotate(45deg)";
    document.querySelector(".rightgears").style.transform = "rotate(45deg)";
    document.querySelector(".leftgears").style.transform = "rotate(45deg)";
    document.querySelector(".key1").style.transform =
      "rotate(45deg) translate(105px, -30px)";
    document.querySelector(".key2").style.transform =
      "rotate(45deg) translate(-105px, 15px)";
    document.querySelector(".key3").style.transform =
      "rotate(45deg) translate(15px ,105px)";
    document.querySelector(".key4").style.transform =
      "rotate(45deg) translate(-25px,-105px)";

    document.querySelector(".innergear1").style.transform = "rotate(-180deg)";
    document.querySelector(".innergear2").style.transform = "rotate(-180deg)";
    document.querySelector(".innergear3").style.transform = "rotate(-180deg)";
    document.querySelector(".innergear4").style.transform = "rotate(-180deg)";
  }

  start.play();

  if (
    !key1.classList.contains("active") ||
    !key2.classList.contains("active") ||
    !key4.classList.contains("active")
  ) {
    start.reverse();
  }
});

bKey.addEventListener("mouseenter", (e) => {
  // end.play();
  document.querySelector(".key4").classList.add("active");
  if (
    key1.classList.contains("active") &&
    key2.classList.contains("active") &&
    key3.classList.contains("active")
  ) {
    // start.play();

    document.querySelector(".left1").style.transform = "rotate(45deg)";
    document.querySelector(".left2").style.transform = "rotate(45deg)";
    document.querySelector(".right1").style.transform = "rotate(45deg)";
    document.querySelector(".right2").style.transform = "rotate(45deg)";
    document.querySelector(".rightgears").style.transform = "rotate(45deg)";
    document.querySelector(".leftgears").style.transform = "rotate(45deg)";
    document.querySelector(".key1").style.transform =
      "rotate(45deg) translate(105px, -30px)";
    document.querySelector(".key2").style.transform =
      "rotate(45deg) translate(-105px, 15px)";
    document.querySelector(".key3").style.transform =
      "rotate(45deg) translate(15px ,105px)";
    document.querySelector(".key4").style.transform =
      "rotate(45deg) translate(-25px,-105px)";

    document.querySelector(".innergear1").style.transform = "rotate(-180deg)";
    document.querySelector(".innergear2").style.transform = "rotate(-180deg)";
    document.querySelector(".innergear3").style.transform = "rotate(-180deg)";
    document.querySelector(".innergear4").style.transform = "rotate(-180deg)";
  }

  start.play();

  if (
    !key1.classList.contains("active") ||
    !key2.classList.contains("active") ||
    !key3.classList.contains("active")
  ) {
    start.reverse();
  }
});

console.log("hello");
