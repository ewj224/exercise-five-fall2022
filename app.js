const express = require("express");
const { appendFileSync } = require("fs");
const app = express();
const port = 4000;

const indexRoute = require('./routes/index.js');

app.use('/', indexRoute);

app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })