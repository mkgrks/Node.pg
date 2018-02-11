const pool = require('../');

module.exports = (queryText, queryValues, cb) => {
  pool.on('error', err => {
    console.error('Unexpected error on idle client', err);
    process.exit(-1);

    return cb(err);
  });

  pool.connect()
    .then(client => {
      return client.query(queryText, queryValues)
        .then(res => {
          client.release();

          return cb(null, res.rows);
        })
        .catch(err => {
          client.release();

          return cb(err);
        })
    });
};
