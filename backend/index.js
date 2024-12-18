const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("MOM taker");
});

app.get("/:id", (req, res) => {
  res.send({
    mom_id: req.params.id,
  });
});

app.listen(3000);
