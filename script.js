var main = document.querySelector("#main")
var cursor = document.querySelector("#cursor")

var h1 = document.querySelector("h1")
var h1Txt = h1.textContent
var splittedText = h1Txt.split("")
var cluttered = ""

var halfValue = Math.floor(splittedText.length/2)
console.log(halfValue)

splittedText.forEach(function(letter, idx){
    if(idx<halfValue)
    {
        cluttered += `<span class="a">${letter}</span>`
    }
    else{
        cluttered += `<span class="b">${letter}</span>`
    }
})

h1.innerHTML = cluttered

main.addEventListener("mousemove", function(dets){
    gsap.to(cursor, {
        x: dets.x,
        y: dets.y,
    })
})

gsap.from("h1 .a", {
    y: 70,
    duration: 0.8,
    delay: 0.5,
    opacity: 0,
    stagger: 0.15
})
gsap.from("h1 .b", {
    y: 70,
    duration: 0.8,
    delay: 0.5,
    opacity: 0,
    stagger: -0.15
})