let count=document.getElementById("count")
let c=0

function inc(){
    c+=1;
    count.textContent = c; 
}

function dec(){
    if (c>0){
        c-=1;
        count.textContent = c; 
    }
}

function reset(){
    c=0;
    count.textContent = c;
}