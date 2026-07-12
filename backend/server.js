const http = require('node:http');
const express = require('express');

const app = express();

//const hostname = 'localhost';
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/aman',(req,res)=>{
    console.log("Hello nodemon is work")
    res.send('aman url is hit , it work')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})