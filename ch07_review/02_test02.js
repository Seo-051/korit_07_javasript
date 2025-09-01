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
        alert(`${idInput}님 로그인 하셨습니다.`);
    } else {
        alert("아이디 또는 비밀번호가 틀렸습니다.");
    }
    return;
}

loginBtn.addEventListener('click', login);