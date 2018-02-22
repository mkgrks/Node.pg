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

  app.post('/bookForSelected', (req, res, next) => {
		// const { user, data: { date, day, group, time }} = req.body;
		
		console.log(req.body)
  	// query('INSERT INTO reservations VALUES (DEFAULT, $1, $2, $3, $4, $5, $6) ', [user.uid, date, day, time, group, JSON.stringify(user)], (err, rows) =>{
		// 	if (err) {
		// 		console.error(`${__dirname} says `);
		// 		return next(err);
		// 	}
		//   if (!rows.length) return next(404);
		  
		//   console.log(rows);
		  return res.json(req.body);
  	// });
  });

  app.post('/fetchDataForSelected', (req, res, next) => {
		const { date, hour, group } = req.body;
		console.log('date: ',date);
		console.log('hour: ',hour);
		console.log('group: ',group);
  	query('SELECT * FROM reservations WHERE date=$1 AND hour=$2 AND group_type=$3', [date, hour, group], (err, rows) =>{
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