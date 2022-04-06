
/*--------------------------Prevent Back on browser---------------------------------*/
/*window.history.forward();
function noBack() {
    window.history.forward();
}*/
/*--------------------------navigation---------------------------------*/
window.addEventListener('scroll', function(){
    var header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
});
    function toggleMenu(){
        var menuToggle = document.querySelector('.menuToggle');
        var navigation = document.querySelector('.navigation');
        menuToggle.classList.toggle('active');
        navigation.classList.toggle('active');
    }
    function backToHome(){
        var navigation = document.querySelector('.navigation');
        navigation.classList.remove('active');
    }

    function exitNavBar(){
        document.getElementById("nav-menu4").checked = false;
    }

var playPause = document.getElementById("nav-menu4");
var videoPlayPause = document.getElementById("FES_video");

playPause.addEventListener("click", function() {
    if (playPause.checked == false) {
    videoPlayPause.play();

    } else {
    videoPlayPause.pause();
    }
});

/*--------------------------------about us-----------------------------------*/
function toggleDirectors() {
    var checkBox = document.getElementById("_1");
    var animatedArrows = document.querySelectorAll('#animated-arrow');
    if (checkBox.checked == true){
        for (i = 0; i < animatedArrows.length; i++) {
            animatedArrows[i].style.borderTop = "3px solid #ff0517";
            animatedArrows[i].style.borderLeft = "3px solid #ff0517";
            animatedArrows[i].style.borderBottom = "none";
            animatedArrows[i].style.borderRight = "none";

            animatedArrows[i].classList.remove("remove-animation");
            animatedArrows[i].classList.add("Hideshow");

        }
      } else {
        for (i = 0; i < animatedArrows.length; i++) {
            animatedArrows[i].style.borderBottom = "3px solid #ff0517";
            animatedArrows[i].style.borderRight = "3px solid #ff0517";
            animatedArrows[i].style.borderTop = "none";
            animatedArrows[i].style.borderLeft = "none";
            
            animatedArrows[i].classList.add("remove-animation");
            animatedArrows[i].classList.remove("Hideshow");
        }
      }
}

/*---------------------------------------banner-----------------------------------*/
var slideIndex = 1;
    showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("banner");
        var legend = document.getElementsByClassName("slideshow-legend")
            if (n > slides.length) {slideIndex = 1}    
            if (n < 1) {slideIndex = slides.length}
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";  
            }
            for (i = 0; i < legend.length; i++) {
                legend[i].className = legend[i].className.replace(" active", "");
            }
            slides[slideIndex-1].style.display = "block";
            legend[slideIndex-1].className += " active";
}

function changeText(){document.getElementById("download-now").innerHTML = "Choose version!";  }
function origText(){document.getElementById("download-now").innerHTML = "Download now";  }

/*--------------------------------------------------------------------------------------------contact us-----------------------------------*/
//disables the "disabled" fields and clears the form when the browser is refreshed
window.onload = function() {
    var i;
    var empty = document.querySelectorAll('#name-inquire, #company, #email, #number2, #inquiring, #message');
        for (var i = 0; i < empty.length; i++){
            empty[i].value = '';
    }
    var j;
    var disabled = document.querySelectorAll('#company, #email, #number2, #inquiring, #message');
    for (var j = 0; j < disabled.length; j++){
            disabled[j].disabled = true;
    }
}

//disables the `reset/clear button` when the user clears field/s using the BACKSPACE KEY.
function stopKey(evt) {
    var evt = (evt) ? evt : ((event) ? event : null);
    var node = (evt.target) ? evt.target : ((evt.srcElement) ? evt.srcElement : null);
    if ((evt.keyCode == 8) && (node.type!="text"))  {
        return false;
    }
}
document.onkeypress = stopKey;

//from `inquiring form` to `technical assistance` form and vise-versa
function contactForm(Form) {
    var i;
    var x = document.getElementsByClassName("form");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
        document.getElementById("company-inquire").classList.remove("apply-shake");
        document.getElementById("company-tBShoot").classList.remove("apply-shake");
        
        document.getElementById("email-inquire").classList.remove("apply-shake");
        document.getElementById("email-tBShoot").classList.remove("apply-shake");
        document.getElementById("email-inquire").classList.remove("slight-shake");
        document.getElementById("email-tBShoot").classList.remove("slight-shake");

        document.getElementById("inquiries").classList.remove("slight-shake");
        document.getElementById("issues").classList.remove("slight-shake");
    }
    document.getElementById(Form).style.display = "block";  
}


