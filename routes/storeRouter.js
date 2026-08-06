const path = require ('path');
const express = require ('express');
const storeRouter = express.Router();
const rootDir = require ('../utils/pathUtil')
// const {registeredHome} = require('./hostRouter')
const homeController = require ('../controllers/storeController')


storeRouter.get("/", homeController.getIndex
);
storeRouter.get("/bookings", homeController.getBookings
);
storeRouter.get("/homes", homeController.getHomes
);
storeRouter.get("/favourites", homeController.getFavouritesList
);

module.exports =  storeRouter;