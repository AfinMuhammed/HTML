// let form1 = $('#form1');


$(document).ready(function () {

    // var fname = $('#fname');
    $("input").blur(function () {
        var fname = $('#fname');
        var lname = $('#lname');
        let dob = $('#dob');
        var address = $('#address');
        var email = $('#email');
        var mob = $('#mob');
        var img = $('#img');
        var pass1 = $('#pass1');
        var pass2 = $('#pass2');
        let mailformat = /^[a-zA-Z0-9àâçéèêëîïôûùüÿñæœ .-]*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        let textonly = /^[a-zA-Z]*$/;
        let phoneno = /^\d{10}$/;
        let allowedExtensions = ["jpeg", "jpg", "png", "gif"];
        let password = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

        //First-Name
        if (fname.val().trim() == '' || fname.val().trim().length < 3) {
            displayError(fname, "This Field is Required");
        } else if (!textonly.test(fname.val().trim())) {
            displayError(fname, "*Name should Contain Letters only");
        } else {
            displaySuccess(fname, "")
        }

        //Last-Name
        if (lname.val().trim() == '' || lname.val().trim().length < 3) {
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
        if (dob.val().trim() == '') {
            displayError(dob, "*Please Select your Date OF Birth");
        } else {
            displaySuccess(dob, "");
        }

        //address
        if (address.val().trim() == '' || address.val().trim().length < 10) {
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
        if (img.val().trim() == "") {
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
        if (pass2.val().trim() == "") {
            displayError(pass2, "Please type your Password");
        } else if (!password.test(pass1.val().trim())) {
            displayError(pass2, "Please Type your password Correctly");
        } else {
        }
        if (pass1.val().trim() != "" && pass2.val().trim() == "") {
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




// let lname = document.getElementById('lname');
// let dob = document.getElementById('dob');
// let address = document.getElementById('address');
// let email = document.getElementById('email');
// let mob = document.getElementById('mob');
// let img = document.getElementById('img');
// let genderError = document.getElementById('errorgen');
// // let error = document.getElementsByClassName('error');
// let pass1 = document.getElementById('pass1');
// let pass2 = document.getElementById('pass2');
// let mailformat = /^[a-z0-9àâçéèêëîïôûùüÿñæœ .-]*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
// let textonly = /^[a-zA-Z]*$/;
// let phoneno = /^\d{10}$/;
// let password = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
// let allowedExtensions = ["jpeg", "jpg", "png", "gif"];

form1.addEventListener("submit", (e) => {
    e.preventDefault();
    validate();

});

// function v(){

// alert(lname.value);
// }

// function validate() {
//     //First Names
//     if (fname.value.trim() == '' || fname.value.trim().length < 3) {
//         displayError(fname, "*First Name should contain Minimum 3 Letters");
//         //return;
//     } else if (!fname.value.trim().match(textonly)) {
//         displayError(fname, "*Name should Contain Letters only");
//         //return;
//     } else {
//         displaySuccess(fname, "");
//         // return true;
//     }
//     //Last name
//     if (lname.value.trim() == '' || lname.value.trim().length < 3) {
//         displayError(lname, "*Last Name should contain Minimum 3 Letters");
//         //return;
//     } else if (!lname.value.trim().match(textonly)) {
//         displayError(lname, "*Name should Contain Letters only");
//         //return;
//     } else {
//         displaySuccess(lname, "");
//     }
//     //Gender
//     if (document.getElementById('male').checked) {
//         genderError.innerHTML = "";
//     } else if (document.getElementById('female').checked) {
//         genderError.innerHTML = "";
//     } else if (document.getElementById('other').checked) {
//         genderError.innerHTML = "";
//     } else {
//         genderError.innerHTML = "*Please Choose Your Gender";
//         //return;
//     }
//     //dob
//     if (dob.value.trim() == '') {
//         displayError(dob, "*Please Select your Date OF Birth");
//         //return;
//     } else {
//         displaySuccess(dob, "");
//     }
//     //address
//     if (address.value.trim() == '' || address.value.trim().length < 10) {
//         displayError(address, "*Please type your Address");
//         //return;
//     } else {
//         displaySuccess(address, "");
//     }
//     //Email
//     if (!email.value.trim().match(mailformat)) {
//         displayError(email, "*Enter Valid Email ID");
//         //return;
//     } else {
//         displaySuccess(email, "");
//     }
//     //MobileNumber
//     if (!mob.value.match(phoneno)) {
//         displayError(mob, "*Enter 10 Digit Mobile Number");
//         //return;
//     } else {
//         displaySuccess(mob, "");
//     }


//     //img
//     if (img.value.trim() == "") {
//         displayError(img, "Please choose your Image");
//     } else {
//         let posImgExt = img.value.lastIndexOf(".") + 1;
//         let imgExt = img.value.substring(posImgExt);
//         let result = allowedExtensions.includes(imgExt);
//         if (result == false) {
//             displayError(img, "Please upload file having extensions .jpeg/.jpg/.png/.gif only.");
//         } else {
//             displaySuccess(img, "");
//         }
//     }


//     //password
//     if (!pass1.value.trim().match(password)) {
//         displayError(pass1, "**Should Contain at least one digit, at least one lower case, at least one upper case,at least 8 from the mentioned characters");
//         //return;
//     } else {
//         displaySuccess(pass1, "");
//     }
//     //confirmpassword
//     if (pass1.value.trim() === pass2.value.trim()) {
//         displaySuccess(pass2, "<i>Password Match Successfully</i>  <i class='fa-solid fa-thumbs-up greencolor'></i>");
//         //return;

//     } else {
//         displayError(pass2, "**Password do not Match");
//         //return;
//     }

//     if (pass2.value.trim() == "") {
//         // pass2.nextElementSibling.innerHTML = "";
//         // pass2.className = "";
//         displayError(pass2, "Please type your Password");
//         //return;
//     } else if (!pass1.value.trim().match(password)) {
//         displayError(pass2, "Please Type your password Correctly");
//     } else {}

//     if (pass1.value.trim() != "" && pass2.value.trim() == "") {
//         displayError(pass2, "Please Re-type your Password");
//     }

//     function displayError(idname, msg) {
//         let error = idname.parentElement.querySelector("div");
//         error.classList.remove("greencolor");
//         error.innerText = msg;
//         idname.className = "red errorSymbol";
//         //return;
//         /* form1.addEventListener("submit", (e) => {
//              e.preventDefault();
//              validate();
//          });*/
//     }

//     function displaySuccess(idname, msg) {
//         idname.className = "green doneSymbol";
//         let error = idname.parentElement.querySelector("div");
//         error.classList.add("greencolor");
//         error.innerHTML = msg;

//     }
// }

// function invalid() {
//     form1.addEventListener("submit", (e) => {
//         e.preventDefault();
//         validate();

//     });
// }