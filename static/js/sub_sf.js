// SF random movies array
const movies = [
  {
    title: "그래비티",
    desc: "허블 우주망원경을 수리하기 위해 우주를 탐사하던 라이언 스톤 박사는 폭파된 인공위성의 잔해와 부딪히면서 소리도 산소도 없는 우주 한 가운데에 홀로 남겨지는데...",
    age: "12",
    ott: ["넷플릭스", "왓챠", "티빙", "웨이브"],
  },
  {
    title: "듄",
    desc: "“듄을 지배하는 자가 우주를 지배한다!”",
    age: "12",
    ott: ["웨이브"],
  },
  {
    title: "문폴",
    desc: "인류 멸망 D-30일, 추락하는 달을 반드시 멈춰야 한다",
    age: "12",
    ott: ["티빙", "웨이브"],
  },
  {
    title: "매트릭스",
    desc: "인공지능 AI에 의해 인류가 재배되고 있다!",
    age: "12",
    ott: ["넷플릭스", "왓챠", "티빙", "웨이브"],
  },
  {
    title: "마션",
    desc: "전세계가 바라는 마크 와트니의 지구 귀환! 그는 과연 살아 돌아올 수 있을 것인가?",
    age: "15",
    ott: ["넷플릭스", "왓챠", "티빙", "웨이브"],
  },
  {
    title: "테넷",
    desc: "당신에게 줄 건 한 단어 '테넷',이해하지 말고 느껴라!",
    age: "12",
    ott: ["웨이브"],
  },
  {
    title: "인터스텔라",
    desc: "`우린 답을 찾을 거야, 늘 그랬듯이`",
    age: "15",
    ott: ["넷플릭스", "왓챠", "티빙", "웨이브"],
  },
  {
    title: "아바타",
    desc: "인류의 마지막 희망, 행성 판도라! 이곳을 정복하기 위한 ‘아바타 프로젝트’가 시작된다!",
    age: "12",
    ott: ["왓챠", "티빙", "웨이브"],
  },
  {
    title: "설국열차",
    desc: "새로운 빙하기, 그리고 설국 17년 인류 마지막 생존지역 <설국열차>",
    age: "ALL",
    ott: ["티빙", "웨이브"],
  },
  {
    title: "레디 플레이어 원",
    desc: "모두의 꿈과 희망이 되는 오아시스를 지키기 위해서는 반드시 우승해야 한다!",
    age: "12",
    ott: ["넷플릭스", "웨이브"],
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
  $("button").click(function () {
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
