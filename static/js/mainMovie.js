const movies = [
  {
    title: "분노의 질주: 더 세븐",
    desc: "역대 최강의 멤버 VS 사상 최악의 상대",
    age: "15",
    ott: ["왓챠", "웨이브"],
    runtime: "138분",
    story: `역대 최강의 멤버 VS 사상 최악의 상대
    팀을 지키기 위한 그들의 반격이 시작된다!
    거대 범죄 조직을 소탕한 뒤 전과를 사면 받고, 평범한 일상을 되찾은 도미닉(빈 디젤)과 멤버들.
    하지만 평화도 잠시, 한(성 강)의 갑작스러운 죽음에 이어, 도미닉의 집이 순식간에 폭파당한다.
    그들을 차례대로 제거하려는 최악의 상대 데카드 쇼(제이슨 스타뎀)의 등장으로 도미닉은 다시 한 번 역대 최강의 멤버들을 불러모아 숨막히는 반격을 결심하는데…`,
    director: "제임스 완",
    actorName: [
      "반 디젤",
      "폴 워커",
      "드웨인 존슨",
      "제이슨 스타뎀",
      "루카스 블랙",
      "미셸 로드리게스",
      "",
      "",
    ],
    actorImg: [
      "https://img1.daumcdn.net/thumb/C116x168/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F0e848f51add0f653be967d5c4dc8edb0cb654e0f",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F5720716cc0fc42d9f6c2408495231c33243e60cb",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F5720716cc0fc42d9f6c2408495231c33243e60cb",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fcfile%2F14404110AE06255FEE      ",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fcfile%2F11402310B1605CFFD9",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F5693c31a01c6330fc8586b7a077a5d3094efd324",
      "",
      "",
    ],
    reviews: [
      "액션, 연출은 좋았지만 스토리는 부진했던 분노의 질주 시리즈를제임스 완이 맡더니 액션, 스토리, 연출 모두 다 잡았던 영화이 시점 이후로 분노의 질주 퀄리티가 매우 올라감",
      "다신볼수없을 그를기억하며....",
      "굿바이 브라이언 오코너, 굿바이 폴 워커 ",
      "볼때마다 슬퍼",
    ],
    video: ["/static/video/random_action0.mp4"],
  },
  {
    title: "어바웃 타임",
    desc: `어떠한 순간을 다시 살게 된다면, 과연 완벽한 사랑을 이룰 수 있을까?`,
    age: "15",
    ott: ["넷플릭스", "왓챠", "티빙", "웨이브"],
    runtime: "123분",
    story: `모태솔로 팀(돔놀 글리슨)은 성인이 된 날, 아버지(빌 나이)로부터 놀랄만한 가문의 비밀을 듣게 된다.
    바로 시간을 되돌릴 수 있는 능력이 있다는 것!
    그것이 비록 히틀러를 죽이거나 여신과 뜨거운 사랑을 할 수 는 없지만,
    여자친구는 만들어 줄 순 있으리..
    꿈을 위해 런던으로 간 팀은 우연히 만난 사랑스러운 여인 메리에게 첫눈에 반하게 된다.
    그녀의 사랑을 얻기 위해 자신의 특별한 능력을 마음껏 발휘하는 팀.
    어설픈 대시, 어색한 웃음은 리와인드! 뜨거웠던 밤은 더욱 뜨겁게 리플레이!
    꿈에 그리던 그녀와 매일매일 최고의 순간을 보낸다.
    하지만 그와 그녀의 사랑이 완벽해 질수록 팀을 둘러싼 주변 상황들은 미묘하게 엇갈리고,
    예상치 못한 사건들이 여기저기 나타나기 시작하는데…
    어떠한 순간을 다시 살게 된다면, 과연 완벽한 사랑을 이룰 수 있을까?`,
    director: "리차드 커티스",
    actorName: [
      "도널 글리슨",
      "레이첼 맥아담스",
      "빌 나이",
      "톰 홀랜더",
      "마고 로비",
      "리디아 윌슨",
      "",
      "",
    ],
    actorImg: [
      "https://img1.daumcdn.net/thumb/C116x168/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fcfile%2F270CCF365253BABB1D",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fcfile%2F250A2D38527CA67919",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fmovie%2Fa7fbf5b1cb076bf70bda6b37058b42bed6572731",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2Fbcc61a638d4f451bc89d2ed9c05f86739274fa54",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F94ade82ac7383e6b2365e05ef1c3d27db8cbad0b",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F9b3e5b07862ec775973b44c54acde0725b43592d",
      "",
      "",
    ],
    reviews: [
      "넷플에서 방금 봤는데 재밌어요!! 근데 눈물이ㅠㅠㅠㅠㅠㅠ",
      "1999년 어느 뜨거운 햇살을 받게 된 4명의 친구가 과거를 기억하고 미래로 나아가는 영화!",
      "하이틴 느낌의 영화라서 재미있게 보았어요",
      "뭔가 아련했다 20세기 그 시절을 그때의 나를 그때 함께했던 사람들을 그립게 만든 ...그런 영화였다",
    ],
    video: ["/static/video/random_romance11.mp4"],
  },
  {
    title: "극한직업",
    desc: "낮에는 치킨장사! 밤에는 잠복근무! 지금까지 이런 수사는 없었다!",
    age: "15",
    ott: ["왓챠", "티빙", "웨이브"],
    runtime: "111분",
    story: `낮에는 치킨장사! 밤에는 잠복근무!지금까지 이런 수사는 없었다!
  불철주야 달리고 구르지만 실적은 바닥, 급기야 해체 위기를 맞는 마약반!
  더 이상 물러설 곳이 없는 팀의 맏형 고반장은 국제 범죄조직의 국내 마약 밀반입 정황을 포착하고 장형사, 마형사, 영호, 재훈까지 4명의 팀원들과 함께 잠복 수사에 나선다.
  마약반은 24시간 감시를 위해 범죄조직의 아지트 앞 치킨집을 인수해 위장 창업을 하게 되고, 뜻밖의 절대미각을 지닌 마형사의 숨은 재능으로 치킨집은 일약 맛집으로 입소문이 나기 시작한다.
  수사는 뒷전, 치킨장사로 눈코 뜰 새 없이 바빠진 마약반에게 어느 날 절호의 기회가 찾아오는데…
  범인을 잡을 것인가, 닭을 잡을 것인가!2019년 새해, 출동!`,
    director: "이병헌",
    actorName: [
      "류승룡",
      "이하늬",
      "진선규",
      "이동휘",
      "공명",
      "신하균",
      "",
      "",
    ],
    actorImg: [
      "https://img1.daumcdn.net/thumb/C116x168/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F477ee19052313c1d7937ad4334dd6a48b015d69e",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F0d8b73579e56444508084ecc3f6681d7937014f9",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F23680f9203311ee4d0c275928de0961d5e4bfb8c",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2Ff28d624a349cc51898c92a851017f19ed069195b",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F257e845928b76793ecb927acb39e7c412954e5da",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2Fcadf425fc4a49d50fadc6cb44611360e5fda913f",
      "",
      "",
    ],
    reviews: [
      "닭도 잘 튀기고 싸움도 잘하고 배우들 연기마저 능숙하다",
      "5-60대 유머 코드",
      "너무 재미있지만 욕이 좀 있어서 10점 드립니다",
      "오랜만에 재밌는 한국영화 잘 보았습니다",
    ],
    video: ["/static/video/random_comedy5.mp4"],
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
    director: "드니 빌뇌브",
    actorName: [
      "티모시 샬라메",
      "레베카 퍼거슨",
      "오스카 아이삭",
      "제이슨 모모아",
      "조슈 브롤린",
      "젠다이아 콜먼",
      "하비에르 바르뎀",
      "스텔란 스카스가드",
    ],
    actorImg: [
      "https://img1.daumcdn.net/thumb/C116x168/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F50e02a9eaed8eea6bb2cce4d61fef21af8980373",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fcfile%2F2517893851BEB14F2E",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F9b593571163fbaead67f53199f93bce5558107e5",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F617901b40a8484e885147402dd8980b0c5d7c4bb",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2Fada8b5bc415ba3b1e4619c37184b43901645ebf6",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fcfile%2F163AB6444F0D2CE72B",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F108ab05df4088c98d27d578cd9ee062a39850f6c",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F573edceef30f45b2f013c64b5d77f4ded3f78b65",
    ],
    reviews: [
      "극장 어플 실관람평이 지루하다 재미없다 말이 많았다.영화보는 중간 졸지 않을까 하는 걱정 반 ,뵐네브 영화라는 기대반으로 봤다.긴 러닝타임이 무색할 만큼 푹 빠져 봤다.",
      "제가 좋아하는 스타일입니다. 안정적이고 유치하지 않은 그리고 혐오가 적은 줄거리, 긴장감 쩌는 음악, 탄탄한 세계관, 그럴듯한 미래기술 묘사 등등티모시나 익숙한 얼굴의 조연들 연기도 좋았습니다.",
      "스타워즈같은 액션오락물을 기대한다면 차라리 보지마시길 개인적으론 영화계 역사에 남을 걸작 가운데 하나라고 생각함",
      "이정도 영화가 어렵다뇨. 평점에서  하두 지겹고 어렵대서 기대안하고 봤는데 정말 간만의 대작이네요.  긴 러닝타임이 너무 아쉽게 느껴질 정도였어요. 다시 한번 더 보러갈까  합니다.",
    ],
    video: ["/static/video/random_SF1.mp4"],
  },
];

