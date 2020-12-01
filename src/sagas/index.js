import { put, takeLatest, all } from "redux-saga/effects";
import axios from 'axios';

function* fetchCurrencyInfo(action) {
  try {
    const { data } = yield axios.get(`https://cors-anywhere.herokuapp.com/https://tw.rter.info/json.php?t=bank&q=cash&iso=BKTWTWTP&_=${Date.now()}`)

    let price = 0;
    switch (action.currency) {
      case 'USD':
        price = data.data[0][1]
        break;
      case 'JPY':
        price = data.data[2][1]
        break
      case 'CNY':
        price = data.data[6][1]
        break
      case 'EUR':
        price = data.data[1][1]
        break
      default:
        price = 30
    }

    yield put({ type: 'CURRENCIES_SELECTED', currency: action.currency, price })

  } catch (e) {
    console.log('error: ', e)
    yield put({ type: "SELECT_INSTANT_FAILED", message: e.message });
  }
}

function* fetchHistorialInfo(action) {
  try{
    yield put({ type: "ISLOADING" })
    const historialData = yield axios.get(`https://cors-anywhere.herokuapp.com/https://rate.bot.com.tw/xrt/quote/2020-10/${action.currency}?Lang=en-US`);
    const parsedData = (historialData.data).split('series')[1].split('Selling')[1].split(`,"name":"Buying"`)[0].split(`"data":`)[1].replace("[[", "[").replace("]]", "]")
    yield put({ type: "UPDATE_HISTORIAL_DATA", currency: action.currency, historialData: parsedData})

  } catch(e) {
    console.log('error: ', e)
    yield put({ type: "SELECT_HISTORIAL_FAILED", message: e.message });
  }
}

function* instantPriceWatcher() {
  yield takeLatest("CURRENCY_SELECTED", fetchCurrencyInfo);
}

function* historialPriceWatcher() {
  yield takeLatest("CURRENCY_SELECTED", fetchHistorialInfo);
}

export default function* rootSaga() {
  yield all([
    instantPriceWatcher(),
    historialPriceWatcher()
  ]);
}
