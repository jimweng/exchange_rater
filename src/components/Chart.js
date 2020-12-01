import { useMemo } from "react";
import { Chart } from "react-charts";
import { connect } from "react-redux";

const MyChart = ({ currency='USD', historialData=[[]], isLoading }) => {

  // 4個 useMemo
  // data 跟 顯示拆開

  const data = useMemo(
    () => [
      {
        label: currency,
        data: JSON.parse("["+historialData+"]")
      }
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
        width: "400px",
        height: "400px",
      }}
    >
    {!isLoading &&
      <Chart data={data} axes={axes} />
    }
    </div>
  );
  return lineChart;
};

const mapStateToProps = (state) => {
  return { currency: state.selectedCurrency.currency, historialData: state.selectedCurrency.historialData, isLoading: state.selectedCurrency.isLoading };
};

export default connect(mapStateToProps)(MyChart);
