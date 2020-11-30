import { combineReducers } from 'redux';


// update price, historialData
const initialState = {
    type: 'CURRENCY_SELECTED',
    currency: 'USD',
    price: 30
}

const seletedCurrencyReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'CURRENCY_SELECTED':
            return action
        case 'CURRENCIES_SELECTED':
            return {...state, price: action.price}
        case 'UPDATE_HISTORIAL_DATA':
            return {...state, historialData: action.historialData}
        default: 
            return state
    }
}

export default combineReducers({
    selectedCurrency: seletedCurrencyReducer
})