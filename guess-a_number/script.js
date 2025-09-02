let random = Math.ceil(Math.random() * 100)
let inp = document.getElementById("inp")
let res = document.getElementById("res")

console.log(random)
count = 0
function guess_button() {
    if (inp.value == random) {
        count += 1
        res.textContent = "Congrats You Won! in " + count + " chances"
        res.style.color = "green"
    }
    else if (inp.value < random) {
        res.textContent = "Oops Your Guessing is Too Low. try Again!"
        res.style.color = "red"
        count += 1
    }
    else {
        res.textContent = "Oops Your Guessing is Too High. try Again!"
        res.style.color = "red"
        count += 1
    }
}