// main - 모달창 js

// main - 좋아요 btn 활성화
const modalLike = document.querySelector("#modal-like");

modalLike.onclick = function () {
  let likeBtn = document.querySelector("#modal-like > i");
  likeBtn.classList.toggle("xi-heart-o");
  likeBtn.classList.toggle("xi-heart");
};
// main - 모달창 내부 별점
const drawStar = (target) => {
  document.querySelector(`.star span`).style.width = `${target.value * 10}%`;
};
const drawStar2 = (target) => {
  document.querySelector(`.star2 span`).style.width = `${target.value * 10}%`;
};
const drawStar3 = (target) => {
  document.querySelector(`.star3 span`).style.width = `${target.value * 10}%`;
};
const drawStar4 = (target) => {
  document.querySelector(`.star4 span`).style.width = `${target.value * 10}%`;
};
modalLike.onclick = function () {
  let likeBtn = document.querySelector("#modal-like > i");
  likeBtn.classList.toggle("xi-heart-o");
  likeBtn.classList.toggle("xi-heart");
};

// modal 등장 - fade in , fade out
$(function () {
  $(".movie-info-detail").click(function () {
    $(".modal-bg").fadeIn(500);
    modalVd.src = `${movies[0].video}`;
    modalTitle.innerText = movies[0].title;
    modalStory.innerText = movies[0].story;
    modalDirector.innerText = movies[0].director;
    modalCast.innerText = movies[0].actorName.slice(0, 2);
    for (let n = 0; n < modalActor.length; n++) {
      if (modalActor[n] == undefined || movies[0].actorImg[n] === "") {
        modalActor[n].innerText = "";
        actorProfile[n].src =
          "https://chocobean.co.kr/common/img/default_profile.png";
      } else {
        modalActor[n].innerText = movies[0].actorName[n];
        actorProfile[n].src = movies[0].actorImg[n];
      }
    }
    for (let n = 0; n < modalReviews.length; n++) {
      modalReviews[n].innerText = movies[0].reviews[n];
    }
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

  // main - 장르별 추천 영화 영상 auto play
  //******jungho - ready()는 jQuery 3.0이상부터는 지원하지 않음.
  $(function () {
    // 사용자가 마우스로 li 태그를 오버하면
    $(".content-movie-genre ul li").mouseenter(function () {
      // 1. li의 너비가 20%에서 35%로 넓어지면서 영상과 콘텐츠가 보이게 한다.
      $(this).stop().animate({ width: "40%" }, 400);
      $(this)
        .find(".bar")
        .delay(300)
        .animate({ opacity: "1", height: "35px" }, 400);

      // 2. .info의 위치를 -500px에서 0px로 바꿔서 보이게 한다.
      $(this).find(".info").delay(300).animate({ left: "20px" }, 400);
      $(this).find(".genre-img video").animate({ opacity: "1" }, 400);

      // 영상 플레이하기
      let v = $(this).find("video").get(0); // 영상 객체변수 선언
      v.play(); // 영상을 재생하라
    });

    // 마우스 아웃하면
    $(".content-movie-genre ul li").mouseleave(function () {
      $(this).stop().animate({ width: "20%" }, 300);
      $(this).find(".bar").animate({ opacity: "0", height: "0px" }, 300);
      $(this).find(".info").animate({ left: "-500px" }, 300);
      $(this).find(".genre-img video").animate({ opacity: "0" }, 300);

      let v = $(this).find("video").get(0);
      v.currentTime = 0;
      v.pause();
    });
  });

  // main - auto slide
  $(document).ready(function () {
    //  첫번째 목록의 앞에 마지막 목록을 배치
    $(".content-auto-slide > ul > li:last-child").insertBefore(
      ".content-auto-slide > ul > li:first-child"
    );
    //  왼쪽으로 -300px만큼 이동하여 1번이미지가 가운데 오도록
    $(".content-auto-slide > ul").css("margin-left", "-300px");

    function moveLeft() {
      $(".content-auto-slide > ul").animate(
        { "margin-left": "-600px" },
        500,
        function () {
          $(".content-auto-slide > ul > li:first-child").insertAfter(
            ".content-auto-slide > ul > li:last-child"
          );
          $(".content-auto-slide > ul").css("margin-left", "-300px");
        }
      );
    }
    let Timer = setInterval(moveLeft, 1000);
  });
});

let bestMovies = document.querySelectorAll(".best-movies");
let modalBox = document.querySelectorAll(".modal-box");
let modalVd = document.querySelector(".modal-vd");
let modalTitle = document.querySelector(".modal-title");
let modalStory = document.querySelector(".modal-story");
let modalDirector = document.querySelector(".director");
let modalCast = document.querySelector(".cast");
let modalActor = document.querySelectorAll(".actor");
let actorProfile = document.querySelectorAll(".actor-image");
let modalReviews = document.querySelectorAll(".reviews");

for (let i = 0; i < bestMovies.length; i++) {
  bestMovies[i].addEventListener("click", function () {
    $(".modal-bg").fadeIn(500);
    modalVd.src = `${movies[i].video}`;
    modalTitle.innerText = movies[i].title;
    modalStory.innerText = movies[i].story;
    modalDirector.innerText = movies[i].director;
    modalCast.innerText = movies[i].actorName.slice(0, 2);
    for (let n = 0; n < modalActor.length; n++) {
      if (modalActor[n] == undefined || movies[i].actorImg[n] === "") {
        modalActor[n].innerText = "";
        actorProfile[n].src =
          "https://chocobean.co.kr/common/img/default_profile.png";
      } else {
        modalActor[n].innerText = movies[i].actorName[n];
        actorProfile[n].src = movies[i].actorImg[n];
      }
    }
    for (let n = 0; n < modalReviews.length; n++) {
      modalReviews[n].innerText = movies[i].reviews[n];
    }
  });
}
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
