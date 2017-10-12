const express = require('express');
const hbs = require('hbs');
const app = express();

// middleware / static files
app.set('view engine', 'hbs');
app.use(express.static(`${__dirname}/public`));
hbs.registerPartials(`${__dirname}/views/partials`);

// routes
app.get('/', (req, res) => {
  res.render('home', {
    title: 'Home'
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About'
  });
});

app.get('/contact', (req, res) => {
  res.render('contact', {
    title: 'Contact'
  });
});

// port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Now listening to port ${port}`);
});
