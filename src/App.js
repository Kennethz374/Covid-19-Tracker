import { React, useState, useEffect } from "react";
import { MenuItem, FormControl, Select } from "@material-ui/core";
import "./App.css";

function App() {
  const [countries, setCountries] = useState([]);
  // State = How to Write a variable in REACT
  // get a list of countries from disease.sh ==> https://disease.sh/v3/covid-19/countries

  useEffect(() => {
    // async => send a request, wait for it, do something with it

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
  // useEffect = runs a piece of code based on a given condition

  return (
    <>
      <div className="app">
        <div className="app__header">
          <h1>COVID-19 TRACKER</h1>
          <FormControl className="app__dropdown">
            <Select variant="outlined" value="abc">
              {/* loop through all countries available and show a drop down list of options */}
              {countries.map(country => (
                <MenuItem value={country.value}> {country.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        {/* {Header} */}
        {/* Title + select input dropdown field */}
        {/* {info box} */}
        {/* {info box} */}
        {/* {info box} */}

        {/* Table on the side bar */}
        {/* Grapj below the table */}

        {/* {map at the bottom} */}
      </div>
    </>
  );
}

export default App;
