import React, { useContext } from "react";
import DataContext from "../context/dataContext";

const Chart = () => {
  const context = useContext(DataContext);
  const { chart , chartTitle } = context;

  return (
    <>
    <h1>{chartTitle}</h1>
      {chart.map((subdata) => {
        return (
          <details key={subdata.id} style={{ margin: "20px" }}>
            <summary> {subdata.title} </summary>
            <p>Year : {subdata.month } { subdata.year}</p>
            <p>File Size : {subdata.file_size}</p>
            <p>Time Ago : {subdata.time_ago}</p>
            <img src={subdata.chart_image} height={200} alt="" />
          </details>
        );
      })}
    </>
  );
};

export default Chart;
