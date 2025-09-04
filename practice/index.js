const inputId = document.getElementById('inputId');
const inputPw = document.getElementById('inputPw');
const userId = inputId.value;

function login() {
  const userId = document.getElementById('inputId').value;
  const userPw = document.getElementById('inputPw').value;
  let flag = false;
  let userName = '';


  if (userId === "" || userPw === "") {
    alert("빈 칸 없이 모두 입력하세요!");
    return;
  }

  const users = JSON.parse(localStorage.getItem("users")) || [];
  // const newUser = { id: userId, pw: userPw, name: userName };
  users.forEach(element => { 
      if (element.id === userId && element.pw === userPw){
        flag = true;
        userName = element.name;
      }
  });

  if(flag) {
      alert(userName + "님, 로그인 완료!");
  }
  else {
      alert("아이디 또는 비밀번호가 틀렸습니다.");
  }

  localStorage.setItem("users", JSON.stringify(users)); 
}



