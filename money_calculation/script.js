let notes_500=document.getElementById("notes_500")
let notes_200=document.getElementById("notes_200")
let notes_100=document.getElementById("notes_100")
let amount=document.getElementById("amount")

function calculate(){
    let total=(notes_500.value*500)+(notes_200.value*200)+(notes_100.value*100)
    amount.textContent="Total Amount: "+total
}