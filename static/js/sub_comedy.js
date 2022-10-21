// comedy random movies array
const movies = [{
    title: "스파이",
    desc: "작전은 완벽했다, 그들이 끼어들기 전까진!",
    age: "15",
    ott: ['왓챠', '웨이브'],
  },
  {
    title: "데드풀",
    desc: "정의감 제로, 책임감 제로, 정신은 인터스텔라급 마블 역사상 가장 매력 터지는 히어로 `데드풀`이 온다!",
    age: "19",
    ott: ['웨이브'],
  },
  {
    title: "엑시트",
    desc: "짠내 폭발 청년백수, 전대미문의 진짜 재난을 만나다!",
    age: "15",
    ott: ['왓챠', '티빙', '웨이브'],
  },
  {
    title: "청년경찰",
    desc: "현장경험 전무, 수사는 책으로 배웠다!“그냥 우리가 잡아볼게요”",
    age: "15",
    ott: ['넷플릭스', '왓챠', '티빙', '웨이브'],
  },
  {
    title: "19곰 테드",
    desc: "전세계를 홀린 진정한 짐승남이 온다!애 같은 남자와 남자 같은 곰의 발칙한 우정!",
    age: "19",
    ott: ['티빙', '웨이브'],
  },
  {
    title: "극한직업",
    desc: "낮에는 치킨장사! 밤에는 잠복근무!지금까지 이런 수사는 없었다!",
    age: "15",
    ott: ['왓챠', '티빙', '웨이브'],
  },
  {
    title: "스물",
    desc: "인생의 가장 부끄러운 순간을 함께 한 스무살 동갑내기 세 친구의 자체발광 코미디!",
    age: "15",
    ott: ['넷플릭스', '왓챠', '웨이브'],
  },
  {
    title: "완벽한 타인",
    desc: "우리 게임 한 번 해볼까? 다들 핸드폰 올려봐저녁 먹는 동안 오는 모든 걸 공유하는 거야전화, 문자, 카톡, 이메일 할 것 없이 싹!",
    age: "15",
    ott: ['티빙', '왓챠', '웨이브'],
  },
  {
    title: "부라더",
    desc: "가보도 팔아먹는 형 VS 집안도 팔아먹는 동생, 제대로 사고 쳤다!",
    age: "12",
    ott: ['왓챠'],
  },
  {
    title: "써니",
    desc: "나의 친구 우리들의 추억 ‘써니’가장 찬란한 순간, 우리는 하나였다!",
    age: "15",
    ott: ['왓챠', '티빙', '웨이브'],
  },
];

$(document).ready(function () {

  window.onload = function () {
    let i = Math.floor(Math.random() * 10);
    $('.random-video').attr('src', `../static/video/random_comedy${i}.mp4`);
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
    $('video').attr('src', `../static/video/random_comedy${i}.mp4`);
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