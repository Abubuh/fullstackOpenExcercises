import React, { useEffect, useState } from 'react'



const DisplayCountryData = ({countryName, countryCapital, countryArea, countryLanguages, countryFlag}) => {
  const WEATHER_API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${countryCapital}&appid=${import.meta.env.VITE_WEATHER_API_KEY}`
  const [weather, setWeather] = useState()
  useEffect(() => {
    const fetchCountryWeather = () => {
      fetch(WEATHER_API_URL)
      .then(data => data.json())
      .then(res => setWeather(res))
    }
    fetchCountryWeather()
  }, [])
  console.log(weather)
  return (
    <>
    <h2 key={countryName}>{countryName}</h2>
    <p>Capital {countryCapital}</p>
    <p>Area {countryArea}</p>
    <h3>Languages</h3>
    <ul>
      {
        (Object.values(countryLanguages).map((language) => {
          return (
            <li key={language}>{language}</li>
          )
        }))
      }
    </ul>
    <img src={`https://flagcdn.com/w320/${countryFlag.toLowerCase()}.png`} alt="" />
    <h3>Weather in {countryCapital}</h3>
    <p>Temperature {(weather?.main.temp -273.15).toFixed(2)} celsius</p>
    <img src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`} alt="" />
    <p>Wind {weather?.wind.speed} m/s</p>
  </>
  )
}

export default DisplayCountryData