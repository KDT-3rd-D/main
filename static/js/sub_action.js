// action random movies array
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
  },
  {
    title: "탑건: 매버릭",
    desc: "한순간의 실수도 용납되지 않는 하늘 위, 가장 압도적인 비행이 시작된다!",
    age: "12",
    ott: ["웨이브"],
    runtime: "130분",
    story: `한순간의 실수도 용납되지 않는 하늘 위,
    가장 압도적인 비행이 시작된다!
    최고의 파일럿이자 전설적인 인물 매버릭(톰 크루즈)은 자신이 졸업한 훈련학교 교관으로 발탁된다.
    그의 명성을 모르던 팀원들은 매버릭의 지시를 무시하지만 실전을 방불케 하는 상공 훈련에서 눈으로 봐도 믿기 힘든 전설적인 조종 실력에 모두가 압도된다.
    매버릭의 지휘아래 견고한 팀워크를 쌓아가던 팀원들에게 국경을 뛰어넘는 위험한 임무가 주어지자
    매버릭은 자신이 가르친 동료들과 함께 마지막이 될 지 모를 하늘 위 비행에 나서는데…`,
    director: "조셉 코신스키",
    actorName: [
      "톰 크루즈",
      "마일스 텔러",
      "제니퍼 코넬리",
      "발 킬머",
      "바쉬르 살라후딘",
      "존 햄",
      "찰스 파넬",
      "",
      "",
    ],
    actorImg: [
      "https://img1.daumcdn.net/thumb/C116x168/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2Ff7704c8178c3f5acb8ee97a0079b46ab9facef40",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fmovie%2Fc5c0f0200a69e400759259713ab7d5e68b97ff33",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fmovie%2Feb408451543fc0c69db506751b040f9b33856a50",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fcfile%2F13497810B244BBF3B8",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F137b5b5a7844de0dfeb61ee2ca4dfca1e0b15054",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fcfile%2F21736B3C52B6C0362B",
      "",
      "",
    ],
    reviews: [
      "요새 나오는 마블 영화보다 백배는 재미있게 본 영화",
      "87년에 영화관에서 보고 이번에도 무조건 영화관 갈겁니다.애들은 나중에 봐라. 아재들 먼저 볼거다.",
      "톰 형이 이 영화를 끝으로 은퇴한다해도 아쉬움이 없을 정도로 완벽하다. 탑건과 미션임파서블을 결합해서 제리브룩하이머가 최상의 퀄리티로 제작했다. 스토리상의 약간의 아쉬움도 잊게 할만큼 압도적인 비행전투씬만으로도 흥분이 가라앉지 않는다. 이게 헐리우드다",
      "방금 보고 왔습니다.곳곳에서 울컥 울컥!!36-7년전 1편과 이야기를 이어 가면서도새로운 신화를 창조하네요.실제 후드암을 앓고 있는 아이스맨(발 킬머)이있는 그대로 출연한 것도 감동~ㅠㅠ",
    ],
  },
  {
    title: "어벤져스: 인피니티 워",
    desc: "새로운 조합을 이룬 어벤져스, 역대 최강 빌런 타노스에 맞서 세계의 운명이 걸린 인피니티 스톤을 향한 무한 대결이 펼쳐진다!",
    age: "12",
    ott: ["웨이브"],
    runtime: "149분",
    story: `새로운 조합을 이룬 어벤져스,
    역대 최강 빌런 타노스에 맞서
    세계의 운명이 걸린 인피니티 스톤을 향한
    무한 대결이 펼쳐진다!
    4월, 마블의 클라이맥스를 목격하라!`,
    director: "앤서니 루소",
    actorName: [
      "로버트 다우니 주니어",
      "조슈 브롤린",
      "마크 러팔로",
      "톰 히들스턴",
      "크리스 에반스",
      "제레미 레너",
      "",
      "",
    ],
    actorImg: [
      "https://img1.daumcdn.net/thumb/C116x168/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2Fab54c9376e20f9ec5aed877bbba363c99300147a",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2Fada8b5bc415ba3b1e4619c37184b43901645ebf6",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F3d675930c5070980b34659028ad900349d6a4e03",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fcfile%2F205EAC0B4A5C337904",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F5406bf152ca8e89d6fa428af5d30ca4b8d97122b",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2Fa110c4966a6863d45e42ed33bd3808d173e2884a",
      "",
      "",
    ],
    reviews: [
      "사실상 스타로드도 굉장히 불쌍한 캐릭이다.어렸을때 아버지는 거의 못 보고 어머니를 떠나보내고, 라바져들에게 납치당해서 좀도둑으로 키워졌다가 이제 드디어 진짜 아빠를 만났다 싶었을때 아빠가 엄마를 고의적으로 죽였다는 사실을 알고 충격을 먹다가 친아빠 대신 자신의 이익으로 키웠지만, 잘 보살펴 주고 희생까지 한 욘두도 떠나보냈다. 그리고 친아빠도 죽고 이제 의지할 유일한 것은 그의 여친 가모라 뿐이었다. 그러다 마지막 버팀목이었던 여친가모라도 타노스에게 살해당하자 분노를 느껴 방아쇠를 당기지도 않고 이성을 잃어버린 거다.결론:스타로드 짱",
      "역대 시리즈를 모르면 내용 이해불가볼거리는 풍성해졌으나 이야기는 중구난방짧은시간에 너무 많은 서사를 담은...",
      "와  충격너무 재밌게 봤네요",
      "명작",
    ],
  },
  {
    title: "범죄도시",
    desc: "통쾌하고! 화끈하고! 살벌하게! 올 추석, 나쁜 놈들 때려잡는 강력반 형사들의 ‘조폭소탕작전’이 시작된다!",
    age: "19",
    ott: ["왓챠", "티빙", "웨이브"],
    runtime: "121분",
    story: `“오늘 밤, 다 쓸어버린다!”
    2004년 서울…
    하얼빈에서 넘어와 단숨에 기존 조직들을 장악하고 가장 강력한 세력인 춘식이파 보스 ‘황사장(조재윤 분)’까지 위협하며 도시 일대의 최강자로 급부상한 신흥범죄조직의 악랄한 보스 ‘장첸(윤계상 분)’.
    대한민국을 뒤흔든 ‘장첸(윤계상 분)’ 일당을 잡기 위해 오직 주먹 한방으로 도시의 평화를 유지해 온 괴물형사 ‘마석도(마동석 분)’와 인간미 넘치는 든든한 리더 ‘전일만(최귀화 분)’ 반장이 이끄는 강력반은 나쁜 놈들을 한방에 쓸어버릴 끝.짱.나.는. 작전을 세우는데…
    통쾌하고! 화끈하고! 살벌하게!
    올 추석, 나쁜 놈들 때려잡는 강력반 형사들의 ‘조폭소탕작전’이 시작된다!`,
    director: "강윤성",
    actorName: [
      "마동석",
      "윤계상",
      "조재윤",
      "최귀화",
      "임형준",
      "진선규",
      "홍기준",
      "",
    ],
    actorImg: [
      "https://img1.daumcdn.net/thumb/C116x168/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F3b8713a22660343c04cca305c40741f4a2b9535c",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2Fc7be9c3a25016ac081a42dd776fe586e6b9eb7ce",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F853fafd611afe642a1b8ec2f7baa7b2e29c2a10d",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fmovie%2Fe65757ab89c411d959d8e2c727d8d629872462ef",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fcfile%2F1414C8485154A92605",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F23680f9203311ee4d0c275928de0961d5e4bfb8c",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2Fa7cf37202f9891f6bfa547ecf2f099e1a393fd14",
      "",
    ],
    reviews: [
      "장첸하나로 영화보게만드는 포스가어마어마하다 연기력도 굿",
      "장첸: 너 혼자니?마석도: 어 나 싱글이야!",
      "첨엔  과장이 많겠지 하고 그냥봤는데 조폭썰 푸는  유튜브 허세스코 보고 영화가   실제보다 오히려 약하구나 하고 보니 정말 공감가는  부분이 많고,  영화 구성도 탄탄하고,  긴장감도 좋고, 명작이라는 생각이 든다",
      "진짜 무서운데 결말은 너무 좋다",
    ],
  },
  {
    title: "베테랑",
    desc: "베테랑 광역수사대 VS 유아독존 재벌 3세 자존심을 건 한판 대결이 시작된다!",
    age: "15",
    ott: ["왓챠", "티빙", "웨이브"],
    runtime: "123분",
    story: `한 번 꽂힌 것은 무조건 끝을 보는 행동파 ‘서도철’(황정민), 20년 경력의 승부사 ‘오팀장’(오달수), 위장 전문 홍일점 ‘미스봉’(장윤주), 육체파 ‘왕형사’(오대환), 막내 ‘윤형사’(김시후)까지 겁 없고, 못 잡는 것 없고, 봐주는 것 없는 특수 강력사건 담당 광역수사대.
    오랫동안 쫓던 대형 범죄를 해결한 후 숨을 돌리려는 찰나, 서도철은 재벌 3세 ‘조태오’(유아인)를 만나게 된다. 세상 무서울 것 없는 안하무인의 조태오와 언제나 그의 곁을 지키는 오른팔 ‘최상무’(유해진). 서도철은 의문의 사건을 쫓던 중 그들이 사건의 배후에 있음을 직감한다.
    건들면 다친다는 충고에도 불구하고 포기하지 않는 서도철의 집념에 판은 걷잡을 수 없이 커져가고 조태오는 이를 비웃기라도 하듯 유유히 포위망을 빠져 나가는데…
    베테랑 광역수사대 VS 유아독존 재벌 3세
    2015년 여름, 자존심을 건 한판 대결이 시작된다!`,
    director: "류승완",
    actorName: [
      "황정민",
      "유아인",
      "유해진",
      "오달수",
      "장윤주",
      "오대환",
      "김시후",
      "정웅인",
    ],
    actorImg: [
      "https://img1.daumcdn.net/thumb/C116x168/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fmovie%2Fa1312834d18b63a2c528ed8087e96e8c1da0bcff",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F92c4879406db32fb705bdc7bec2165087bd45752",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F490af559df02c7f5b70d1b80279218a77800d771",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F02cfc7ec0dfbf60eb75a87100a41e96efab5bab9",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fmovie%2Fc84d60cee94492d421498830fd45f8e3996ecff1",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fmovie%2Fc7c0d41c431e623179cb256c948d7ea0b2b41f7b",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fcfile%2F13282D4A5108C3D233",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fmovie%2Fec0b9fb2fb35c447470179b0fc9b6f2a57748c4f",
    ],
    reviews: [
      "도철 같은 형사가 많다면세상이 이렇진 않을텐데....",
      "황정민 연기 정말 소름입니다~",
      "통쾌하다 갠적으로 천호진역이 맘에 들었음",
      "마지막 추격씬 진짜 레전드",
    ],
  },
  {
    title: "그레이 맨",
    desc: "CIA의 사주를 받은 소시오패스 전 동료에게 쫓기며 시작되는 액션 블록버스터",
    age: "15",
    ott: ["넷플릭스"],
    runtime: "138분",
    story: `그 누구도 실체를 몰라 '그레이 맨'으로 불리는 CIA의 암살 전문 요원이 우연히 CIA의 감추고 싶은 비밀을 알게 되고, CIA의 사주를 받은 소시오패스 전 동료에게 쫓기며 시작되는 액션 블록버스터`,
    director: "앤서니 루소",
    actorName: [
      "라이언 고슬링",
      "크리스 에반스",
      "아나 데 아르마스",
      "레게장 페이지",
      "빌리 밥 손튼",
      "제시카 핸윅",
      "바그네르 모라",
      "알프리 우다드",
    ],
    actorImg: [
      "https://img1.daumcdn.net/thumb/C116x168/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fcfile%2F26575F4852BCDA7413",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F5406bf152ca8e89d6fa428af5d30ca4b8d97122b",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F9bce3d5c9de5b2fc451fa697831df9a36706b24e",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2Fe1cc3885f87b0975af49006380be7704854cd68a",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fcfile%2F12497810B050A70C26",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fcfile%2F18016F0F4BEB286524",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F2973f4741dc8642ccdd94ce643e510563f575d96",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fcfile%2F116D3110B19395C76C",
    ],
    reviews: [
      "이 영화에 관한 한 썩토 준 평론가들의 평가 믿지 마시오.굉장한 액션과 시간 가는 줄 모르는 몰입감을 느낄 것임.고슬링도 좋지만 크리스 에반스의 악역도 인상적.관람 강추",
      "모니터가 아닌 스크린으로 봤었으면...ㅠㅠ....라이언고슬링 크리스에반스 액션 연기 다 좋다....캡틴이 악역이라니....ㅎㅎ",
      "무더운 여름에 감상하기 좋은 시원 시원한 액션 영화였다.블레이드러너 2049의 라이언 고슬링과 아나 데 아르마스의 조합을 다시 볼 수 있어 반가웠고 크리스 에반스의 스테레오타입 악역 연기도 재밌었다.",
      "다 좋은데 엔딩이 별로네요   두년/놈 왜 안죽이고 끝냈는지 ...",
    ],
  },
  {
    title: "미션 임파서블: 폴아웃",
    desc: "예측 할 수 없는 미션. 피할 수 없는 선택",
    age: "15",
    ott: ["웨이브"],
    runtime: "147분",
    story: `예측 할 수 없는 미션. 피할 수 없는 선택
    전 세계 최강의 스파이 기관 IMF의 최고 요원 에단 헌트(톰 크루즈)와 그의 팀은 테러조직의 핵무기 소지를 막기 위해 미션에 착수한다.
    에단 헌트는 작전 수행 중 예상치 못한 결단을 내리게 되고, 중앙정보국 CIA는 그를 견제하기 위해 상급 요원 어거스트 워커(헨리 카빌)를 파견한다.
    최악의 테러 위기와 라이벌의 출현 속, 팀이 행한 모든 선의의 선택들이 최악의 결과로 돌아오면서 미션은 점점 더 예측할 수 없는 상황으로 치닫게 되는데…
    사상 가장 불가능한 미션, 피할 수 없다면 끝내야 한다!`,
    director: "크리스토퍼 맥쿼리",
    actorName: [
      "톰 크루즈",
      "헨리 카빌",
      "빙 레임스",
      "사이먼 페그",
      "레베카 퍼거슨",
      "숀 해리스",
      "안젤라 바셋",
      "미셸 모나한",
    ],
    actorImg: [
      "https://img1.daumcdn.net/thumb/C116x168/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2Ff7704c8178c3f5acb8ee97a0079b46ab9facef40",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fcfile%2F186E2A254BA8D3835D",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F3514752b40b997bda100deea77979bd5cf07ac21",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fcfile%2F13497F10B1F86BFF45",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fcfile%2F2517893851BEB14F2E",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fmovie%2Fd3c21b58060a5f9885f5adf6881016672309f5eb",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fcfile%2F1540D410AE0284D08F",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fcfile%2F1343F110B0A3534E48",
    ],
    reviews: [
      "스리즈중 최고 마지막엔 다 알면서도 손에 땀이남",
      "이 한편으로 성룡은 톰형이 가뿐히 즈려 밟아주신 것 같다헬기 액션씬은 시작부터 끝까지 구성이 대박이다레베카 퍼거슨은 보면 볼수록 이쁜 거 같다",
      "3번봐도또잼있죠!",
      "평점 낮은 관람평은 뭘까? 억지 코메디에 욕지꺼리 안 나오면 대사 연결이 안 되는, 꼬마용 국산 영화나 보나???? ",
    ],
  },
  {
    title: "인셉션",
    desc: "꿈 VS 현실 시간, 규칙, 타이밍 모든 것이 완벽해야만 하는, 단 한 번도 성공한 적 없는 ‘인셉션’ 작전이 시작된다!",
    age: "12",
    ott: ["왓챠", "티빙", "웨이브"],
    runtime: "147분",
    story: `타인의 꿈에 들어가 생각을 훔치는 특수 보안요원 코브.
    그를 이용해 라이벌 기업의 정보를 빼내고자 하는 사이토는
    코브에게 생각을 훔치는 것이 아닌, 생각을 심는 ‘인셉션’ 작전을 제안한다.
    성공 조건으로 국제적인 수배자가 되어있는 코브의 신분을 바꿔주겠다는
    거부할 수 없는 제안을 하고, 사랑하는 아이들에게 돌아가기 위해 그 제안을 받아들인다.
    최강의 팀을 구성, 표적인 피셔에게 접근해서 ‘인셉션’ 작전을 실행하지만
    예기치 못한 사건들과 마주하게 되는데…
    꿈 VS 현실
    시간, 규칙, 타이밍 모든 것이 완벽해야만 하는,
    단 한 번도 성공한 적 없는 ‘인셉션’ 작전이 시작된다!`,
    director: "크리스토퍼 놀란",
    actorName: [
      "레오나르도 디카프리오",
      "조셉 고든 레빗",
      "마리옹 꼬띠아르",
      "톰 하디",
      "엘리엇 페이지",
      "와타나베 켄",
      "킬리언 머피",
      "",
    ],
    actorImg: [
      "https://img1.daumcdn.net/thumb/C116x168/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fcfile%2F124D8810B050B86624",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fcfile%2F16725F284C5282AE49",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fcfile%2F140D7C10ADFFA1C695",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F37125d93f7a089b8ee413c6168dcafb58ca86e2a",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fmovie%2Fc080ed87dbd63b1b9941093d3571ae8fc5d6886f",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fcfile%2F146F1B10AE1133E0EC",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F07cd0b814f58f3c32c78fa20c02b11a9fc57a02c",
      "",
    ],
    reviews: [
      "인생영화. 총 7번 관람한 영화다. 놀란 감동의 끝없는 상상력과 무한한 창의력을 온몸으로 느끼며 빠져들 수 있었던 인생 최고의 영화",
      "IQ 120이하는 3번 연속보기를 권합니다",
      "영화의 상상력을 한단계 업그레이드시킨 수작.",
      "역대급… 영화가 끝나고도 여운이 계속 남는 영화다. 모든것이 완벽한 걸작… ",
    ],
  },
  {
    title: "공조",
    desc: "그들에게 주어진 시간은 단 3일, 한 팀이 될 수 없는 남북 형사의 예측불가 공조수사가 시작된다!",
    age: "15",
    ott: ["왓챠", "티빙", "웨이브"],
    runtime: "125분",
    story: `비밀리에 제작된 위조 지폐 동판을 탈취하려는 내부 조직에 의해 작전 중 아내와 동료들을 잃게 된 특수 정예부대 출신의 북한형사 ‘림철령’(현빈). 동판을 찾아야만 하는 북한은 남한으로 숨어든 조직의 리더 ‘차기성’(김주혁)을 잡기 위해 역사상 최초의 남북 공조수사를 요청하고, 그 적임자로 철령을 서울에 파견한다. 한편, 북한의 속내가 의심스런 남한은 먼저 차기성을 잡기 위한 작전을 계획하고, 정직 처분 중인 생계형 형사 ‘강진태’(유해진)에게 공조수사를 위장한 철령의 밀착 감시를 지시한다.
    임무를 완수해야 하는 철령과 임무를 막아야만 하는 진태.
    그들에게 주어진 시간은 단 3일,
    한 팀이 될 수 없는 남북 형사의 예측불가 공조수사가 시작된다!`,
    director: "김성훈",
    actorName: [
      "현빈",
      "유해진",
      "김주혁",
      "장영남",
      "이동휘",
      "윤아",
      "김재철",
      "공정환",
    ],
    actorImg: [
      "https://img1.daumcdn.net/thumb/C116x168/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2Fae2cffb67d20a53a16e3fced954080786ee27bd0",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F490af559df02c7f5b70d1b80279218a77800d771",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2Fd16b292b15c2b8e84361eec1295522bc9b6210c3",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F509fc8489f972743d3a3bedd7b2232a01c1f3d95",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2Ff28d624a349cc51898c92a851017f19ed069195b",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F893c26077ff0dc4e4b6630df4ef9dfe7f83ddd96",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F2c0ab17e37981fe15eb43549155a8e2674052b68",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2Fd56218897b0fe590fa8f4795f1ca7486d47df095",
    ],
    reviews: [
      "김주혁 그립습니다.",
      "방금 넷플릭스에서 보고 왔는데 이게 어떻게 7백만이 됐지? 이해가 안 가네. ",
      "1988년에 개봉한 레드히트 그대로 표절한개 쓰레기영화;; 감독은 얼마나 능지가 딸리길래시나리오 쓸 능력도 없어서 옛날영화 그대로 베껴오냐;;",
      "두번째 보았는데 현빈인줄은 몰랐네요잘 생기기도 했지만 연기를 참 잘하는 배우..목소리도 매력있고 키도 훤출 흠 잡을 것이 없네요",
    ],
  },
  {
    title: "유체이탈자",
    desc: "진짜 나를 찾기 위한 본능적 액션이 시작된다!",
    age: "15",
    ott: ["넷플릭스", "티빙", "웨이브"],
    runtime: "108분",
    story: `“누가 진짜 나인지 모르겠어요”
    교통사고 현장에서 눈을 뜬 한 남자.
    거울에 비친 낯선 얼굴과 이름, 자신이 누구인지 기억이 나지 않는다.
    “또 바뀌었어. 낮에도 바뀌더니 밤에도 또”
    잠시 후, 또 다른 사람의 몸에서 깨어난 남자.
    그는 12시간마다 몸이 바뀐다는 사실을 깨닫게 되고,
    자신을 둘러싼 사람들 사이의 연결고리를 찾기 시작한다.
    그가 12시간마다 몸이 바뀌었던 사람들, 가는 곳마다 나타나는 의문의 여자까지,
    그리고, 이들이 쫓고 있는 국가정보요원 '강이안'.
    “이제 알게 됐어. 내가 뭘 해야 되는지”
    모두가 혈안이 되어 쫓고 있는 '강이안'이 바로 자신임을 직감한 남자,
    자신을 찾기 위한 사투를 시작하는데…
    진짜 나를 찾기 위한 본능적 액션이 시작된다!`,
    director: "윤재근",
    actorName: [
      "윤계상",
      "박용우",
      "임지연",
      "박지환",
      "유승목",
      "이성욱",
      "서현우",
      "이운산",
    ],
    actorImg: [
      "https://img1.daumcdn.net/thumb/C116x168/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2Fc7be9c3a25016ac081a42dd776fe586e6b9eb7ce",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fmovie%2Fb382af39258bbb751404d8d3b518307c085f1b26",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F1824f266b9a74ba09a501546087f1b1a1567960753106",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F259ecc83d56dc45037fa7063b6209ebe28b10850",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F43e96a21bbb06c4ca830a62d7d28621d3e87d0a1",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F684c9d320b190a8f6dc3907c3e48c43f3e91649c",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F0fafdc78a4244b9ca64c6bb8d1f9c1cf1575486118463",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F5b790f14f15174d3d39d1e321b51b647bbcf1e28",
    ],
    reviews: [
      "박용우님.. 제발 잘 되야하는 배우님.. 연기는 늘  열정을 다해 하는데 다들 너무 못알아줌. 상도 탈수 있는데 방송국들 너무함...제발 꼭 잘 되세요~~:hearts::hearts:",
      "박용우씨 연기 좋아요",
      "윤계상이 이렇게 영화배우로 잘 성장할 줄 몰랐다. 정말 대단한 노력이 아닐 수 없다.",
      "박용우씨 큰상 몇개 주셔도 되는데.. 영화나 드라마나 큰것좀 주세요... ",
    ],
  },
  {
    title: "킬빌 VOL.1",
    desc: "빌을 죽여라...! 복수는 지금부터 시작이다!",
    age: "19",
    ott: ["왓챠", "티빙", "웨이브"],
    runtime: "110분",
    story: `빌을 죽여라...!
    복수는 지금부터 시작이다!
    핏빛으로 얼룩진 순백의 웨딩드레스!...............어느 한적한 오후, 행복한 결혼식을 앞둔 ‘더 브라이드’와 그녀의 신랑, 그리고 모든 하객들이 의문의 조직에 의해 처참하게 살해당한다. 순백의 웨딩드레스는 피로 얼룩져 결혼식장은 아수라장이 되는데......
    복수의 리스트를 써내려가며!...................그로부터 5년 후, 코마상태의 ‘더 브라이드’는 죽음 직전까지 갔다가 어렵게 깨어난다. 그리고 피로 얼룩진 과거가 그녀의 뇌리에 스치면서 서서히 복수의 리스트를 작성하기 시작한다.
    ‘데들리 바이퍼’를 찾아서!.....................‘더 브라이드’는 전세계적으로 악명높은 살인조직 ‘데들리 바이퍼’의 일원이었고, 조직의 보스인 ‘빌’을 포함한 5명의 일원이 새로운 삶을 앞둔 그녀를 처참하게 무너뜨렸음이 밝혀지자, 그녀는 텍사스, 멕시코, 일본을 방문하며 가장 잔인한 복수를 실행하게 되는데.....`,
  },
  {
    title: "매드맥스: 분노의 도로",
    desc: "세상이 멸망하면서 누가 미친 건지 알 수 없어졌다. 나인지 이 세상인지..",
    age: "15",
    ott: ["넷플릭스", "왓챠"],
    runtime: "120분",
    story: `“세상이 멸망하면서 누가 미친 건지 알 수 없어졌다.
    나인지 이 세상인지..”
    핵전쟁으로 멸망한 22세기. 얼마 남지 않은 물과 기름을 차지한 독재자 임모탄 조가 살아남은 인류를 지배한다. 한편, 아내와 딸을 잃고 살아남기 위해 사막을 떠돌던 맥스(톰 하디)는 임모탄의 부하들에게 납치되어 노예로 끌려가고, 폭정에 반발한 사령관 퓨리오사(샤를리즈 테론)는 인류 생존의 열쇠를 쥔 임모탄의 여인들을 탈취해 분노의 도로로 폭주한다. 이에 임모탄의 전사들과 신인류 눅스(니콜라스 홀트)는 맥스를 이끌고 퓨리오사의 뒤를 쫓는데...
    끝내주는 날, 끝내주는 액션이 폭렬한다!`,
  },
];

$(document).ready(function () {
  window.onload = function () {
    let i = Math.floor(Math.random() * 10);
    $(".random-video").attr("src", `../static/video/random_action${i}.mp4`);
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
    $(".random-video").attr("src", `../static/video/random_action${i}.mp4`);
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
let modalDirector = document.querySelector(".director");
let modalCast = document.querySelector(".cast");
let modalActor = document.querySelectorAll(".actor");
let actorProfile = document.querySelectorAll(".actor-image");
let modalReviews = document.querySelectorAll(".reviews");

for (let i = 0; i < moreButton.length; i++) {
  moreButton[i].addEventListener("click", function () {
    modalVd.src = `/static/video/random_action${i}.mp4`;
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
