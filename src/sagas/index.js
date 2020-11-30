import { put, takeLatest, all } from "redux-saga/effects";
import axios from 'axios';

function* fetchCurrencyInfo(action) {
  console.log("saga: ", action);
  try {
      console.log('inside try: ')
      const { data } = yield axios.get('https://cors-anywhere.herokuapp.com/https://tw.rter.info/json.php?t=bank&q=cash&iso=BKTWTWTP&_=${Date.now()}')
      console.log('data: ', data)
      const current_price = [{
          currency: 'USD',
          price: data.data[0][1]
      },{
          currency: 'JPY',
          price: data.data[2][1]
      },{
          currency: 'CNY',
          price: data.data[6][1]
      },{
          currency: 'EUR',
          price: data.data[1][1]
      }
      ]
      yield put({ type: 'CURRNECIES_SELECTED', current_price })

  } catch (e) {
      console.log('error: ', e)
    yield put({ type: "SELECT_FAILED", message: e.message });
  }
}

function* actionWatcher() {
  yield takeLatest("CURRENCY_SELECTED", fetchCurrencyInfo);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
