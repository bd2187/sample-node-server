const express = require('express');
const hbs = require('hbs');
const app = express();

// middleware / static files
app.set('view engine', 'hbs');
app.use(express.static(`${__dirname}/public`));

// routes
app.get('/', (req, res) => {
  res.render('home.hbs');
});

// port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Now listening to port ${port}`);
});
