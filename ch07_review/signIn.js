document.getElementById('loginbtn').addEventListener('click', login);
document.getElementById('signinbtn').addEventListener('click', signin);
document.getElementById('findpassword').addEventListener('click', findpw);
document.getElementById('deleteuser').addEventListener('click', leave);

function login(){
    const inputId = inputId.value.trim();
    const inputPw = inputPw.value.trim();
    const savedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const savedUser = savedUser.find(user => user.id === inputId.value);

    if(inputId.value === "" || inputPw.value === ""){
        alert("비어있는 칸이 있습니다. ");

        return;
    }
    
    if(!savedUser){
        alert("아이디 또는 비밀 번호가 틀렸습니다.");
        return;
    }

    if(inputPw.value === savedUser.pw){
        alert(savedUser.name + "님 로그인 성공");

        succesLogin();
        localStorage.setItem("login", "true");
    } else{
        alert("아이디 또는 비밀번호가 틀렸습니다.");
    }
}

function signin(){
    let forms = document.querySelector('.container');
    
    forms.innerHTML = '';

    const createName = document.createElement('input');
    createName.type = 'text';
    createName.id = 'username';
    createName.placeholder = '이름을 입력하세요';
    createName.autocomplete = 'off';
    
    const createId = document.createElement('input');
    createId.type = 'text';
    createId.id = 'creteId';
    createId.placeholder = "생성할 ID를 입력 하세요";
    createId.autocomplete = 'off';

    const createPw = document.createElement('input');
    createId.type = 'password';
    createId.id = 'cretePw';
    createId.placeholder = "PW를 입력하세요";
    createId.autocomplete = 'off';

    const signIn = document.createElement('button');
    signIn.id = 'signin';
    signIn.innerText = '회원가입';

    signIn.addEventListener('click', createAccount);

    const span = document.createElement('span');
    span.className = 'input-container';

    span.appendChild(createName);
    span.appendChild(createId);
    span.appendChild(createPw);
    span.appendChild(signIn);
    forms.appendChild(span);
    
}

function createAccount() {
    const username = document.getElementById('username');
    const createId = document.getElementById('createId');
    const createPw = document.getElementById('createPw');
}

loginBtn.addEventListener('click', login);