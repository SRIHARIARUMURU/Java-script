let random=Math.ceil(Math.random()*100)
let inp=document.getElementById("inp")
let res=document.getElementById("res")

console.log(random)

function guess_button(){
    if (inp.value == random){
        res.textContent="Congrats You Won!"
        res.style.color="green"
    }
    else if (inp.value<random){
        res.textContent="Oops Your Guessing is Too Low. try Again!"
        res.style.color="red"
    }
    else{
        res.textContent="Oops Your Guessing is Too High. try Again!"
        res.style.color="red"
    }
}
