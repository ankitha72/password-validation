function matchpassword(){
    var firstPass=document.f1.password.value;
    var secondPass=document.f1.password2.value;
    if(firstPass==secondPass){
        alert("Your password is correct");
        return true;

    }
    else{
        alert("Password is incorrect!!!Please enter valid password");
        return false;
    }

}