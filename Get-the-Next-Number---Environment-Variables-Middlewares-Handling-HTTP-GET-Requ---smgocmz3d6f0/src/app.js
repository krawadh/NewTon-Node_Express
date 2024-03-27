const express = require('express');
const app = express();

//Middlewares
  app.use(express.json());

// Write a GET Request to get the next number from the input 'num'.
// Endpoint : /api/get-next-num
// Return the response as {message : , status: }

app.post('/api/get-next-num',(req, res)=>{
  const num = parseInt(req.body.num);
  if(isNaN(num)){
    res.status(404).send({message :"Not a vilid number.", status: "failure" } );
  }else{
    res.status(200).send({ message: num+1, status: "success" } );
  }
})

module.exports = app;
