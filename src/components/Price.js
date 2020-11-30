import React, { useEffect } from 'react';
import { connect } from "react-redux";
import axios from 'axios';

const Price = ({ currency }) => {
  console.log('currency: ', currency)

  useEffect(() => {
    async function fetchData(currency) {
      const { data } = await axios.get(`https://cors-anywhere.herokuapp.com/https://tw.rter.info/json.php?t=bank&q=cash&iso=BKTWTWTP&_=${Date.now()}`)
      currency = { ...currency, price: data.data[0][1] }
      console.log('currency.price: ', currency.price)
    }
    fetchData()
  }, [])

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
  console.log('state in Price: ', state)
  return { currency: state.selectedCurrency };
};

export default connect(mapStateToProps)(Price);
