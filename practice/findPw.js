// 그럼 비밀 번호 찾기 이름 아이디 입력만 하면 비밀번호를 띄워주기!

const inputName = document.getElementById('inputName')
const inputId = document.getElementById('inputId')

function findPw() {
    const userId = document.getElementById('inputId').value;
    const userName = document.getElementById('inputName').value;

    if(!userId || !userName){
        alert(`이름과 아이디를 모두 입력해주세요`);
        return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || []; 

    const foundUser = users.find(user => user.id === userId && user.name === userName);

    if(foundUser){
        alert(`회원님의 비밀번호는 ${foundUser.pw} `)
        return;
    }
    else {
        alert(`사용자와 일치하는 정보가 없습니다.`)
        return;
    }
    
}