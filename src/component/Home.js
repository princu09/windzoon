import DataContext from "../context/dataContext";
import { useContext } from "react";
import { useHistory } from "react-router-dom";


const Home = (props) => {

  let history = useHistory();

  const context = useContext(DataContext);
  const { ndata, getData, getChart } = context;

  getData();

  const setChart = (year , month) =>{
    getChart(year , month)
    history.push("/Chart")
  }


  return (
    <>
      {ndata.map((subdata) => {
        return (
          <div key={subdata.year} style={{ margin: "20px" }}>
            <b>{subdata.year}</b>
            {subdata.month.map((sbm, i) => {
              return (
                <ul key={sbm.month}>
                  <li
                    onClick={() => {
                      setChart(subdata.year, sbm.month);
                    }}
                  >
                    {sbm.month}
                  </li>
                </ul>
              );
            })}
          </div>
        );
      })}
    </>
  );
};

export default Home;
