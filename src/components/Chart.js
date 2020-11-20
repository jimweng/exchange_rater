import React, { useMemo } from "react";
import { Chart } from "react-charts";
import { connect } from "react-redux";

const MyChart = ({ currency='USD', historialData=[[]] }) => {

  const data = useMemo(
    () => [
      {
        label: currency,
        data: JSON.parse("["+historialData+"]")
      }
    ],
    [currency, historialData]
  );

  const axes = useMemo(
    () => [
      { primary: true, type: "linear", position: "bottom" },
      { type: "linear", position: "left" },
    ],
    []
  );

  const lineChart = (
    // A react-chart hyper-responsively and continuously fills the available
    // space of its parent element automatically
    <div
      style={{
        width: "400px",
        height: "300px",
      }}
    >
      <Chart data={data} axes={axes} />
    </div>
  );
  return lineChart;
};

const mapStateToProps = (state) => {
  return { currency: state.selectedCurrency.currency, historialData: state.selectedCurrency.historialData };
};

export default connect(mapStateToProps)(MyChart);
