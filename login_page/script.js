let password =document.getElementById("password");
let checkbox =document.getElementById("checkbox");

function check(){
    if(checkbox.checked){
        password.type="text";
    }
    else{
        password.type="password";
    }
}