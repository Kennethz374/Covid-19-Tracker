import React from "react";
import { MenuItem, FormControl, Select } from "@material-ui/core";
import "./App.css";

function App() {
  return (
    <>
      <div className="app">
        <div className="app__header">
          <h1>COVID-19 TRACKER</h1>
          <FormControl className="app__dropdown">
            <Select variant="outlined" value="abc">
              <MenuItem value="worldwide">WorldWide</MenuItem>
              <MenuItem value="worldwide">Option Two</MenuItem>
              <MenuItem value="worldwide">Option 3</MenuItem>
              <MenuItem value="worldwide">Yoooo</MenuItem>
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
