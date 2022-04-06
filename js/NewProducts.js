 //------------------------------------------------video
 var vid1 = document.getElementById("FES_video");    
 var vid2 = document.getElementById("CICS_video");

 document.getElementById("close-new-product-1").addEventListener("click", function(){
         vid2.pause();
 });
 document.getElementById("close-new-product-1-block").addEventListener("click", function(){
         vid2.pause();
 });
//--------------------------------------------------------------------------------modal 6
//-------------------------------------------------------------------------------------------- 
var form = document.getElementById("form-CICS");
form.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("submit-form-CICS").click();
    }
});
function manageResetButton_CICS(Name) { 
    var i;
    var disabled = document.querySelectorAll('#clear-form-CICS, #company-CICS, #email-CICS, #number-CICS');
    var empty = document.querySelectorAll('#company-CICS, #email-CICS, #number-CICS');
    for (var i = 0; i < disabled.length; i++){
        
        if (Name.value != '') {
            disabled[i].disabled = false;
            $('#email-CICS').attr('placeholder','DASC@daserve.com');
            $('#company-CICS').attr('placeholder','DIGITAL ARTS SALES CORPORATION');
            $('#number-CICS').attr('placeholder','0XX-XXX-YYYY');
        }
        else {
            disabled[i].disabled = true;
            $('#email-CICS').attr('placeholder',' ');
            $('#company-CICS').attr('placeholder',' ');
            $('#number-CICS').attr('placeholder',' ');
        }
    }
}


//doesn't leave the company field empty
function company_CICS(){
    var company = document.getElementById("company-CICS");
    if(company.value === "") {
        document.getElementById("company-CICS").style.boxShadow = " 0 0 3px red";
        document.getElementById("company-CICS").classList.add("apply-shake");
        document.getElementById("label-company-CICS").style.color = "red";
        document.getElementById("error-company_CICS").innerHTML = 'Please indicate your company.';
        return false;
    }
    else{
        document.getElementById("company-CICS").style.boxShadow = "none";
        document.getElementById("company-CICS").classList.remove("apply-shake");
        document.getElementById("label-company-CICS").style.color = "black";
        document.getElementById("error-company_CICS").innerHTML = ' ';
        return true;
    }
}
function validateEmail_CICS() {
    var email = document.getElementById("email-CICS").value;
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/;
    var pattern2 = /^[^ ]+@[^ ]+\.[a-z]{1,}$/;
    
    if(email.value === "") {
        document.getElementById("email-CICS").style.boxShadow = " 0 0 3px red";
        document.getElementById("email-CICS").classList.add("apply-shake");
        document.getElementById("error-email_CICS").innerHTML = 'Please re-check e-mail address.';
        return false;
    }
    if (email.match(pattern && pattern2)) {
        document.getElementById("email-CICS").style.boxShadow = "0 0 3px #2834da";
        document.getElementById("label-email-CICS").style.color = "black";
        document.getElementById("error-email_CICS").innerHTML = ' ';
        return true;
    }
    if (!(email.match(pattern && pattern2))) {
        document.getElementById("email-CICS").style.boxShadow = "0 0 3px red";
        document.getElementById("email-CICS").classList.add("slight-shake");
        document.getElementById("label-email-CICS").style.color = "red";
        document.getElementById("error-email_CICS").innerHTML = 'Please re-check e-mail address.';
        return false;
    }
}

function check_CICS(b) {
    var number = document.getElementById("number-CICS");
    var pattern = /(^[0-9]+[-]*[0-9]+$)/;

    if (pattern.test(b) == true) {
        number.style.color = "green";
    } else {
        number.style.color = "#ff0000";
    }
}