//--------------------------------------------------------------------------------inquire form
//--------------------------------------------------------------------------------------------
var form = document.getElementById("form-inquire");
form.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("submit-form-inquire").click();
    }
});
//function for input type "Name". 
/*Enables the `rest/clear button and the other fields` when the (the input type "Name") of inquire form is filled out and disables the `rest/clear button and the other fields` 
when the said input type is empty/emptied.*/
function manageResetButton_inquire(Name) { //inquire form
    var i;
    var disabled = document.querySelectorAll('#clear-form-inquire, #company-inquire, #email-inquire, #number-inquire, #inquiries, #message-inquire');
    for (var i = 0; i < disabled.length; i++){
        
        if (Name.value != '') {
            disabled[i].disabled = false;
            $('#email-inquire').attr('placeholder','DASC@daserve.com');
            $('#company-inquire').attr('placeholder','DIGITAL ARTS SALES CORPORATION');
            $('#number-inquire').attr('placeholder','0XX-XXX-YYYY');
        }
        else {
            disabled[i].disabled = true;
            $('#email-inquire').attr('placeholder',' ');
            $('#company-inquire').attr('placeholder',' ');
            $('#number-inquire').attr('placeholder',' ');
        }
    }
}

//doesn't leave the company field empty
function company_inquire(){
    var company = document.getElementById("company-inquire");

    if(company.value === "") {
        document.getElementById("company-inquire").style.boxShadow = " 0 0 3px red";
        document.getElementById("company-inquire").classList.add("apply-shake");
        document.getElementById("label-company-inquire").style.color = "red";
        document.getElementById("error-company_inquire").innerHTML = 'Please indicate your company.';
    }
    else{
        document.getElementById("company-inquire").style.boxShadow = "none";
        document.getElementById("company-inquire").classList.remove("apply-shake");
        document.getElementById("label-company-inquire").style.color = "black";
        document.getElementById("error-company_inquire").innerHTML = ' ';
        return true;
    }
}

//validates email
function validateEmail_inquire() {
    var email = document.getElementById("email-inquire").value;
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/;
    var pattern2 = /^[^ ]+@[^ ]+\.[a-z]{1,}$/;
    
    if(email.value === "") {
        document.getElementById("email-inquire").style.boxShadow = " 0 0 3px red";
        document.getElementById("email-inquire").classList.add("apply-shake");
        document.getElementById("error-email_inquire").innerHTML = 'Please re-check e-mail address.';
        return false;
    }
    if (email.match(pattern && pattern2)) {
        document.getElementById("email-inquire").style.boxShadow = "0 0 3px #2834da";
        document.getElementById("label-email-inquire").style.color = "black";
        document.getElementById("error-email_inquire").innerHTML = ' ';
        return true;
    }
    if (!(email.match(pattern && pattern2))) {
        document.getElementById("email-inquire").style.boxShadow = "0 0 3px red";
        document.getElementById("email-inquire").classList.add("slight-shake");
        document.getElementById("label-email-inquire").style.color = "red";
        document.getElementById("error-email_inquire").innerHTML = 'Please re-check e-mail address.';
        return false;
    }
}
//validates the Tel. No. textfield
function check_inquire(e) {
    var number = document.getElementById("number-inquire");
    var pattern = /(^[0-9]+[-]*[0-9]+$)/;

    if (pattern.test(e) == true) {
        number.style.color = "green";
    } else {
        number.style.color = "#ff0000";
    }
}
//shakes the dropdown menu if empty
function dropDownInquiries(){
    var e = document.getElementById("inquiries").value;
    if (e <= 0) {
        document.getElementById("inquiries").classList.add("slight-shake");
        return false;
    }
    return true;
}

//clear textfields when the rest/clear button is clicked. Then, disables itself.
function clearForm_inquire() { //inquire form
    document.getElementById('name-inquire').value = '';
    document.getElementById('clear-form-inquire').disabled = true;
    var disabled = document.querySelectorAll('#company-inquire, #email-inquire, #number-inquire, #inquiries, #message-inquire');
    var labels = document.querySelectorAll('#label-company-inquire, #label-email-inquire, #label-dropdown-inquire');
    for (var i = 0; i < disabled.length; i++){
            disabled[i].value = '';
            disabled[i].disabled = true;
            disabled[i].style.boxShadow = "none";
            $('#email-inquire').attr('placeholder',' ');
            $('#company-inquire').attr('placeholder',' ');
            $('#number-inquire').attr('placeholder',' ');
            document.getElementById("error-company_inquire").innerHTML = ' ';
            document.getElementById("error-email_inquire").innerHTML = ' ';
    }
    for (var j = 0; j < labels.length; j++){
        labels[j].style.color = "black";
    }
}

