import React from 'react';
import { connect } from "react-redux";

const Price = ({currency, price}) => {
    const currencyTranslate = {
        'USD': '美金',
        'JPY': '日幣',
        'RMD': '人民幣',
        'EUD': '歐元'
    }
    return (
        <div className="four column row">
            <div className="column">{currencyTranslate[currency]}</div>
            <div className="column">即期買進: 30</div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return { currency: state.selectedCurrency, price: state.selectedPrice };
  };
  
export default connect(mapStateToProps)(Price);
