import { useMemo, useState } from "react";
import { Chart } from "react-charts";
import { connect } from "react-redux";

const MyChart = ({ currency = "USD", historialData = [[]], isLoading }) => {
  const [height, setHeight] = useState(window.screen.height);
  const [width, setWidth] = useState(window.screen.width);

  const detect = () => {
    setHeight(window.screen.height);
    setWidth(window.screen.width);
  };

  window.addEventListener("resize", detect);

  const data = useMemo(
    () => [
      {
        label: currency,
        data: JSON.parse("[" + historialData + "]"),
      },
    ],
    [historialData]
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
        width: `${width * 0.95}px`,
        height: `${height * 0.5}px`,
      }}
    >
      {!isLoading && <Chart data={data} axes={axes} />}
    </div>
  );
  return lineChart;
};

const mapStateToProps = (state) => {
  return {
    currency: state.selectedCurrency.currency,
    historialData: state.selectedCurrency.historialData,
    isLoading: state.selectedCurrency.isLoading,
  };
};

export default connect(mapStateToProps)(MyChart);
