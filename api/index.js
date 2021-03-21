module.exports = express => {
  const rtr = express.Router();
  rtr
  .route('/add/:a/:b')
  .get((req, res) => {
    const {a, b} = req.params;
    const result = Number(a) + Number(b);
    sendIt(req, res, result);
  });
  rtr
  .route('/mpy/:a/:b')
  .get((req, res) => {
    const {a, b} = req.params;
    const result = Number(a) * Number(b);
    sendIt(req, res, result);
  });
  return rtr;
}

function sendIt(req, res, result) {
  if (req.headers['content-type'] === 'application/json') {
    res
    .set({
      'Content-Type': 'application/json; charset=utf-8'
    })
    .send({ result });
  } else {
    res
    .set({
      'Content-Type': 'text/html; charset=utf-8'
    })
    .send(`Результат: ${result}`);
  }
}