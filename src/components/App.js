import React, { useEffect } from "react";
import { connect } from "react-redux";
import CurrentDate from "./CurrentDate";
import Tabs from "./Tabs";
import Price from "./Price";
import Chart from "./Chart";

const App = () => {

  return (
    <div className="ui grid">
      <CurrentDate />
      <Tabs />
      <Price />
      <Chart />
    </div>
  );
};

export default connect(null)(App);
