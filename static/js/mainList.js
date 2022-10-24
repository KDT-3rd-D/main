// 메인 하단 영역 삽입될 게시판 js

const listForm = document.querySelector("#list-form");

listForm.addEventListener("submit", function (event) {
  // preventDefault: 브라우저에서 구현된 기본 동작 취소
  // 폼 이벤트 : 폼이 제출되면 새로고침되는 기본 동작을 취소
  event.preventDefault();

  // form의 submit이벤트는 제출되는 것이 기본 동작
  // 제출 = 새로고침
  const listInput = document.querySelector('input[name="list"]');
  let list = listInput.value; // 사용자가 input에 입력한 값
  //li태그를 생성해서 li태그의 content로 input.value 값이 담기도록 -> 게시글 생성
  const ul = document.querySelector(".review-list");
  const newList = document.createElement("li");
  newList.classList.add("reviews");

  ul.append(newList);
  newList.textContent = 'Q.  ' + list;

  // input창 초기화
  listInput.value = "";

  // todo list 전체 삭제
  const delAll = document.querySelector(".clear-all-btn");
  delAll.onclick = function () {
    let reviews = document.querySelectorAll(".reviews");
    for (i = 0; i < reviews.length; i++) {
      reviews[i].remove();
    }
  };

  // delete button 태그를 생성하고 설정하는 함수
  const delBtnElem = document.createElement("button");

  //input.value값이 없을 경우, alert창 띄우기
  if (list === "") {
    alert("값을 입력해주세요");
  } else {
    ul.append(newList);
    newList.append(delBtnElem);
    listInput.value = "";
  }

  delBtnElem.innerHTML = '<i class="xi-trash"></i>';
  newList.append(delBtnElem);

  delBtnElem.addEventListener("click", function () {
    ul.removeChild(newList);
  });
});

// 하단 qna - 고정 질문 답변 slide로 펼치고 접는 js
  $( document ).ready( function() {
    $( '#down' ).click( function() {
      $( '.n01' ).slideToggle( 300 );
      $( '.i01' ).toggleClass( 'xi-angle-down xi-angle-up' );
    } );
    $( '#down02' ).click( function() {
      $( '.n02' ).slideToggle( 300 );
      $( '.i02' ).toggleClass( 'xi-angle-down xi-angle-up' );
    } );
    $( '#down03' ).click( function() {
      $( '.n03' ).slideToggle( 300 );
      $( '.i03' ).toggleClass( 'xi-angle-down xi-angle-up' );
    } );
  } );
    