import React, { useState, useEffect } from "react";

import { Line } from "react-chartjs-2";

function LineGraph() {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120")
      .then(response => response.json())
      .then(data => {
        console.log("this is the data=========>", data);
      });
  }, []);

  return <div>i AM A GRAPH</div>;
}

export default LineGraph;