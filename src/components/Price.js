import React from 'react';
import { connect } from "react-redux";

const Price = ({ currency }) => {
  const currencyTranslate = {
    USD: "美金",
    JPY: "日幣",
    CNY: "人民幣",
    EUR: "歐元",
  };
  return (
    <div className="three column row">
      <div className="column">{currencyTranslate[currency.currency]}</div>
      <div className="column">即期買進:{currency.price}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
    return { currency: state.selectedCurrency };
  };
  
export default connect(mapStateToProps)(Price);
