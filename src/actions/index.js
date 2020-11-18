// Action creator
export const selectCurrency = currency => {
    return {
        type: 'CURRENCY_SELECTED',
        payload: currency
    }
};