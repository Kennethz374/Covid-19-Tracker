import React from "react";
import { MenuItem, FormControl, Selection } from "@,ateroa;-ui/core";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>Covid-19 Tracker</h1>
      <FormControl className="app__dropdown">
        <Selection variant="outlined" value="abc">
          <MenuItem value="worldwide">WorldWide</MenuItem>
          <MenuItem value="worldwide">Option Two</MenuItem>
          <MenuItem value="worldwide">Option 3</MenuItem>
          <MenuItem value="worldwide">Yoooo</MenuItem>
        </Selection>
      </FormControl>

      {/* {Header} */}
      {/* Title + select input dropdown field */}
      {/* {info box} */}
      {/* {info box} */}
      {/* {info box} */}

      {/* Table on the side bar */}
      {/* Grapj below the table */}

      {/* {map at the bottom} */}
    </div>
  );
}

export default App;