function clearForm_CICS() { //technical assistance form
    document.getElementById('name-CICS').value = '';
    document.getElementById('clear-form-CICS').disabled = true;
    var disabled = document.querySelectorAll('#clear-form-CICS, #company-CICS, #email-CICS, #number-CICS');
    var labels = document.querySelectorAll('#label-email-CICS, #label-company-CICS');
    for (var i = 0; i < disabled.length; i++){
            disabled[i].value = '';
            disabled[i].disabled = true;
            disabled[i].style.boxShadow = "none";
            $('#email-CICS').attr('placeholder',' ');
            $('#company-CICS').attr('placeholder',' ');
            $('#number-CICS').attr('placeholder',' ');
            document.getElementById("error-company_CICS").innerHTML = ' ';
            document.getElementById("error-email_CICS").innerHTML = ' ';
    }
    for (var j = 0; j < labels.length; j++){
        labels[j].style.color = "black";
    }
}
//--------------------------------------------------------------------------------modal 7
//--------------------------------------------------------------------------------------------
var form = document.getElementById("form-OTVS");
form.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("submit-form-OTVS").click();
    }
});
//function for input type "Name". 
/*Enables the `rest/clear button and the other fields` when the (the input type "Name") is filled out and disables the `rest/clear button and the other fields` 
when the said input type is empty/emptied.*/
function manageResetButton_OTVS(Name) { 
    var i;
    var disabled = document.querySelectorAll('#clear-form-OTVS, #company-OTVS, #email-OTVS, #number-OTVS');
    var empty = document.querySelectorAll('#company-OTVS, #email-OTVS, #number-OTVS');
    for (var i = 0; i < disabled.length; i++){
        
        if (Name.value != '') {
            disabled[i].disabled = false;
            $('#email-OTVS').attr('placeholder','DASC@daserve.com');
            $('#company-OTVS').attr('placeholder','DIGITAL ARTS SALES CORPORATION');
            $('#number-OTVS').attr('placeholder','0XX-XXX-YYYY');
        }
        else {
            disabled[i].disabled = true;
            $('#email-OTVS').attr('placeholder',' ');
            $('#company-CICS').attr('placeholder',' ');
            $('#number-OTVS').attr('placeholder',' ');
        }
    }
}

//doesn't leave the company field empty
function company_OTVS(){
    var company = document.getElementById("company-OTVS");
    if(company.value === "") {
        document.getElementById("company-OTVS").style.boxShadow = " 0 0 3px red";
        document.getElementById("company-OTVS").classList.add("apply-shake");
        document.getElementById("label-company-OTVS").style.color = "red";
        document.getElementById("error-company_OTVS").innerHTML = 'Please indicate your company.';
        return false;
    }
    else{
        document.getElementById("company-OTVS").style.boxShadow = "none";
        document.getElementById("company-OTVS").classList.remove("apply-shake");
        document.getElementById("label-company-OTVS").style.color = "black";
        document.getElementById("error-company_OTVS").innerHTML = ' ';
        return true;
    }
}

//validates email
function validateEmail_OTVS() {
    var email = document.getElementById("email-OTVS").value;
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/;
    var pattern2 = /^[^ ]+@[^ ]+\.[a-z]{1,}$/;
    
    if(email.value === "") {
        document.getElementById("email-OTVS").style.boxShadow = " 0 0 3px red";
        document.getElementById("email-OTVS").classList.add("apply-shake");
        document.getElementById("error-email_OTVS").innerHTML = 'Please re-check e-mail address.';
        return false;
    }
    if (email.match(pattern && pattern2)) {
        document.getElementById("email-OTVS").style.boxShadow = "0 0 3px #2834da";
        document.getElementById("label-email-OTVS").style.color = "black";
        document.getElementById("error-email_OTVS").innerHTML = ' ';
        return true;
    }
    if (!(email.match(pattern && pattern2))) {
        document.getElementById("email-OTVS").style.boxShadow = "0 0 3px red";
        document.getElementById("email-OTVS").classList.add("slight-shake");
        document.getElementById("label-email-OTVS").style.color = "red";
        document.getElementById("error-email_OTVS").innerHTML = 'Please re-check e-mail address.';
        return false;
    }
}

function check_OTVS(b) {
    var number = document.getElementById("number-OTVS");
    var pattern = /(^[0-9]+[-]*[0-9]+$)/;

    if (pattern.test(b) == true) {
        number.style.color = "green";
    } else {
        number.style.color = "#ff0000";
    }
}

function clearForm_OTVS() { //technical assistance form
    document.getElementById('name-OTVS').value = '';
    document.getElementById('clear-form-OTVS').disabled = true;
    var disabled = document.querySelectorAll('#clear-form-OTVS, #company-OTVS, #email-OTVS, #number-OTVS');
    var labels = document.querySelectorAll('#label-email-OTVS, #label-company-OTVS');
    for (var i = 0; i < disabled.length; i++){
            disabled[i].value = '';
            disabled[i].disabled = true;
            disabled[i].style.boxShadow = "none";
            $('#email-OTVS').attr('placeholder',' ');
            $('#company-OTVS').attr('placeholder',' ');
            $('#number-OTVS').attr('placeholder',' ');
            document.getElementById("error-company_OTVS").innerHTML = ' ';
            document.getElementById("error-email_OTVS").innerHTML = ' ';
    }
    for (var j = 0; j < labels.length; j++){
        labels[j].style.color = "black";
    }
}

