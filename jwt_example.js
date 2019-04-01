const jwt = require("jsonwebtoken");

jwt.sign({ sub: "tucker" }, "kittens", function (err, token) {
  console.log(token);
  jwt.verify(token, "kittens", function (err, decoded) {
  console.log(decoded);
  })
});


