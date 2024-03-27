const fs = require('fs');

async function getDataFromDatabase() {
  return new Promise((resolve, reject) => {
    fs.readFile('src/data/data.json', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(JSON.parse(data));
      }
    });
  });
}

async function saveDataToDatabase(data) {
  return new Promise((resolve, reject) => {
    const jsonData = JSON.stringify(data);
    fs.writeFile('src/data/data.json', jsonData, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

// Level 1: Get City Weather Data by Name
async function getWeatherDataByName(cityName) {
  console.log('i am here...')
  try{
    const data = await getDataFromDatabase();
    const weatherRs = data.find(ele=>ele.city == cityName);
    if(weatherRs){
      return {name:cityName,...weatherRs.weather};
    }else{
      throw new Error('City not found');
    }
  }catch(err){
    console.log(err,'City not found');
    throw new Error({'City not found'});
  }
  
}


module.exports = {
  getWeatherDataByName
};