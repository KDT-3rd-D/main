// SF random movies array
const movies = [
  {
    title: "그래비티",
    desc: "허블 우주망원경을 수리하기 위해 우주를 탐사하던 라이언 스톤 박사는 폭파된 인공위성의 잔해와 부딪히면서 소리도 산소도 없는 우주 한 가운데에 홀로 남겨지는데...",
    age: "12",
    ott: ["넷플릭스", "왓챠", "티빙", "웨이브"],
    runtime: "90분",
    story: `외계인도 우주전쟁도 없다!
    이것이, 누구도 경험하지 못한 진짜 재난이다!
    지구로부터 600km, 소리도 산소도 없다. 우주에서의 생존은 불가능하다. 허블 우주망원경을 수리하기 위해 우주를 탐사하던 스톤 박사는 폭파된 인공위성의 잔해와 부딪히면서 그곳에 홀로 남겨지는데...`,
    director: "",
    actorName: ["", "", "", "", "", "", "", ""],
    actorImg: ["", "", "", "", "", "", "", ""],
    reviews: ["", "", "", ""],
  },
  {
    title: "듄",
    desc: "“듄을 지배하는 자가 우주를 지배한다!”",
    age: "12",
    ott: ["웨이브"],
    runtime: "104분",
    story: `“듄을 지배하는 자가 우주를 지배한다!”
    10191년, 아트레이데스 가문의 후계자인 폴(티모시 샬라메)은 시공을 초월한 존재이자
    전 우주를 구원할 예지된 자의 운명을 타고났다.
    그리고 어떤 계시처럼 매일 꿈에서 아라키스 행성에 있는 한 여인을 만난다.
    모래언덕을 뜻하는 '듄'이라 불리는 아라키스는 물 한 방울 없는 사막이지만
    우주에서 가장 비싼 물질인 신성한 환각제 스파이스의 유일한 생산지로 이를 차지하기 위한 전쟁이 치열하다.
    황제의 명령으로 폴과 아트레이데스 가문은 죽음이 기다리는 아라키스로 향하는데…
    위대한 자는 부름에 응답한다, 두려움에 맞서라, 이것은 위대한 시작이다!`,
    director: "",
    actorName: ["", "", "", "", "", "", "", ""],
    actorImg: ["", "", "", "", "", "", "", ""],
    reviews: ["", "", "", ""],
  },
  {
    title: "문폴",
    desc: "인류 멸망 D-30일, 추락하는 달을 반드시 멈춰야 한다",
    age: "12",
    ott: ["티빙", "웨이브"],
    runtime: "130분",
    story: `1969년 인류의 위대한 도전, 달 착륙 성공
    2022년 인류 최후의 재난, 달이 지구와 충돌한다!
    궤도를 이탈한 달이 지구를 향해 떨어지기 시작하면서 지구의 중력과 모든 물리적인 법칙이 붕괴된다. 거대한 해일과 지진, 화산폭발, 쓰나미와 이상기후까지 상상조차 불가능했던 모든 재난으로 전 세계는 공포와 혼란에 빠진다. 달과 충돌까지 남은 시간은 단 30일. NASA 연구원 '파울러'(할리 베리), 전직 우주 비행사 '브라이언'(패트릭 윌슨), 그리고 우주 덕후 'KC'(존 브래들리)는 달을 막을 방법을 찾기 위해 마지막 우주선에 오른다.
    인류 멸망 D-30일, 추락하는 달을 반드시 멈춰야 한다`,
    director: "",
    actorName: ["", "", "", "", "", "", "", ""],
    actorImg: ["", "", "", "", "", "", "", ""],
    reviews: ["", "", "", ""],
  },
  {
    title: "매트릭스",
    desc: "인공지능 AI에 의해 인류가 재배되고 있다!",
    age: "12",
    ott: ["넷플릭스", "왓챠", "티빙", "웨이브"],
    runtime: "135분",
    story: `서기 2199년,
    인공지능 AI에 의해 인류가 재배되고 있다!
    인간의 기억마저 AI에 의해 입력되고 삭제 되는 세상. 진짜보다 더 진짜 같은 가상 현실 ‘매트릭스’. 그 속에서 진정한 현실을 인식할 수 없게 재배되는 인간들.
    그 ‘매트릭스’를 빠져 나오면서 AI에게 가장 위험한 인물이 된 ‘모피어스’는 자신과 함께 인류를 구할 마지막 영웅 ‘그’를 찾아 헤맨다. 마침내 ‘모피어스’는 낮에는 평범한 회사원으로, 밤에는 해커로 활동하는 청년 ‘네오’를 ‘그’로 지목하는데…
    꿈에서 깨어난 자들,
    이제 그들이 만드는 새로운 세상이 열린다!`,
    director: "",
    actorName: ["", "", "", "", "", "", "", ""],
    actorImg: ["", "", "", "", "", "", "", ""],
    reviews: ["", "", "", ""],
  },
  {
    title: "마션",
    desc: "전세계가 바라는 마크 와트니의 지구 귀환! 그는 과연 살아 돌아올 수 있을 것인가?",
    age: "15",
    ott: ["넷플릭스", "왓챠", "티빙", "웨이브"],
    runtime: "142분",
    story: `포기란 없다!
    반드시 지구로 돌아갈 것이다!
    NASA 아레스3탐사대는 화성을 탐사하던 중 모래폭풍을 만나고 팀원 마크 와트니가 사망했다고 판단, 그를 남기고 떠난다. 극적으로 생존한 마크 와트니는 남은 식량과 기발한 재치로 화성에서 살아남을 방법을 찾으며 자신이 살아있음을 알리려 노력한다.
    마침내, 자신이 살아있다는 사실을
    지구에 알리게 된 마크 와트니
    NASA는 총력을 기울여 마크 와트니를 구출하기 위해 노력하고, 아레스 3 탐사대 또한 그를 구출하기 위해 그들만의 방법을 찾게 되는데……
    전세계가 바라는 마크 와트니의 지구 귀환!
    그는 과연 살아 돌아올 수 있을 것인가?`,
    director: "",
    actorName: ["", "", "", "", "", "", "", ""],
    actorImg: ["", "", "", "", "", "", "", ""],
    reviews: ["", "", "", ""],
  },
  {
    title: "테넷",
    desc: "당신에게 줄 건 한 단어 '테넷',이해하지 말고 느껴라!",
    age: "12",
    ott: ["웨이브"],
    runtime: "150분",
    story: `당신에게 줄 건 한 단어 '테넷'

    이해하지 말고 느껴라!
    
    시간의 흐름을 뒤집는 인버전을 통해 현재와 미래를 오가며 세상을 파괴하려는 사토르(케네스 브래너)를 막기 위해 투입된 작전의 주도자(존 데이비드 워싱턴). 인버전에 대한 정보를 가진 닐(로버트 패틴슨)과 미술품 감정사이자 사토르에 대한 복수심이 가득한 그의 아내 캣(엘리자베스 데비키)과 협력해 미래의 공격에 맞서 제3차 세계대전을 막아야 한다!
    
    [KEY POINT]
    
    인버전: 사물의 엔트로피를 반전시켜 시간을 거스를 수 있는 미래 기술. 미래에서 인버전된 무기를 현재로 보내 과거를 파괴할 수 있다.`,
    director: "",
    actorName: ["", "", "", "", "", "", "", ""],
    actorImg: ["", "", "", "", "", "", "", ""],
    reviews: ["", "", "", ""],
  },
  {
    title: "인터스텔라",
    desc: "`우린 답을 찾을 거야, 늘 그랬듯이`",
    age: "15",
    ott: ["넷플릭스", "왓챠", "티빙", "웨이브"],
    runtime: "169분",
    story: `'우린 답을 찾을 거야, 늘 그랬듯이'

    세계 각국의 정부와 경제가 완전히 붕괴된 미래가 다가온다.
    
    지난 20세기에 범한 잘못이 전 세계적인 식량 부족을 불러왔고, NASA도 해체되었다.
    
    이때 시공간에 불가사의한 틈이 열리고, 남은 자들에게는 이 곳을 탐험해 인류를 구해야 하는 임무가 지워진다.
    
    사랑하는 가족들을 뒤로 한 채 인류라는 더 큰 가족을 위해, 그들은 이제 희망을 찾아 우주로 간다.
    
    그리고 우린 답을 찾을 것이다. 늘 그랬듯이…`,
    director: "",
    actorName: ["", "", "", "", "", "", "", ""],
    actorImg: ["", "", "", "", "", "", "", ""],
    reviews: ["", "", "", ""],
  },
  {
    title: "아바타",
    desc: "인류의 마지막 희망, 행성 판도라! 이곳을 정복하기 위한 ‘아바타 프로젝트’가 시작된다!",
    age: "12",
    ott: ["왓챠", "티빙", "웨이브"],
    runtime: "162분",
    story: `인류의 마지막 희망, 행성 판도라!
    이곳을 정복하기 위한 ‘아바타 프로젝트’가 시작된다!
    가까운 미래, 지구는 에너지 고갈 문제를 해결하기 위해 머나먼 행성 판도라에서 대체 자원을 채굴하기 시작한다. 하지만 판도라의 독성을 지닌 대기로 인해 자원 획득에 어려움을 겪게 된 인류는 판도라의 토착민 나비족(Na'vi)의 외형에 인간의 의식을 주입, 원격 조종이 가능한 새로운 생명체 ‘아바타’를 탄생시키는 프로그램을 개발한다.
    평범한 삶을 살아가던 전직 해병대원 제이크,
    우주의 미래가 걸린 거대한 운명이 그에게 찾아왔다!
    한편, 하반신이 마비된 전직 해병대원 ‘제이크 설리(샘 워싱턴)’는 ‘아바타 프로그램’에 참가할 것을 제안 받아 판도라로 향한다. 그곳에서 자신의 ‘아바타’를 통해 자유롭게 걸을 수 있게 된 ‘제이크’는 자원 채굴을 막으려는 나비족(Na'vi)의 무리에 침투하라는 임무를 부여 받는다. 임무 수행 중 나비족(Na'vi)의 여전사 ‘네이티리(조 샐다나)’를 만난 ‘제이크’는 그녀와 함께 다채로운 모험을 경험하면서 ‘네이티리’를 사랑하게 되고, 그들과 하나가 되어간다. 하지만 머지않아 전 우주의 운명을 결정짓는 대규모 전투가 시작되면서 ‘제이크’는 최후의 시험대에 오르게 되는데….
    행성 판도라와 지구의 피할 수 없는 전쟁!
    이 모든 운명을 손에 쥔 제이크의 선택은?`,
    director: "",
    actorName: ["", "", "", "", "", "", "", ""],
    actorImg: ["", "", "", "", "", "", "", ""],
    reviews: ["", "", "", ""],
  },
  {
    title: "설국열차",
    desc: "새로운 빙하기, 그리고 설국 17년 인류 마지막 생존지역 <설국열차>",
    age: "ALL",
    ott: ["티빙", "웨이브"],
    runtime: "104분",
    story: ``,
    director: "",
    actorName: ["", "", "", "", "", "", "", ""],
    actorImg: ["", "", "", "", "", "", "", ""],
    reviews: ["", "", "", ""],
  },
  {
    title: "레디 플레이어 원",
    desc: "모두의 꿈과 희망이 되는 오아시스를 지키기 위해서는 반드시 우승해야 한다!",
    age: "12",
    ott: ["넷플릭스", "웨이브"],
    runtime: "126분",
    story: `새로운 빙하기, 그리고 설국 17년
    인류 마지막 생존지역 <설국열차>
    기상 이변으로 모든 것이 꽁꽁 얼어붙은 지구. 살아남은 사람들을 태운 기차 한 대가 끝없이 궤도를 달리고 있다. 춥고 배고픈 사람들이 바글대는 빈민굴 같은 맨 뒤쪽의 꼬리칸, 그리고 선택된 사람들이 술과 마약까지 즐기며 호화로운 객실을 뒹굴고 있는 앞쪽칸. 열차 안의 세상은 결코 평등하지 않다.
    기차가 달리기 시작한 17년 째, 꼬리칸의 젊은 지도자 커티스는 긴 세월 준비해 온 폭동을 일으킨다. 기차의 심장인 엔진을 장악, 꼬리칸을 해방시키고 마침내 기차 전체를 해방 시키기 위해 절대권력자 윌포드가 도사리고 있는 맨 앞쪽 엔진칸을 향해 질주하는 커티스와 꼬리칸 사람들. 그들 앞에 예기치 못한 상황들이 기다리고 있는데…`,
    director: "",
    actorName: ["", "", "", "", "", "", "", ""],
    actorImg: ["", "", "", "", "", "", "", ""],
    reviews: ["", "", "", ""],
  },
];

