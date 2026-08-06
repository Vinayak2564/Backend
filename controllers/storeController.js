const Home = require('../models/home');

exports.getIndex = (req, res, next) => {
  Home.fetchAll((registeredHome) => {
    res.render('store/index', {
      registeredHome,
      pageTitle: 'DreamStay Homes',
      currentPage: 'Home'
    });
  });
};

exports.getHomes = (req, res, next) => {
  Home.fetchAll((registeredHome) => {
    res.render('store/home-list', {
      registeredHome,
      pageTitle: 'Explore homes',
      currentPage: 'Homes'
    });
  });
};

exports.getBookings = (req, res, next) => {
  Home.fetchAll((registeredHome) => {
    res.render('store/bookings', {
      registeredHome: registeredHome.slice(0, 3),
      pageTitle: 'My bookings',
      currentPage: 'Bookings'
    });
  });
};

exports.getFavouritesList = (req, res, next) => {
  Home.fetchAll((registeredHome) => {
    res.render('store/favorite', {
      registeredHome,
      pageTitle: 'Saved favorites',
      currentPage: 'Favorites'
    });
  });
};