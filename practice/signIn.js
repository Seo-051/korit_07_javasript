const inputId = document.getElementById('inputId');
const userId = inputId.value;

function signIn() {
  const userId = document.getElementById('inputId').value;
  const userPw = document.getElementById('inputPw').value;
  const userName = document.getElementById('inputName').value;

  if (userId === "" || userPw === "" || userName === "") {
    alert("빈 칸 없이 모두 입력하세요!");
    return;
  }

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const isExist = users.find(user => user.id === userId);
  if (isExist) {
    alert("이미 존재하는 아이디입니다!");
    return;
  }

  const newUser = { id: userId, pw: userPw, name: userName };
  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));

  alert(userName + "님, 회원가입 완료!");
  // TODO: 로그인 화면으로 돌아가는 코드나 초기화 함수 호출
}
