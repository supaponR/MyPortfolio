let password_Main = document.getElementById("passwordMain")
let password_Retype = document.getElementById("passwordRetype")
window.onload = pageLoad;
function pageLoad(){
	var form = document.getElementById("myForm");
	form.onsubmit = validateForm;
}

function validateForm() {
    let password_Main = document.getElementById("passwordMain").value;
    let password_Retype = document.getElementById("passwordRetype").value;

    if(password_Main == password_Retype){
        alert("Your registration is successful!");
        return true;
    }
    else{
        var errormsg = document.getElementById("errormsg")
        // console.log(errormsg.innerHTML);
        errormsg.textContent = ("Please enter your password again");
        return false;
    }
    
}