// romance random movies array
const movies = [
  {
    title: "여름날 우리",
    desc: "처음이었다, 사랑이 싹트는 기분",
    age: "12",
    ott: ["티빙", "웨이브"],
    runtime: "115분",
    story: `처음이었다, 사랑이 싹트는 기분
    너에게 풍덩 빠져버렸던 17살의 여름.
    너를 두고 아무것도 할 수 없었던 21살의 여름.
    그리고 몇번의 여름이 지나고 다시 만난 너,
    이젠 놓치지 않을 거야.
    ‘널 만난 건 내 인생 최고의 행운이었어’`,
  },
  {
    title: "동감",
    desc: "다른 시간 속 우리가 연결되었다.",
    age: "15",
    ott: ["티빙", "웨이브"],
    runtime: "114분",
    story: ` 1999년, '용'은 첫눈에 반하게 된 '한솔'을 사로잡기 위해 
    친구에게 HAM 무전기를 빌린다.
    2022년, ‘무늬’는 인터뷰 과제를 위해 
    오래된 HAM 무전기를 작동시킨다.
    "씨큐... 씨큐... 제 목소리 들리세요?"
    개기 월식이 일어난 날,
    시간을 뛰어넘어 기적처럼 연결된 ‘용’과 ‘무늬’는
    서로의 사랑과 우정을 이야기하며 특별한 감정을 쌓아가는데...
    1999 - 2022
    마음을 수신합니다.`,
  },
  {
    title: "연애 빠진 로맨스",
    desc: "외로운건 싫지만 연애는 하고싶어?",
    age: "15",
    ott: ["티빙", "웨이브"],
    runtime: "95분",
    story: `일도 연애도 마음대로 되지 않는 스물아홉 '자영'(전종서).
    전 남친과의 격한 이별 후 호기롭게 연애 은퇴를 선언했지만
    참을 수 없는 외로움에 못 이겨 최후의 보루인 데이팅 어플로 상대를 검색한다.
    일도 연애도 호구 잡히기 일쑤인 서른셋 '우리'(손석구).
    뒤통수 제대로 맞은 연애의 아픔도 잠시
    편집장으로부터 19금 칼럼을 떠맡게 되고 데이팅 어플에 반강제로 가입하게 된다.
    그렇게 설 명절 아침!
    이름, 이유, 마음 다 감추고 만난 '자영'과 '우리'.
    1도 기대하지 않았지만, 1일 차부터 둘은 서로에게 급속도로 빠져들게 되고
    연애인 듯 아닌 듯 미묘한 관계 속에 누구 하나 속마음을 쉽게 터놓지 못하는데...
    이게 연애가 아니면 도대체 뭔데?
    발 빼려다 푹 빠졌다!`,
  },
  {
    title: "영화의 거리",
    desc: "헤어진 연인에서 일로 만난 사이가 된 이들",
    age: "15",
    ott: ["넷플릭스", "티빙", "웨이브"],
    runtime: "77분",
    story: `일도 연애도 마음대로 되지 않는 스물아홉 '자영'(전종서).
    전 남친과의 격한 이별 후 호기롭게 연애 은퇴를 선언했지만
    참을 수 없는 외로움에 못 이겨 최후의 보루인 데이팅 어플로 상대를 검색한다...`,
  },
  {
    title: "너의 결혼식",
    desc: "기억하나요? 당신의 첫사랑",
    age: "15",
    ott: ["넷플릭스", "왓챠", "티빙", "웨이브"],
    runtime: "110분",
    story: `기억하나요? 당신의 첫사랑
    고3 여름, 전학생 ‘승희’(박보영)를 보고 첫눈에 반한 ‘우연’(김영광).
    승희를 졸졸 쫓아다닌 끝에 마침내 공식커플로 거듭나려던 그때!
    잘 지내라는 전화 한 통만 남긴 채 승희는 사라져버리고,
    우연의 첫사랑은 그렇게 막을 내리는 듯했다.
    1년 뒤, 승희의 흔적을 쫓아 끈질긴 노력으로 같은 대학에 합격한 우연.
    그런데 그의 앞을 가로막은 건… 다름 아닌 그녀의 남.자.친.구!
    예술로 빗나가는 타이밍 속
    다사다난한 그들의 첫사랑 연대기는 계속된다!`,
  },
  {
    title: "노트북",
    desc: "그녀와의 약속을 지키고 싶습니다.",
    age: "15",
    ott: ["넷플릭스", "웨이브"],
    runtime: "123분",
    story: `17살, ‘노아’는 밝고 순수한 ‘앨리’를 보고 첫눈에 반한다.
    빠른 속도로 서로에게 빠져드는 둘.
    그러나 이들 앞에 놓인 장벽에 막혀 이별하게 된다.
    24살, ‘앨리’는 우연히 신문에서 ‘노아’의 소식을 접하고
    잊을 수 없는 첫사랑 앞에서
    다시 한 번 선택의 기로에 서게 되는데…
    열일곱의 설렘, 스물넷의 아픈 기억, 그리고 마지막까지…
    한 사람을 지극히 사랑했으니 내 인생은 성공한 인생입니다.`,
  },
  {
    title: "가장 보통의 연애",
    desc: "만난 지 하루 만에 일보다 서로의 연애사를 더 잘 알게 된 두 사람.",
    age: "15",
    ott: ["넷플릭스", "왓챠", "티빙", "웨이브"],
    runtime: "109분",
    story: `전 여친에 상처받은 ‘재훈’(김래원).
    여느 때처럼 숙취로 시작한 아침,
    모르는 번호의 누군가와 밤새 2시간이나 통화한 기록을 발견하게 되고 그 상대가 바로! 통성명한 지 24시간도 채 되지 않은 직장 동료 ‘선영’임을 알게 된다.
    남친과 뒤끝 있는 이별 중인 ‘선영’(공효진).
    새로운 회사로 출근한 첫날, 할 말 못 할 말 쏟아내며 남친과 헤어지던 현장에서 하필이면! 같은 직장의 ‘재훈’을 마주친다.
    만난 지 하루 만에 일보다 서로의 연애사를 더 잘 알게 된 두 사람.
    하지만 미묘한 긴장과 어색함도 잠시
    ‘한심하다’, ‘어이없다’ 부딪히면서도 마음이 쓰이는 건 왜 그럴까?`,
  },
  {
    title: "뷰티 인사이드",
    desc: "한 달에 일주일 타인의 얼굴로 살아가는 여자와 일 년 열두 달 타인의 얼굴을 알아보지 못하는 남자의 조금은 특별한 로맨스",
    age: "12",
    ott: ["왓챠"],
    runtime: "127분",
    story: `남자, 여자, 아이, 노인.. 심지어 외국인까지! 자고 일어나면 매일 다른 모습으로 변하는 남자, ‘우진’. 그에게 처음으로 비밀을 말하고 싶은 단 한 사람이 생겼다.드디어 D-DAY!
    ‘우진’은 그녀에게 자신의 마음을 고백하기로 하는데…
    “초밥이 좋아요? 스테이크가 좋아요?
    사실.. 연습 엄청 많이 했어요.
    오늘 꼭 그쪽이랑 밥 먹고 싶어서…”`,
  },
  {
    title: "비와 당신의 이야기",
    desc: "이건 기다림에 관한 이야기다",
    age: "ALL",
    ott: ["티빙", "웨이브"],
    runtime: "117분",
    story: `“이건 기다림에 관한 이야기다”
    뚜렷한 꿈도 목표도 없이 지루한 삼수 생활을 이어가던 '영호'(강하늘),
    오랫동안 간직해온 기억 속 친구를 떠올리고 무작정 편지를 보낸다.
    자신의 꿈은 찾지 못한 채 엄마와 함께 오래된 책방을 운영하는 '소희'(천우희)는
    언니 '소연'에게 도착한'영호'의 편지를 받게 된다.
    “몇 가지 규칙만 지켜줬으면 좋겠어.
    질문하지 않기, 만나자고 하기 없기 그리고 찾아오지 않기.”
    '소희'는 아픈 언니를 대신해 답장을 보내고 두 사람은 편지를 이어나간다.
    우연히 시작된 편지는 무채색이던 두 사람의 일상을 설렘과 기다림으로 물들이기 시작하고,
    '영호'는 12월 31일 비가 오면 만나자는 가능성이 낮은 제안을 하게 되는데...`,
  },
  {
    title: "20세기 소녀",
    desc: `1999년, 단짝 친구가 홀딱 반한 남학생을 친구 대신 관찰해 주기로 한 10대 소녀.
    하지만 소녀에게도 예기치 못한 사랑이 찾아온다 `,
    age: "12",
    ott: ["웨이브"],
    runtime: "129분",
    story: `어느 겨울 도착한 비디오 테이프에 담긴 1999년의 기억, 17세 소녀 ‘보라’가 절친 ‘연두’의 첫사랑을 이루어주기 위해 사랑의 큐피트를 자처하며 벌어지는 첫사랑 관찰 로맨스.`,
  },
];

