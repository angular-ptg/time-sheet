const http    = require('http');
const express = require('express');
const app =express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const ClientInfo = require('./api/routes/products');
const EventInfo = require('./api/routes/products');
const EmployeeHolidayInfo = require('./api/routes/products');
const HolidayList = require('./api/routes/products');
const HolidayMenu = require('./api/routes/products');
const empDataRoutes = require('./api/routes/products');
const port = process.env.PORT || 3000;

const server = http.createServer(app);

mongoose.connect('mongodb://timesheet:timesheet@cluster0-shard-00-00-tsior.mongodb.net:27017,cluster0-shard-00-01-tsior.mongodb.net:27017,cluster0-shard-00-02-tsior.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin',{
    useMongoClient: true
});

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({extended : false}))
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));

app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
    res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === "OPTIONS") {
		res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
		return res.status(200).json({});
    }
    next();
});

app.use("/empData", empDataRoutes);
app.use("/clientInfo", ClientInfo);
app.use("/eventInfo", EventInfo);
app.use("/employeeHolidayInfo", EmployeeHolidayInfo);
app.use("/holidayList", HolidayList);
app.use("/holidayMenu", HolidayMenu);

app.use((req, res, next) => {
	const error = new Error("Not found");
	error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
	res.status(error.status || 500);
	res.json({
		error: {
			message: error.message
		}
	});
});
app.get('*', function(req, res) {
	res.sendFile(path.join(__dirname + 'public/index.html'))
});
app.listen(port, ()=>{
	console.log('App listening on port ' +port);
})

