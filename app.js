const http = require("http");
http
  .createServer(function (req, res) {
    res.end("answer from server");
  })
  .listen(3000, function () {
    console.log("Сервер начал прослушивание запросов на порту 3000");
  });

const os = require("os");

const greeting = require("./greeting");

let userName = os.userInfo().username;

console.log(`Дата запроса: ${greeting.date}`);
console.log(greeting.getMessage(userName));

const User = require("./user.js");

let sergei = new User("Sergei", 30);
sergei.sayHi();
