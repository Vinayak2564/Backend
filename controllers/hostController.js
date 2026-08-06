const Home = require('../models/home')

exports.getAddHome = (req, res, next) => {
  res.render('host/addHome', {
    pageTitle: 'List a stay',
    currentPage: 'Add Home'
  });
};

exports.getHostHomes = (req, res, next) => {
  console.log("enter the home page ", req.url, req.method);
     Home.fetchAll((registeredHome) => {
    res.render('host/host-home-list', {
      registeredHome: registeredHome,
      pageTitle: 'host home List',
      currentPage: 'host-Home'
    });
  });
};

exports.postAddHome = (req, res, next) => {
  const { houseName, Price, location, rating, photo } = req.body;
  const home = new Home(houseName, Price, location, rating, photo);
  home.save();

  res.render('host/home-added', {
    pageTitle: 'Home added',
    currentPage: 'Success'
  });
};

// exports.getHomes = (req, res, next) => {
//   console.log("enter the home page ", req.url, req.method);
//      Home.fetchAll((registeredHome) => {
//     res.render('store/home-list', {
//       registeredHome: registeredHome,
//       pageTitle: 'airbnb home',
//       currentPage: 'Home'
//     });
//   });
// };
  





// exports.registeredHome = registeredHome;