var main = document.querySelector("#main")
var cursor = document.querySelector("#cursor")

main.addEventListener("mousemove", function(dets){
    gsap.to(cursor, {
        x: dets.x,
        y: dets.y,
        duration: 0.5,
        ease: "power.out"
    })
})

gsap.to("#page3 h1", {
    transform: "translateX(-3600px)",
    scrollTrigger: {
        scrub: 3,
        trigger: "#page3",
        scroller: "body",
        markers: true,
        start: "top 0",
        end: "top -200%",
        pin: true
    },
    
})