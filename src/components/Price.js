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
<div className="ui active loader"></div>
)

const currencyTranslate = {
  USD: "美金",
  JPY: "日幣",
  CNY: "人民幣",
  EUR: "歐元",
};

const getPrice = (state) => {
  if (state.selectedCurrency.currency)
    return {
      price: state.selectedCurrency.price,
      currency: state.selectedCurrency.currency,
      priceIsload: state.selectedCurrency.priceIsload
    };
};

const selectProps = createSelector([getPrice], ({ price, currency, priceIsload }) => {
  return { currency, price, priceIsload };
});

const mapStateToProps = (state) => {
  return { currency: selectProps(state) };
};

export default connect(mapStateToProps)(Price);
