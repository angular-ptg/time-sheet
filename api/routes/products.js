const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const EmpData = require('../models/product');
const ClientInfo = require('../models/clientInfoSchema');
const Event = require('../models/events');
const EmployeeHolidayInfo = require('../models/employeeHolidayInfo');
const HolidayList = require('../models/holidayList');
const HolidayMenu = require('../models/holidayMenu');
const https = require('https');

//post Emp Login Data
router.post('/empData', (req, res, next) => {
	const emp = new EmpData(req.body);
	emp
		.save()
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
				message: "Handling POST requests to /products",
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
	holidayMenu.find()
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
	const holidayMenu = new HolidayMenu(req.body);
	holidayMenu.save((err, data) => {
		if (err) {
			res.send({
				"status": "failed"
			});
		} else {
			res.send(data);
		}
	})
})

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

router.get("/:productId", (req, res, next) => {
	const id = req.params.productId;
	Product.findById(id)
		.exec()
		.then(doc => {
			console.log("From database", doc);
			if (doc) {
				res.status(200).json(doc);
			} else {
				res
					.status(404)
					.json({
						message: "No valid entry found for provided ID"
					});
			}
		})
		.catch(err => {
			res.status(500).json({
				error: err
			});
		});
});
module.exports = router;