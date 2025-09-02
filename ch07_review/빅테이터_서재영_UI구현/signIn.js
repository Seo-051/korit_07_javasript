const loginBtn = document.getElementById('loginBtn');
const signUpBtn = document.getElementById('signUpBtn');
const inputId = document.getElementById('inputId');
const inputPw = document.getElementById('inputPw');

let users = JSON.parse(localStorage.getItem('users')) || [];

function login(){
    const idInput = inputId.value.trim();
    const pwInput = inputPw.value.trim();
    const foundUser = users.find(user => user.id === idInput && user.pw === pwInput);

    if (foundUser) {
        alert("로그인 성공");
    } else {
        alert("로그인 실패");
    }
    return;
    
}

loginBtn.addEventListener('click', login);