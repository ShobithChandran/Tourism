let email = document.getElementById("email");
function validation()
{


    let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3}?)$/
    if(regexp.test(email.value))
    {
        error1.innerHTML = "Valid";
        error1.style.color="green";
        email.style.borderColor =  "#27ae60";
        return true;
    }
    else
    {
        error1.innerHTML = "InValid";
        error1.style.color="red";
        email.style.borderColor =  "#e74c3c";
        
    }
    if(email.value=="")
    {
        email.style.borderColor =  "lightgray";
        return false;
    }
}



let password = document.getElementById("password");
function passwordChanged()
{


    let regpass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/
    if(regpass.test(password.value))
    {
        error2.innerHTML = "Valid";
        error2.style.color="green";
        password.style.borderColor =  "#27ae60";
        return true;
    }
    else
    {
        error2.innerHTML = "InValid";
        error2.style.color="red";
        password.style.borderColor =  "#e74c3c";
        
    }
    if(password.value=="")
    {
        password.style.borderColor =  "lightgray";
        return false;
    }
}




let ph = document.getElementById("ph");
function validationph()
{
    let regph = /^[0-9]{3}[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4}$/im;
    if(regph.test(ph.value))
    {
        error3.innerHTML = "Valid";
        error3.style.color="green";
        ph.style.borderColor =  "#27ae60";
        return true;
    }
    else
    {
        error3.innerHTML = "InValid";
        error3.style.color="red";
        ph.style.borderColor =  "#e74c3c";
        
    }
    if(password.value=="")
    {
        password.style.borderColor =  "lightgray";
        return false;
    }
}





// let passwords = document.getElementById("passwords");
// function getPasswordStrength(passwords){
//     let s = 0;
//     if(passwords.length > 0){
//         s++;
//     }
//     if(passwords.length > 10){
//         s++;
//     }
//     if(/[a-z]/.test(passwords)){
//         s++;
//     }
//     if(/[0-9]/.test(passwords)){
//         s++;
//     }
//     if(/[^A-Za-z0-9]/.test(passwords)){
//         s++;
//     }
//     return s;

// }
// document.querySelector(".signbg #password").addEventListener("focus",function(){
//     document.querySelector(".signbg .pw-strength").style.display = "block";
// });
// document.querySelector(".signbg #password").addEventListener("keyup",function(e){
//     let passwords = e.target.value;
//     let strength = getPasswordStrength(passwords);
//     let passwordStrengthSpans = document.querySelectorAll(".signbg .pw-stength span");
//     strength = Math.max(strength,1);
//     passwordStrengthSpans[1].style.width = strength*20 + "%";
//     if(strength < 2)
//     {
//         passwordStrengthSpans[0].innerText = "week";
//         passwordStrengthSpans[1].style.color = "#111";
//         passwordStrengthSpans[1].style.background = "#d13636";
//     }
//     else if(strength >= 4 && strength <= 7)
//     {
//         passwordStrengthSpans[0].innerText = "medium";
//         passwordStrengthSpans[1].style.color = "#111";
//         passwordStrengthSpans[1].style.background = "#e6da44";
//     }
//     else
//     {
//         passwordStrengthSpans[0].innerText = "strong";
//         passwordStrengthSpans[1].style.color = "#fff";
//         passwordStrengthSpans[1].style.background = "#20a820";
//     }
// });



















// let ph = document.getElementById("ph");
// function passwordChanged()
// {
//     let regph = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/
//     if(regph.test(ph.value))
//     {
//         error3.innerHTML = "Valid";
//         error3.style.color="green";
//         ph.style.borderColor =  "#27ae60";
//         return true;
//     }
//     else
//     {
//         error3.innerHTML = "InValid";
//         error3.style.color="red";
//         ph.style.borderColor =  "#e74c3c";
        
//     }
//     if(ph.value=="")
//     {
//         ph.style.borderColor =  "lightgray";
//         return false;
//     }
// }













