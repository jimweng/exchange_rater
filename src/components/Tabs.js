import React, { useState } from "react";
import { connect } from "react-redux";

const Tabs = (props) => {
  const [currentActive, setCurrentActive] = useState(0);

  const tabChange = async (position) => {
    const positionToCurrency = {
      first: "USD",
      second: "JPY",
      third: "CNY",
      fourth: "EUR",
    };

    setCurrentActive(position);
    props.selectCurrency(positionToCurrency[position]);
  };

  return (
    <div className="ui top attached tabular menu">
      <div
        className={`item ${(currentActive ===  'first') || (currentActive === 0) ? "active" : ""}`}
        data-tab="first"
        onClick={() => {
          tabChange("first");
        }}
      >
        美金
        <i className="us flag"></i>
      </div>
      <div
        className={`item ${currentActive === "second" ? "active" : ""}`}
        data-tab="second"
        onClick={() => {
          tabChange("second");
        }}
      >
        日幣
        <i className="jp flag"></i>
      </div>
      <div
        className={`item ${currentActive === "third" ? "active" : ""}`}
        data-tab="third"
        onClick={() => {
          tabChange("third");
        }}
      >
        人民幣
        <i className="cn flag"></i>
      </div>
      <div
        className={`item ${currentActive === "fourth" ? "active" : ""}`}
        data-tab="fourth"
        onClick={() => {
          tabChange("fourth");
        }}
      >
        歐元
        <i className="eu flag"></i>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { currency: state.currency };
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectCurrency: (currency) =>
      dispatch({
        type: "CURRENCY_SELECTED",
        currency: currency,
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tabs);
