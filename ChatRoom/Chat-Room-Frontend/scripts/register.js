const registerInputUserName = document.querySelector('#register-input-username');
const registerInputPassword = document.querySelector('#register-input-password');
const registerBtnStartBtn = document.querySelector('#register-start-btn');
let Loginarrow = document.querySelector('#Loginarrow');

const loginInputUserName = document.querySelector('#login-input-username');
const loginInputPassword = document.querySelector('#login-input-password');
const loginBtnStartBtn = document.querySelector('#login-start-btn');



let spanErrorMessage = document.querySelector('#error-message');

const btnLoginSwitch = document.querySelector('#btn-login-switch');
const btnRegisterSwitch = document.querySelector('#btn-register-switch');
const registerForm = document.querySelector('#register-form')
const loginForm = document.querySelector('#login-form')

let userDetails = {};


const registerUserRequest = () => {

    fetch('https://localhost:6001/api/Users/register', {
            method: 'POST',
            body: JSON.stringify(userDetails),
            headers: {
                'Content-Type': 'application/json',

            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            if (data.isSuccess) {
                // setUsername(data.data.username)
                window.location.href = '#login-form'
            } else {
                spanErrorMessage.innerText = data.message;
                spanErrorMessage.classList.remove('hidden');
            }
        })
        .catch(error => console.error(error));
}

const loginUserRequest = () => {
    fetch('https://localhost:6001/api/Users/login', {
            method: 'POST',
            body: JSON.stringify(userDetails),
            headers: {
                'Content-Type': 'application/json',

            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            if (data.isSuccess) {
                setUsername(data.data.username)
                window.location.href = '/chatRoom.html'
            } else {
                spanErrorMessage.innerText = data.message;
                spanErrorMessage.classList.remove('hidden');
            }
        })
        .catch(error => console.error(error));
}

const setUsername = userName => {
    localStorage.setItem('userName', userName);
}

const validateInputs = (userNameInput, passwordInput) => {
    return userNameInput.value.trim() == "" || passwordInput.value.trim() == ""
}


registerBtnStartBtn.addEventListener('click', () => {
    if (validateInputs(registerInputUserName, registerInputPassword)) {
        spanErrorMessage.innerText = "Please enter a valid username or password";
        spanErrorMessage.classList.remove('hidden');
        return;
    }
    Loginarrow.style.display = "initial";
    userDetails.username = registerInputUserName.value.trim();
    userDetails.password = registerInputPassword.value;

    registerUserRequest();
})

loginBtnStartBtn.addEventListener('click', () => {
    if (validateInputs(loginInputUserName, loginInputPassword)) {
        spanErrorMessage.innerText = "Please enter a valid username or password";
        spanErrorMessage.classList.remove('hidden');
        return;
    }

    userDetails.username = loginInputUserName.value.trim();
    userDetails.password = loginInputPassword.value;

    loginUserRequest();
})





registerInputUserName.addEventListener('focus', () => {
    spanErrorMessage.classList.add('hidden');
});
registerInputPassword.addEventListener('focus', () => {
    spanErrorMessage.classList.add('hidden');
})

btnLoginSwitch.addEventListener('click', () => {
    registerForm.classList.add('hidden');
    loginForm.classList.remove('hidden');
    spanErrorMessage = loginForm.querySelector('#error-message');
});
btnRegisterSwitch.addEventListener('click', () => {
    registerForm.classList.remove('hidden');
    loginForm.classList.add('hidden');
    spanErrorMessage = registerForm.querySelector('#error-message');
})