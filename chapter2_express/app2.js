var express = require('express');
var morgan = require('morgan');

var app = express();

var users =[
    {id : 1, name : 'alice'},
    {id : 2, name : 'bek'},
    {id : 3, name : 'chris'},
]

app.use(morgan('dev'));

app.get('/users', function (req, res) {
  res.send(users);
});

// status code

// 2XX: 자, 여기있어
// 200: 성공(success), GET, PUT
// 201: 작성됨(created), POST
// 204: 내용 없음 (No Conent), DELETE

// 4XX: 니가 문제임
// 400: 잘못된 요청 (Bad Request)
// 401: 권한 없음 (Unauthorized)
// 404: 찾을 수 없음 (Not found)
// 409: 충돌 (Conflict)

// 5XX: 내가 문제임
// 500: 서버 에러 (Interel server error)


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});