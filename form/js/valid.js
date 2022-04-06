    let form1 = document.getElementById('form1');
    let fname = document.getElementById('fname');
    let lname = document.getElementById('lname');
    let dob = document.getElementById('dob');
    let address = document.getElementById('address');
    let email = document.getElementById('email');
    let mob = document.getElementById('mob');
    let img = document.getElementById('img');
    let genderError = document.getElementById('errorgen');
    let error = document.getElementsByClassName('error');
    let pass1 = document.getElementById('pass1');
    let pass2 = document.getElementById('pass2');
    let mailformat = /^[a-zA-Z0-9àâçéèêëîïôûùüÿñæœ .-]*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let textonly = /^[a-zA-Z]*$/;
    let phoneno = /^\d{10}$/;
    let password = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    form1.addEventListener("submit", (e) => {
        e.preventDefault();
        validate();
    });

    function validate() {
        //First Names
        if (fname.value.trim() === '' || fname.value.length < 3) {
            // fname.parentElement.querySelector("div").innerHTML = "*First Name should contain Minimum 3 Letters";
            // fname.className="red errorSymbol";
            displayError(fname, "First Name should contain Minimum 3 Letters");
            // fname.style.borderBottom = "2px solid red";
            //return
        } else if (!fname.value.match(textonly)) {
            //  fname.nextElementSibling.innerHTML = "*Name should Contain Letters only";
            //  fname.className="red";
            displayError(fname, "*Name should Contain Letters only");
            // fname.style.borderBottom = "2px solid red";
            //return
        } else {
            //  fname.nextElementSibling.innerHTML = "";
            //  fname.className="green doneSymbol";
            displaySuccess(fname, "");
            // fname.style.borderBottom = "2px solid green";
            // return true;
        }
        //Last name
        if (lname.value == '' || lname.value.length < 3) {
            //  lname.nextElementSibling.innerHTML = "*Last Name should contain Minimum 3 Letters";
            // lname.style.borderBottom = "2px solid red";
            // lname.className="red";
            displayError(lname, "*Last Name should contain Minimum 3 Letters");
            //return
        } else if (!lname.value.match(textonly)) {
            // lname.nextElementSibling.innerHTML = "*Name should Contain Letters";
            // lname.style.borderBottom = "2px solid red";
            // lname.className = "red";
             displayError(lname,"*Name should Contain Letters only");
            //return
        } else {
            // lname.nextElementSibling.innerHTML = "";
            // lname.style.borderBottom = "2px solid green";
            // lname.className = "green";
             displaySuccess(lname,"");
        }
        //Gender
        if (document.getElementById('male').checked) {
            // document.getElementById('maleg').style.color="green";
            genderError.innerHTML = "";
        } else if (document.getElementById('female').checked) {
            // document.getElementById('femaleg').style.color="green";
            genderError.innerHTML = "";
        } else if (document.getElementById('other').checked) {
            // document.getElementById('otherg').style.color="green";
            genderError.innerHTML = "";
        } else {
            genderError.innerHTML = "*Please Choose Your Gender";
            // genderError.style.color = "yellow";
            //return
        }
        //dob
        if (dob.value == '') {
            // dob.nextElementSibling.innerHTML = "*Please Select your Date OF Birth";
            // dob.style.borderBottom = "2px solid red";
            // dob.className = "red";
            displayError(dob,"*Please Select your Date OF Birth");
            //return
        } else {
            // dob.nextElementSibling.innerHTML = "";
            // dob.style.borderBottom = "2px solid green";
            // dob.className = "green";
            displaySuccess(dob,"");
        }
        //address
        if (address.value == '') {
            // address.nextElementSibling.innerHTML = "*Please type your Address";
            // address.style.borderBottom = "2px solid red";
            // address.className = "red";
            displayError(address,"*Please type your Address");
            //return
        } else {
            // address.nextElementSibling.innerHTML = "";
            // address.style.borderBottom = "2px solid green";
            // address.className = "green";
            displaySuccess(address,"");
        }
        //Email
        if (!email.value.match(mailformat)) {
            // email.nextElementSibling.innerHTML = "*Enter Valid Email ID";
            // email.style.borderBottom = "2px solid red";
            // email.className = "red";
            displayError(email,"*Enter Valid Email ID");
            //return
        } else {
            // email.nextElementSibling.innerHTML = "";
            // email.style.borderBottom = "2px solid green";
            // email.className = "green";
            displaySuccess(email,"");
        }
        //MobileNumber
        if (!mob.value.match(phoneno)) {
            // mob.nextElementSibling.innerHTML = "*Enter 10 Digit Mobile Number";
            // mob.style.borderBottom = "2px solid red";
            // mob.className = "red";
            displayError(mob,"*Enter 10 Digit Mobile Number");
            //return

        } else {
            // mob.nextElementSibling.innerHTML = "";
            // mob.style.borderBottom = "2px solid green";
            // mob.className = "green";
            displaySuccess(mob,"");
        }
        //Image
        let valid = true;
        if (img.files.length != 0) {
            valid = true;
            // img.nextElementSibling.innerHTML = "";
            // img.style.borderBottom = "2px solid green";
            // img.className = "red";
            displaySuccess(img,"");
        } else {
            valid = false;
            // img.nextElementSibling.innerHTML = "*Please select any image file";
            // img.style.borderBottom = "2px solid red";
            // img.className = "red";
            displayError(img,"*Please select any image file");
            //return
        }

        //password
        if (!pass1.value.match(password)) {
            // pass1.nextElementSibling.innerHTML = "**Should Contain at least one digit, at least one lower case, at least one upper case,at least 8 from the mentioned characters";
            // pass1.style.borderBottom = "2px solid red";
            // pass1.className = "red";
            displayError(pass1,"**Should Contain at least one digit, at least one lower case, at least one upper case,at least 8 from the mentioned characters");
            //return
        } else {
            // pass1.nextElementSibling.innerHTML = "";
            // pass1.style.borderBottom = "2px solid green";
            // pass1.className = "green";
            displaySuccess(pass1,"");
        }
        //confirmpassword
        if (pass1.value === pass2.value) {
            // pass2.nextElementSibling.innerHTML = "Password Match Successfully";
            // pass2.style.borderBottom = "2px solid green";
            // pass2.className = "green";
            displaySuccess(pass2,"Password Match Successfully");

        } else {
            // pass2.nextElementSibling.innerHTML = "**Password do not Match";
            // pass2.style.borderBottom = "2px solid red";
            // pass2.className = "red";
            displayError(pass2,"**Password do not Match");
            //return
        }

        if (pass2.value.trim()
         == "") {
            pass2.nextElementSibling.innerHTML = "";
            // pass2.style.borderBottom = "2px solid rgb(0,0,0,0.5)";
            pass2.className = "";
            //return
        }

        function displayError(idname, msg) {
            idname.parentElement.querySelector("div").innerHTML = msg;
            idname.className = "red errorSymbol";
            return;
        }

        function displaySuccess(idname, msg) {
            idname.className = "green doneSymbol";
            idname.parentElement.querySelector("div").innerHTML = msg;
        }

    }