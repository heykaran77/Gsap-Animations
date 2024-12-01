var tl = gsap.timeline();
var close = document.querySelector(".full i");
var open = document.querySelector(".nav i");
var cursor = document.querySelector(".cursor");
var main = document.querySelector("main");
var full = document.querySelector(".full");
var h1 = document.querySelector(".nav h1");
var mid = document.querySelector(".mid-text h1");

document.addEventListener("mouseenter", () => {
  gsap.to(cursor, {
    opacity: 1,
    duration: 0.5,
  });
});
document.addEventListener("mouseleave", () => {
  gsap.to(cursor, {
    opacity: 0,
  });
});

main.addEventListener("mousemove", (dets) => {
  gsap.to(cursor, {
    x: dets.x,
    y: dets.y,
    duration: 0.3,
    ease: "power1.out",
  });
});
full.addEventListener("mouseenter", () => {
  gsap.to(cursor, {
    scale: 2.5,
  });
});
mid.addEventListener("mouseenter", () => {
  gsap.to(cursor, {
    scale: 4,
  });
});
mid.addEventListener("mouseleave", () => {
  gsap.to(cursor, {
    scale: 1,
  });
});
open.addEventListener("mouseenter", () => {
  gsap.to(cursor, {
    scale: 2.5,
  });
  cursor.innerHTML = "Open Nav";
});
open.addEventListener("mouseleave", () => {
  gsap.to(cursor, {
    scale: 1,
  });
  cursor.innerHTML = "";
});
close.addEventListener("mouseenter", () => {
  cursor.innerHTML = "Close Nav";
});
close.addEventListener("mouseleave", () => {
  cursor.innerHTML = "";
});
h1.addEventListener("mouseenter", () => {
  gsap.to(cursor, {
    scale: 2.5,
  });
});
h1.addEventListener("mouseleave", () => {
  gsap.to(cursor, {
    scale: 1,
  });
});
full.addEventListener("mouseleave", () => {
  gsap.to(cursor, {
    scale: 1,
  });
});
tl.to(open, {
  opacity: 0,
});
tl.to(".full", {
  right: "0%",
  duration: 0.5,
});

tl.from(".full h4 span", {
  y: 60,
  opacity: 0,
  duration: 0.5,
  stagger: 0.2,
});
tl.from(close, {
  opacity: 0,
  duration: 0.4,
});
tl.pause();

open.addEventListener("click", () => {
  tl.play();
});
close.addEventListener("click", () => {
  console.log("oppen");
  tl.reverse();
});

main.addEventListener("wheel", (dets) => {
  console.log(dets.deltaY);
  if (dets.deltaY > 0) {
    gsap.to(".marquee", {
      transform: "translateX(-200%)",
      repeat: -1,
      duration: 6,
      ease: "none",
    });
    gsap.to(".marquee i", {
      rotate: -180,
    });
  } else {
    gsap.to(".marquee", {
      transform: "translateX(0%)",
      repeat: -1,
      ease: "none",
      duration: 6,
    });

    gsap.to(".marquee i", {
      rotate: 0,
    });
  }
});

var textAnimation = document.querySelector(".page3 .text-anime h1");
textContent = textAnimation.textContent;
splittedText = textContent.split("");
var indi = "";
splittedText.forEach((element, index) => {
  indi += `<span>${element}</span>`;
  textAnimation.innerHTML = indi;
});

gsap.from(".text-anime h1 span", {
  y: 70,
  opacity: 0,
  stagger: 0.1,
  willChange: "transform",
  scrollTrigger: {
    trigger: ".page3",
    scroller: "body",
    // markers: true,
    scrub: 1,
    start: "top 0",
    end: "top -100%",
    pin: true,
  },
});

var string = document.querySelector(".string");
initialState = "M 10 150 Q 500 150 990 150";
string.addEventListener("mousemove", (dets) => {
  var path = `M 10 150 Q ${dets.offsetX} ${dets.offsetY} 990 150`;
  console.log(dets);
  gsap.to("svg path", {
    attr: { d: path },
    duration: 0.3,
    ease: "power.out",
  });
});

string.addEventListener("mouseleave", () => {
  gsap.to("svg path", {
    attr: { d: initialState },
    duration: 1.5,
    ease: "elastic.out(1, 0.2)",
  });
});

gsap.to(".scrolling-txt", {
  transform: "translateX(-160%)",
  scrollTrigger: {
    trigger: ".page5",
    scroller: "body",
    scrub: 2,
    markers: true,
    start: "top 0",
    end: "top -200%",
    pin: true,
  },
});
