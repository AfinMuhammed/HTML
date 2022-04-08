    let form1 = document.getElementById('form1');
    let fname = document.getElementById('fname');
    let lname = document.getElementById('lname');
    let dob = document.getElementById('dob');
    let address = document.getElementById('address');
    let email = document.getElementById('email');
    let mob = document.getElementById('mob');
    let img = document.getElementById('img');
    let genderError = document.getElementById('errorgen');
    // let error = document.getElementsByClassName('error');
    let pass1 = document.getElementById('pass1');
    let pass2 = document.getElementById('pass2');
    let mailformat = /^[a-z0-9àâçéèêëîïôûùüÿñæœ .-]*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let textonly = /^[a-zA-Z]*$/;
    let phoneno = /^\d{10}$/;
    let password = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    let allowedExtensions = ["jpeg", "jpg", "png", "gif"];

    form1.addEventListener("submit", (e) => {
        e.preventDefault();
        validate();
        
    });

    function validate() {
        //First Names
        if (fname.value.trim() == '' || fname.value.trim().length < 3) {
            displayError(fname, "First Name should contain Minimum 3 Letters");
            //return;
        } else if (!fname.value.trim().match(textonly)) {
            displayError(fname, "*Name should Contain Letters only");
            //return;
        } else {
            displaySuccess(fname, "");
            // return true;
        }
        //Last name
        if (lname.value.trim() == '' || lname.value.trim().length < 3) {
            displayError(lname, "*Last Name should contain Minimum 3 Letters");
            //return;
        } else if (!lname.value.trim().match(textonly)) {
            displayError(lname, "*Name should Contain Letters only");
            //return;
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
            //return;
        }
        //dob
        if (dob.value.trim() == '') {
            displayError(dob, "*Please Select your Date OF Birth");
            //return;
        } else {
            displaySuccess(dob, "");
        }
        //address
        if (address.value.trim() == '' || address.value.trim().length < 10) {
            displayError(address, "*Please type your Address");
            //return;
        } else {
            displaySuccess(address, "");
        }
        //Email
        if (!email.value.trim().match(mailformat)) {
            displayError(email, "*Enter Valid Email ID");
            //return;
        } else {
            displaySuccess(email, "");
        }
        //MobileNumber
        if (!mob.value.match(phoneno)) {
            displayError(mob, "*Enter 10 Digit Mobile Number");
            //return;
        } else {
            displaySuccess(mob, "");
        }

        
        //img
        if (img.value.trim() == "") {
            displayError(img, "Please choose your Image");
        } else {
            let posImgExt = img.value.lastIndexOf(".") + 1;
            let imgExt = img.value.substring(posImgExt);
            let result = allowedExtensions.includes(imgExt);
            if (result == false) {
                displayError(img, "Please upload file having extensions .jpeg/.jpg/.png/.gif only.");
            } else {
                displaySuccess(img, "");
            }
        }


        //password
        if (!pass1.value.trim().match(password)) {
            displayError(pass1, "**Should Contain at least one digit, at least one lower case, at least one upper case,at least 8 from the mentioned characters");
            //return;
        } else {
            displaySuccess(pass1, "");
        }
        //confirmpassword
        if (pass1.value.trim() === pass2.value.trim()) {
            displaySuccess(pass2, "Password Match Successfully");
            //return;

        } else {
            displayError(pass2, "**Password do not Match");
            //return;
        }

        if (pass2.value.trim() == "") {
            // pass2.nextElementSibling.innerHTML = "";
            // pass2.className = "";
            displayError(pass2,"Please type your Password");
            //return;
        }
        
        if(pass1.value.trim()!= "" && pass2.value.trim() == ""){
            displayError(pass2,"Please Re-type your Password");
        }

        function displayError(idname, msg) {
            let error= idname.parentElement.querySelector("div");
            error.classList.remove("greencolor");
            error.innerHTML = msg;
            idname.className = "red errorSymbol";
            //return;
            /* form1.addEventListener("submit", (e) => {
                 e.preventDefault();
                 validate();
             });*/
        }

        function displaySuccess(idname, msg) {
            idname.className = "green doneSymbol";
            let error= idname.parentElement.querySelector("div");
            error.classList.add("greencolor");
            error.innerHTML = msg;

        }
    }

    function invalid() {
        //alert("please");
        form1.addEventListener("submit", (e) => {
            e.preventDefault();
            validate();
            
        });
        //alert("sorry");
    }
    