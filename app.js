// built-in modules
const fs = require('fs');

// 3rd party modules
const express = require('express');
const hbs = require('hbs');
const app = express();

// local modules
const routes = require('./controllers/routes');

// middleware / static files
app.set('view engine', 'hbs');
app.use(express.static(`${__dirname}/public`));
app.use(function(req, res, next) {
  const currentTime = `${new Date()} \n`;
  fs.appendFile('visitLog.txt', currentTime, err => {
    if (err) throw err;
    console.log('Someone visited your site');
  });
  next();
});

// register partials and helpers
hbs.registerPartials(`${__dirname}/views/partials`);
hbs.registerHelper('year', function() {
  return new Date().getFullYear();
});

// routes
routes(app);

// port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Now listening to port ${port}`);
});
