const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const EmpData = require('../models/product');
const ClientInfo = require('../models/clientInfoSchema');
const Event = require('../models/events');
const EmployeeHolidayInfo = require('../models/employeeHolidayInfo');
const HolidayList = require('../models/holidayList');
const HolidayMenu = require('../models/holidayMenu');
const ReportDetails = require('../models/reportDetails');
const ReportTime = require('../models/reportTime');
const PostReportTime = require('../models/postReportTime');
const https = require('https');
  
//post Emp Login Data
router.post('/empData', (req, res, next) => {
	const emp = new EmpData(req.body);
	emp.save()
		.then(empResult => {
			res.status(201).json({
				message: "Handling POST requests to /products",
				createdData: empResult
			});
		})
		.catch(err => {
			res.status(500).json({
				error: err
			});
		});
})

//Get Emp Login Data
router.get("/empData", (req, res, next) => {
	EmpData.find()
		.exec()
		.then(docs => {
			res.status(200).json(docs);
		})
		.catch(err => {
			res.status(500).json({
				error: err
			});
		});
});

//Post Client Info
router.post('/clientInfo', (req, res, next) => {
	const client = new ClientInfo(req.body);
	client
		.save()
		.then(clientData => {
			res.status(201).json({
				createdData: clientData
			});
		})
		.catch(err => {
			res.status(500).json({
				error: err
			});
		});
})

//Get Client Info
router.get("/clientInfo", (req, res, next) => {
	ClientInfo.find()
		.exec()
		.then(docs => {
			res.status(200).json(docs);
		})
		.catch(err => {
			res.status(500).json({
				error: err
			});
		});
});

//Post Event Data
router.post('/eventInfo', (req, res, next) => {
	const eventData = new Event(req.body);
	eventData
		.save()
		.then(eventList => {
			res.status(201).json({
				message: "Handling POST requests to /products",
				createdData: eventList
			});
		})
		.catch(err => {
			res.status(500).json({
				error: err
			});
		});
})

//Get Event Data
router.get("/eventInfo", (req, res, next) => {
	Event.find()
		.exec()
		.then(docs => {
			res.status(200).json(docs);
		})
		.catch(err => {
			res.status(500).json({
				error: err
			});
		});
});

router.get("/employeeHolidays", (req, res, next) => {
	EmployeeHolidayInfo.find()
		.exec()
		.then(docs => {
			res.status(200).json(docs);
		})
		.catch(err => {
			res.status(500).json({
				error: err
			});
		});
});

router.post('/employeeHolidays', (req, res, next) => {
	const employeeHolidayInfo = new EmployeeHolidayInfo(req.body);
	employeeHolidayInfo
		.save()
		.then(list => {
			res.status(201).json({
				message: "Handling POST requests to /products",
				createdEmployee: list
			})
		})
		.catch(err => {
			res.status(500).json({
				error: err
			});
		});
})

router.get("/holidayList", (req, res, next) => {
	HolidayList.find()
		.exec()
		.then(docs => {
			res.status(200).json(docs);
		})
		.catch(err => {
			res.status(500).json({
				error: err
			});
		});
});

//post Holiday List Data
router.post('/holidayList', (req, res, next) => {
	const holiday = new HolidayList(req.body);
	holiday
		.save()
		.then(holidayData => {
			res.status(201).json({
				message: "Handling POST requests to /products",
				createdData: holidayData
			});
		})
		.catch(err => {
			res.status(500).json({
				error: err
			});
		});
})

router.get("/holidayMenu", (req, res, next) => {
	HolidayMenu.find()
		.exec()
		.then(docs => {
			console.log(docs);
			res.status(200).json(docs);
		})
		.catch(err => {
			res.status(500).json({
				error: err
			});
		});
});

router.post('/holidayMenu', (req, res, next) => {
	const holiMenu = new HolidayMenu(req.body);
	holiMenu
		.save()
		.then(holidayMenuData => {
			res.status(201).json({
				message: "Handling POST requests to /products",
				createdData: holidayMenuData
			});
		})
		.catch(err => {
			res.status(500).json({
				error: err
			});
		});
})

//Post Report Details Data
router.post('/reportDetails', (req, res, next) => {
	const reportData = new ReportDetails(req.body);
	reportData.save()
		.then(reportInfo => {
			res.status(201).json({
				message: "Handling POST requests to /products",
				createdData: reportInfo
			});
		})
		.catch(err => {
			res.status(500).json({
				error: err
			});
		});
})

//Get Report Details Data
router.get("/reportDetails", (req, res, next) => {
	ReportDetails.find()
		.exec()
		.then(docs => {
			res.status(200).json(docs);
		})
		.catch(err => {
			res.status(500).json({
				error: err
			});
		});
});

//POST ReportTime Data
router.post('/reportTime', (req, res, next) => {
	const repData = new ReportTime(req.body);
	console.log(req.body);
	repData.save()
		.then(item => {
			res.status(201).json({
				message: "Handling POST requests to /products",
				createdData: item

			});
		})
		.catch(err => {
			res.status(500).json({
				error: err
			});
		});
})

//Get Report Time Data
router.get("/reportTime", (req, res, next) => {
	ReportTime.find()
		.exec()
		.then(docs => {
			res.status(200).json(docs);
		})
		.catch(err => {
			res.status(500).json({
				error: err
			});
		});
});

//POST ReportTime Data From Angular
router.post('/postReportTime', (req, res, next) => {
	const postData = new PostReportTime(req.body);
	console.log(req.body);
	postData.save()
		.then(list => {
			res.status(201).json({
				message: "Handling POST requests to /products",
				createdData: list

			});
		})
		.catch(err => {
			res.status(500).json({
				error: err
			});
		});
})

//Get Post Report Time Data
router.get("/postReportTime", (req, res, next) => {
	PostReportTime.find()
		.exec()
		.then(docs => {
			res.status(200).json(docs);
		})
		.catch(err => {
			res.status(500).json({
				error: err
			});
		});
});
module.exports = router;