import { useEffect, useState } from 'react'
import DisplayCountryData from './components/DisplayCountryData'


const COUNTRIES_URL = "https://studies.cs.helsinki.fi/restcountries/api/all"
const App = () => {
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('')
  const [countriesShowed, setCountriesShowed] = useState([])
  let countriesFiltered = search.length > 1 ? countries.filter((country) => country.name.common.toLowerCase().includes(search.toLowerCase())) : countries
  useEffect(() => {
    const fetchCountries = () => {
      fetch(COUNTRIES_URL)
      .then((data) => data.json())
      .then((res) => setCountries(res))
    }
    fetchCountries()
  }, [])

  const handleSearch = (event) => {
    setSearch(event.target.value)
  }
  

  const handleShownCountries = (countrySelected) => {
    if(countriesShowed.includes(countrySelected)){ 
      let newCountriesShowed = countriesShowed.filter((country) =>  country !== countrySelected)
      setCountriesShowed(newCountriesShowed)
    }else{
      setCountriesShowed([...countriesShowed, countrySelected])
    }
  }

  return (
    <div>
      <div>
        <p>Find countries</p> <input onChange={handleSearch}/>
      </div>
      {
        countriesFiltered.length > 10 ?
        <p>Too many mathces, specify another filter</p>
        : countriesFiltered.length > 0 ?
        countriesFiltered.map((country, index) => {
          return (
            <>
            { countriesFiltered.length > 1 ? 
            <>
              <p key={index}>{country.name.common}</p>
              <button onClick={() => handleShownCountries(country.name.common)}>Shown</button>
              {
                countriesShowed.includes(country.name.common) ? <DisplayCountryData countryName={country.name.common} countryCapital={country.capital} countryArea={country.area} countryLanguages={country.languages} countryFlag={country.altSpellings[0].toLowerCase()}/>
                : ""
              }
            </>
            : 
            <> 
              <DisplayCountryData countryName={country.name.common} countryCapital={country.capital} countryArea={country.area} countryLanguages={country.languages} countryFlag={country.altSpellings[0].toLowerCase()}/>

            </>
            }
            </>
          )
        }) :
        <p>Couldn&apos;t find a single country, try another!</p>
      }
    </div>
  )
}

export default App