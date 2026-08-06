const test = require('node:test');
const assert = require('node:assert/strict');
const Home = require('../models/home');

test('constructor stores normalized home fields', () => {
  const home = new Home('Pine Crest Villa', 1200, 'Bengaluru', 4.8, 'https://example.com/home.jpg');

  assert.equal(home.houseName, 'Pine Crest Villa');
  assert.equal(home.price, 1200);
  assert.equal(home.location, 'Bengaluru');
  assert.equal(home.rating, 4.8);
  assert.equal(home.photo, 'https://example.com/home.jpg');
});
