const fs = require('fs');
const path = require('path');
const rootDir = require('../utils/pathUtil');

module.exports = class Home {
  constructor(houseName, price, location, rating, photo) {
    this.houseName = houseName;
    this.price = Number(price) || 0;
    this.location = location || 'Unknown location';
    this.rating = Number(rating) || 4.5;
    this.photo = photo || 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=900&q=80';
    this.Price = this.price;
    this.photoUrl = this.photo;
  }

  save() {
    Home.fetchAll((registeredHomes) => {
      registeredHomes.push(this);
      const homeDatapath = path.join(rootDir, 'data', 'homes.json');
      fs.writeFile(homeDatapath, JSON.stringify(registeredHomes, null, 2), (err) => {
        if (err) {
          console.log('Could not save home', err);
        }
      });
    });
  }

  static fetchAll(callback) {
    const homeDatapath = path.join(rootDir, 'data', 'homes.json');
    fs.readFile(homeDatapath, (error, data) => {
      if (error) {
        callback([]);
        return;
      }

      try {
        const parsed = JSON.parse(data);
        callback(Array.isArray(parsed) ? parsed : []);
      } catch (err) {
        callback([]);
      }
    });
  }
};