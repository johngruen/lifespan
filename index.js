const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', './server/templates');

app.use('*', (req, res) => {
  res.render('index');
});

console.log(process.env.NODE_ENV);

app.listen(3000);

