const express = require("express");
// const bodyParser = require("body-parser");
// 帶入express
const app = express();
// 將express存至app方便調用
// app.use(bodyParser.urlencoded({ extended: false }));


app.use(express.static('public'))

function calc(num) {

    let sum = 0;
    for (i = 0; i <= num; i++) {
      sum += i;
    }
    return sum;
  };
 


app.get("/getData", (req, res) => {
//   console.dir(req.query);

  let num = req.query.number;
  let result = 0;

  if (!num) {
    res.send("Lack of parameter.");
  } else if (isNaN(num)) {
    res.send("Wrong parameter");
  } else {
    result = calc(num);
    res.send(result.toString());
    // 要轉成string才能send
  }
});

app.get("/", (req, res) => {
  res.send("<h1>Hello, My Server!</h1>");
});

app.listen(3000, () => {
  console.dir("Server in running on port: 3000");
});
