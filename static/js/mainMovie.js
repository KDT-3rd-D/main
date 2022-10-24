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
