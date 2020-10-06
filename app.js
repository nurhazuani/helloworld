const express = require('express')
const path = require('path');
const app = express()
const port = 3000

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, "views")));

app.get('/', (req, res) => {
 res.send('Hello World!')
});

app.get('/hello', function (req, res) {
  var msg = "hello";
  res.render('hello', { message: msg })
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})