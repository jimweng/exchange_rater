import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

const Tabs = (props) => {
  const [position, setPosition] = useState(
    window.localStorage.getItem("selectItem") || "first"
  );

  useEffect(() => {
    props.selectCurrency(positionToCurrency[position]);
  }, [position]);

  const tabChange = (position) => {
    props.selectCurrency(positionToCurrency[position]);
    window.localStorage.setItem("selectItem", position);
    setPosition(window.localStorage.getItem("selectItem"));
  };

  return (
    <div className="ui top attached tabular menu">
      <div
        className={`item ${position === "first" ? "active" : ""}`}
        data-tab="first"
        onClick={() => {
          tabChange("first");
        }}
      >
        美金
        <i className="us flag"></i>
      </div>
      <div
        className={`item ${position === "second" ? "active" : ""}`}
        data-tab="second"
        onClick={() => {
          tabChange("second");
        }}
      >
        日幣
        <i className="jp flag"></i>
      </div>
      <div
        className={`item ${position === "third" ? "active" : ""}`}
        data-tab="third"
        onClick={() => {
          tabChange("third");
        }}
      >
        人民幣
        <i className="cn flag"></i>
      </div>
      <div
        className={`item ${position === "fourth" ? "active" : ""}`}
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

const positionToCurrency = {
  first: "USD",
  second: "JPY",
  third: "CNY",
  fourth: "EUR",
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
