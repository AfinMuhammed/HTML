    let form1 = document.getElementById('form1');
    let fname = document.getElementById('fname');
    let lname = document.getElementById('lname');
    let dob = document.getElementById('dob');
    let address = document.getElementById('address');
    let email = document.getElementById('email');
    let mob = document.getElementById('mob');
    let img = document.getElementById('img');
    let error = document.getElementsByClassName('error');
    let pass1 = document.getElementById('pass1');
    let pass2 = document.getElementById('pass2');
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let textonly = /^[a-zA-Z]*$/;
    let phoneno = /^\d{10}$/;
    let password = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    form1.addEventListener("submit", (e) => {
        e.preventDefault();
        validate();
    });

function validate(){
    //First Names
    if (fname.value ==''||fname.value.length<3) {
        error[0].innerHTML = "*First Name should contain Minimum 3 Letters";
        fname.style.borderBottom="2px solid red";
        return;
    }
    else if(!fname.value.match(textonly)){
        error[0].innerHTML = "*Name should Contain Letters";
        fname.style.borderBottom="2px solid red";
        return;
    }
    else{
        error[0].innerHTML = "";
        fname.style.borderBottom="2px solid green";
        // return true;
    }
    //Last name
    if (lname.value ==''||lname.value.length<3) {
        error[1].innerHTML = "*Last Name should contain Minimum 3 Letters";
        lname.style.borderBottom="2px solid red";
        return;
    }
    else if(!lname.value.match(textonly)){
        error[1].innerHTML = "*Name should Contain Letters";
        lname.style.borderBottom="2px solid red";
        return;
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
        error[2].innerHTML = "*Please Choose Your Gender";
        error[2].style.color = "yellow";
        return;
    }
    //dob
    if(dob.value == ''){
        error[3].innerHTML = "*Please Select your Date OF Birth";
        dob.style.borderBottom="2px solid red";
        return;
    }
    else{
        error[3].innerHTML = "";
        dob.style.borderBottom="2px solid green";
    }
    //address
    if(address.value == ''){
        error[4].innerHTML = "*Please type your Address";
        address.style.borderBottom="2px solid red";
        return;
    }
    else{
        error[4].innerHTML = "";
        address.style.borderBottom="2px solid green";
    }
    //Email
    if(!email.value.match(mailformat)){
        error[5].innerHTML = "*Enter Valid Email ID";
        email.style.borderBottom="2px solid red";
        return;
    }
    else{
        error[5].innerHTML = "";
        email.style.borderBottom="2px solid green";
    }
    //MobileNumber
    if(!mob.value.match(phoneno)){
        error[6].innerHTML = "*Enter 10 Digit Mobile Number";
        mob.style.borderBottom="2px solid red";
        return;
        
    }
    else{
        error[6].innerHTML = "";
        mob.style.borderBottom="2px solid green";
    }
    //Image
    let valid = true;
    if(img.files.length != 0)
    {
       valid = true;
       error[7].innerHTML = "";
       img.style.borderBottom="2px solid green";
    }
    else
    {
        valid = false;
        error[7].innerHTML = "*Please select any image file";
        img.style.borderBottom="2px solid red";
        return;
    }

    //password
    if(!pass1.value.match(password)){
        error[8].innerHTML = "**Should Contain at least one digit, at least one lower case, at least one upper case,at least 8 from the mentioned characters";
        pass1.style.borderBottom="2px solid red";
        return;
    }
    else{
        error[8].innerHTML = "";
        pass1.style.borderBottom="2px solid green";
     }
    //confirmpassword
    if(pass1.value === pass2.value){
        error[9].innerHTML = "Password Match Successfully";
        pass2.style.borderBottom="2px solid green";
      
    }
    else{
        error[9].innerHTML = "**Password do not Match";
        pass2.style.borderBottom="2px solid red";
        return;
    }
    
    if(pass2.value == "" ){
        error[9].innerHTML = "";
        pass2.style.borderBottom="2px solid rgb(0,0,0,0.5)";
        return;
    }

}