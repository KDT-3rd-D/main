// romance random movies array
const movies = [
  {
    title: "여름날 우리",
    desc: "처음이었다, 사랑이 싹트는 기분",
    age: "12",
    ott: ["티빙", "웨이브"],
  },
  {
    title: "동감",
    desc: "다른 시간 속 우리가 연결되었다.",
    age: "15",
    ott: ["티빙", "웨이브"],
  },
  {
    title: "연애 빠진 로맨스",
    desc: "외로운건 싫지만 연애는 하고싶어?",
    age: "15",
    ott: ["티빙", "웨이브"],
  },
  {
    title: "영화의 거리",
    desc: "헤어진 연인에서 일로 만난 사이가 된 이들",
    age: "15",
    ott: ["넷플릭스", "티빙", "웨이브"],
  },
  {
    title: "너의 결혼식",
    desc: "기억하나요? 당신의 첫사랑",
    age: "15",
    ott: ["넷플릭스", "왓챠", "티빙", "웨이브"],
  },
  {
    title: "노트북",
    desc: "그녀와의 약속을 지키고 싶습니다.",
    age: "15",
    ott: ["넷플릭스", "웨이브"],
  },
  {
    title: "가장 보통의 연애",
    desc: "만난 지 하루 만에 일보다 서로의 연애사를 더 잘 알게 된 두 사람.",
    age: "15",
    ott: ["넷플릭스", "왓챠", "티빙", "웨이브"],
  },
  {
    title: "뷰티 인사이드",
    desc: "한 달에 일주일 타인의 얼굴로 살아가는 여자와 일 년 열두 달 타인의 얼굴을 알아보지 못하는 남자의 조금은 특별한 로맨스",
    age: "15",
    ott: ["왓챠"],
  },
  {
    title: "비와 당신의 이야기",
    desc: "이건 기다림에 관한 이야기다",
    age: "ALL",
    ott: ["티빙", "웨이브"],
  },
  {
    title: "20세기 소녀",
    desc: `1999년, 단짝 친구가 홀딱 반한 남학생을 친구 대신 관찰해 주기로 한 10대 소녀.
하지만 소녀에게도 예기치 못한 사랑이 찾아온다 `,
    age: "12",
    title: "노트르담",
    age: "15",
    ott: ["웨이브"],
  },
];

$(document).ready(function () {
  window.onload = function () {
    let i = Math.floor(Math.random() * 10);
    $("video").attr("src", `../static/video/random_romance${i}.mp4`);
    // 플레이 상세설명 변경
    console.log(movies[i]);
    let title = document.querySelector(".title");
    let decs = document.querySelector(".decs");
    let ageColor = document.querySelector(".age-color");
    title.innerHTML = movies[i].title;
    decs.innerHTML = `: ${movies[i].desc}`;
    ageColor.innerHTML = movies[i].age;

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
      $(".video").attr("src", `../static/video/random_romance${i}.mp4`);
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
  };
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
