import { useEffect, useState } from 'react'

const COUNTRIES_URL = "https://studies.cs.helsinki.fi/restcountries/api/all"

const App = () => {
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('')
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
            <p key={index}>{country.name.common}</p>
            : 
            <>
              <h2 key={country.name.common}>{country.name.common}</h2>
              <p>Capital {country.capital}</p>
              <p>Area {country.area}</p>
              <h3>Languages</h3>
              <ul>
                {
                  (Object.values(country.languages).map((language) => {
                    return (
                      <li key={language}>{language}</li>
                    )
                  }))
                }
              </ul>
              <img src={`https://flagcdn.com/w320/${country.altSpellings[0].toLowerCase()}.png`} alt="" />
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