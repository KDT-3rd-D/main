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
// get 요청 : 리소스 검색하고 반환받기 위해 사용되는 메서드
// main
app.get("/", function (request, response) {
  response.render("login");
});
// login
app.get("/home", function (request, response) {
  response.render("index");
});
// 영화장르별 page
app.get("/action", function (request, response) {
  response.render("action");
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
// 리뷰쓰기
app.get("/list", function (request, response) {
  response.render("list");
});
// 마이페이지
app.get("/mypage", function (request, response) {
  response.render("myPage");
});
// 인트로화면
app.get("/intro", function (request, response) {
  response.render("intro");
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
