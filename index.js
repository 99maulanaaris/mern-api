const express = require("express");

const app = express();

app.use(() => {
  console.log("Hello Server....");
  console.log("Hello Server Dua....");
});

app.listen(4000);
