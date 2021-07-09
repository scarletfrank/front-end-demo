const express = require('express')
var _ = require('lodash');

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
  console.log(_.defaults({ 'a': 1 }, { 'a': 3, 'b': 2 }));
})