//--------------------------------------------------------------------------------technical assistance form
//--------------------------------------------------------------------------------------------
var form = document.getElementById("form-troubleshoot");
form.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("submit-form-tBShoot").click();
    }
});
//function for input type "Name". 
/*Enables the `rest/clear button and the other fields` when the (the input type "Name") is filled out and disables the `rest/clear button and the other fields` 
when the said input type is empty/emptied.*/
function manageResetButton_tBShoot(Name) { 
    var i;
    var disabled = document.querySelectorAll('#clear-form-tBShoot, #company-tBShoot, #email-tBShoot, #number-tBSHoot, #issues, #message-tBShoot');
    for (var i = 0; i < disabled.length; i++){
        if (Name.value != '') {
            disabled[i].disabled = false;
            $('#email-tBShoot').attr('placeholder','DASC@daserve.com');
            $('#company-tBShoot').attr('placeholder','DIGITAL ARTS SALES CORPORATION');
            $('#number-tBSHoot').attr('placeholder','0XX-XXX-YYYY');
        }
        else {
            disabled[i].disabled = true;
            $('#email-tBShoot').attr('placeholder',' ');
            $('#company-tBShoot').attr('placeholder',' ');
            $('#number-tBSHoot').attr('placeholder',' ');
        }
    }
}

//doesn't leave the company field empty
function companyInquire_tBShoot(){
    var company = document.getElementById("company-tBShoot");

    if(company.value === "") {
        document.getElementById("company-tBShoot").style.boxShadow = " 0 0 3px red";
        document.getElementById("company-tBShoot").classList.add("apply-shake");
        document.getElementById("label-company-tBSHoot").style.color = "red";
        document.getElementById("error-company_tBShoot").innerHTML = 'Please indicate your company.';
        return false;
    }
    else{
        document.getElementById("company-tBShoot").style.boxShadow = "none";
        document.getElementById("company-tBShoot").classList.remove("apply-shake");
        document.getElementById("label-company-tBSHoot").style.color = "black";
        document.getElementById("error-company_tBShoot").innerHTML = ' ';
        return true;
    }
}

//validates email
function validateEmail_tBShoot() {
    var email = document.getElementById("email-tBShoot").value;
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/;
    var pattern2 = /^[^ ]+@[^ ]+\.[a-z]{1,}$/;
    
    if(email.value === "") {
        document.getElementById("email-tBShoot").style.boxShadow = " 0 0 3px red";
        document.getElementById("email-tBShoot").classList.add("apply-shake");
        document.getElementById("error-email_tBShoot").innerHTML = 'Please re-check e-mail address.';
        return false;
    }
    if (email.match(pattern && pattern2)) {
        document.getElementById("email-tBShoot").style.boxShadow = "0 0 3px #2834da";
        document.getElementById("label-email-tBSHoot").style.color = "black";
        document.getElementById("error-email_tBShoot").innerHTML = ' ';
        return true;
    }
    if (!(email.match(pattern && pattern2))) {
        document.getElementById("email-tBShoot").style.boxShadow = "0 0 3px red";
        document.getElementById("email-tBShoot").classList.add("slight-shake");
        document.getElementById("label-email-tBSHoot").style.color = "red";
        document.getElementById("error-email_tBShoot").innerHTML = 'Please re-check e-mail address.';
        return false;
    }
}

function check_tBShoot(b) {
    var number = document.getElementById("number-tBSHoot");
    var pattern = /(^[0-9]+[-]*[0-9]+$)/;

    if (pattern.test(b) == true) {
        number.style.color = "green";
    } else {
        number.style.color = "#ff0000";
    }
}

//shakes the dropdown menu if empty
function dropDownIssues(){
    var issues = document.getElementById("issues").value;
    if (issues <= 0) {
        document.getElementById("issues").classList.add("slight-shake");
        return false;
    }
    return true;
}

