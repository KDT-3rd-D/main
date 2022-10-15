$(document).ready(function(){

// 사용자가 마우스로 li 태그를 오버하면
$('.content-movie-genre ul li').mouseenter(function(){

// 1. li의 너비가 20%에서 35%로 넓어지면서 영상과 콘텐츠가 보이게 한다.
$(this).stop().animate({'width':'40%'},400);
$(this).find('.bar').delay(300).animate({'opacity':'1','height':'35px'},400);

// 2. .info의 위치를 -500px에서 0px로 바꿔서 보이게 한다.
$(this).find('.info').delay(300).animate({'left':'20px'},400);
$(this).find('.genre-img iframe').animate({'opacity':'1'},400);

// 영상 플레이하기
let v = $(this).find('iframe').get(0); // 영상 객체변수 선언
v.play(); // 영상을 재생하라
});

// 마우스 아웃하면
$('.content-movie-genre ul li').mouseleave(function(){
$(this).stop().animate({'width':'20%'},300);
$(this).find('.bar').animate({'opacity':'0','height':'0px'},300);
$(this).find('.info').animate({'left':'-500px'},300);
$(this).find('.genre-img iframe').animate({'opacity':'0'},300);

let v = $(this).find('iframe').get(0);
v.currentTime=0;
v.pause();
});

// modal
$( '.movie-info-detail' ).click( function() {
  $( '.modal-bg' ).fadeIn( 1000, 'swing');
});
$( '.modal-close-btn' ).click( function() {
  $( '.modal-bg' ).fadeOut(1000);
});
});

// modalOpen() , modalClose()
// function modalOpen(){
//   let modal = document.querySelector('.modal-bg');
//   modal.style = 'display : block';
// }
// function modalClose(){
//   let modal = document.querySelector('.modal-bg');
//   modal.style = 'display : none';
// }

