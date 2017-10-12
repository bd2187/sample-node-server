module.exports = function(app) {
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
};
