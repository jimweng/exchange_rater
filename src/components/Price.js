import { connect } from "react-redux";
import { createSelector } from "reselect";

const Price = ({ currency }) => {
  return currency.priceIsload ? priceTab(currency): loader
};

const priceTab = (currency) => {
  return (
    <div className="three column row">
      <div className="column">{currencyTranslate[currency.currency]}</div>
      <div className="column">即期買進:{currency.price}</div>
    </div>
  )
}

const loader = (
  <div>
  <div className="ui active dimmer">
    <div className="ui text loader">Loading</div>
  </div>
</div>
)

const currencyTranslate = {
  USD: "美金",
  JPY: "日幣",
  CNY: "人民幣",
  EUR: "歐元",
};

const getPrice = (state) => {
  if (state.selectedCurrency.get('currency')) { 
    return {
      price: state.selectedCurrency.get('price'),
      currency: state.selectedCurrency.get('currency'),
      priceIsload: state.selectedCurrency.get('priceIsload')
    };
  }
};

const selectProps = createSelector([getPrice], ({ price, currency, priceIsload }) => {
  return { currency, price, priceIsload };
});

const mapStateToProps = (state) => {
  return { currency: selectProps(state) };
};

export default connect(mapStateToProps)(Price);
