$(document).ready(function(){
    // Variables
    const passwordInput = $('#password-input'); 
    const validateDiv = $('.validate');
    const spanNumber = $('#va-number');
    const spanUppercase = $('#va-uppercase');
    const spanLowerCase = $('#va-lowercase');
    const spanSpecialChar = $('#va-special-char');
    const spanMinLength = $('#va-minlength');
    const submitBtn = $('#form-submit-btn');
    let number, chars, upper, lower, min;
    const RegUpper = new RegExp('[A-Z]');
    const RegLower = new RegExp('[a-z]');
    const RegNumber = new RegExp('[0-9]');
    const RegSpecialChar = /\W/g;

    //Display Validation Container On Focus
    passwordInput.on('focus', function(){
        validateDiv.css('display', 'block');
    })
    passwordInput.on('focusout', function(){
        validateDiv.css('display', 'none');
    })

    // Validation
    passwordInput.on('keyup', function(){
        let value = $(this).val();
        if(value.match(RegUpper)){
            addValidClass(spanUppercase);
            upper = true;
        }else{
            addRequiredClass(spanUppercase);
            upper = false;
        }
        if(value.match(RegLower)){
            addValidClass(spanLowerCase);
            lower = true;
        }else{
            addRequiredClass(spanLowerCase);
            lower = false;
        }
        if(value.match(RegNumber)){
            addValidClass(spanNumber);
            number = true;
        }else{
            addRequiredClass(spanNumber);
            number = false;
        }
        if(value.match(RegSpecialChar)){
            addValidClass(spanSpecialChar);
            chars = true;
        }else{
            addRequiredClass(spanSpecialChar);
            chars = false;
        }
        if(value.length >= 8){
            addValidClass(spanMinLength);
            min = true;
        }else{
            addRequiredClass(spanMinLength);
            min = false;
        }
    })

    function addValidClass(element){
        element.removeClass('va-required').addClass('va-validated');
    }

    function addRequiredClass(element){
        element.removeClass('va-validated').addClass('va-required');
    }

    // Show password error if password not verified
    submitBtn.on('click', function(e){
        if(upper && lower && number && chars && min){
            return true;
        }else{
            e.preventDefault();
            passwordInput.focus();
        }
    })

    //Show Hide Password
    let eyeShow = $("#eye-show");
    let eyeHide = $("#eye-hide");
    eyeShow.on('click', function(){
        if(passwordInput.attr('type') === 'password'){
            passwordInput.attr('type', 'text');
            eyeHide.show();
            eyeShow.hide();
        }
    })
    
    eyeHide.on('click', function(){
        if(passwordInput.attr('type') === 'text'){
            passwordInput.attr('type', 'password');
            eyeHide.hide();
            eyeShow.show();
        }
    })

})