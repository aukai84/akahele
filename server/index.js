const PORT = process.env.PORT || 8080;
const server = require('./server');
const db = require('./models');

server.listen(PORT, () => {
  console.log('listening on port ' + PORT)
  db.sequelize.sync();
})