// comedy random movies array
const movies = [
  {
    title: "스파이",
    desc: "작전은 완벽했다, 그들이 끼어들기 전까진!",
    age: "15",
    ott: ["왓챠", "웨이브"],
    runtime: "125분",
    story: `대한민국 최고의 스파이 김철수(설경구). 하지만 마누라 영희(문소리) 앞에만 서면 쩔쩔 매는 대한민국의 평범한 남편이기도 하다. 아무도 모르게 나랏일을 하는 탓에, 출장을 밥 먹듯이 하는 철수. 하필이면 2세를 만들기 위해 받아 놓은 D-day에 의문의 테러가 발생해, 진상 파악을 위한 태국 출장 명령을 받게 된다. 위험천만한 작전지를 종횡무진하는 철수. 그런데, 그 곳에서 철수의 레이더망에 들어온 건 다름 아닌 마.누.라! 심지어 그녀는 모든 작전지마다 위험하게 잘생긴 의문의 사나이(다니엘 헤니)와 함께 나타나 철수의 애간장을 태운다.
  한편, 남편의 정체를 모르는 스튜어디스 영희는 그런 남편 때문에 폭발 직전! 홧김에 비행 스케줄을 바꿔 태국으로 간다. 그곳에서 우연히 만난 꽃미남 라이언과 달콤한 시간을 보내며 철수의 전화도 받지 않고 핑크빛 환상에 빠지는데…
  국가의 운명이 왔다갔다하는 절체절명의 상황! 의문의 남자 앞에서 마냥 좋아라 하는 영희 때문에 도대체 작전에 집중이 안 되는 철수! 과연 철수는 나라도 지키고, 마누라도 지킬 수 있을까?
  `,
    director: "이승준",
    actorName: [
      "설경구",
      "문소리",
      "다니엘헤니",
      "고창석",
      "한예리",
      "정인기",
      "",
      "",
    ],
    actorImg: [
      "https://img1.daumcdn.net/thumb/C116x168/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2Fd310fb20e0d8dcce6244a258671f25990d533d9e",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F977d418c45f3f3f52b9ebd1fd679c14973025a66",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F917e271aa3fba8a9b55c243d5a45b7de16a038f5",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2Fe407d5590ec6bd4284bab86b904008cbbf4d27d7",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F2ad0adb7ceaa527f50a01726c885f67d7f86b8ae",
      "",
      "",
      "",
    ],
    reviews: [
      "재밌게봤네요.  잘만든거같은데평가가 좀짠듯",
      "꺼져. 이딴 영화.",
      "꿀잼. 부담없이 즐길 수 있는 코믹액션 맘에 들어",
      "꿀잼. 부담없이 즐길 수 있는 코믹액션 맘에 들어",
    ],
  },
  {
    title: "데드풀",
    desc: "정의감 제로, 책임감 제로, 정신은 인터스텔라급 마블 역사상 가장 매력 터지는 히어로 `데드풀`이 온다!",
    age: "19",
    ott: ["웨이브"],
    runtime: "108분",
    story: `정의감 제로, 책임감 제로, 정신은 인터스텔라급 마블 역사상 가장 매력 터지는 히어로 '데드풀'이 온다!
  전직 특수부대 출신의 용병 ‘웨이드 윌슨(라이언 레놀즈)’은 암 치료를 위한 비밀 실험에 참여 후, 강력한 힐링팩터를 지닌 슈퍼히어로 ‘데드풀’로 거듭난다.
  탁월한 무술실력과 거침없는 유머감각을 지녔지만 흉측하게 일그러진 얼굴을 갖게 된 데드풀은 자신의 삶을 완전히 망가뜨린 놈들을 찾아 뒤쫓기 시작하는데…`,
    director: "팀 밀러",
    actorName: [
      "라이언 레이놀즈",
      "모레나 바카린",
      "에드 스크레인",
      "TJ밀러",
      "지나 카라노",
      "브리아나 힐데브",
      "",
      "",
    ],
    actorImg: [
      "https://img1.daumcdn.net/thumb/C116x168/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2Fe2873d06b19a9cb58873a26a783bf12a0609b27f",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fcfile%2F15404110AE2F1B4605",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2Fd038539eafb69ac8dd83b64ec345337aa0e3bb49",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fcfile%2F156F1B10ACFE66B9B2",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fcfile%2F17743A1F4B55693068",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F238da015d9b9e72740933cdfe3fcf14f172b6179",
      "",
      "",
    ],
    reviews: [
      "지극히 개인적으로 보면 나쁜 악당이 따로 있는 건 아니다. 사람을 해하고 밥 먹듯이 나쁜짓 해야 악당인가. ",
      "호불호가 갈리겠지만나에겐 쵝오",
      "데드풀의 최대무기는 쉬지않는 입",
      "유일하게 좋아하는 마블 히어로물. 좀 더 쎄게 가자.",
    ],
  },
  {
    title: "엑시트",
    desc: "짠내 폭발 청년백수, 전대미문의 진짜 재난을 만나다!",
    age: "15",
    ott: ["왓챠", "티빙", "웨이브"],
    runtime: "103분",
    story: `짠내 폭발 청년백수, 전대미문의 진짜 재난을 만나다!
  대학교 산악 동아리 에이스 출신이지만
  졸업 후 몇 년째 취업 실패로 눈칫밥만 먹는 용남은
  온 가족이 참석한 어머니의 칠순 잔치에서
  연회장 직원으로 취업한 동아리 후배 의주를 만난다
  어색한 재회도 잠시, 칠순 잔치가 무르익던 중
  의문의 연기가 빌딩에서 피어 오르며
  피할 새도 없이 순식간에 도심 전체는 유독가스로 뒤덮여 일대혼란에 휩싸이게 된다.
  용남과 의주는 산악 동아리 시절 쌓아 뒀던 모든 체력과 스킬을 동원해
  탈출을 향한 기지를 발휘하기 시작하는데…`,
    director: "이상근",
    actorName: ["조정석", "윤아", "고두심", "박인환", "김지영", "", "", ""],
    actorImg: [
      "https://img1.daumcdn.net/thumb/C116x168/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2Fed2d4b82f0058d7cb5f36eb1e25c634a2adcd57f",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F893c26077ff0dc4e4b6630df4ef9dfe7f83ddd96",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F4bfa32b3a69a089f271e233b38e773faf4f09e9b",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F58837750b7e53e54e19aa509794d567e160bb8f4",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F64479bec29f19aec8a3573fd89d0e9fda9064dfd",
      "",
      "",
      "",
    ],
    reviews: [
      "기대안하고 봤는데 재미있네요.손이 평소 건조한편인데 땀이 났어요.",
      "독특한소재재밌게봤습니다",
      "재밌어요. 윤아 연기가 생각보다 좋아요",
      "엉터리 코메디인줄 알았는데~~째밌어요",
    ],
  },
  {
    title: "청년경찰",
    desc: "현장경험 전무, 수사는 책으로 배웠다!“그냥 우리가 잡아볼게요”",
    age: "15",
    ott: ["넷플릭스", "왓챠", "티빙", "웨이브"],
    runtime: "108분",
    story: `현장경험 전무, 수사는 책으로 배웠다!“그냥 우리가 잡아볼게요”
  의욕충만 경찰대생 기준(박서준) X 이론백단 경찰대생 희열(강하늘). 둘도 없는 친구인 두 사람은 외출을 나왔다 우연히 납치 사건을 목격하게 된다. 목격자는 오직 두 사람 뿐! 기준과 희열은 학교에서 배운 대로 지체 없이 경찰에 신고한다.
  하지만 복잡한 절차와 부족한 증거로 수사는 전혀 진행될 기미가 보이지 않는 상황! 1분 1초가 급박한 상황에서 아까운 시간만 흘러가자, 기준과 희열은 직접 발로 뛰는 수사에 나서기로 하고 예측 불가능한 상황을 마주하게 되는데…
  전공지식 총동원!파릇파릇한 놈들의 혈기왕성 실전수사가 시작된다!`,
    director: "김주환",
    actorName: [
      "박서준",
      "강하늘",
      "성동일",
      "박하선",
      "서도빈",
      "고준",
      "",
      "",
    ],
    actorImg: [
      "https://img1.daumcdn.net/thumb/C116x168/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2Fc6d79086362c3cb2d214b30b732120d1908ee497",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fmovie%2Fe2e55a404e1c33d2ca288602f7175785ceeec716",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F84a8fa8ea4fd5ad9ffefc3b885d755dbc39af00d",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fcfile%2F1524450D4BFC75AB01",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F41e97eee578558eebcb3b323bd150437606d958e",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F2d56e176e5d42172386163db7a8cb824555a1aa6",
      "",
      "",
    ],
    reviews: [
      "학교에서 유급을 당하면서 학생들이 범죄집단을 잡았는데 윗대가리들은 규정 운운하고 자빠진 꼴이 현재의 무능한 경찰 수준을 잘 보여준다.",
      "조선족척살.더러븐중공놈들모조리 몰살척살",
      "평점 7점 정도 되는 영화 평점테러로 10점 찍었구요. 시리즈로 나와도 좋을거 같습니다.",
      "우리나라 영화 관객 수준을 어떻게 생각하고 만들었는지...........",
    ],
  },
  {
    title: "19곰 테드",
    desc: "전세계를 홀린 진정한 짐승남이 온다!애 같은 남자와 남자 같은 곰의 발칙한 우정!",
    age: "19",
    ott: ["티빙", "웨이브"],
    runtime: "106분",
    story: `전세계를 홀린 진정한 짐승남이 온다!애 같은 남자와 남자 같은 곰의 발칙한 우정!
  어린 시절, 왕따에게도 왕따를 당하던 존(마크 월버그)의 소원을 통해 생명을 얻은 곰인형 테드(세스 맥팔레인)! 말하고 걷는 곰인형 테드는 전세계적인 스타가 된다. 그러나 세월에는 장사가 없는 법. 대중에게 잊혀진 스타 테드는 취미 음주가무, 특기 여자 꼬시기인 백수 한량으로 전락한다. 곰인형 외모에 어울리지 않는 음담패설과 욕설을 일삼는 발칙한 곰 테드와 27년째 그와 죽고 못사는 절친 존! 참다 못한 존의 여자친구 로리(밀라 쿠니스)는 남친의 미래를 위해 극약처방을 선택하는데…
  “테드, 내 남친 옆에서 좀 꺼져 줄래?”`,
    director: "세스 맥팔레인",
    actorName: [
      "마크윌버그",
      "밀라 쿠니스",
      "세스 맥팔레인",
      "지오바니 리비시",
      "로라 밴더부트",
      "제시카 스트롭",
      "",
      "",
    ],
    actorImg: [
      "https://img1.daumcdn.net/thumb/C116x168/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fmovie%2Fbcff936ee93eae4a9d1baa8d80f5f75778679e23",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fcfile%2F11402310B0A2B7F6DA",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fcfile%2F19669F274B5C916907",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fcfile%2F1246CC10AE071F5105",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fcfile%2F181D001349FE5B4597",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fcfile%2F156F1B10AB20134440",
      "",
      "",
    ],
    reviews: [
      "애 같은 남자와 남자 같은 곰의 발칙한 우정!",
      "허세 작열 재미 없었음",
      "19금곰이라서 더 귀여웠다",
      "나도 저런 친구 하나 있었으면..",
    ],
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
  },
  {
    title: "스물",
    desc: "인생의 가장 부끄러운 순간을 함께 한 스무살 동갑내기 세 친구의 자체발광 코미디!",
    age: "15",
    ott: ["넷플릭스", "왓챠", "웨이브"],
    runtime: "115분",
    story: `인기만 많은 놈 ‘치호’
  생활력만 강한 놈 ‘동우’
  공부만 잘하는 놈 ‘경재’
  아무것도 하지 않는 잉여의 삶을 지향하는 인기절정의 백수,
  만화가가 되겠다는 꿈을 위해 쉴 틈 없이 준비하는 생활력 강한 재수생,
  대기업 입사가 목표인 최강 스펙의 엄친아이지만 술만 마시면 돌변하는 새내기 대학생까지
  인생의 가장 부끄러운 순간을 함께 한 스무살 동갑내기 세 친구의 자체발광 코미디!`,
    director: "이병헌",
    actorName: [
      "김우빈",
      "준호",
      "강하늘",
      "정소민",
      "이유비",
      "민효린",
      "",
      "",
    ],
    actorImg: [
      "https://img1.daumcdn.net/thumb/C116x168/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2Ffba233e1605f7ba521d2b02eecd1ab9d3941abde",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F14a9f4784fe77dbeba2b4d83ccfeb8bea8d60e76",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fmovie%2Fe2e55a404e1c33d2ca288602f7175785ceeec716",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F87ae85883d830fbc61b61aa053f978a62d2e8c0f",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F69fbc4d15c7b912d5d596460523c70722e6c025f",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fcfile%2F1940E64B4E82C92D02",
      "",
      "",
    ],
    reviews: [
      "익살속에 많은 사회상이 담긴 영화.",
      "김우빈 때문에 봤는데 이 새벽에 빵빵 터지면서 많은 생각도 하게 된다. ",
      "역시. 이병헌 감독 최고.",
      "준호 이유비 커플 상큼하고 예쁘다^^",
    ],
  },
  {
    title: "완벽한 타인",
    desc: "우리 게임 한 번 해볼까? 다들 핸드폰 올려봐저녁 먹는 동안 오는 모든 걸 공유하는 거야전화, 문자, 카톡, 이메일 할 것 없이 싹!",
    age: "15",
    ott: ["티빙", "왓챠", "웨이브"],
    runtime: "115분",
    story: `우리 게임 한 번 해볼까? 다들 핸드폰 올려봐저녁 먹는 동안 오는 모든 걸 공유하는 거야전화, 문자, 카톡, 이메일 할 것 없이 싹!
  오랜만의 커플 모임에서 한 명이 게임을 제안한다.
  바로 각자의 핸드폰을 테이블 위에 올려두고 통화 내용부터 문자와 이메일까지 모두 공유하자고 한 것.
  흔쾌히 게임을 시작하게 된 이들의 비밀이 핸드폰을 통해 들통나면서 처음 게임을 제안했던 것과는 전혀 다른 상상치 못한 결말로 흘러가는데….
  상상한 모든 예측이 빗나간다!`,
    director: "이재규",
    actorName: [
      "유해진",
      "조진웅",
      "이서진",
      "염정아",
      "김지수",
      "송하윤",
      "",
      "",
    ],
    actorImg: [
      "https://img1.daumcdn.net/thumb/C116x168/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F490af559df02c7f5b70d1b80279218a77800d771",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F1b96969cbd36cf1c17cd88ce4af5563b4d3e64dd",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F363ee7c3449040f54307ad3c1611183b4fb77eab",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F1befd8b3ff2c2a53a2e9bf81ecc975e34b61617e",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fcfile%2F15497710B13DDDA14C",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fcfile%2F204ADB184A51A45433",
      "",
      "",
    ],
    reviews: [
      "염정아씨 연기.... 최고",
      "최고의 공포영화",
      "염정아 다시 봤음. 물흐르듯. 짱.",
      "사람의 속내를 다 알고 나면 그사람과 관계를 유지할수 있을까없을거 같다그래서 사람들은 안그런척 하고 살아가고 있다",
    ],
  },
  {
    title: "부라더",
    desc: "가보도 팔아먹는 형 VS 집안도 팔아먹는 동생, 제대로 사고 쳤다!",
    age: "12",
    ott: ["왓챠"],
    runtime: "102분",
    story: `가보도 팔아먹는 형 VS 집안도 팔아먹는 동생, 제대로 사고 쳤다!
  인디아나 존스를 꿈꾸며 유물발굴에 전 재산을 올인 하지만 현실은 늘어나는 빚과 쓸모 없는 장비뿐인 형 석봉(마동석)
  가문을 대표하는 눈부신 외모와 명석한 두뇌로 잘 나가는 건설 회사에 다니지만 순간의 실수로 실직 위기에 처한 동생 주봉(이동휘)
  3년 만에 본가로 강제소환(?) 당한 형제는 사고로 오로라(이하늬)를 치게 된다.
  이제 그들이 움직이기 시작한다!
  사고 탓인지 원래 그런 건지,
  알 수 없는 말과 돌발 행동으로 형제를 헉(!)하게 만드는 멘탈까지 묘(?)한 여자 오로라
  형제의 인생에 훅 들어온 그녀는 그들에게 엄청난 비밀을 알려주게 되고 오로라의 말에 혹한 석봉과 주봉에게 지긋지긋한 안동은 노다지로 보이기 시작 하는데…`,
    director: "장유정",
    actorName: [
      "마동석",
      "이동휘",
      "이하늬",
      "송영창",
      "조우진",
      "송상은",
      "",
      "",
    ],
    actorImg: [
      "https://img1.daumcdn.net/thumb/C116x168/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F3b8713a22660343c04cca305c40741f4a2b9535c",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2Ff28d624a349cc51898c92a851017f19ed069195b",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F0d8b73579e56444508084ecc3f6681d7937014f9",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F3f36b3bb62af14a1d67e7613ed12f946a385e38e",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F34c9313257b7161420a86a79cd4e9dc0c8beb6a5",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fcfile%2F13018C4D4DBA42B207",
      "",
      "",
    ],
    reviews: [
      "평점이 왜 이렇게 낮지? 진짜 재밌는데",
      "다음 평점은 확실한듯함영화 잼없다",
      "시간이 아깝다.",
      "시나리오가 좀 허접한듯",
    ],
  },
  {
    title: "정직한 후보",
    desc: "나의 친구 우리들의 추억 ‘써니’가장 찬란한 순간, 우리는 하나였다!",
    age: "12",
    ott: ["넷플릭스", "웨이브"],
    runtime: "104분",
    story: `어제까진 뻥쟁이, 오늘부턴 정직한 후보?!
  거짓말이 제일 쉬운 3선 국회의원 '주상숙'에게 청천벽력이 떨어진다.
  하루아침에 거짓말은 1도 할 수 없는 '진실의 주둥이'를 갖게 된 것!
  최고의 무기인 '거짓말'을 잃자
  그녀의 인생은 송두리째 흔들리게 되는데...
  웃음 빵! 속이 뻥! 뚫리는
  통쾌한 웃음 폭격이 시작된다!`,
    director: "장유정",
    actorName: [
      "라미란",
      "김무열",
      "나문희",
      "윤정호",
      "송영창",
      "손종학",
      "",
      "",
    ],
    actorImg: [
      "https://img1.daumcdn.net/thumb/C116x168/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fmovie%2Fede84994ed2cca39e391bd9f0bf0edd9099f1a1e",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fcfile%2F27221C4E53BE046F24",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F1fa9da63dfbafaa6494c9f5c5c3b1733506bcc85",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F11d67401105f4d8ece2b119673e48dcc05c0e303",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F3f36b3bb62af14a1d67e7613ed12f946a385e38e",
      "https://img1.daumcdn.net/thumb/C116x168/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F4750dbdde123c94038ca42419af4e3587e390b03",
      "",
      "",
    ],
    reviews: [
      "극한직업보다 훨~~~씬 잼있다~",
      "완전 대박임 코로나 아님 대박터졌을 듯",
      "라미란~~대박~~우껴요 ㅋㅋㅋㅋ연기 짱입니다",
      "라미란 원톱 영화의 가능성! 가족과 같이보기 좋은 코메디♡",
    ],
  },
  {
    title: "미니언즈2",
    desc: "오랜마니언!",
    age: "12",
    ott: ["왓챠"],
    runtime: "87분",
    story: `오랜마니언! 
  세계 최고의 슈퍼 악당을 꿈꾸는 미니보스 ‘그루’와 그를 따라다니는 미니언들. 
  어느 날 그루는 최고의 악당 조직 ‘빌런6’의 마법 스톤을 훔치는데 성공하지만 
  뉴페이스 미니언 ‘오토’의 실수로 스톤을 잃어버리고 빌런6에게 납치까지 당한다. 
  미니보스를 구하기 위해 잃어버린 스톤을 되찾아야 하는 ‘오토’, 그리고 쿵푸를 마스터해야 하는 ‘케빈’, ‘스튜어트’, ‘밥’! 
  올여름 극장가를 점령할 MCU(미니언즈 시네마틱 유니버스)가 돌아온다!`,
  },
  {
    title: "럭키",
    desc: "나의 친구 우리들의 추억 ‘써니’가장 찬란한 순간, 우리는 하나였다!",
    age: "15",
    ott: ["넷플릭스", "웨이브", "왓챠", "티빙"],
    runtime: "112분",
    story: `성공률 100% 완벽한 킬러!
  목욕탕 Key 때문에 무명배우로 삶이 뒤바뀌다?!
  냉혹한 킬러 형욱(유해진)은 사건 처리 후 우연히 들른 목욕탕에서 비누를 밟고 넘어져 과거의 기억을 잃게 된다. 인기도, 삶의 의욕도 없어 죽기로 결심한 무명배우 재성(이준)은 신변 정리를 위해 들른 목욕탕에서 그런 형욱을 보게 되고, 자신과 그의 목욕탕 키를 바꿔 도망친다.
  이후 형욱은 자신이 재성이라고 생각한 채, 배우로 성공하기 위해 노력하는데…
  인생에 단 한번 찾아온 초대형 기회! 초특급 반전!
  이것이 LUCK.KEY다!`,
  },
];

$(document).ready(function () {
  window.onload = function () {
    let i = Math.floor(Math.random() * 10);
    $(".random-video").attr("src", `../static/video/random_comedy${i}.mp4`);
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
    $(".random-video").attr("src", `../static/video/random_comedy${i}.mp4`);
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
    modalVd.src = `/static/video/random_comedy${i}.mp4`;
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
