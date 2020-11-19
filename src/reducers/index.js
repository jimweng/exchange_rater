import { combineReducers } from 'redux';

const currenciesReducer = () => {
    // TODO
    return [
        { currency: 'USD', price: 29},
        { currency: 'JPY', price: 0.3},
        { currency: 'RMD', price: 4},
        { currency: 'EUR', price: 40},
    ]
}

const seletedCurrencyReducer = (selectedCurrency = 'USD', action) => {
    if (action.type === 'CURRENCY_SELECTED') {
        return action;
    }

    return selectedCurrency;
}

export default combineReducers({
    currency: currenciesReducer,
    selectedCurrency: seletedCurrencyReducer
})