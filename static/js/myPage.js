// 스크롤 값에 따른 화면 등장과 아웃
$(document).ready(function(){
// 스크롤이벤트를 사용하여 일정영역이상으로 내려가면 위 서식을 적용한다.
$(window).scroll(function(){
let sPos = $(this).scrollTop();
console.log(sPos);//스크롤값을 체크한다.
if(sPos>=200){
  $( '.cont-body' ).fadeIn( 1000, 'swing');
}else{
  $( '.cont-body' ).fadeOut( 1000, 'swing');
}

});
});

// 스크롤 이벤트 적용시 슬라이드가 안됨