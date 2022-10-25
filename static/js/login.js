//pw: 8자리 미만 입력후 로그인 버튼 누르면 경고메세지 띄우는 코드
//(입력할때마다 카운트되며, 8자리이상 입력시 경고메세지 자동으로 사라짐)
const inputPw = document.querySelector('.login-input-pw');
const loginBtn = document.querySelector('.login-button');

//비밀번호 8자리 미만일땐 로그인버튼 disabled = true / 8자리 이상이면 disabled = false
inputPw.addEventListener('input', function() {
  if(inputPw.value.length < 8) {
    document.querySelector('.login-pw-warning').innerText = '8자리 이상 입력하세요!';
    loginBtn.disabled = true;
  } else if(inputPw.value.length >= 8) {
    document.querySelector('.login-pw-warning').innerText = '';
    loginBtn.disabled = false;
  }
});


// button[type="submit"] 클릭시
// form 태그 요소에서 form 이벤트 중에서 submit 이벤트
// '/' 경로(메인페이지)로 이동 
const form = document.querySelector('.login-container');
const inputEmail = document.querySelector('.login-input-email');
console.log(loginBtn)
console.log(inputEmail)

form.addEventListener('submit', function(event) {
  event.preventDefault(); // 폼 제출되는 기본 동작 막기
  location.href ='/home';
});
