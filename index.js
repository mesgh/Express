const express = require('express');
const app = express();

app
.use('/api', require('./api')(express))
.get('/', (req, res) => {
  res
  .set({
    'Content-Type': 'text/html; charset=utf-8'
  })
  .send('<h1>Дратути!</h1>');
})
.get('/src', (req, res) => {
  res
  .set({
    'Content-Type': 'javascript; charset=utf-8'
  });
  require('fs').createReadStream('./index.js').pipe(res);
})
.use((req, res) => {
  res
  .status(404)
  .set({
    'Content-Type': 'text/html; charset=utf-8'
  })
  .send('<h1 style="aqua">Ничего не нашёл!</h1>');
})
.listen(process.env.PORT || 80);
