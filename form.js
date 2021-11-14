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








function validatePassword(password1) {
                
                // Do not show anything when the length of password is zero.
                if (password.length === 0) {
                    document.getElementById("msg").innerHTML = "";
                    password.style.borderColor =  "lightgray";
                    return;
                }
                // Create an array and push all possible values that you want in password
                var matchedCase = new Array();
                matchedCase.push("[$^@$!%*#?&]"); // Special Charector
                matchedCase.push("[A-Z]");      // Uppercase Alpabates
                matchedCase.push("[0-9]");      // Numbers
                matchedCase.push("[a-z]");     // Lowercase Alphabates

                // Check the conditions
                var ctr = 0;
                for (var i = 0; i < matchedCase.length; i++) {
                    if (new RegExp(matchedCase[i]).test(password1)) {
                        ctr++;
                    }
                }
                // Display it
                var color = "";
                var strength = "";
                switch (ctr) {
                    case 0:
                    case 1:
                    case 2:
                        password.style.borderColor =  "#e74c3c";
                        strength = "Very Weak";
                        color = "red";
                        break;
                    case 3:
                        password.style.borderColor =  "#e74c3c";
                        strength = "Medium";
                        color = "orange";
                        break;
                    case 4:
                        password.style.borderColor =  "#27ae60";
                        strength = "Strong but need a totel of 8 or more characters";
                        color = "green";
                        break;

                        
                    
                }
                document.getElementById("msg").innerHTML = strength;
                document.getElementById("msg").style.color = color;
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
    let regph = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
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













