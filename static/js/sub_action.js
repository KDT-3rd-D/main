// action random movies array
const movies = [{
    title: "분노의 질주: 더 세븐",
    desc: "역대 최강의 멤버 VS 사상 최악의 상대",
    age: "15",
    ott: ['왓챠', '웨이브'],
  },
  {
    title: "탑건: 매버릭",
    desc: "한순간의 실수도 용납되지 않는 하늘 위, 가장 압도적인 비행이 시작된다!",
    age: "12",
    ott: ['웨이브'],
  },
  {
    title: "어벤져스: 인피니티 워",
    desc: "새로운 조합을 이룬 어벤져스, 역대 최강 빌런 타노스에 맞서 세계의 운명이 걸린 인피니티 스톤을 향한 무한 대결이 펼쳐진다!",
    age: "12",
    ott: ['웨이브'],
  },
  {
    title: "범죄도시",
    desc: "통쾌하고! 화끈하고! 살벌하게! 올 추석, 나쁜 놈들 때려잡는 강력반 형사들의 ‘조폭소탕작전’이 시작된다!",
    age: "19",
    ott: ['왓챠', '티빙', '웨이브'],

  },
  {
    title: "베테랑",
    desc: "베테랑 광역수사대 VS 유아독존 재벌 3세 자존심을 건 한판 대결이 시작된다!",
    age: "15",
    ott: ['왓챠', '티빙', '웨이브'],
  },
  {
    title: "그레이 맨",
    desc: "CIA의 사주를 받은 소시오패스 전 동료에게 쫓기며 시작되는 액션 블록버스터",
    age: "15",
    ott: ['넷플릭스'],
  },
  {
    title: "미션 임파서블: 폴아웃",
    desc: "예측 할 수 없는 미션. 피할 수 없는 선택",
    age: "15",
    ott: ['웨이브'],
  },
  {
    title: "인셉션",
    desc: "꿈 VS 현실 시간, 규칙, 타이밍 모든 것이 완벽해야만 하는, 단 한 번도 성공한 적 없는 ‘인셉션’ 작전이 시작된다!",
    age: "12",
    ott: ['왓챠','티빙', '웨이브'],
  },
  {
    title: "공조",
    desc: "그들에게 주어진 시간은 단 3일, 한 팀이 될 수 없는 남북 형사의 예측불가 공조수사가 시작된다!",
    age: "15",
    ott: ['왓챠', '티빙', '웨이브'],
  },
  {
    title: "유체이탈자",
    desc: "진짜 나를 찾기 위한 본능적 액션이 시작된다!",
    age: "15",
    ott: ['넷플릭스', '티빙', '웨이브'],
  },
];

$(document).ready(function () {

  window.onload = function () {
    let i = Math.floor(Math.random() * 10);
    $('.random-video').attr('src', `../static/video/random_action${i}.mp4`);
    // 플레이 상세설명 변경
    let title = document.querySelector('.title');
    let decs = document.querySelector('.decs');
    let ageColor = document.querySelector('.age-color');
    title.innerHTML = movies[i].title;
    decs.innerHTML = `: ${movies[i].desc}`;
    ageColor.innerHTML = movies[i].age;

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

    // reset
    netflix.classList.add('none');
    watcha.classList.add('none');
    tving.classList.add('none');
    disney.classList.add('none');
    wavve.classList.add('none');

    if (movies[i].ott.indexOf('넷플릭스') > -1) {
      netflix.classList.remove('none');
    };
    if (movies[i].ott.indexOf('왓챠') > -1) {
      watcha.classList.remove('none');
    };
    if (movies[i].ott.indexOf('티빙') > -1) {
      tving.classList.remove('none');
    };
    if (movies[i].ott.indexOf('디즈니') > -1) {
      disney.classList.remove('none');
    };
    if (movies[i].ott.indexOf('웨이브') > -1) {
      wavve.classList.remove('none');
    };

    if (movies[i].age === '12') {
      $('.age-color').css('background', '#23A2E4').removeClass('none');
    } else if (movies[i].age === '15') {
      $('.age-color').css('background', '#EDA128').removeClass('none');
    } else if (movies[i].age === '19') {
      $('.age-color').css('background', '#CA2324').removeClass('none');
    } else {
      $('.age-color').css('background', '#3EA14F')
    };
  }
  // 버튼 눌렀을때 랜덤 플레이
  $('button').click(function () {
    let i = Math.floor(Math.random() * 10);
    $('video').attr('src', `../static/video/random_action${i}.mp4`);
    // 플레이 상세설명 변경
    console.log(movies[i]);
    let title = document.querySelector('.title');
    let decs = document.querySelector('.decs');
    let ageColor = document.querySelector('.age-color');
    title.innerHTML = movies[i].title;
    decs.innerHTML = `: ${movies[i].desc}`;
    ageColor.innerHTML = movies[i].age;

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

    // reset
    netflix.classList.add('none');
    watcha.classList.add('none');
    tving.classList.add('none');
    disney.classList.add('none');
    wavve.classList.add('none');

    if (movies[i].ott.indexOf('넷플릭스') > -1) {
      netflix.classList.remove('none');
    };
    if (movies[i].ott.indexOf('왓챠') > -1) {
      watcha.classList.remove('none');
    };
    if (movies[i].ott.indexOf('티빙') > -1) {
      tving.classList.remove('none');
    };
    if (movies[i].ott.indexOf('디즈니') > -1) {
      disney.classList.remove('none');
    };
    if (movies[i].ott.indexOf('웨이브') > -1) {
      wavve.classList.remove('none');
    };

    if (movies[i].age === '12') {
      $('.age-color').css('background', '#23A2E4').removeClass('none');
    } else if (movies[i].age === '15') {
      $('.age-color').css('background', '#EDA128').removeClass('none');
    } else if (movies[i].age === '19') {
      $('.age-color').css('background', '#CA2324').removeClass('none');
    } else {
      $('.age-color').css('background', '#3EA14F')
    };
  });
});