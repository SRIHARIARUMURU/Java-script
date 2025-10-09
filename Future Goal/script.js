let arr=[
    {
        url:"scientist.png",
        text:'scientist'
    },
    {
        url:"actor.png",
        text:"Actor"
    },
    {
        url:"doctor.png",
        text:"Doctor"
    },
    {
        url:"police.png",
        text:"Police"
    },
    {
        url:"engineer.png",
        text:"Engineer"
    }
]



let image=document.getElementById("image");
let name=document.getElementById("name");
let input=document.getElementById("input");
let button=document.getElementById("button");
let res=document.getElementById("res");

let count=0

button.addEventListener('click',function(){
    res.textContent =""
    if(input.value===""){
        alert("Invalid Input")
        return
    }
    let fun=setInterval(function(){
        n=Math.ceil(Math.random()*arr.length-1);
        image.src=arr[n]['url']
        name.textContent=arr[n]['text']
        count++
        if(count===50){
            clearInterval(fun)
            count=0;
            res.textContent = input.value + " future goal is "+ arr[n]['text']
            input.value="";
        }
    },100)
});