function clearForm_tBShoot() { //technical assistance form
    document.getElementById('name-tBShoot').value = '';
    document.getElementById('clear-form-tBShoot').disabled = true;
    var disabled = document.querySelectorAll('#company-tBShoot, #email-tBShoot, #number-tBSHoot, #issues, #message-tBShoot');
    var labels = document.querySelectorAll('#label-company-tBSHoot, #label-email-tBSHoot, #label-dropdown-tBSHoot');
    for (var i = 0; i < disabled.length; i++){
            disabled[i].value = '';
            disabled[i].disabled = true;
            disabled[i].style.boxShadow = "none";
            $('#email-tBShoot').attr('placeholder',' ');
            $('#company-tBShoot').attr('placeholder',' ');
            $('#number-tBSHoot').attr('placeholder',' ');
            document.getElementById("error-company_tBShoot").innerHTML = ' ';
            document.getElementById("error-email_tBShoot").innerHTML = ' ';
    }
    for (var j = 0; j < labels.length; j++){
        labels[j].style.color = "black";
    }
}


///--------------------------------------------------------------------------------technical assistance form
//--------------------------------------------------------------------------------------------
var form = document.getElementById("form-troubleshoot");
form.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("submit-form-tBShoot").click();
    }
});
//function for input type "Name". 
/*Enables the `rest/clear button and the other fields` when the (the input type "Name") is filled out and disables the `rest/clear button and the other fields` 
when the said input type is empty/emptied.*/
function manageResetButton_tBShoot(Name_) { 
    var i;
    var disabled = document.querySelectorAll('#clear-form-tBShoot, #company-tBShoot, #email-tBShoot, #number-tBSHoot, #issues, #message-tBShoot');
    for (var i = 0; i < disabled.length; i++){
        if (Name_.value != '') {
            disabled[i].disabled = false;
            $('#email-tBShoot').attr('placeholder','DASC@daserve.com');
            $('#company-tBShoot').attr('placeholder','DIGITAL ARTS SALES CORPORATION');
            $('#number-tBSHoot').attr('placeholder','0XX-XXX-YYYY');
        }
        else {
            disabled[i].disabled = true;
            $('#email-tBShoot').attr('placeholder',' ');
            $('#company-tBShoot').attr('placeholder',' ');
            $('#number-tBSHoot').attr('placeholder',' ');
        }
    }
}

//doesn't leave the company field empty
function companyInquire_tBShoot(){
    var company = document.getElementById("company-tBShoot");

    if(company.value === "") {
        document.getElementById("company-tBShoot").style.boxShadow = " 0 0 3px red";
        document.getElementById("company-tBShoot").classList.add("apply-shake");
        document.getElementById("label-company-tBSHoot").style.color = "red";
        document.getElementById("error-company_tBShoot").innerHTML = 'Please indicate your company.';
        return false;
    }
    else{
        document.getElementById("company-tBShoot").style.boxShadow = "none";
        document.getElementById("company-tBShoot").classList.remove("apply-shake");
        document.getElementById("label-company-tBSHoot").style.color = "black";
        document.getElementById("error-company_tBShoot").innerHTML = ' ';
        return true;
    }
}

//validates email
function validateEmail_tBShoot() {
    var email = document.getElementById("email-tBShoot").value;
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/;
    var pattern2 = /^[^ ]+@[^ ]+\.[a-z]{1,}$/;
    
    if(email.value === "") {
        document.getElementById("email-tBShoot").style.boxShadow = " 0 0 3px red";
        document.getElementById("email-tBShoot").classList.add("apply-shake");
        document.getElementById("error-email_tBShoot").innerHTML = 'Please re-check e-mail address.';
        return false;
    }
    if (email.match(pattern && pattern2)) {
        document.getElementById("email-tBShoot").style.boxShadow = "0 0 3px #2834da";
        document.getElementById("label-email-tBSHoot").style.color = "black";
        document.getElementById("error-email_tBShoot").innerHTML = ' ';
        return true;
    }
    if (!(email.match(pattern && pattern2))) {
        document.getElementById("email-tBShoot").style.boxShadow = "0 0 3px red";
        document.getElementById("email-tBShoot").classList.add("slight-shake");
        document.getElementById("label-email-tBSHoot").style.color = "red";
        document.getElementById("error-email_tBShoot").innerHTML = 'Please re-check e-mail address.';
        return false;
    }
}

function check_tBShoot(b) {
    var number = document.getElementById("number-tBSHoot");
    var pattern = /(^[0-9]+[-]*[0-9]+$)/;

    if (pattern.test(b) == true) {
        number.style.color = "green";
    } else {
        number.style.color = "#ff0000";
    }
}

