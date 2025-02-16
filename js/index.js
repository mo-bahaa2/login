var passLogID = document.getElementById("passLog"); // Corrected to match usage in the function
var emailLogID = document.getElementById("emailLog");
var submitLOGID = document.getElementById("submitForm");
var erorrMGID=document.getElementById("erorrMGID");
// signUp form
var nameSginId = document.getElementById("nameSgin"); 
var emailSginId = document.getElementById("emailSgin"); 
var passSginId = document.getElementById("passSgin"); 
var signupButton = document.getElementById("signupButton");
var exist=document.getElementById("exist");
var continarForm=[];
// home page
var welcomeElement = document.getElementById("welcom");


if(localStorage.getItem("mySignupForm")!==null){
    continarForm = JSON.parse(localStorage.getItem("mySignupForm"));
}

function addSignupForm() {
    
    var mySignupForm = {
        name: nameSginId.value,
        email: emailSginId.value,
        pass: passSginId.value
    };

    var storedData = JSON.parse(localStorage.getItem("mySignupForm"))||[];

    var emailExists = false;

    for (var i = 0; i < storedData.length; i++) {
        if (storedData[i].email == emailSginId.value) {
            emailExists = true;
            break;
        }
    }

    if(emailExists){
        exist.innerHTML="email is already exists";
        exist.style.color="red"
    }
    else if(mySignupForm.name&&mySignupForm.email&&mySignupForm.pass){
        continarForm.push(mySignupForm);
        localStorage.setItem("mySignupForm",JSON.stringify(continarForm));
        clearSignupForm();
        exist.innerHTML="success";
        exist.style.color="green"
    }
    
    else{
        exist.innerHTML="All inputs is required";
        exist.style.color="red"
    }

    
}
// signupButton.addEventListener("click", function(){
//     addSignupForm();
// });

function clearSignupForm() {
    nameSginId.value=null;
    emailSginId.value=null;
    passSginId.value=null
}





function addForm() {
    var myForm = {
        emailLog: passLogID.value, // Using the corrected variable name
        emailLog:emailLogID.value
    };
    // console.log(myForm);
    
    var storedData = JSON.parse(localStorage.getItem("mySignupForm")) || [];
    var username ="";
    // Check if email and password match any stored data
    var isValidUser = false;

    for (var i = 0; i < storedData.length; i++) {
        if (storedData[i].email === emailLogID.value && storedData[i].pass === passLogID.value) {
            isValidUser = true;
            userName = storedData[i].name;
            break;
        }
    }

    if (isValidUser) {
        localStorage.setItem("currentUser", userName);
        window.location.href = "./home.html";
    } else {
        // Display error message
        erorrMGID.classList.remove("d-none")
    }
}

var loggedInUserName = localStorage.getItem("currentUser");
// Display the user's name on the home page
if (loggedInUserName) {
    welcomeElement.innerHTML = `Welcome ${loggedInUserName}`;
}
