import { combineReducers } from 'redux';

const currenciesReducer = () => {
    // TODO

}

const seletedCurrencyReducer = (selectedCurrency = 'USD', action) => {
    if (action === 'CURRENCY_SELECTED') {
        return action.payload;
    }

    return selectedCurrency;
}

export default combineReducers({
    currency: currenciesReducer,
    selectedCurrency: seletedCurrencyReducer
})