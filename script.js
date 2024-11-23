var main = document.querySelector("#main");
var cursor = document.querySelector("#cursor");
main.addEventListener("mousemove", function (dets) {
  gsap.to(cursor, {
    x: dets.x,
    y: dets.y,
    duration: 0.1,
  });
});
document.addEventListener("mouseleave", function () {
  cursor.style.opacity = 0;
});
document.addEventListener("mouseenter", function () {
  cursor.style.opacity = 1;
});
window.addEventListener("wheel", function (dets) {
  if (dets.deltaY > 0) {
    gsap.to(".marque", {
      transform: "translateX(-200%)",
      duration: 3,
      repeat: -1,
      ease: "none",
    });

    gsap.to(".marque img", {
      rotate: 180,
    });
  } else {
    gsap.to(".marque", {
      transform: "translateX(0%)",
      duration: 3,
      repeat: -1,
      ease: "none",
    });
    gsap.to(".marque img", {
      rotate: 0,
    });
  }
});

var lastTouchY = 0;

// Handle touchstart
document.addEventListener("touchstart", function (event) {
  if (event.touches && event.touches.length) {
    lastTouchY = event.touches[0].clientY;
  }
});

// Handle touchmove
document.addEventListener("touchmove", function (event) {
  if (event.touches && event.touches.length) {
    var currentTouchY = event.touches[0].clientY;
    var deltaY = lastTouchY - currentTouchY;

    if (deltaY > 0) {
      // Scrolling down
      console.log("Scrolling down");
      gsap.to(".marque", {
        transform: "translateX(-200%)",
        duration: 3,
        repeat: -1,
        ease: "none",
      });
      gsap.to(".marque img", {
        rotate: 180,
      });
    } else {
      // Scrolling up
      console.log("Scrolling up");
      gsap.to(".marque", {
        transform: "translateX(0%)",
        duration: 3,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".marque img", {
        rotate: 0,
      });
    }
    lastTouchY = currentTouchY; // Update for the next move
  }
});
