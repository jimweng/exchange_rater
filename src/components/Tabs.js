import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { selectCurrency } from "../actions";
import BankOfTaiwan from "../api/BankOfTaiwan";

const Tabs = (props) => {
  const [currentActive, setCurrentActive] = useState(0);

  const tabChange = async (position) => {

    const positionToCurrency = {
      first: "USD",
      second: "JPY",
      third: "RMD",
      fourth: "EUD",
    };

    props.selectCurrency(positionToCurrency[position]);

    setCurrentActive(position);
  };

  return (
    <div className="ui top attached tabular menu">
      <div className={`item ${currentActive === "first" ? "active" : ""}`} data-tab="first" onClick={() => { tabChange("first"); }}> 美元
      <i class="us flag"></i>
      </div>
      <div className={`item ${currentActive === "second" ? "active" : ""}`} data-tab="second" onClick={() => { tabChange("second"); }}>日幣
      <i class="jp flag"></i>
      </div>
      <div className={`item ${currentActive === "third" ? "active" : ""}`} data-tab="third" onClick={() => { tabChange("third"); }}>人民幣
        <i class="cn flag"></i>
      </div>
      <div className={`item ${currentActive === "fourth" ? "active" : ""}`} data-tab="fourth" onClick={() => { tabChange("fourth"); }}>歐元
        <i class="eu flag"></i>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { currencies: state.currencies };
};

export default connect(mapStateToProps, { selectCurrency })(Tabs);
