const uName = document.querySelector(`.username`)
const email = document.querySelector(`.email`)
const password = document.querySelector(`.password`)
const cnic = document.querySelector(`.cnic`)
const age = document.querySelector(`.age`)
const submit = document.querySelector(`.submit`)
const form = document.querySelector(`form`)

let uNameRegex = /^[a-zA-Z0-9_-]{4,15}$/;
let passRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
let cnicRegex = /^42\d{11}$/;
let ageRegex = /^(1[89]|[2-5][0-9]|60)$/;

form.addEventListener(`submit` , function(event) {
    event.preventDefault()


    if (uNameRegex.test(uName.value) === true ) {
        console.log(uName.value);
    }else{
        alert(`Enter Correct UserName it contain minimun 4 character and maximum 15 character`);
    }
    console.log(email.value);
    if (passRegex.test(password.value) === true ) {
        console.log(password.value);

    }else{
        alert(`Enter Correct Password it contain minimun 8 character and also contain one uppercase letter and one special character`);
    }
    if (cnicRegex.test(cnic.value) === true ) {
        console.log(cnic.value);
    }else{
        alert(`Enter Correct Cnic number it contain minimun 13 character and also start with number 42`);
    }
    if (ageRegex.test(age.value) === true ) {
        console.log(age.value);
    }else{
        alert(`You are not eligible for this form in this age`);
    }
})