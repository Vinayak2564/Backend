const express = require('express');
const path = require('path');
const storeRouter = require('./routes/storeRouter');
const hostRouter = require('./routes/hostRouter');
const rootDir = require('./utils/pathUtil');
const errorController = require('./controllers/error');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(rootDir, 'views'));

app.use((req, res, next) => {
  console.log(req.url, req.method);
  next();
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/public', express.static(path.join(rootDir, 'public')));

app.use(storeRouter);
app.use(hostRouter);
app.use(errorController.PageNotFound);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});