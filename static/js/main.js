// 메인 스크롤 시 헤더 스타일 변경되는 js

$(document).ready(function () {
  // 스크롤이벤트를 사용하여 일정영역이상으로 내려가면 위 서식을 적용한다.
  $(window).scroll(function () {
    let sPos = $(this).scrollTop();
    if (sPos >= 700) {
      //영상콘텐츠가 모두 올라가면
      //사용자가 헤더에 마우스를 아웃해도 서식이 지워지지 않는다.
      $("header").find(".nav-box li").addClass("on");
      $("header").find(".user-icon i").addClass("on");
      //검정색로고
      // $('header').find('h1 img').attr('src','/static/image/logo.png');
      $("header").addClass("h_on");

      $("header").mouseleave(function () {
        //마우스 아웃시 동작
        $("header").find(".nav-box li").addClass("on");
        $("header").find(".user-icon i").addClass("on");
        //검정색로고
        // $('header').find('h1 img').attr('src','/static/image/logo.png');
        $("header").addClass("h_on");
      });
    } else {
      $("header .nav-box li").removeClass("on");
      $(".user-icon i").removeClass("on");
      //흰색로고
      // $('h1 img').attr('src','/static/image/logo.png');
      $("header").removeClass("h_on");

      $("header").mouseleave(function () {
        //마우스 아웃시 동작
        $(this).find(".nav-box li").removeClass("on");
        $(this).find(".user-icon i").removeClass("on");
        //검정색로고
        // $(this).find('h1 img').attr('src','/static/image/logo.png');
        $(this).removeClass("h_on");
      });
    }
  });
});
