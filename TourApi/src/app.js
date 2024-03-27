const fs = require('fs');
const express = require('express');
const app = express();

//Middleware
app.use(express.json());

const tourDetails = JSON.parse(fs.readFileSync(`${__dirname}/data/tours.json`));

app.get('/tours', (req, res) => {
  //write a code here to get all the tours from tours.json
  res.status(200).send({tourDetails})
});

app.post('/tours', (req, res) => {
  const { name, description, duration, price } = req.body;
  //Write a code here for creating new tour from data/tours.json
  //For creating new id use this logic
  const newId = tourDetails[tourDetails.length - 1].id + 1;
  const inputData = {id:newId, name, description, duration, price };
  console.log(inputData);
  tourDetails.push(inputData);
  fs.writeFile(`${__dirname}/data/tours.json`,JSON.stringify(tourDetails),(err)=>{
    if(err){
      res.status(500).send({message:"Internal server error"})
    }else{
      res.status(200).send({"message": "Tour added successfully"})
    }
  })
});

app.put('/tours/:id', (req, res) => {
  const tourId = parseInt(req.params.id);
  const updatedTour = req.body;
  const index = tourDetails.findIndex((ele)=>ele.id == tourId);
  console.log(index)
  if(index == -1){
    res.status(400).send({"message":"Record not found!"})
  }else{
    const data = tourDetails[index];
    data.name = updatedTour.name;
    data.duration = updatedTour.duration;
    
    //tourDetails[index] = {...tourDetails[index],...updatedTour}

    fs.writeFile(`${__dirname}/data/tours.json`,JSON.stringify(tourDetails),(err)=>{
      if(err){
        res.status(500).send({message:"Internal server error"})
      }else{
        res.status(200).send({"message": "Tour updated successfully"})
      }
    })
  }

  //write a code here for updating a tour

});

app.delete('/tours/:id', (req, res) => {
  const tourId = parseInt(req.params.id);

  const findIndex = tourDetails.findIndex((ele)=>ele.id == tourId);
  if(findIndex == -1){
    res.status(500).send({message:"Record not found!"})
  }else{
    tourDetails.splice(tourDetails[findIndex],1);
    fs.writeFile(`${__dirname}/data/tours.json`,JSON.stringify(tourDetails),(err)=>{
      if(err){
        res.status(500).send({message:"Internal server error"})
      }else{
        res.status(200).send({"message": "Tour deleted successfully"})
      }
    })
    
  }
  //Write a code here for deleting a tour from data/tours.json
  
});

module.exports = app;
