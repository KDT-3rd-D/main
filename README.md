# D.NEMA

***KDT3rd Group D*   I ** 김재란  김현아  신진영  염정호** 

[이런 일을 했어요!](https://www.notion.so/989e59ce5a75407a841508f8a2672747)

<aside>
📌 **메인 화면 주소 → [http://49.50.161.92:8080/](http://49.50.161.92:8080/)**

</aside>

Git Hub

Https : [https://github.com/KDT-3rd-D/main.git](https://github.com/KDT-3rd-D/main.git)
SSH : [git@github.com](mailto:git@github.com):KDT-3rd-D/main.git

## 서비스 소개

---

**영화 선정에 어려움을 겪는**, 

**많은 범위의 콘텐츠에서 고민하기 싫고**,

**장르별로 추천을 원하는** 사용자들을 위한 장르별 영화 추천 플랫폼 **D.NEMA!**

**#귀차니즘 #선택장애 #시간절약 #에너지절약 #킬링타임**

## 개발 동기

---

과도한 컨텐츠 추천으로 인한 사용자의 피로도를 줄여주기 위해 

**저희 D조는 영화 추천 플랫폼을 제작** 하게되었습니다.

## 서비스 이름

---

![pngegg (3).png](D%20NEMA%20743551763ce340e48824305a12098be2/pngegg_(3).png)

![pngegg (4).png](D%20NEMA%20743551763ce340e48824305a12098be2/pngegg_(4).png)

**D**ice + Ci**nema** ⇒ **D.NEMA**

*‘Dice’*    주사위를 굴리는 것처럼 D.NEMA에서 영화를 골라준다는 의미입니다.

## 타겟층

---

✅ 영상 OTT 플랫폼에 가입되어 있지만 오히려 과도한 정보로 인해 영화 선택이 힘든 사람

✅ 바쁜 일상에 치여 영화 선택에 에너지를 쓰기 힘든 사람

✅ 장르별로 엄선된 영화를 추천받고자 하는 사람 

## 사이트 맵

---

![dnema_sitemapnew.png](D%20NEMA%20743551763ce340e48824305a12098be2/dnema_sitemapnew.png)

## 페이지 소개

---

### 로그인 화면

D.NEMA에 접속하면 처음으로 보이는 화면입니다.

**이메일과 비밀번호를 입력하여 로그인 버튼을 누르면 홈으로 이동**합니다.

![Untitled](D%20NEMA%20743551763ce340e48824305a12098be2/Untitled.png)

### 홈 화면

홈 화면에는 **‘오늘의 추천 영화’**영상과 함께 영화 상세 정보를 볼 수 있는 버튼이 있습니다.

아래로 내려가면 D.NEMA에서 추천하는 **장르별 영화**와 **Q&A**가 있습니다.

![Untitled](D%20NEMA%20743551763ce340e48824305a12098be2/Untitled%201.png)

![Untitled](D%20NEMA%20743551763ce340e48824305a12098be2/Untitled%202.png)

![Untitled](D%20NEMA%20743551763ce340e48824305a12098be2/Untitled%203.png)

### 장르별 화면

*(Action, Romance, Comedy, SF 총 4개 장르_ 예시 사진은 Action)*

네 개 장르별로 페이지를 만들었으며, 장르별 페이지에서는 

D.NEMA에서 추천하는 **영화를 ‘랜덤’으로** 볼 수 있습니다! 

아래로 내려가면 **‘Top moives’**에서 정보를 확인할 수 있습니다.

![dnema_action.png](D%20NEMA%20743551763ce340e48824305a12098be2/dnema_action.png)

![dnema_action2.png](D%20NEMA%20743551763ce340e48824305a12098be2/dnema_action2.png)

![dnema_action3.png](D%20NEMA%20743551763ce340e48824305a12098be2/dnema_action3.png)

호버 창에서 **더보기 버튼(아래 화살표 아이콘) 클릭** 시 해당 영화의 **모달 창**으로 이동 합니다.

### **모달 창 화면**

영화 상세정보 버튼 클릭 시 **모달창에서 정보**를 볼 수 있도록 설계하였습니다.

![화면 캡처 2022-10-26 093456.png](D%20NEMA%20743551763ce340e48824305a12098be2/%25ED%2599%2594%25EB%25A9%25B4_%25EC%25BA%25A1%25EC%25B2%2598_2022-10-26_093456.png)

각 영화의 정보들은 객체로 정리해 두어서 해당 영화의 정보들이 알맞게 적용되게 설게 하였습니다.

### **마이페이지 화면**

‘내가 쓴 리뷰, 내가 찜한 영화, 평점 준 영화’를 확인할 수 있는 마이페이지 화면입니다.

**스크롤값에 따라 최근활동이 보여지도록** ui/ux를 설계하였고,

내가 쓴 리뷰 클릭시 **리뷰 작성 화면으로 이동**합니다.

![Untitled](D%20NEMA%20743551763ce340e48824305a12098be2/Untitled%204.png)

### 리뷰 작성 **화면**

**‘별점 + 내용 + 작성 시간’** 이 남겨지는 게시판을 구현하였습니다.

**리뷰 작성 및 삭제**가 가능합니다!

![Untitled](D%20NEMA%20743551763ce340e48824305a12098be2/Untitled%205.png)

## 기능 소개

---

- **Login**
    
    - 이메일, 패스워드 Input 및 간단한 유효성 검사
    
    - 로그인버튼 클릭시 D.NEMA Home으로 이동
    
- **Home**

       **1. 영화 상세 Modal**

     영화 예고편 및 영화 정보(내용, 감독, 출연진 사진, 영화에 대한 리뷰) 확인 가능

     ‘리뷰작성하기’ 버튼 클릭시, 리뷰 작성 페이지로 이동

       **2. 장르별 추천 영화**

          마우스 호버시 각 영화별 예고편 및 정보 확인 가능

       **3. QnA**

          자주 묻는 질문 펼쳐보기 제공

          사용자가 질문 작성과 삭제를 할수있도록 제작

       **4. nav bar**

          PC, MOBILE 두가지 버전으로 제작

- **Action/Romance/Comedy/SF**
    
     - 랜덤플레이 → 플레이 된 영화에 맞는 제목/ 제한연령/ 시청가능 ott가 변경되도록 제작
    
     - 영화 리스트 호버시 각 상세정보 플레이 → 클릭시 모달창
    
- **My page**

      - **나의 최근 활동 이력** 및 찜한 영화 확인 가능 → **리뷰 작성 페이지**로 이동

     

- **Review page**
    
     - 리뷰작성 및 평점 평가 가능 + 리뷰 삭제
    

## 디자인 시스템

---

- **메인컬러**
    
    #40a5de
    
- **서브컬러**
    
    #626fb4 
    
    #2b4d9f
    
- 폰트 (HTML _12px 기준)
    
    한글 **noto-sans**
    
    영문 **moserrat**(포인트), **roboto**
    

![Untitled](D%20NEMA%20743551763ce340e48824305a12098be2/Untitled%206.png)

**사용예시: Logo, Favicon**

![logo-v2.png](D%20NEMA%20743551763ce340e48824305a12098be2/logo-v2.png)

[favicon.ico](D%20NEMA%20743551763ce340e48824305a12098be2/favicon.ico)

## 의견 조율 내용

---

- 컨셉을 어떻게 통일할지 (디자인 시스템, 조합, 애니메이션, border-radius, 버튼 UI)
- class, id 네이밍규칙
    
    ![스크린샷 2022-10-14 오후 6.01.40.png](D%20NEMA%20743551763ce340e48824305a12098be2/%25EC%258A%25A4%25ED%2581%25AC%25EB%25A6%25B0%25EC%2583%25B7_2022-10-14_%25EC%2598%25A4%25ED%259B%2584_6.01.40.png)
    

      ex) 부모요소를 “content”-box로 두고, 연관된 자식요소에 “content” - “기능”으로 사용

- prettier 설정, space 4로 통일

## 개발 도구 및 환경

---

![pngegg (1).png](D%20NEMA%20743551763ce340e48824305a12098be2/pngegg_(1).png)

![pngegg.png](D%20NEMA%20743551763ce340e48824305a12098be2/pngegg.png)

![pngwing.com (1).png](D%20NEMA%20743551763ce340e48824305a12098be2/pngwing.com_(1).png)

![pngegg (2).png](D%20NEMA%20743551763ce340e48824305a12098be2/pngegg_(2).png)

## 코드

---

**조원 개별 코드 설명**

[Jinyoung](https://www.notion.so/Jinyoung-580e63f790c147e3a9a859698a243c9d)

[HEADER](https://www.notion.so/HEADER-980fe72c5aa642c0957a0877abd80a0b)

[MAIN](https://www.notion.so/MAIN-e01049d058ca4fe5be2c08b48361f5da)

[LIST](https://www.notion.so/LIST-0c3229efb9fb43fcabfc99e274c8bff4)

[MY PAGE](https://www.notion.so/MY-PAGE-0e288db281a04d3b87ce53e1bd617dd2)

[Jaeran](https://www.notion.so/Jaeran-95f87342622440a4af03a62b86b41f44)

[LOGIN](https://www.notion.so/LOGIN-797a62cc66534ac0896cd29756b8f83c)

[FOOTER & SCROLL](https://www.notion.so/FOOTER-SCROLL-a016301eefd14c8bb7eabc17101b30bc)

[Jung Ho](https://www.notion.so/Jung-Ho-0159d9fb2e274e3289b587e4f68450a0)

[Hover](https://www.notion.so/Hover-d567bf8fff1d42c3acf17ae569200992)

[Modal](https://www.notion.so/Modal-c3e4a00d550849f8935e45e3439b6919)

[Hyuna](https://www.notion.so/Hyuna-eb23e3849bf649a9953bb4c8f5170bdb)

[SUB Random Play](https://www.notion.so/SUB-Random-Play-01a7f1467fa5449e9f6cc77c7c140f17)

[Media Query](https://www.notion.so/Media-Query-464dfc018f60490bbc3ce9f0f1f14e1a)

[Toggle](https://www.notion.so/Toggle-332d9ac0b4974115a145da0b29bd7de0)

[Heading](https://www.notion.so/Heading-9020c1c307b34a9aa4ac7418f3e20beb)

### **아쉬운점**

---

- 로그인: 정규식을 사용하여 유효성 검사를 할 수 있는데 능력 부족으로 구현하지 못했다.
- Hover 애니메이션이 매끄럽지 못하다. 
이용자가 마우스를 이동하는 속도가 자바스크립트가 이벤트를 인지하는 속도가 더 느릴 경우 호버박스가 여러개 뜰 수 있는 버그가 있다.

해결방법은 `mouseenter` 이벤트리스너를 인지하는 속도를 임의로 설정하여 애니메이션이 연속적으로 발생되는것을 방지 할 수 있다.

시간 부족과 자바스크립트 프로그래밍 이해가 부족하여 구현하지 못하였다.
- Modal 애니메이션을 더욱 잘 만들 수 있었는데 아쉽다.

![아쉬운점.gif](D%20NEMA%20743551763ce340e48824305a12098be2/%25EC%2595%2584%25EC%2589%25AC%25EC%259A%25B4%25EC%25A0%2590.gif)

 이처럼 넷플릭스는 모달로 이동시 매끄럽게 이어지는데,

 구현하지 못하여서 숨겨져있다가 나오는 애니메이션으로 대체 하였다.

- API를 활용하면 더욱 많은 양을 넣을 수 있었을 것 같은데 적당한, API를 찾지 못하여 아쉽다.

- 메인페이지: 레이아웃 구조가 단순한 것 같아서 아쉽다.

- `array나 object`를 활용하여, 사용자가 좋아요 버튼을 누른 영화를 데이터값으로 저장하여

       찜하기 기능을 구현하고 싶었는데 구현해내지 못해서 아쉽다.

### **리뷰**

---

*D조가 개발한 D.NEMA 서비스를 보고 코멘트를 남겨주세요!*
