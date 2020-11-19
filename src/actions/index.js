// Action creator
export const selectCurrency = (currency, price, historialData) => {
    console.log('actions: ', currency, price, historialData)
    return {
        type: 'CURRENCY_SELECTED',
        currency,
        price,
        historialData
    }
};