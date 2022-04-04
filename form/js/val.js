let firstname = document.getElementById('username');
//  lastname = document.getElementById('lname');
//  email = document.getElementById('mail');
 small = document.getElementsByClassName('error');
//  form = document.getElementById('formid');
//  password=document.getElementById('pass');
 success = document.getElementsByClassName('success');
//  failure = document.getElementsByClassName('failure');
 input=document.getElementsByTagName('input');
//  telephone=document.getElementById('tele');
//  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
//  var passw=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
//  var phoneno = /^\d{10}$/;

form.addEventListener("submit", (e) => {
    e.preventDefault();
    validateForm();
});

function validateForm(){
   
    if (firstname.value ==''||firstname.value.length<3||firstname.value.length>25) {
         input[0].style.border="none";
        small[0].innerHTML = "Invalid first name, should contain min 3 and max 25 letters";
        failure[0].style.visibility = "visible";
        input[0].style.border="2px solid red";
        success[0].style.visibility = "hidden";
    

    } else {
        input[0].style.border="none";
        input[0].style.border="none";
        small[0].innerHTML = "";
        failure[0].style.visibility = "hidden";
        success[0].style.visibility = "visible";
        input[0].style.border="2px solid green";
            }
    if (lastname.value ==''||lastname.value.length<3||lastname.value.length>25) {
        input[1].style.border="none";
        small[1].innerHTML = "Invalid last name, should contain min 3 and max 25 letters";
        failure[1].style.visibility = "visible";
        input[1].style.border="2px solid red";
        success[1].style.visibility = "hidden";
       
        

    } else {
        input[1].style.border="none";
        input[1].style.border="none";
        small[1].innerHTML = "";
        failure[1].style.visibility = "hidden";
        success[1].style.visibility = "visible";
        input[1].style.border="2px solid green";
       
        
    }
    if (email.value ==''||!email.value.match(validRegex)) {
        input[2].style.border="none";
        small[2].innerHTML = "Invalid email,should contain @ symbol";
        failure[2].style.visibility = "visible";
        input[2].style.border="2px solid red";
        success[2].style.visibility = "hidden";
        

    } else {
        input[2].style.border="none";
        input[2].style.border="none";
        small[2].innerHTML = "";
        failure[2].style.visibility = "hidden";
        success[2].style.visibility = "visible";
        input[2].style.border="2px solid green";
        
    }
    if (password.value ==''||!password.value.match(passw)) {
        input[3].style.border="none";
        small[3].innerHTML = "password should contain capital small and between 6-20 letters";
        failure[3].style.visibility = "visible";
        input[3].style.border="2px solid red";
        success[3].style.visibility = "hidden";
        

    } else {
        input[3].style.border="none";
        input[3].style.border="none";
        small[3].innerHTML = "";
        failure[3].style.visibility = "hidden";
        success[3].style.visibility = "visible";
        input[3].style.border="2px solid green";
        
    }
    if (telephone.value ==''||!telephone.value.match(phoneno)) {
        input[4].style.border="none";
        small[4].innerHTML = "number should contain 10 digits";
        failure[4].style.visibility = "visible";
        input[4].style.border="2px solid red";
        success[4].style.visibility = "hidden";
        

    } else {
        input[4].style.border="none";
        input[4].style.border="none";
        small[4].innerHTML = "";
        failure[4].style.visibility = "hidden";
        success[4].style.visibility = "visible";
        input[4].style.border="2px solid green";
        
    }

}