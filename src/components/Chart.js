import { useMemo, useState } from "react";
import { Chart } from "react-charts";
import { connect } from "react-redux";
import { createSelector } from "reselect";

const MyChart = ({ historialData = [[]], isLoading }) => {
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
        label: "Historial Price",
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

  const loadingPage = (
    <div className="ui segment">
      <div className="ui active dimmer">
        <div className="ui loader"></div>
      </div>
    </div>
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
      {isLoading ? <Chart data={data} axes={axes} /> : loadingPage}
    </div>
  );
  return lineChart;
};

const getHistorialData = (state) => {
  return {
    historialData: state.selectedCurrency.get('historialData') || [],
    isLoading: state.selectedCurrency.get('isLoading'),
  };
};

const selectProps = createSelector(
  [getHistorialData],
  ({ historialData, isLoading }) => {
    return { historialData, isLoading };
  }
);

const mapStateToProps = (state) => {
  return selectProps(state);
};

export default connect(mapStateToProps)(MyChart);
