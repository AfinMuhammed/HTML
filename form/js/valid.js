    var fname = document.getElementById('fname');
    var lname = document.getElementById('lname');
    var dob = document.getElementById('dob');
    var address = document.getElementById('address');
    var email = document.getElementById('email');
    var mob = document.getElementById('mob');
    var error = document.getElementsByClassName('error');
    var pass1 = document.getElementById('pass1');
    var pass2 = document.getElementById('pass2');
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var textonly = /^[a-zA-Z]*$/;
    var phoneno = /^\d{10}$/;
    var password = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;


function validate(){
    //First Names
    if (fname.value ==''||fname.value.length<3) {
        error[0].innerHTML = "*First Name should contain Minimum 3 Letters";
        fname.style.borderBottom="2px solid red";
    }
    else if(!fname.value.match(textonly)){
        error[0].innerHTML = "*Name should Contain Letters";
        fname.style.borderBottom="2px solid red";
    }
    else{
        error[0].innerHTML = "";
        fname.style.borderBottom="2px solid green";
    }
    //Last name
    if (lname.value ==''||lname.value.length<3) {
        error[1].innerHTML = "*Last Name should contain Minimum 3 Letters";
        lname.style.borderBottom="2px solid red";
    }
    else if(!fname.value.match(textonly)){
        error[1].innerHTML = "*Name should Contain Letters";
        lname.style.borderBottom="2px solid red";
    }
    else{
        error[1].innerHTML = "";
        lname.style.borderBottom="2px solid green";
    }
    //Gender
    if(document.getElementById('male').checked){
        // document.getElementById('maleg').style.color="green";
        error[2].innerHTML = "";
    }
    else if(document.getElementById('female').checked){
        // document.getElementById('femaleg').style.color="green";
        error[2].innerHTML = "";
    }
    else if(document.getElementById('other').checked){
        // document.getElementById('otherg').style.color="green";
        error[2].innerHTML = "";
    }
    else{
        error[2].innerHTML = "Please Choose Your Gender";
        error[2].style.color = "yellow";
    }
    //dob
    if(dob.value == ''){
        error[3].innerHTML = "Please Select your Date OF Birth";
    }
    else{
        error[3].innerHTML = "";
    }
    //address
    if(address.value == ''){
        error[4].innerHTML = "Please type your Address";
    }
    else{
        error[4].innerHTML = "";
    }
    //Email
    if(!email.value.match(mailformat)){
        error[5].innerHTML = "Enter Valid Email ID";
    }
    else{
        error[5].innerHTML = "";
    }
    //MobileNumber
    if(!mob.value.match(phoneno)){
        error[6].innerHTML = "Enter 10 Digit Mobile Number";
    }
    else{
        error[6].innerHTML = "";
    }
    //password
    if(!pass1.value.match(password)){
        error[7].innerHTML = "Should Contain at least one digit, at least one lower case, at least one upper case,at least 8 from the mentioned characters";
    }
    else{
        error[7].innerHTML = "";
     }
    //confirmpassword
    if(pass1.value === pass2.value){
        error[8].innerHTML = "success";
    }
    else{
        error[8].innerHTML = "Password do not Match";
    }
    

}