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
            displayError(fname, "First Name should contain Minimum 3 Letters");
            //return
        } else if (!fname.value.match(textonly)) {
            displayError(fname, "*Name should Contain Letters only");
            //return
        } else {
            displaySuccess(fname, "");
            // return true;
        }
        //Last name
        if (lname.value.trim() == '' || lname.value.length < 3) {
            displayError(lname, "*Last Name should contain Minimum 3 Letters");
            //return
        } else if (!lname.value.match(textonly)) {
            displayError(lname, "*Name should Contain Letters only");
            //return
        } else {
            displaySuccess(lname, "");
        }
        //Gender
        if (document.getElementById('male').checked) {
            genderError.innerHTML = "";
        } else if (document.getElementById('female').checked) {
            genderError.innerHTML = "";
        } else if (document.getElementById('other').checked) {
            genderError.innerHTML = "";
        } else {
            genderError.innerHTML = "*Please Choose Your Gender";
            //return
        }
        //dob
        if (dob.value.trim() == '') {
            displayError(dob, "*Please Select your Date OF Birth");
            //return
        } else {
            displaySuccess(dob, "");
        }
        //address
        if (address.value.trim() == '') {
            displayError(address, "*Please type your Address");
            //return
        } else {
            displaySuccess(address, "");
        }
        //Email
        if (!email.value.match(mailformat)) {
            displayError(email, "*Enter Valid Email ID");
            //return
        } else {
            displaySuccess(email, "");
        }
        //MobileNumber
        if (!mob.value.match(phoneno)) {
            displayError(mob, "*Enter 10 Digit Mobile Number");
            //return
        } else {
            displaySuccess(mob, "");
        }
        //Image
        let valid = true;
        if (img.files.length != 0) {
            valid = true;
            displaySuccess(img, "");
        } else {
            valid = false;
            displayError(img, "*Please select any image file");
            //return
        }

        //password
        if (!pass1.value.match(password)) {
            displayError(pass1, "**Should Contain at least one digit, at least one lower case, at least one upper case,at least 8 from the mentioned characters");
            //return
        } else {
            displaySuccess(pass1, "");
        }
        //confirmpassword
        if (pass1.value === pass2.value) {
            displaySuccess(pass2, "Password Match Successfully");

        } else {
            displayError(pass2, "**Password do not Match");
            //return
        }

        if (pass2.value.trim() == "") {
            pass2.nextElementSibling.innerHTML = "";
            pass2.className = "";
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