// 그럼 비밀 번호 찾기 이름 아이디 입력만 하면 비밀번호를 띄워주기!

const inputName = document.getElementById('inputName')
const inputId = document.getElementById('inputId')

function findPw() {
    const userId = document.getElementById('inputId').value;
    const userName = document.getElementById('inputName').value;

    const users = JSON.parse(localStorage.getItem('users')) || []; 

    users.forEach(element => {
        if(inputName)
    });
}