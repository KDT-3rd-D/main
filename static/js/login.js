const inputPw = document.querySelector('.input-pw');
const loginBtn = document.querySelector('.login-button');

//8보다 작으면 경고메세지.
//8자리보다 작으면 띄웠던 경고메세지를 8자리 이상 입력하면 다시 지워야함
//비밀번호 8자리 이하여도 submit 됨 -> 비밀번호 8자리 미만일땐 버튼 disabled처리/ 8자리 이상이면 disabled 빼기.
inputPw.addEventListener('input', function() {
  if(inputPw.value.length < 8) {
    document.querySelector('.pw-warning').innerText = '8자리 이상 입력하세요!';
    loginBtn.disabled = true;
  } else if(inputPw.value.length >= 8) {
    document.querySelector('.pw-warning').innerText = '';
    loginBtn.disabled = false;
  }
});


// button[type="submit"] 클릭시
// form 태그 요소에서 form 이벤트 중에서 submit 이벤트
// / 경로로 이동 
const form = document.querySelector('.login-container');
const inputEmail = document.querySelector('.input-email');
console.log(loginBtn)
console.log(inputEmail)

form.addEventListener('submit', function(event) {
  event.preventDefault(); // 폼 제출되는 기본 동작 막기
  location.href ='/';
});
