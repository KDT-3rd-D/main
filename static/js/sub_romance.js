// romance random movies array
const movies = [
  {
    title: "여름날 우리",
    desc: "처음이었다, 사랑이 싹트는 기분",
    age: "12",
    ott: ["티빙", "웨이브"],
    runtime: "115분",
    story: `처음이었다, 사랑이 싹트는 기분
    너에게 풍덩 빠져버렸던 17살의 여름.
    너를 두고 아무것도 할 수 없었던 21살의 여름.
    그리고 몇번의 여름이 지나고 다시 만난 너,
    이젠 놓치지 않을 거야.
    ‘널 만난 건 내 인생 최고의 행운이었어’`,
    director: "한천",
    actorName: [
      "허광한",
      "장약남",
      "정관삼",
      "안자동",
      "곽승",
      "왕사사",
      "양정강",
      "유신",
    ],
    actorImg: [
      "https://img1.daumcdn.net/thumb/C116x168/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F01e65c66018eb22010330b2484b437fb7130f71d",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F88a47fbe0c1e6a5d3001ae4032ff39ed8514439b",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F1e264ac390fddaca86208234954a26cefc255b28",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F3331c82eb9d75c0b3e0d4cb5c5b6bc136d888b17",
      "https://mblogthumb-phinf.pstatic.net/MjAyMDAzMTdfOTYg/MDAxNTg0NDEzMTM0ODA3.mQfIn8T9SDBNjoR0zLUPJM3BqEpbD748_I7B5i3fPbUg.opt5QU3RekBQIzXKnVPa6UCY6LK5q8sCvCXJTSTsDyIg.JPEG.pnr0612/IMG_20200304_084850.jpg?type=w800",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fcfile%2F18731E4C4E8B1D6F04",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F3a160e92b1d6ecb07fed97fcf105c7043d615965",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F485b6d4a49deafb141c5b190aa91e19b2bd9aa83",
    ],
    reviews: [
      "이런 아련한 갬성 정말 못 참아.. 눈물 광광 흘리면서 봤다 개인적으로 ⟨너의 결혼식⟩보다 더 좋았음",
      "대만영화인줄 알았는데 중국영화군요.중국영화 많이 발전했네요.원작을 영화로 만들면 원작의 느낌을 제대로 표현하기 힘든데 원작보다 뛰어난 영화는 오늘 처음 봤습니다. 연출과 각본이 훌륭했습니다. 남주여주도 좋았구요.",
      "원작보다 나은 리메이크.",
      "허광한ㅜㅜㅠ",
    ],
  },
  {
    title: "동감",
    desc: "다른 시간 속 우리가 연결되었다.",
    age: "15",
    ott: ["티빙", "웨이브"],
    runtime: "114분",
    story: ` 1999년, '용'은 첫눈에 반하게 된 '한솔'을 사로잡기 위해 
    친구에게 HAM 무전기를 빌린다.
    2022년, ‘무늬’는 인터뷰 과제를 위해 
    오래된 HAM 무전기를 작동시킨다.
    "씨큐... 씨큐... 제 목소리 들리세요?"
    개기 월식이 일어난 날,
    시간을 뛰어넘어 기적처럼 연결된 ‘용’과 ‘무늬’는
    서로의 사랑과 우정을 이야기하며 특별한 감정을 쌓아가는데...
    1999 - 2022
    마음을 수신합니다.`,
    director: "서은영",
    actorName: [
      "여진구",
      "조이현",
      "김혜윤",
      "나인우",
      "배인혁",
      "노재원",
      "남민우",
      "임유빈",
    ],
    actorImg: [
      "https://img1.daumcdn.net/thumb/C116x168/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F00790927b5fec7aab6171c17e05bd56383effc08",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F790c721e65666e28bd29aef42161f77259c19f1f",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fmovie%2Ffca50f65c6fa0ee963b1e97edf1e367f8090906a",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F540f759e35dc24e596882f2cb81e0a7534b81844",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2Fc809c1b6230aecc8888b36cdddc90c643a64c915",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F95aa38609fb7e41606bcb5e32ad6f63ba2c53922",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fmovie%2Ff2a1544625ee55b16a7ba07fc6e3f19c4e0567bf",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fmovie%2Fbbaa899eab06fb9a3c539a8310d6c6bc2e154736",
    ],
    reviews: [
      "여진구님 출연한다니 빨리 보고 싶어요^^",
      "저도 95학번 입니다 ㅎㅎㅎㅎ옛날에 이 영화 감동이었는데 …ost 까지 … 진구님 보러 가야갰어요",
      "원작을 보고말할수 없는 벅찬 감정을 느꼈던  95학번인 나..리메이크된다니 너무 기대됩니다",
      "여진구 잘생겼어요.재밌어요",
    ],
  },
  {
    title: "연애 빠진 로맨스",
    desc: "외로운건 싫지만 연애는 하고싶어?",
    age: "15",
    ott: ["티빙", "웨이브"],
    runtime: "95분",
    story: `일도 연애도 마음대로 되지 않는 스물아홉 '자영'(전종서).
    전 남친과의 격한 이별 후 호기롭게 연애 은퇴를 선언했지만
    참을 수 없는 외로움에 못 이겨 최후의 보루인 데이팅 어플로 상대를 검색한다.
    일도 연애도 호구 잡히기 일쑤인 서른셋 '우리'(손석구).
    뒤통수 제대로 맞은 연애의 아픔도 잠시
    편집장으로부터 19금 칼럼을 떠맡게 되고 데이팅 어플에 반강제로 가입하게 된다.
    그렇게 설 명절 아침!
    이름, 이유, 마음 다 감추고 만난 '자영'과 '우리'.
    1도 기대하지 않았지만, 1일 차부터 둘은 서로에게 급속도로 빠져들게 되고
    연애인 듯 아닌 듯 미묘한 관계 속에 누구 하나 속마음을 쉽게 터놓지 못하는데...
    이게 연애가 아니면 도대체 뭔데?
    발 빼려다 푹 빠졌다!`,
    director: "정가영",
    actorName: [
      "전종서",
      "손석구",
      "공민정",
      "김슬기",
      "배유람",
      "김재화",
      "임성재",
      "임선우",
    ],
    actorImg: [
      "https://img1.daumcdn.net/thumb/C116x168/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F8b01f45c38e523d397dece2707a371e9097ff3d3",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F36eeb5bd6773e2090b33366fbf3cb5215560a387",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fmovie%2Fdd3d2142391e3bb977b383704bda3d2c8588bdf4",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F72496c612da2795db339efb7b1655eeebde91cfd",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fmovie%2Ff8194d7fc9ec0cf1b55e35f21478b8be55012f84",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F69f055b204a416b01fc7878dc092288095a9f15a",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F0e4068a779fe5b814b8a17e480e6ee891d5b886c",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F04db10491ab5e9b53a49fafd94d3c109d0da9e38",
    ],
    reviews: [
      "잼있습니다 섹드립 때문에 유교적인 분들에게 평점테러 당한거 같은데 오랜만에 진짜 잘 만든 영화를 봤네요",
      "차라리 19세로 만들지.  15세 관람가로 어정쩡하게 했냐",
      "이런 스타일의 로코물 좋아하는 사람들은 무조건 빠질 수 밖에 없는 영화",
      "돈주고 보기는 조금 아까운..그런...영화",
    ],
  },
  {
    title: "영화의 거리",
    desc: "헤어진 연인에서 일로 만난 사이가 된 이들",
    age: "15",
    ott: ["넷플릭스", "티빙", "웨이브"],
    runtime: "77분",
    story: `일도 연애도 마음대로 되지 않는 스물아홉 '자영'(전종서).
    전 남친과의 격한 이별 후 호기롭게 연애 은퇴를 선언했지만
    참을 수 없는 외로움에 못 이겨 최후의 보루인 데이팅 어플로 상대를 검색한다...`,
    director: "김민근",
    actorName: [
      "한선화",
      "이완",
      "박세기",
      "남기형",
      "정행심",
      "김신비",
      "",
      "",
    ],
    actorImg: [
      "https://img1.daumcdn.net/thumb/C116x168/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F4d3152006d7af8af4288d8794204a15e63712586",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F2fdfda0f9ec8eb2dea3a089397858964537b414b",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fcfile%2F1937CE494EC12DEC0D",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fmovie%2Fa6974943fa06292ffb1333bae20708d77b64fe1d",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fcfile%2F127A5A264C87054912",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F19cf84e40997657b8e81a807dedb3dc1234b8d77",
      "",
      "",
    ],
    reviews: [
      "영화의 거리에서 만난 한 연인의 인생 이야기!!  진심으로 보고 싶어요 ^^",
      "풍경이 갖는 의미",
      "한선화 연기와 풍경으로 그나마 6점. 이완의 연기력은 언제쯤..몰입이 안됨.",
      "한선화가 영화 배경잡아주는 사람이라 배경은 이쁜 편. 그리고 두 사람 연기는 어색어색...",
    ],
  },
  {
    title: "너의 결혼식",
    desc: "기억하나요? 당신의 첫사랑",
    age: "15",
    ott: ["넷플릭스", "왓챠", "티빙", "웨이브"],
    runtime: "110분",
    story: `기억하나요? 당신의 첫사랑
    고3 여름, 전학생 ‘승희’(박보영)를 보고 첫눈에 반한 ‘우연’(김영광).
    승희를 졸졸 쫓아다닌 끝에 마침내 공식커플로 거듭나려던 그때!
    잘 지내라는 전화 한 통만 남긴 채 승희는 사라져버리고,
    우연의 첫사랑은 그렇게 막을 내리는 듯했다.
    1년 뒤, 승희의 흔적을 쫓아 끈질긴 노력으로 같은 대학에 합격한 우연.
    그런데 그의 앞을 가로막은 건… 다름 아닌 그녀의 남.자.친.구!
    예술로 빗나가는 타이밍 속
    다사다난한 그들의 첫사랑 연대기는 계속된다!`,
    director: "이석근",
    actorName: [
      "박보영",
      "김영광",
      "장다경",
      "강기영",
      "고규필",
      "장성범",
      "차엽",
      "서은수",
    ],
    actorImg: [
      "https://img1.daumcdn.net/thumb/C116x168/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fmovie%2Fd3b3c3a2c7fb3db2f172ecf22b075803b1da58c2",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fmovie%2Fc603a703241efee13cb36703be154b2c452b9861",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fmovie%2Fmovie-private%2F28774da52f57bf4ced9367b0dbbc653c98863ccd",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F5c131638c1bfb51074403f4ec8e29c889dc3bf99",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2Fbeb0f6b294544b1a9484c8a8a3af862dbed2f26a",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fcfile%2F227DE34C546078EC0D",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2Ff61c5d6704bc451485636cf25b812328fc27adc5",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fmovie%2Fff8041f467d8a76260122b9d7ba835c4b831a0ee",
    ],
    reviews: [
      "첫사랑의 아련한 감정을 느낄 수 있었던 영화인거 같아요 재미있게 봤는데, 저보다는 여자친구가 재미있게 본거 같아요. 김영광이 그렇게 좋다고 ㅋㅋㅋ 그여자친구랑은 헤어졌어요 ㅋㅋㅋ",
      "사랑은, 타이밍 ... 이라는 게 나는 참 슬프네 ....",
      "실컷 웃게 하고 그러면서도 아련한 첫사랑을 떠오르게 하는 영화. 우울한 청춘들에게 강추해요.",
      "그럭저럭  킬링타임용 에 그치는 군",
    ],
  },
  {
    title: "노트북",
    desc: "그녀와의 약속을 지키고 싶습니다.",
    age: "15",
    ott: ["넷플릭스", "웨이브"],
    runtime: "123분",
    story: `17살, ‘노아’는 밝고 순수한 ‘앨리’를 보고 첫눈에 반한다.
    빠른 속도로 서로에게 빠져드는 둘.
    그러나 이들 앞에 놓인 장벽에 막혀 이별하게 된다.
    24살, ‘앨리’는 우연히 신문에서 ‘노아’의 소식을 접하고
    잊을 수 없는 첫사랑 앞에서
    다시 한 번 선택의 기로에 서게 되는데…
    열일곱의 설렘, 스물넷의 아픈 기억, 그리고 마지막까지…
    한 사람을 지극히 사랑했으니 내 인생은 성공한 인생입니다.`,
    director: "닉 카사베츠",
    actorName: [
      "라이언 고슬링",
      "레이첼 맥아담스",
      "제임스 가너",
      "제나 로우랜즈",
      "제임스 마스던",
      "케빈 코널리",
      "데이빗 손튼",
      "조안 알렌",
    ],
    actorImg: [
      "https://img1.daumcdn.net/thumb/C116x168/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fcfile%2F26575F4852BCDA7413",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fcfile%2F250A2D38527CA67919",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fcfile%2F1312A010AE543B3705",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fcfile%2F12345110B1A608F093",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fcfile%2F15404110AE06418FF0",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fcfile%2F12404210ADFC42862F",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fcfile%2F15404110ADFE397854",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fcfile%2F120D7C10ADFC0AF752",
    ],
    reviews: [
      "지금 아내인 은비와도 이 영화 같이 사랑하리!! 인생 영화 너무 감사♡♡",
      "얼마나  오래 지금처럼 행복하게 살 수 있을까.... ...나에게도 저런 남퍈이 있어 감사하다.",
      "몇번이나 봤단 영화. 나도 내 아내를 평생 지켜줘얒겠다",
      "함께 손잡고 가고 싶은 사람이 있다는게 행복   ~  가치가면 무섭지않을듯 ~  ",
    ],
  },
  {
    title: "가장 보통의 연애",
    desc: "만난 지 하루 만에 일보다 서로의 연애사를 더 잘 알게 된 두 사람.",
    age: "15",
    ott: ["넷플릭스", "왓챠", "티빙", "웨이브"],
    runtime: "109분",
    story: `전 여친에 상처받은 ‘재훈’(김래원).
    여느 때처럼 숙취로 시작한 아침,
    모르는 번호의 누군가와 밤새 2시간이나 통화한 기록을 발견하게 되고 그 상대가 바로! 통성명한 지 24시간도 채 되지 않은 직장 동료 ‘선영’임을 알게 된다.
    남친과 뒤끝 있는 이별 중인 ‘선영’(공효진).
    새로운 회사로 출근한 첫날, 할 말 못 할 말 쏟아내며 남친과 헤어지던 현장에서 하필이면! 같은 직장의 ‘재훈’을 마주친다.
    만난 지 하루 만에 일보다 서로의 연애사를 더 잘 알게 된 두 사람.
    하지만 미묘한 긴장과 어색함도 잠시
    ‘한심하다’, ‘어이없다’ 부딪히면서도 마음이 쓰이는 건 왜 그럴까?`,
    director: "김한결",
    actorName: [
      "김래원",
      "공효진",
      "강기영",
      "정웅인",
      "장소연",
      "이채은",
      "정혜린",
      "손우현",
    ],
    actorImg: [
      "https://img1.daumcdn.net/thumb/C116x168/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F54b5bd1f59d04b09a26c388f559aa66f1567874345529",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F62ba2d50abd3f3b07a61b3dc3beb3074b7f27063",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F5c131638c1bfb51074403f4ec8e29c889dc3bf99",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fmovie%2Fec0b9fb2fb35c447470179b0fc9b6f2a57748c4f",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2Fec9ee262faacd930b4b24405fcd704470b97e53f",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fcfile%2F123D4D3D4F33E9021B",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F3ce696918eb72ff2fe6097c20e118c86df2a025b",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F0ec2fe662623460db4f84a1bfb9c847c1557279057890",
    ],
    reviews: [
      "연애의 상처를 씻지 못한 자들이 한 번 쯤은 꼭 봤으면 하는 영화 유쾌하면서도 여운이 남는 그런 영화",
      "재밌는데   아프다",
      "김래원(재훈)은 거의 알콜중독자 아니냐? ㅋㅋㅋ",
      "술로 시작해서 술로 끝나는 영화.",
    ],
  },
  {
    title: "뷰티 인사이드",
    desc: "한 달에 일주일 타인의 얼굴로 살아가는 여자와 일 년 열두 달 타인의 얼굴을 알아보지 못하는 남자의 조금은 특별한 로맨스",
    age: "12",
    ott: ["왓챠"],
    runtime: "127분",
    story: `남자, 여자, 아이, 노인.. 심지어 외국인까지! 자고 일어나면 매일 다른 모습으로 변하는 남자, ‘우진’. 그에게 처음으로 비밀을 말하고 싶은 단 한 사람이 생겼다.드디어 D-DAY!
    ‘우진’은 그녀에게 자신의 마음을 고백하기로 하는데…
    “초밥이 좋아요? 스테이크가 좋아요?
    사실.. 연습 엄청 많이 했어요.
    오늘 꼭 그쪽이랑 밥 먹고 싶어서…”`,
    director: "백종열",
    actorName: [
      "한효주",
      "김대명",
      "도지한",
      "배성우",
      "박신혜",
      "이범수",
      "박서준",
      "김상호",
    ],
    actorImg: [
      "https://img1.daumcdn.net/thumb/C116x168/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F0007909f71efba0cfe508d68bb479f7592367730",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F517a00b2c9a5caf9e8f57acbe39f80dd62d0d7f4",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fcfile%2F180ACF504F3B110B09",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F6b69fde4dfb05e94b2c41a9681a2530403ea5575",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F075b5967df13faa3840ed5fa888dbdc0ecfd2ca0",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fmovie%2Fb8561eff91723a351496590a15fb90f50c23eed7",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2Fc6d79086362c3cb2d214b30b732120d1908ee497",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F41934d0e7cf8f8d2462fb126434e30169fb5c94c",
    ],
    reviews: [
      "소재가 좋았던 영화이며, 한효주 배우 매력도 볼만 했음.",
      "잔잔하면서도 세련된 영화였습니다~",
      "모든 배우의 연기가 좋았다. .. 최고의 설정!",
      "왜 이제 본걸까... 수작!!",
    ],
  },
  {
    title: "비와 당신의 이야기",
    desc: "이건 기다림에 관한 이야기다",
    age: "ALL",
    ott: ["티빙", "웨이브"],
    runtime: "117분",
    story: `“이건 기다림에 관한 이야기다”
    뚜렷한 꿈도 목표도 없이 지루한 삼수 생활을 이어가던 '영호'(강하늘),
    오랫동안 간직해온 기억 속 친구를 떠올리고 무작정 편지를 보낸다.
    자신의 꿈은 찾지 못한 채 엄마와 함께 오래된 책방을 운영하는 '소희'(천우희)는
    언니 '소연'에게 도착한'영호'의 편지를 받게 된다.
    “몇 가지 규칙만 지켜줬으면 좋겠어.
    질문하지 않기, 만나자고 하기 없기 그리고 찾아오지 않기.”
    '소희'는 아픈 언니를 대신해 답장을 보내고 두 사람은 편지를 이어나간다.
    우연히 시작된 편지는 무채색이던 두 사람의 일상을 설렘과 기다림으로 물들이기 시작하고,
    '영호'는 12월 31일 비가 오면 만나자는 가능성이 낮은 제안을 하게 되는데...`,
    director: "조진모",
    actorName: [
      "강하늘",
      "천우희",
      "이설",
      "이양희",
      "이항나",
      "강영석",
      "고우림",
      "최명빈",
    ],
    actorImg: [
      "https://img1.daumcdn.net/thumb/C116x168/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fmovie%2Fe2e55a404e1c33d2ca288602f7175785ceeec716",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2Fdd750c0d183daddfe120b7e7350156be2670b00c",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fmovie%2Fc604b233a8fbb74c4164f0969ba1782b1bf549ea",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fmovie%2Fe39b49f2153ef8f323ed777a4352ad558140a5f0",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F2b997340ce44491796b185d94830683c1575486188408",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F5fdcdd2fc695cc3d74bb71eb14854a545fcca336",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F15d4091c4d28367fd05f1494dd38ca3d6bcfbac0",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F1d725b645b9b300bc0c38e61c093b2a3f01f18d4",
    ],
    reviews: [
      "아련한 추억 속의 첫사랑을 찾으려는 마음은 좋은데...강소라의 비중이 너무 컸다. 강소라의 마음을 뛰어넘을만한 주인공의 마음을 공감하기가 너무 어려운 영화였다.",
      "믿고보는 강하늘 배우라니",
      "언제 개봉하나요~ 강하늘 천우희 믿보배~  기대됩니다 💙💙😍😍",
      "저도 기다리면 기적이 올까요? 좀더 기다려보렵니다^^",
    ],
  },
  {
    title: "20세기 소녀",
    desc: `1999년, 단짝 친구가 홀딱 반한 남학생을 친구 대신 관찰해 주기로 한 10대 소녀.
    하지만 소녀에게도 예기치 못한 사랑이 찾아온다 `,
    age: "12",
    ott: ["웨이브"],
    runtime: "129분",
    story: `어느 겨울 도착한 비디오 테이프에 담긴 1999년의 기억, 17세 소녀 ‘보라’가 절친 ‘연두’의 첫사랑을 이루어주기 위해 사랑의 큐피트를 자처하며 벌어지는 첫사랑 관찰 로맨스.`,
    director: "방우리",
    actorName: ["김유정", "변우석", "박정우", "노윤서", "한효주", "", "", ""],
    actorImg: [
      "https://img1.daumcdn.net/thumb/C116x168/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fmovie%2Ffa6ea7fc9fa4d4a2a5cc5addebd5a58db4087083",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fmovie%2Ff4ec90ef570720f5b5c4a9ca4c396b72f9fb037c",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F0b1fdac1c2dc59ee4f5d82986f7935918773f754",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fmovie%2Feab00d55b8ffc65f2c21601a1b43efae0555c578",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F0007909f71efba0cfe508d68bb479f7592367730",
      "",
      "",
      "",
    ],
    reviews: [
      "넷플에서 방금 봤는데 재밌어요!! 근데 눈물이ㅠㅠㅠㅠㅠㅠ",
      "1999년 어느 뜨거운 햇살을 받게 된 4명의 친구가 과거를 기억하고 미래로 나아가는 영화!",
      "하이틴 느낌의 영화라서 재미있게 보았어요",
      "뭔가 아련했다 20세기 그 시절을 그때의 나를 그때 함께했던 사람들을 그립게 만든 ...그런 영화였다",
    ],
  },
  {
    title: "노트르담",
    desc: `1999년, 단짝 친구가 홀딱 반한 남학생을 친구 대신 관찰해 주기로 한 10대 소녀.
    하지만 소녀에게도 예기치 못한 사랑이 찾아온다 `,
    age: "15",
    ott: ["웨이브"],
    runtime: "90분",
    story: `나는 꿈을 짓는 건축가
    “사랑도 다시 지을 수 있나요?”
    만년 유망주 건축가이자 두 아이를 키우는 싱글맘,모드. 
    툭하면 애인과 싸우고 찾아오는 전남편과는 여전히 오묘한 관계를 유지하고 있다. 
    잊고 있던 옛사랑까지 나타나 혼란스러운 가운데 노트르담 성당 산책로 복원 사업이라는 중대한 프로젝트까지 맡게 되고… 
    일과 사랑,육아까지 그 무엇 하나 놓치고 싶지 않은 모드의 행운은 어디까지 이어질까?`,
    director: "발레리 돈젤리",
    actorName: [
      "발레리 돈젤리",
      "피에르 데 라돈샴",
      "불리 라네",
      "비르지니 르도엥",
      "이자벨 칸델리에",
      "",
      "",
    ],
    actorImg: [
      "https://img1.daumcdn.net/thumb/C116x168/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fcfile%2F1866623B4E7336B52C",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fcfile%2F2449C84B5192CA8807",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fcfile%2F146A94434F7D371F15",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fcfile%2F114A5410AE01227245",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fcfile%2F1740243D4FE4357603",
      "",
      "",
      "",
    ],
    reviews: [
      "판타지와 로맨스가 곁들여진 사랑스러운 영화",
      `여배우 이름이 돈젤리? 돈으로 젤리를 만들어? 어이가 없다 ㅋㅋ
      남배우 피에르 데 라돈샴은 게이 역할 전문 배우인거 같은데
      이번에는 색다른 역할을 맡았네요.
      이런 가벼운 디저트 같은 영화 좋습니다.`,
      "간만에 알찬 코미디영화를 봤네요..꼭 보세요.",
      "엉망진창 좌충우돌로 만들어도 뭔가 신선하고 재미있으면 괜찮은데, 이건 뭐 무슨 이야기를 하고픈지 알수가 없네. 프랑스식 코미디인가? 풍자도 아니고 블랙유머도 아니고- 보다가 지친다.",
    ],
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
  },
];

$(document).ready(function () {
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

    // 랜덤 연령 색상 변경
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
    $(".random-video").attr("src", `../static/video/random_romance${i}.mp4`);
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
    if (movies[i].age === "ALL") {
      hoverAge[i].innerText = "ALL";
    } else {
      hoverAge[i].innerText = `${movies[i].age}+`;
    }
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
    modalVd.src = `/static/video/random_romance${i}.mp4`;
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
