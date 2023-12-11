function random() {
    let rand = (Math.floor(Math.random() * 265))
    return rand
}
function color() {
    let r = random()
    let g = random()
    let b = random()
    let change = document.getElementById("box")
    change.style.background = `rgb(${r}, ${g}, ${b})`
    let txt = document.getElementById("txt")
    txt.innerHTML = `rgb (${r}, ${g}, ${b})`
}