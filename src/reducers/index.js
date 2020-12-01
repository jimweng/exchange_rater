import { combineReducers } from "redux";

// update price, historialData
const initialState = {
  type: "CURRENCY_SELECTED",
  currency: "USD",
  price: 30,
  isLoading: false,
};

const seletedCurrencyReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CURRENCY_SELECTED":
      return {...state, currency: action.currency};
    case "CURRENCIES_SELECTED":
      return { ...state, price: action.price };
    case "UPDATE_HISTORIAL_DATA":
      return { ...state, historialData: action.historialData, isLoading: false };
    case "ISLOADING":
      return { ...state, isLoading: !state.isLoading };
    default:
      return state;
  }
};

export default combineReducers({
  selectedCurrency: seletedCurrencyReducer,
});
