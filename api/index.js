module.exports = express => {
  const rtr = express.Router();
  rtr
  .route('/add/:a/:b')
  .get((req, res) => {
    const {a, b} = req.params;
    const result = Number(a) + Number(b);
    res
    .send(`Сумма: ${result}`);
  });
  rtr
  .route('/mpy/:a/:b')
  .get((req, res) => {
    const {a, b} = req.params;
    const result = Number(a) * Number(b);
    res
    .send(`Сумма: ${result}`);
  });
  return rtr;
}