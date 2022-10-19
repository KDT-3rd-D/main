// express불러오기
const express = require("express");

// express 실행
// express 함수를 호출해서 만들어진 express application
const app = express();

const PORT = 8080; // PORT NUMBER

// app에 view engine을 ejs로 설정
app.set("view engine", "ejs");
// ejs 파일을 저장할 views 폴더의 경로
app.use("/views", express.static(__dirname + "/views"));
app.use("/static", express.static(__dirname + "/static"));

// routing (라우팅)
// 요청(request)과 응답(response) 경로를 설정
// 클라이언트가 get 요청을 보내면, 응답으로 hello express 메세지를 띄운다
// get 요청 : 리소스 검색하고 반환받기 위해 사용되는 메서드
app.get("/", function (request, response) {
  response.render("index");
});

app.get('/login', function(request, response){
    response.render('login');
});

app.get('/action', function(request, response){
    response.render('action')
});
app.get("/romance", function (request, response) {
  response.render("romance");
});
app.get("/comedy", function (request, response) {
  response.render("comedy");
});
app.get("/sf", function (request, response) {
  response.render("sf");
});
app.get("/mypage", function (request, response) {
  response.render("myPage");
});
app.get("/my", function (request, response) {
  response.render("myPage");
});

//로컬 서버 동작
app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
});
// =======
// const express = require("express");
// const app = express();
// const PORT = 8000;

// app.set("view engine", "ejs");
// app.use("/views", express.static(__dirname + "/views"));

// app.get("/", function (req, res) {
//   res.render("main");
// });

// app.listen(PORT, function () {
//   console.log(`listening on port ${PORT}! http://localhost:${PORT}`);
// });
// >>>>>>> de124cb9e2555c6b1230a9cbd50136f12cc47165
