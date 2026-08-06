const express = require('express');
const hostRouter = express.Router();
const hostController = require('../controllers/hostController');

hostRouter.get('/host/add-home', hostController.getAddHome);
hostRouter.post('/host/add-home', hostController.postAddHome);
hostRouter.get('/host/homes-list', hostController.getHostHomes);

module.exports = hostRouter;
