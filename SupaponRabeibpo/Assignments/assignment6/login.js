// window.onload = loginLoad;
// function loginLoad(){
// 	var form = document.getElementById("myLogin");
// 	form.onsubmit = checkLogin;
// }

// function checkLogin(){
// 	//ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย
// 	let userName_Login = document.forms["myLogin"]["username"];
// 	let password_Login = document.forms["myLogin"]["password"];
// 	const queryString = window.location.search;
// 	console.log(queryString);

// 	const urlParams = new URLSearchParams(queryString);
// 	const reusername = urlParams.get('username');
// 	console.log("Username" + reusername);
// 	const repassword = urlParams.get('passwordMain');
// 	console.log("passwordMain" + reusername);
// 	if(userName_Login.value == reusername && password_Login.value == repassword){
// 		alert("Login success!");
// 	}else{
// 		alert("Not found user Or your password is not correct");
// 		return false;
// 	}
	
// }

window.onload = loginLoad;
function loginLoad()
{
    var login = document.getElementById("myLogin");
    login.onsubmit = checkLogin;
}
function checkLogin()
{
    var username = document.forms["myLogin"]["username"];
    var password = document.forms["myLogin"]["password"];
    const queryString = window.location.search;
    console.log(queryString);
	
    const urlParams = new URLSearchParams(queryString);
    const reusername = urlParams.get('username');
    console.log("username : " + username.value);

    const repassword = urlParams.get('passwordMain');
    console.log("password : " + password.value);
	console.log("passwordMain : " + repassword);

    if(username.value == reusername && password.value == repassword)
    {
        alert ("Welcome! :)");
		return true;
    }

    else if (username.value != reusername || password.value != repassword)
    {
        alert ("Not found Username or password is not correct, please try again"); 
		return false;       
    }
}