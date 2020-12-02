import React, { useEffect } from "react";
import { connect } from "react-redux";
import CurrentDate from "./CurrentDate";
import Tabs from "./Tabs";
import Price from "./Price";
import Chart from "./Chart";

const App = (props) => {
  useEffect(()=>{
    props.selectCurrency('USD')
  }, [])

  return (
    <div className="ui grid">
      <CurrentDate />
      <Tabs />
      <Price />
      <Chart />
    </div>
  );
};

const mapStateToProps = (state) => {
    return { currency: state.selectedCurrency.currency }
}

const mapDispatchToProps = (dispatch) => {
    return {
        selectCurrency: (currency) =>{
            dispatch({
                type: 'CURRENCY_SELECTED',
                currency: currency
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
