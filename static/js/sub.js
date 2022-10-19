const movies = [{
  title: "여름날 우리",
  desc: "처음이었다, 사랑이 싹트는 기분",
  age: "12",
  ott: ['티빙', '웨이브'],
},
{
  title: "동감",
  desc: "다른 시간 속 우리가 연결되었다.",
  age: "15",
  ott: ['티빙', '웨이브'],
},
{
  title: "연애 빠진 로맨스",
  desc: "외로운건 싫지만 연애는 하고싶어?",
  age: "15",
  ott: ['티빙', '웨이브'],
},
{
  title: "영화의 거리",
  desc: "헤어진 연인에서 일로 만난 사이가 된 이들",
  age: "15",
  ott: ['넷플릭스', '티빙', '웨이브'],

},
{
  title: "너의 결혼식",
  desc: "기억하나요? 당신의 첫사랑",
  age: "15",
  ott: ['넷플릭스', '왓챠', '티빙', '웨이브'],
},
{
  title: "노트북",
  desc: "그녀와의 약속을 지키고 싶습니다.",
  age: "15",
  ott: ['넷플릭스', '웨이브'],
},
{
  title: "가장 보통의 연애",
  desc: "만난 지 하루 만에 일보다 서로의 연애사를 더 잘 알게 된 두 사람.",
  age: "15",
  ott: ['넷플릭스', '왓챠', '티빙', '웨이브'],
},
{
  title: "뷰티 인사이드",
  desc: "한 달에 일주일 타인의 얼굴로 살아가는 여자와 일 년 열두 달 타인의 얼굴을 알아보지 못하는 남자의 조금은 특별한 로맨스",
  age: "15",
  ott: ['왓챠'],
},
{
  title: "비와 당신의 이야기",
  desc: "이건 기다림에 관한 이야기다",
  age: "ALL",
  ott: ['티빙', '웨이브'],
},
{
  title: "20세기 소녀",
  desc: `1999년, 단짝 친구가 홀딱 반한 남학생을 친구 대신 관찰해 주기로 한 10대 소녀.
  하지만 소녀에게도 예기치 못한 사랑이 찾아온다 `,
  age: "12",
  ott: ['넷플릭스'],
},
{
  title: "노트르담",
  desc: '나는 꿈을 짓는 건축가 “사랑도 다시 지을 수 있나요?"',
  age: "15",
  ott: ['웨이브'],
},
];

$(document).ready(function () {
// 버튼 눌렀을때 랜덤 플레이
$('.button').click(function () {
  let i = Math.floor(Math.random() * 10)
  $('video').attr('src', `../static/image/random_romance${i}.mp4`)
  // 플레이 상세설명 변경
  console.log(movies[i]);
  let title = document.querySelector('.title');
  let decs = document.querySelector('.decs')
  let ageColor = document.querySelector('.age-color')
  title.innerHTML = movies[i].title
  decs.innerHTML = `: ${movies[i].desc}`
  ageColor.innerHTML = movies[i].age

  // 지원 ott 표기
  let netflix = document.querySelector(".netflix");
  let watcha = document.querySelector(".watcha");
  let tving = document.querySelector(".tving");
  let disney = document.querySelector(".disney");
  let wavve = document.querySelector(".wavve");

  // console.log('넷플릭스', movies[i].ott.indexOf('넷플릭스'))
  // console.log('왓챠', movies[i].ott.indexOf('왓챠'))
  // console.log('티빙', movies[i].ott.indexOf('티빙'))
  // console.log('디즈니', movies[i].ott.indexOf('디즈니'))
  // console.log('웨이브', movies[i].ott.indexOf('웨이브'))

  netflix.classList.add('none');
  watcha.classList.add('none');
  tving.classList.add('none');
  disney.classList.add('none');
  wavve.classList.add('none');

  if (movies[i].ott.indexOf('넷플릭스') > -1) {
    netflix.classList.remove('none');
  }
  if (movies[i].ott.indexOf('왓챠') > -1) {
    watcha.classList.remove('none');
  }
  if (movies[i].ott.indexOf('티빙') > -1) {
    tving.classList.remove('none');
  }
  if (movies[i].ott.indexOf('디즈니') > -1) {
    disney.classList.remove('none');
  }
  if (movies[i].ott.indexOf('웨이브') > -1) {
    wavve.classList.remove('none');
  }

  if (movies[i].age === '12') {
    $('.age-color').css('background', '#23A2E4').removeClass('none')
  } else if (movies[i].age === '15') {
    $('.age-color').css('background', '#EDA128')
  } else if (movies[i].age === '19') {
    $('.age-color').css('background', '#CA2324').removeClass('none')
  } else {
    $('.age-color').css('background', '#3EA14F')
  }

})




// 네비바 토글
var open = false; //네비가 열려있으면(true) , 닫혀있으면(false)
// var op = false; //네비가 열려있으면(true) , 닫혀있으면(false)
$('.menu-toggle').click(function () {
  $('.top-nav').addClass('mn-open');
  $('.top-nav .nav').slideDown();
  $('.menu-open').addClass('mn-open');

}, function () {
  // $('.top-nav .nav').slideUp();
  // $('.menu-open').removeClass('mn-open');
  // $('.top-nav').removeClass('mn-open');
});

// wide pc nav scroll event
$(window).on('scroll', function () {
  var scroll = $(window).scrollTop();
  var winSize = $(window).width();

  //$('.text').text(scroll);          
  if (winSize > 1024) {
    if (scroll > 600) {
      $('.top-nav').css('background', 'rgba(0,0,0,.8)');

    } else {
      $('.top-nav').css('background', 'none');
    }
  } else {
    $('.top-nav').css('background', 'rgba(0,0,0,.8)');
  }
});
});