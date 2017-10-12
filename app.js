const express = require('express');
const hbs = require('hbs');
const app = express();
const routes = require('./controllers/routes');

// middleware / static files
app.set('view engine', 'hbs');
app.use(express.static(`${__dirname}/public`));

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
