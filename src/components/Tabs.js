import React, { useState } from "react";
import { connect } from "react-redux";

const Tabs = (props) => {
  //const [currentActive, setCurrentActive] = useState(0);
  let myStorage = window.localStorage.getItem('selectItem') || 'first'

  const tabChange = async (position) => {
    //setCurrentActive(position);
    props.selectCurrency(positionToCurrency[position]);
    window.localStorage.removeItem('selectItem')
    myStorage = window.localStorage.setItem('selectItem', position)
    // 換了值，但沒換reference
  };

  return (
    <div className="ui top attached tabular menu">

      <div
        className={`item ${(myStorage === 'first') ? "active" : ""}`}
        data-tab="first"
        onClick={() => {
          tabChange("first");
        }}
      >
        美金
        <i className="us flag"></i>
      </div>
      <div
        className={`item ${myStorage === "second" ? "active" : ""}`}
        data-tab="second"
        onClick={() => {
          tabChange("second");
        }}
      >
        日幣
        <i className="jp flag"></i>
      </div>
      <div
        className={`item ${myStorage === "third" ? "active" : ""}`}
        data-tab="third"
        onClick={() => {
          tabChange("third");
        }}
      >
        人民幣
        <i className="cn flag"></i>
      </div>
      <div
        className={`item ${myStorage === "fourth" ? "active" : ""}`}
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
