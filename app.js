var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));

app.get("/", function(req, res) {
  res.send("Hello World...");
});

//当发送的url为： http://localhost:3000/s?name='杨林'&order='asc'&age=10
app.get("/s", function(req, res) {
  var name = req.query.name;
  var order = req.query.order;
  var age = req.query.age;
  res.send(name + "..." + order + "..." + age);
  // 返回为：'杨林'...'asc'...10
});

//当发送的url为： http://localhost:3000/杨林/18/desc
app.get("/:name/:age/:order", function(req, res) {
  var param = req.params;
  var order = req.params.order;
  res.send(param.name + "..." + param.age + "..." + param.order);
  // 返回为： 杨林...18...desc
});

//post方式：x-www-form-urlencoded的形式来发
//当发送的url为：http://localhost:3000/postMethod
app.post("/postMethod", function(req, res) {
  console.log(req.body);
  res.send(req.body);
  // 返回为： {"name": "tom"}
});

app.listen(3000);
console.log("http://localhost:3000");
