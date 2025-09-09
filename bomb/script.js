let timer=document.getElementById("timer")
let blast=document.getElementById("blast")
let count=11;
let time=setInterval(
    function(){
        count-=1
        timer.textContent="Timer : "+count
        if(count<=3){
            timer.style.color="red"
        }
        if(count===0){
            blast.src="after.png"
            blast.style.height="250px"
            blast.style.width="250px"
            clearInterval(time)

        }
    },1000
)