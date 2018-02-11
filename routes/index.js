const query = require('../psql/lib/query');

module.exports = (app) => {
  app.post('/createUser', (req, res, next) => {
  	const { id, name, picture, email, mobile, other } = req.body;

  	query('INSERT INTO USERS VALUES ($1, $2, $3, $4)', [id, name, picture, email, mobile, other], (err, rows) => {
			if (err) {
				console.error(`${__dirname} says `);
				return next(err);
			}
		  if (!rows.length) return next(404);
		  
		  console.log(rows);
		  return res.json(rows[0]);
  	});
	});

  app.post('/getAllUsers', (req, res, next) => {

  	query('SELECT * FROM USERS', null, (err, rows) =>{
			if (err) {
				console.error(`${__dirname} says `);
				return next(err);
			}
		  if (!rows.length) return next(404);
		  
		  console.log(rows);
		  return res.json(rows[0]);
  	});
  });
}