//shakes the dropdown menu if empty
function dropDownIssues(){
    var issues = document.getElementById("issues").value;
    if (issues <= 0) {
        document.getElementById("issues").classList.add("slight-shake");
        return false;
    }
    return true;
}

function clearForm_tBShoot() { //technical assistance form
    document.getElementById('name-tBShoot').value = '';
    document.getElementById('clear-form-tBShoot').disabled = true;
    var disabled = document.querySelectorAll('#company-tBShoot, #email-tBShoot, #number-tBSHoot, #issues, #message-tBShoot');
    var labels = document.querySelectorAll('#label-company-tBSHoot, #label-email-tBSHoot, #label-dropdown-tBSHoot');
    for (var i = 0; i < disabled.length; i++){
            disabled[i].value = '';
            disabled[i].disabled = true;
            disabled[i].style.boxShadow = "none";
            $('#email-tBShoot').attr('placeholder',' ');
            $('#company-tBShoot').attr('placeholder',' ');
            $('#number-tBSHoot').attr('placeholder',' ');
            document.getElementById("error-company_tBShoot").innerHTML = ' ';
            document.getElementById("error-email_tBShoot").innerHTML = ' ';
    }
    for (var j = 0; j < labels.length; j++){
        labels[j].style.color = "black";
    }
}

/*-------------------------------core products and products-------------------------------------*/
var coreProductIndex = 1;
coreProductsSlide(coreProductIndex);

function plus_Slides(n) {
coreProductsSlide(coreProductIndex += n);
}

function current_Slide(n) {
coreProductsSlide(coreProductIndex = n);
}

function coreProductsSlide(n) {
var i;
var cp_slides = document.getElementsByClassName("coreProduct");
if (n > cp_slides.length) {coreProductIndex = 1}    
if (n < 1) {coreProductIndex = cp_slides.length}
for (i = 0; i < cp_slides.length; i++) {
    cp_slides[i].style.display = "none";  
}
cp_slides[coreProductIndex-1].style.display = "block"; 
}

var btn = document.querySelectorAll(".modal-button");
var modals = document.querySelectorAll('.modal');
var spans = document.getElementsByClassName("close");

// open modal button (features/learn more buttons)
for (var i = 0; i < btn.length; i++) {
    btn[i].onclick = function(e) {
        e.preventDefault();
        modal = document.querySelector(e.target.getAttribute("href"));
        modal.style.display = "block";
        document.querySelector("body").style.overflow = 'hidden';
    }
}
// close modal to cancel sending message for the new products
$('#myModal6').on('hidden.modal', function () {
    $(this).find('modal6-close').trigger('reset');
    $('#myModal6').remove();
});

// close button
for (var i = 0; i < spans.length; i++) {
    spans[i].onclick = function() {
        for (var index in modals) {
            if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";
        }
        document.querySelector("body").style.overflow = 'visible';
    }
}

// when clicked anywhere outside the modal
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        for (var index in modals) {
            if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";
        }
        document.querySelector("body").style.overflow = 'visible';
        document.getElementById("CICS_video").pause();
    }
}
/*---------------------------footer------------------------------------*/
function hideContent(x) {
    if (x.matches) {
        document.getElementById('mediahide').style.display = "none";
        document.getElementById('mediahide_').style.display = "none";
        document.getElementById("media-show").addEventListener("click", function(){
            document.getElementById('mediahide').style.display = (mediahide.dataset.toggled ^= 1) ? "block" : "none";
        });
        document.getElementById("media-show_").addEventListener("click", function(){
            document.getElementById('mediahide_').style.display = (mediahide_.dataset.toggled ^= 1) ? "block" : "none";
        });
    } else {
        document.getElementById('mediahide').style.display = "block";
        document.getElementById('mediahide_').style.display = "block";
    }
}

var x = window.matchMedia("(max-width: 700px)")
hideContent(x)
x.addListener(hideContent) // Attach listener function on state changes



/*---------------------------effects------------------------------------*/
AOS.init({
    duration: 1200,
})

/*--------------------------pre-loader---------------------------------*/
setTimeout(function(){
    $('.loader_bg').fadeToggle();
}, 1000);

/*-------------------------smooth scrolling----------------------------*/
function init(){
    uss.hrefSetup(); 
    uss.setStepLengthCalculator(EASE_IN_OUT_QUART(1000),);
    window.addEventListener("wheel", () => uss.stopScrolling(window)); 
}