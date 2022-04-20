// let form1 = $('#form1');


$(document).ready(function () {

    // let fname = $('#fname');
    $("input, textarea").blur(function () {
        let fname = $('#fname');
        let lname = $('#lname');
        let dob = $('#dob');
        let address = $('#address');
        let email = $('#email');
        let mob = $('#mob');
        let img = $('#img');
        let pass1 = $('#pass1');
        let pass2 = $('#pass2');
        let mailformat = /^[a-zA-Z0-9àâçéèêëîïôûùüÿñæœ .-]*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        let textonly = /^[a-zA-Z]*$/;
        let phoneno = /^\d{10}$/;
        let allowedExtensions = ["jpeg", "jpg", "png", "gif"];
        let password = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

        //First-Name
        if (fname.val().trim().length == 0 || fname.val().trim().length < 3) {
            displayError(fname, "This Field is Required");
        } else if (!textonly.test(fname.val().trim())) {
            displayError(fname, "*Name should Contain Letters only");
        } else {
            displaySuccess(fname, "")
        }

        //Last-Name
        if (lname.val().trim().length == 0 || lname.val().trim().length < 3) {
            displayError(lname, "*Last Name should contain Minimum 3 Letters");
        } else if (!textonly.test(lname.val().trim())) {
            displayError(lname, "*Name should Contain Letters only");
        } else {
            displaySuccess(lname, "");
        }

        //Gender
        if ($('input[type="radio"]:checked').length > 0) {
            $('#errorgen').text("");
        } else {
            $('#errorgen').text("*Please Choose Your Gender");
        }

        //dob
        if (dob.val().trim().length == 0) {
            displayError(dob, "*Please Select your Date OF Birth");
        } else {
            displaySuccess(dob, "");
        }

        //address
        if (address.val().trim().length == 0 || address.val().trim().length < 10) {
            displayError(address, "*Please type your Address");
        } else {
            displaySuccess(address, "");
        }

        //E-mail
        if (!mailformat.test(email.val().trim())) {
            displayError(email, "*Enter Valid Email ID");
        } else {
            displaySuccess(email, "");
        }

        //Mob
        if (!phoneno.test(mob.val())) {
            displayError(mob, "*Enter 10 Digit Mobile Number");
        } else {
            displaySuccess(mob, "");
        }

        //Image
        if (img.val().trim().length == 0) {
            displayError(img, "Please choose your Image");
        } else {
            let posImgExt = img.val().lastIndexOf(".") + 1;
            let imgExt = img.val().substring(posImgExt);
            let result = allowedExtensions.includes(imgExt);
            if (result == false) {
                displayError(img, "Please upload file having extensions .jpeg/.jpg/.png/.gif only.");
            } else {
                displaySuccess(img, "");
            }
        }

        //Password
        if (!password.test(pass1.val().trim())) {
            displayError(pass1, "**Should Contain at least one digit, at least one lower case, at least one upper case,at least 8 from the mentioned characters");
        } else {
            displaySuccess(pass1, "");
        }

        //Confirm Password
        if (pass1.val().trim() === pass2.val().trim()) {
            displaySuccess(pass2, "<i>Password Match Successfully</i>  <i class='fa-solid fa-thumbs-up greencolor'></i>");
        } else {
            displayError(pass2, "**Password do not Match");
        }
        if (pass2.val().trim().length == 0) {
            displayError(pass2, "Please type your Password");
        } else if (!password.test(pass1.val().trim())) {
            displayError(pass2, "Please Type your password Correctly");
        } else {
        }
        if (pass1.val().trim() != "" && pass2.val().trim().length == 0) {
            displayError(pass2, "Please Re-type your Password");
        }
    });


    function displayError(idname, msg) {
        idname.siblings(".error").text(msg);
        idname.addClass("red errorSymbol");
        idname.removeClass("green doneSymbol");
        idname.siblings(".error").removeClass("greencolor");
    }

    function displaySuccess(idname, msg) {
        idname.siblings(".error").html(msg);
        idname.addClass("green doneSymbol");
        idname.siblings(".error").addClass("greencolor");
    }
});


form1.addEventListener("submit", (e) => {
    e.preventDefault();
    validate();
});

