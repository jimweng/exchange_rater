import { combineReducers } from "redux";


const positionToCurrency = {
  first: "USD",
  second: "JPY",
  third: "CNY",
  fourth: "EUR",
};

// update price, historialData
const initialState = {
  type: "CURRENCY_SELECTED",
  currency:  positionToCurrency[localStorage.getItem("selectItem")] || "USD",
  price: 30,
  isLoading: false,
};

const seletedCurrencyReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CURRENCY_SELECTED":
      return {...state, currency: action.currency, isLoading: false};
    case "CURRENCIES_SELECTED":
      return { ...state, price: action.price };
    case "UPDATE_HISTORIAL_DATA":
      return { ...state, historialData: action.historialData, isLoading: true };
    case "ISLOADING":
      return { ...state, isLoading: false };
    default:
      return state;
  }
};

export default combineReducers({
  selectedCurrency: seletedCurrencyReducer,
});
