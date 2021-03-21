const express = require('express');
const app = express();

app
.use('/api', require('./api')(express))

.use('/static', express.static('./files'))

.get('/', (req, res) => {
  res
  .set({
    'Content-Type': 'text/html; charset=utf-8'
  })
  .send(`<h1>Дратути!</h1>
  <a href="/static/static.pdf">Лабораторная</a>
  </br>
  <a href="/static/URLS.txt">Текстовый файл</a>
  </br>
  <a href="/static/Telnet.mp4">Видео</a>`);
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
