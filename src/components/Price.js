import { connect } from "react-redux";
import { createSelector } from "reselect";

const Price = ({ currency }) => {
  console.log("Price: ", currency);
  return (
    <div className="three column row">
      <div className="column">{currencyTranslate[currency.currency]}</div>
      <div className="column">即期買進:{currency.price}</div>
    </div>
  );
};

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
    };
};

const selectProps = createSelector([getPrice], ({ price, currency }) => {
  return { currency, price };
});

const mapStateToProps = (state) => {
  return { currency: selectProps(state) };
};

export default connect(mapStateToProps)(Price);