$(document).ready(function () {
  window.onload = function () {
    let i = Math.floor(Math.random() * 10);
    $(".random-video").attr("src", `../static/video/random_romance${i}.mp4`);
    // 플레이 상세설명 변경
    let title = document.querySelector(".title");
    let decs = document.querySelector(".decs");
    let ageColor = document.querySelector(".age-color");
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
    netflix.classList.add("none");
    watcha.classList.add("none");
    tving.classList.add("none");
    disney.classList.add("none");
    wavve.classList.add("none");

    if (movies[i].ott.indexOf("넷플릭스") > -1) {
      netflix.classList.remove("none");
    }
    if (movies[i].ott.indexOf("왓챠") > -1) {
      watcha.classList.remove("none");
    }
    if (movies[i].ott.indexOf("티빙") > -1) {
      tving.classList.remove("none");
    }
    if (movies[i].ott.indexOf("디즈니") > -1) {
      disney.classList.remove("none");
    }
    if (movies[i].ott.indexOf("웨이브") > -1) {
      wavve.classList.remove("none");
    }

    // 랜덤 연령 색상 변경
    if (movies[i].age === "12") {
      $(".age-color").css("background", "#23A2E4").removeClass("none");
    } else if (movies[i].age === "15") {
      $(".age-color").css("background", "#EDA128").removeClass("none");
    } else if (movies[i].age === "19") {
      $(".age-color").css("background", "#CA2324").removeClass("none");
    } else {
      $(".age-color").css("background", "#3EA14F");
    }
  };

  // 버튼 눌렀을때 랜덤 플레이
  $("button").click(function () {
    let i = Math.floor(Math.random() * 10);
    $(".random-video").attr("src", `../static/video/random_romance${i}.mp4`);
    // 플레이 상세설명 변경
    console.log(movies[i]);
    let title = document.querySelector(".title");
    let decs = document.querySelector(".decs");
    let ageColor = document.querySelector(".age-color");
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
    netflix.classList.add("none");
    watcha.classList.add("none");
    tving.classList.add("none");
    disney.classList.add("none");
    wavve.classList.add("none");

    if (movies[i].ott.indexOf("넷플릭스") > -1) {
      netflix.classList.remove("none");
    }
    if (movies[i].ott.indexOf("왓챠") > -1) {
      watcha.classList.remove("none");
    }
    if (movies[i].ott.indexOf("티빙") > -1) {
      tving.classList.remove("none");
    }
    if (movies[i].ott.indexOf("디즈니") > -1) {
      disney.classList.remove("none");
    }
    if (movies[i].ott.indexOf("웨이브") > -1) {
      wavve.classList.remove("none");
    }

    if (movies[i].age === "12") {
      $(".age-color").css("background", "#23A2E4").removeClass("none");
    } else if (movies[i].age === "15") {
      $(".age-color").css("background", "#EDA128").removeClass("none");
    } else if (movies[i].age === "19") {
      $(".age-color").css("background", "#CA2324").removeClass("none");
    } else {
      $(".age-color").css("background", "#3EA14F");
    }
  });
});

