let car_image=document.getElementById("car_image");
let warning=document.getElementById("warning");

count=300;
function inc_btn(){
    if (count<=500){
        count+=5
        car_image.style.width=count+"px";
        car_image.style.height=count+"px";
        warning.textContent='';
    }
    else{
        warning.textContent="Image Size is Too High";
        warning.style.color="red";        
    }
}
function dec_btn(){
    if (count>=200){
        count-=5
        car_image.style.width=count+"px";
        car_image.style.height=count+"px";
        warning.textContent='';
    }
    else{
        warning.textContent="Image Size is Too Low";
        warning.style.color="red";            
    }
}