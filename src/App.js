import { React, useState, useEffect } from "react";
import { MenuItem, FormControl, Select } from "@material-ui/core";
import InfoBox from "./InfoBox";
import "./App.css";

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setInputCountry] = useState("worldwide");

  useEffect(() => {
    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then(response => response.json())
        .then(data => {
          const countries = data.map(country => ({
            name: country.country, //UNITED STATE, UNITED KINGDOM
            value: country.countryInfo.iso2 // UK, USA, FR
          }));
          setCountries(countries);
        });
    };

    getCountriesData();
  }, []);

  const onCountryChange = async event => {
    const countryCode = event.target.value;
    setInputCountry(countryCode);
  };

  return (
    <div className="app">
      <div className="app__header">
        <h1>COVID-19 TRACKER</h1>
        <FormControl className="app__dropdown">
          <Select variant="outlined" value={country} onChange={onCountryChange}>
            <MenuItem value="worldwide">Worldwide</MenuItem>
            {countries.map(country => (
              <MenuItem value={country.value}> {country.name} </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      <div className="app__stats">
        <InfoBox title="Coronavirus" cases="1232323" total="1.2m" />
        {/* {info box title = "coronavirus cases"} */}

        <InfoBox title="Recovered" cases="1232323" total="1.2m" />

        {/* {info box title = "coronavirus recoveries"} */}
        <InfoBox title="Deaths" cases="1232323" total="1.2m" />

        {/* {info box } */}
      </div>

      {/* Table on the side bar */}
      {/* Grapj below the table */}

      {/* {map at the bottom} .....*/}
    </div>
  );
}

export default App;
