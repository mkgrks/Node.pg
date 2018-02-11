const { Pool } = require('pg');
const PG = require('./config');

const pool = new Pool({
  user: PG.USER,
  host: PG.HOST,
  database: PG.DB,
  password: PG.PSW,
  port: PG.PORT,
});

module.exports = pool;