//----------------------------------------------hover animation
let hoverBox = document.querySelectorAll(".hoverbox");
let hoverBoxVd = document.querySelectorAll(".top-video");
let movieImg = document.querySelectorAll(".movie > img");
let modalBox = document.querySelectorAll(".modal-box");
let modalBg = document.querySelector(".modal-bg");
let hoverFilter = document.querySelector(".hover-filter");

for (let i = 0; i < movieImg.length; i++) {
  movieImg[i].addEventListener("mouseenter", function () {
    //hoverFilter
    hoverFilter.style.zIndex = "1";
    // movieImg
    movieImg[i].style.zIndex = "-1";
    movieImg[i].style.transform = "scale(1.5)";
    movieImg[i].style.opacity = "0";
    // hoverBox
    hoverBox[i].style.zIndex = "2";
    hoverBox[i].style.opacity = "1";
    hoverBox[i].style.width = "350px";
    hoverBoxVd[i].style.width = "350px";
  });
}

for (let i = 0; i < hoverBox.length; i++) {
  hoverBox[i].addEventListener("mouseleave", function () {
    //hoverFilter
    hoverFilter.style.zIndex = "0";
    // movieImg
    movieImg[i].style.zIndex = "1";
    movieImg[i].style.transform = "scale(1)";
    movieImg[i].style.width = "200px";
    movieImg[i].style.height = "300px";
    movieImg[i].style.opacity = "1";
    // hoverBox
    hoverBox[i].style.zIndex = "-1";
    hoverBox[i].style.opacity = "0";
    hoverBox[i].style.width = "250px";
    hoverBoxVd[i].style.width = "250px";
  });
}

// modal 등장 - fade in , fade out
$(function () {
  $(".fa-chevron-down").click(function () {
    $(".modal-bg").fadeIn(500);
    let v = $(".modal-img").find("video").get(0);
    v.play();
    $(".cont-title").text(movies[0].title);
  });
  $(".modal-close-btn").click(function () {
    $(".modal-bg").fadeOut(500);
  });
  $(".modal-exit").click(function () {
    $(".modal-bg").fadeOut(500);
  });

  // 모달창 등장 시, 배경(body)부분의 콘텐츠 고정 , 모달창 내부만 스크롤 생성 및 작동
  var posY;

  $(".bnt_open").on("click", function (e) {
    posY = $(window).scrollTop();

    $("html, body").addClass("not_scroll");
    $(".cont").css("top", -posY);
  });

  $(".bnt_close").on("click", function () {
    $("html, body").removeClass("not_scroll");
    posY = $(window).scrollTop(posY);
  });
});
