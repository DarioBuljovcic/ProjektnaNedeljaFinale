
// document.querySelector('#registracija').addEventListener('click', () =>{
//     if(document.querySelector('#registracija').innerText=="Registruj se"){
//         document.querySelector('.registerContainer').style.display = 'block'
//         document.querySelector('.main-wrapper').style.display = 'none'
//         document.querySelector('#registracija').innerText="Uloguj se"
//     }else{
//         document.querySelector('.registerContainer').style.display = 'none'
//         document.querySelector('.main-wrapper').style.display = 'block';
//         document.querySelector('#registracija').innerText="Registruj se"
//     }
    
// });

let config = {

    'username': {
        required: true,
        minlength: 5,
        maxlength: 50
    },

    'email': {
        required: true,
        email: true,
        minlength: 5,
        maxlength: 50
    },

    'password': {
        required: true,
        minlength: 7,
        maxlength: 25,
        matching: 'password2'  
    },

    'password2': {
        required: true, 
        minlength: 7,
        maxlength: 25,
        matching: 'password'
    }

}
let validator = new Validator(config, '#registrationForm')

document.querySelector('#registrationForm').addEventListener('submit', e => {

    if(validator.validationPassed())
    {
        document.querySelector('#registrationForm #btn').value = "true"; 
    }
    else
        alert('Polja nisu dobro popunjena')
})

   
let lgn = document.querySelector('#loginForm #btn')

lgn.addEventListener('click', e => {
    if(isNaN(email) || isNaN(password))
    {
        document.querySelector('#loginForm #btn').value = "true"; 
    }
    
})



