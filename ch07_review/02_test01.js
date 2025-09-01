const loginBtn = document.getElementById('loginBtn');
const signUpBtn = document.getElementById('signUpBtn');
const inputId = document.getElementById('inputId');
const inputPw = document.getElementById('inputPw');

let users = JSON.parse(localStorage.getItem('users')) || [];

function signUp() {  
    const idInput = inputId.value.trim();
    const pwIntput = inputPw.value.trim();
    const user = { id : idInput, pw: pwIntput };

    users.push(user);
    alert(`${idInput}님 회원가입 하셨습니다.`);
    localStorage.setItem("users", JSON.stringify(users));
}

signUpBtn.addEventListener('click', signUp);
