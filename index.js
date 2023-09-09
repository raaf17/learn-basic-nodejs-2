const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./connection');
const response = require('./response');
const port = 3000;

app.use(bodyParser.json());

// Routes / URL / Endpoint utama kita method GET
app.get('/', (req, res) => {
  const sql = "SELECT * FROM mahasiswa";
  db.query(sql, (error, result) => {
    // Hasil data dari mysql
    console.log(result);
    response(200, result, "get all data from mahasiswa", res)
  });
});

app.get('/find', (req, res) => {
  const sql = `SELECT nama FROM mahasiswa WHERE nrp = ${req.query.nrp}`;
  db.query(sql, (error, result)=> {
    response(200, result, "find mahasiswa name", res);
  });
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