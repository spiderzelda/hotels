// var express = require('express');
// var bodyParser = require('body-parser');
// var cors = require('cors');
// var app = express();
// var mongoose = require('mongoose');
// var hotels = require('./hotel');

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// var port = process.env.PORT || 8090;
// var router = express.Router();

// //////////////////////////

// mongoose.connect('mongodb://127.0.0.1:27017/almundo', function (error) {
//     if (error) console.log(error);
//     console.log("connection successful");
// });

// router.use(function (req, res, next) {
//     // do logging 
//     // do authentication 
//     console.log('Logging of request will be done here');
//     next(); // make sure we go to the next routes and don't stop here
// });


// router.route('/hotels').get(function (req, res) {
//     console.log("doing request")
//     hotels.find(function (err, hotels) {
//         if (err) {
//             res.send(err);
//             console.log("err")
//         }
//         res.send(hotels);
//     });
// });

// /////////////////////////
// app.use(cors());
// app.use('/api', router);
// app.listen(port);
// console.log('REST API is runnning at ' + port);


var express = require("express"); 
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 

var data = require('./data.json');

app.use(cors());

app.get('/hotels', function(req, res, next) {
  if(req.query.filter) {
	next();
	return;
  }
  res.send(data);
});


app.get('/hotels/name', function(req, res) {
  var filter = req.query.filter;
  filtered = filterByName(filter);
  res.send(filtered);
});

app.get('/hotels/stars', function(req, res) {
	var filter = req.query.filter;
	filtered = filterByStars(filter);
	res.send(filtered);
  });


app.post('/hotels', function(req, res) {
	data.push(req.body)
	res.send('CREATE ' + req.body.id);
});

app.put('/hotels', function(req, res) {
	var itemId = req.body.id;
	for (let i = 0; i < data.length; i++) {
		if(data[i].id == itemId) {
			data[i].name = req.body.name;
			data[i].stars = req.body.stars;
			data[i].price = req.body.price;
			data[i].amenities = req.body.amenities;
		}
	}
	res.send('UPDATE ' + itemId);
});

app.delete('/hotels/:id', function(req, res) {
	var itemId = req.params.id;
	for (let i = 0; i < data.length; i++) {
		if(data[i].id == itemId) {
			data.splice(i,1)
		}
	}
	res.send('DELETE ' + itemId);
});
  
var server = app.listen(8090, function () {
    console.log('Server Running'); 
});

function filterByName(name) {
	var filtered = [];
	for (let i = 0; i < data.length; i++) {
		if(data[i].name.toLowerCase().includes(name.toLowerCase())) {
			filtered.push(data[i]);
		}
	}
	return filtered;
}

function filterByStars(stars) {
	var starList = [];
	for (let i = 0; i < stars.length; i++) {
		starList.push(stars[i]*1)
	}
	var filtered = [];
	if(starList.includes(0)){
		return data;
	}
	for (let i = 0; i < data.length; i++) {
		if(starList.includes(data[i].stars)) {
			filtered.push(data[i]);
		}
	}
	return filtered;
}