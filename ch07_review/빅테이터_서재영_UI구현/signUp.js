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
    alert(`“회원가입 성공! 로그인 페이지로 이동합니다.`);
    localStorage.setItem("users", JSON.stringify(users));
    window.location.replace("./signIn.html");
}

signUpBtn.addEventListener('click', signUp);
