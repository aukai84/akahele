const express = require ('express');
const app = express();
const PORT = process.env.PORT || 4000;
const bodyParser = require ('body-parser');
app.use(bodyParser.json());
const db = require ('./models');
const {CoordinateCache} = db;
const cors = require ('cors');

app.use(cors());

app.post('/user/cache', (req, res) => {
  console.log(req.body);
  // sequelize to POST update
  res.end();
});

app.listen(PORT, _ => {
  console.log('server servering at server port', `${PORT}`);
});