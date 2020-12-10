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

  const tabsList = (tabsInfo) => {
    return tabsInfo.map((tab) => {
      return (
        <div
          className={`item ${position === tab.location ? "active" : ""}`}
          data-tab={`${tab.location}`}
          onClick={() => {
            tabChange(tab.location);
          }}
        >
          {tab.zh}
          <i className={`${tab.flag} flag`}></i>
        </div>
      );
    });
  };

  return (
    <div className="ui top attached tabular menu">{tabsList(tabsInfo)}</div>
  );
};

const positionToCurrency = {
  first: "USD",
  second: "JPY",
  third: "CNY",
  fourth: "EUR",
};

const tabsInfo = [
  {
    flag: "us",
    location: "first",
    zh: "美金",
  },
  {
    flag: "jp",
    location: "second",
    zh: "日幣",
  },
  {
    flag: "cn",
    location: "third",
    zh: "人民幣",
  },
  {
    flag: "eu",
    loaction: "fourth",
    zh: "歐元",
  },
];

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
