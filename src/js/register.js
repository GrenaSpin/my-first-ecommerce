const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordTwo = document.getElementById('passwordTwo');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs(){
    //get the values froom the inputs
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordvalue = password.value.trim();
    const passwordTwoValue = passwordTwo.value.trim();

    if(usernameValue === ''){
        //show error
        //add error class
        setErrorFor(username, 'Username cannot be blanck');
    } else {
        //add success class
        setSuccessFor(username);
    }

    if(emailValue === ''){
        setErrorFor(email, 'Email cannot be blanck');
    } else if(! isEmail(emailValue)) {
        setErrorFor(email, 'Email is not valid');
    } else {
        setSuccessFor(email);
    }

    if(passwordvalue === ''){
        setErrorFor(password, 'Password cannot be blanck');
    } else {
        setSuccessFor(password);
    }

    if(passwordTwoValue === ''){
        setErrorFor(passwordTwo, 'Password cannot be blanck');
    } else if (passwordvalue !== passwordTwoValue){
        setErrorFor(passwordTwo, 'Password does not match');
    }
    else {
        setSuccessFor(passwordTwo);
    }
}

function setErrorFor(input, message){
    const formControl = input.parentElement; //.form-control
    const small = formControl.querySelector('small');

    // add error message inside small
    small.innerText = message;

    // add error class
    formControl.className = 'form-control error';
}

function setSuccessFor(input){
    const formControl = input.parentElement; //.form-control

    formControl.className = 'form-control success';
}

function isEmail(email){
    return /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(email);
}