var main = document.querySelector("#main")
var cursor = document.querySelector("#cursor")
var imageDiv = document.querySelector("#image")

main.addEventListener("mousemove", function(dets){
    gsap.to(cursor, {
        x: dets.x,
        y: dets.y,
    })
})

image.addEventListener("mouseenter", function(){
    cursor.innerHTML = "View More"
    gsap.to(cursor, {
        scale: 3,
        backgroundColor: "#34343474",
        backdropFilter: "blur(5px)"
    })
})

image.addEventListener("mouseleave", function(){
    cursor.innerHTML = " "
    gsap.to(cursor, {
        scale: 1,
        backgroundColor: "orange"

    })
})