const http    = require('http');
const express = require('express');
const app =express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const email   = require('emailjs/email');
const router = express.Router();

const ClientInfo = require('./api/routes/products');
const EventInfo = require('./api/routes/products');
const EmployeeHolidayInfo = require('./api/routes/products');
const HolidayList = require('./api/routes/products');
const HolidayMenu = require('./api/routes/products');
const empDataRoutes = require('./api/routes/products');
const ReportTimeRoute = require('./api/routes/products');
const reportDataRoute = require('./api/routes/products');
const postReportDataRoute = require('./api/routes/products');
const config = require('./api/config/config.json');

const port = process.env.PORT || 3000;

const server = http.createServer(app);

mongoose.connect(`mongodb://${config.mongodb.username}:${config.mongodb.password}${config.mongodb.url}`,{
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
app.use("/reportDetails", reportDataRoute);
app.use("/reportTime", ReportTimeRoute);
app.use('/postReportTime', postReportDataRoute);
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


sendmail= function(req, res) {
        
var server  = email.server.connect({
   user:    "chanduveerlas93@gmail.com", 
   password:"Rajitha10$", 
   host:    "<email server url>", 
   ssl:     true
});
 
// send the message and get a callback with an error or details of the message that was sent
server.send({
   text:    "You have signed up", 
   from:    "chanduveerlas93@gmail.com", 
   to:      req.body.name,
   subject: "Welcome to my app",
   attachment: 
   [
      {data:"<html>i <i>hope</i> this works!</html>", alternative:true},
      {path:"pathtofile.zip", type:"application/zip", name:"renamed.zip"}
   ]
}, function(err, message) { 
    if(err)
    console.log(err);
    else
    res.json({success: true, msg: 'sent'});
 });
        
    }
app.listen(port, ()=>{
	console.log('App listening on port ' +port);
})

