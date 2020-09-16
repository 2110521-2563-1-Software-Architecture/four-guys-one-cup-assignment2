const express = require('express');
const bodyParser = require('body-parser');
const app = express();

var fs = require('fs'); /* Put it where other modules included */
var data = JSON.parse(fs.readFileSync('./src/json/json.json', 'utf8')); /* Inside the get function */
var data5 = JSON.parse(fs.readFileSync('./src/json/json5.json', 'utf8')); /* Inside the get function */
var data25 = JSON.parse(fs.readFileSync('./src/json/json25.json', 'utf8')); /* Inside the get function */
var data100 = JSON.parse(fs.readFileSync('./src/json/json100.json', 'utf8')); /* Inside the get function */
var data500 = JSON.parse(fs.readFileSync('./src/json/json500.json', 'utf8')); /* Inside the get function */
var data1000 = JSON.parse(fs.readFileSync('./src/json/json1000.json', 'utf8')); /* Inside the get function */
var data5000 = JSON.parse(fs.readFileSync('./src/json/json5000.json', 'utf8')); /* Inside the get function */
var data10000 = JSON.parse(fs.readFileSync('./src/json/json10000.json', 'utf8')); /* Inside the get function */

app.use(bodyParser.urlencoded({ extended: true }));
app.set('PORT', process.env.PORT || 8080);

app.get('/', (_, res) => {
  res.json(data);
});

app.get('/5', (_, res) => {
  res.json(data5);
});

app.get('/25', (_, res) => {
  res.json(data25);
});

app.get('/100', (_, res) => {
  res.json(data100);
});

app.get('/500', (_, res) => {
  res.json(data500);
});

app.get('/1000', (_, res) => {
  res.json(data1000);
});

app.get('/5000', (_, res) => {
  res.json(data5000);
});

app.get('/10000', (_, res) => {
  res.json(data10000);
});

app.post('/greet', (req, res) => {
  res.json({ message: `Hello ${req.body.name || 'Master'}!` });
});

app.listen(app.get('PORT'), () => console.log(`Rest server running on ${app.get('PORT')}`));