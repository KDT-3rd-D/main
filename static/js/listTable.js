// main - 모달창 내부 별점
const drawStar = (target) => {
  console.log(target.value);
  document.querySelector(`.star span`).style.width = `${target.value * 10}%`;
};

const formTable = document.getElementById('form');
console.log(formTable);
formTable.addEventListener("submit", function(event) {
  event.preventDefault();
  const contentInput = document.querySelector('input[name="cont"]');
  const contentStar = document.querySelector('input[name="star"]');

  const starPoint = document.getElementById('starPoint');
  const writer = document.getElementById('writer').value;
  const text = document.getElementById('content').value;
  const table = document.getElementById('table');

  const textAll = document.createElement('tr');
  const textWriter = document.createElement('td');
  const textContent = document.createElement('td');
  const textDate = document.createElement('td');
  const textIcon = document.createElement('td');

  // 댓글 단 시간 설정 
  let time = new Date();

  let year = time.getFullYear();
  let month = time.getMonth();
  let day = time.getDate();

  let hour = time.getHours();
  let minute = time.getMinutes();

  // 별점 - 별 모양 형태로 나타내도록 설정
  const addSpan = document.createElement('span');
  addSpan.classList = 'Rs star size';
  addSpan.innerText = '★★★★★';
  const starSpan = document.createElement('span');  
  starSpan.innerText = '★★★★★';
  starSpan.style.width = `${writer * 10}%`;
  addSpan.appendChild(starSpan);
  
  textContent.innerHTML = text;
  textDate.innerHTML = `${year}-${month+1}-${day} ${hour} : ${minute}`;
   
  table.append(textAll);
  textAll.append(addSpan,textContent,textDate,textIcon);

  // 검색창 초기화
  contentInput.value = "";
  contentStar.value = "";

    // 댓글 전체 삭제
    const delAll = document.querySelector(".clear-all-btn");
    delAll.onclick = function () {
      let reviews = document.querySelectorAll("table tr");
      for (i = 0; i < reviews.length; i++) {
        reviews[i].remove();
      }
    };

  // delete button 태그를 생성하고 설정하는 함수
  const delBtnElem = document.createElement("button");

  delBtnElem.innerHTML = '<i class="xi-trash"></i>';
  textIcon.append(delBtnElem);

  delBtnElem.addEventListener("click", function () {
    table.removeChild(textAll);
  });
});


