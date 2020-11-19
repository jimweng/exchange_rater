import React, { useState } from "react";
import { connect } from "react-redux";
import { selectCurrency } from "../actions";
import axios from 'axios';

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

    const { data } = await axios.get(
      `https://cors-anywhere.herokuapp.com/https://tw.rter.info/json.php?t=bank&q=cash&iso=BKTWTWTP&_=${Date.now()}`
    );

    let price = 0;
    if (positionToCurrency[position] === "USD") {
      price = data.data[0][1];
    } else if (positionToCurrency[position] === "JPY") {
      price = data.data[2][1];
    } else if (positionToCurrency[position] === "CNY") {
      price = data.data[6][1];
    } else if (positionToCurrency[position] === "EUR") {
      price = data.data[1][1];
    }

    const historialData = await axios.get(
        `https://cors-anywhere.herokuapp.com/https://rate.bot.com.tw/xrt/quote/2020-10/${positionToCurrency[position]}?Lang=en-US`
    );

    const test = (historialData.data).split('series')
    const test2 = test[1].split('Selling')
    const test3 = test2[1].split(`,"name":"Buying"`)
    const test4 = test3[0].split(`"data":`)

    props.selectCurrency(positionToCurrency[position], price, test4[1]);

  };

  return (
    <div className="ui top attached tabular menu">
      <div className={`item ${currentActive === "first" ? "active" : ""}`} data-tab="first" onClick={() => { tabChange("first"); }}> 美金
      <i className="us flag"></i>
      </div>
      <div className={`item ${currentActive === "second" ? "active" : ""}`} data-tab="second" onClick={() => { tabChange("second"); }}>日幣
      <i className="jp flag"></i>
      </div>
      <div className={`item ${currentActive === "third" ? "active" : ""}`} data-tab="third" onClick={() => { tabChange("third"); }}>人民幣
        <i className="cn flag"></i>
      </div>
      <div className={`item ${currentActive === "fourth" ? "active" : ""}`} data-tab="fourth" onClick={() => { tabChange("fourth"); }}>歐元
        <i className="eu flag"></i>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { currencies: state.currencies };
};

export default connect(mapStateToProps, { selectCurrency })(Tabs);
