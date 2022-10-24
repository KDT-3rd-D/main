// main - 모달창 내부 별점
const drawStar = (target) => {
  console.log(target.value);
  document.querySelector(`.star span`).style.width = `${target.value * 10}%`;
};

function writeNote() {
  event.preventDefault();
  const starPoint = document.getElementById('starPoint');
  const writer = document.getElementById('writer').value;
  const text = document.getElementById('content').value;
  const table = document.getElementById('table');

  const textAll = document.createElement('tr');
  const textWriter = document.createElement('td');
  const textContent = document.createElement('td');
  const textDate = document.createElement('td');

  // 댓글 단 시간 설정 
  let time = new Date();

  let year = time.getFullYear();
  let month = time.getMonth();
  let day = time.getDate();

  let hour = time.getHours();
  let minute = time.getMinutes();

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
  textAll.append(addSpan,textContent,textDate);

  writer.value = '';
  text.value = '';
}


