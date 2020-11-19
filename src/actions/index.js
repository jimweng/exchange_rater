// Action creator
export const selectCurrency = (currency, price) => {
    return {
        type: 'CURRENCY_SELECTED',
        currency,
        price
    }
};