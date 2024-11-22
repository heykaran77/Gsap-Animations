var main = document.querySelector("#main")
var cursor = document.querySelector("#cursor")
var menu = document.querySelector("#nav i")
var cross = document.querySelector("#full i")
var full = document.querySelector("#full")
main.addEventListener("mousemove", function(dets){
    gsap.to(cursor, {
        x: dets.x,
        y: dets.y,
    })
})

var tl = gsap.timeline()

tl.to("#full", {
    right: 0,
    duration: 0.5,
    ease: "power.in"
})
tl.from("#full h4", {
    x: 150,
    opacity: 0,
    stagger: 0.15,
})
tl.from("#full i", {
    opacity: 0
})
tl.pause()

full.addEventListener("mouseenter", function(){
    gsap.to(cursor, {
        scale: 3,
    })
})
full.addEventListener("mouseleave", function(){
    gsap.to(cursor, {
        scale: 1,
    })
})
menu.addEventListener("mouseenter", function(){
    cursor.innerHTML = "open"
    gsap.to(cursor, {
        scale: 3,
    })
})
menu.addEventListener("mouseleave", function(){
    cursor.innerHTML = ""
    gsap.to(cursor, {
        scale: 1,
    })
})
menu.addEventListener("click",function(){
    tl.play()
})
cross.addEventListener("click", function(){
    tl.reverse()
})
cross.addEventListener("mouseenter", function(){
    cursor.innerHTML = "close"
})
cross.addEventListener("mouseleave", function(){
    cursor.innerHTML = ""
})
