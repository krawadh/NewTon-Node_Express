const WeatherData = require("../models/weatherDataModel");

const getWeatherByCityName = async (req, res) => {
  const cityName = req.params.cityName;

  try {
    // TODO: Implement logic to retrieve weather data by city name
    // Example response when data is found:
    // res.status(200).json({ weatherData });
    // Example response when data is not found:
    // res.status(404).json({ message: 'Weather data not found for the given city' });
    const weatherData = await WeatherData.findOne({ cityName: cityName });
    if (!weatherData) {
      return res
        .status(404)
        .json({ message: "Weather data not found for the given city" });
    }
    res.status(200).json({ weatherData });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

const getWeatherByZipCode = async (req, res) => {
  const zipCode = req.params.zipCode;

  try {
    // TODO: Implement logic to retrieve weather data by zip code
    // Example response when data is found:
    // res.status(200).json({ weatherData });
    // Example response when data is not found:
    // res.status(404).json({ message: 'Weather data not found for the given zip code' });

    const weatherData = await WeatherData.findOne({ zipCode: Number(zipCode) });
    if (!weatherData) {
      return res
        .status(404)
        .json({ message: "Weather data not found for the given zip code" });
    }
    res.status(200).json({ weatherData });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

const postWeatherAlert = async (req, res) => {
  const { cityName, humidity, weatherDescription, temperature, zipCode } =
    req.body;

  try {
    // TODO: Implement logic to post weather alert
    // Example response when alert is posted successfully:
    // res.status(201).json({ message: 'Weather alert posted successfully', alert: newAlert });
    console.log({
      cityName,
      humidity,
      weatherDescription,
      temperature,
      zipCode,
    });
    const newAlert = await WeatherData.create({
      cityName,
      humidity,
      weatherDescription,
      temperature,
      zipCode,
    });
    res
      .status(201)
      .json({ message: "Weather alert posted successfully", alert: newAlert });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

module.exports = {
  getWeatherByCityName,
  getWeatherByZipCode,
  postWeatherAlert,
};