$(document).ready(function () {
  window.onload = function () {
    let i = Math.floor(Math.random() * 10);
    $(".random-video").attr("src", `../static/video/random_SF${i}.mp4`);
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
  $(".random-button").click(function () {
    let i = Math.floor(Math.random() * 10);
    $(".video").attr("src", `../static/video/random_SF${i}.mp4`);
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

//---------------------------------------------hover info
let hoverTitle = document.querySelectorAll(".hover-title");
let hoverAge = document.querySelectorAll(".hover-age");
let hoverRuntime = document.querySelectorAll(".hover-runtime");
let hoverStory = document.querySelectorAll(".hover-story");
let moreButton = document.querySelectorAll(".fa-chevron-down");

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
    //hoverInfo
    hoverTitle[i].innerText = movies[i].title;
    hoverAge[i].innerText = `${movies[i].age}+`;
    hoverRuntime[i].innerText = movies[i].runtime;
    hoverStory[i].innerText = movies[i].story;
    // hover 연령 색상 변경
    if (movies[i].age === "12") {
      $(".hover-age").css("background", "#23A2E4");
    } else if (movies[i].age === "15") {
      $(".hover-age").css("background", "#EDA128");
    } else if (movies[i].age === "19") {
      $(".hover-age").css("background", "#CA2324");
    } else {
      $(".hover-age").css("background", "#3EA14F");
    }
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

let modalVd = document.querySelector(".modal-vd");
let modalTitle = document.querySelector(".modal-title");
let modalStory = document.querySelector(".modal-story");
let modalDirector = document.querySelectorAll(".director");
let modalCast = document.querySelectorAll(".cast");
let modalActor = document.querySelectorAll(".actor");
let actorProfile = document.querySelectorAll(".actor-image");
let modalReviews = document.querySelectorAll(".reviews");

for (let i = 0; i < moreButton.length; i++) {
  moreButton[i].addEventListener("click", function () {
    modalVd.src = `/static/video/random_romance${i}.mp4`;
    modalTitle.innerText = movies[i].title;
    modalStory.innerText = movies[i].story;
    modalDirector.innerText = movies[i].director;
    modalCast.innerText = movies[i].actorName;
    for (let n = 0; n < modalActor.length; n++) {
      if (modalActor[n] == undefined) {
        modalActor[n].innerText = "";
      } else {
        modalActor[n].innerText = movies[i].actorName[n];
        actorProfile[n].src = movies[i].actorImg[n];
      }
    }
    for (let n = 0; n < modalReviews.length; n++) {
      modalReviews[n].innerText = movies[i].reviews[n];
    }
  });

  $(function () {
    $(moreButton).click(function () {
      $(".modal-bg").fadeIn(500);
      let v = $(".modal-img").find("video").get(0);
      v.play();
    });
    $(".modal-close-btn").click(function () {
      $(".modal-bg").fadeOut(500);
    });
    $(".modal-exit").click(function () {
      $(".modal-bg").fadeOut(500);
    });
  });
}

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

const modalLike = document.querySelector(".fa-heart");
modalLike.addEventListener("click", function () {
  modalLike.classList.toggle("far");
  modalLike.classList.toggle("fas");
});
