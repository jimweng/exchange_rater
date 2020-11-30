import { combineReducers } from 'redux';

const currenciesReducer = () => {
    // TODO rootReducer, initial state
    return { currency: 'USD', price: 29}
}

const seletedCurrencyReducer = (selectedCurrency = 'USD', action) => {
    switch(action.type) {
        case 'CURRENCY_SELECTED':
            return action
        case 'CURRENCIES_UPDATE':
            console.log('currencies_update')
            return action
        default:
            return selectedCurrency
    }
}

export default combineReducers({
    currency: currenciesReducer,
    selectedCurrency: seletedCurrencyReducer
})