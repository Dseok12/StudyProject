// @ts-check
const express = require('express');
const app = express();
const PORT = 5000;

app.use('/', (req, res) => {
  res.send('Hello, server');
});

app.listen(PORT, () => {
  console.log(`${PORT}서버를 성공적으로 열었습니다.`);
});
