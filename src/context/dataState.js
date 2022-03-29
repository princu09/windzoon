import React, { useState } from "react";
import DataContext from "./dataContext";

const DataState = (props) => {

  const dataInitalize = [];
  const [ndata, setData] = useState(dataInitalize);
  const chartInitalize = [];
  const [chartTitle, setchartTitle] = useState('')
  const [chart, setChart] = useState(chartInitalize);

  const getData = async () => {
    const response = await fetch(
      `https://forextrade1.com/api/v1/get-chartsheet-mouth-years`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const json = await response.json();
    setData(json.data);
  };

  const getChart = async (year, month) => {
    const response = await fetch(
      `https://forextrade1.com/api/v1/get-chartsheets`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ year, month }),
      }
    );
    const json = await response.json();
    setChart(json.data);
    setchartTitle(`${month} ${year} Data`)
  };

  return (
    <DataContext.Provider value={{ ndata, chart, getData, getChart , chartTitle }}>
      {props.children}
    </DataContext.Provider>
  );
};

export default DataState;
