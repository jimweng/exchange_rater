import React, { useMemo } from "react";
import { Chart } from "react-charts";
import { connect } from "react-redux";

const MyChart = ({ currency='USD', historialData=[[]] }) => {

  // 4個 useMemo
  // data 跟 顯示拆開

  const data = useMemo(
    () => [
      {
        label: currency,
        data: historialData.length > 1 ? JSON.parse("["+historialData+"]") : [[1601856000000,28.59000],[1601942400000,28.53000],[1602028800000,28.53000],[1602115200000,28.53000],[1602460800000,28.48000],[1602547200000,28.49000],[1602633600000,28.52000],[1602720000000,28.52500],[1602806400000,28.55000],[1603065600000,28.52000],[1603152000000,28.50000],[1603238400000,28.46000],[1603324800000,28.47000],[1603411200000,28.49000],[1603670400000,28.47000],[1603756800000,28.44000],[1603843200000,28.47000],[1603929600000,28.48000],[1604016000000,28.49000]]
      }
    ],
    [currency, historialData]
  );

  const axes = useMemo(
    () => [
      { primary: true, type: "time", position: "bottom" },
      { type: "linear", position: "left", min: 0 },
    ],
    []
  );

  const lineChart = (
    // A react-chart hyper-responsively and continuously fills the available
    // space of its parent element automatically
    <div
      style={{
        width: "400px",
        height: "400px",
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
