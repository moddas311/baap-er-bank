// Step-1: add click event handler with the submit button  
document.getElementById('btn-submit').addEventListener('click', function(){

    // Step-2: get the email address inside email input field 
    //  always remember to use .value to get text from an input field 
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    
    // Step-3: get password
    // step-3.a: set id on the html element 
    // step:3.b: get the element 
    // step-3.c: get the value from the element 
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    
    // DANGER: DO NOT VERIFY email password on the client side 
    // Step-4: verify email and password and check whether valid user or not 
    if(email === 'moddasir311@gmail.com' && password === 'moddasir'){
        window.location.href = 'bank.html';
    }
    else{
       alert('why you forgt you password!!');
    }
})