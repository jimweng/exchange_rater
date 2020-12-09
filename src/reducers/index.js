import { combineReducers } from "redux";
import { fromJS } from 'immutable'

const positionToCurrency = {
  first: "USD",
  second: "JPY",
  third: "CNY",
  fourth: "EUR",
};

// update price, historialData
const initialState = fromJS({
  type: "CURRENCY_SELECTED",
  currency: positionToCurrency[localStorage.getItem("selectItem")] || "USD",
  price: 30,
  isLoading: false,
  priceIsload: false,
});

const seletedCurrencyReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CURRENCY_SELECTED":
      return state.set('currency', fromJS(action.currency))
      .set('isLoading', false)
      .set('priceIsload', false)
    case "CURRENCIES_SELECTED":
      return state.set('price', fromJS(action.price))
      .set('priceIsload', true)
    case "UPDATE_HISTORIAL_DATA":
      return state.set('historialData', fromJS(action.historialData))
        .set('isLoading', true)
    case "ISLOADING":
      return state.set('isLoading', false)
    case "PRICE_ISLOADING":
      return state.set('priceIsLoad', false)
    default:
      return state;
  }
};

export default combineReducers({
  selectedCurrency: seletedCurrencyReducer,
});
