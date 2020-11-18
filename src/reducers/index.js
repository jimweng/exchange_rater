import { combineReducers } from 'redux';

const currenciesReducer = () => {
    // TODO
    return [
        { currency: 'USD', price: 29},
        { currency: 'YPJ', price: 0.3},
        { currency: 'RMD', price: 4},
        { currency: 'EUD', price: 40},
    ]
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