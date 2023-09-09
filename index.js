const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;

app.use(bodyParser.json());

// Routes / URL / Endpoint utama kita method GET
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/hello', (req, res) => {
  console.log({ urlParam: req.query.alamat });
  const username = req.body.username;
  if (username === userNameFromDBExist) {
    res.status(400).send("username tidak dapat digunakan");
  }
  res.send('Halaman Hello');
});

app.post('/login', (req,res) => {
  console.log({ requestFromOutside: req.body });
    res.send('Login berhasil');
});

app.put('/username', (req, res) => {
  console.log({ updateData : req.body });
  res.send('Update berhasil');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});