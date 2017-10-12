const express = require('express');
const app = express();

// middleware / static files
app.use(express.static(`${__dirname}/public`));

// routes
app.get('/', (req, res) => {
  res.send('Hello world');
});

// port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Now listening to port ${port}`);
});
