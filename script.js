var main = document.querySelector("#main")
var cursor = document.querySelector("#cursor")
main.addEventListener("mousemove", function(dets){
    gsap.to(cursor, {
        x: dets.x,
        y: dets.y,
        duration: 0.1
    })
})

window.addEventListener("wheel", function(dets){
    if(dets.deltaY>0){
        gsap.to(".marque", {
            transform: "translateX(-200%)",
            duration:3,
            repeat: -1,
            ease: "none"
        })

        gsap.to(".marque img", {
            rotate: 180
        })
    }else{
        gsap.to(".marque", {
            transform: "translateX(0%)",
            duration:3,
            repeat: -1,
            ease: "none"
        })
        gsap.to(".marque img", {
            rotate: 0
        })
    }
})