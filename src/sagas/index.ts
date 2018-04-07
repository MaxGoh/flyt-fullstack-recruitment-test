import { all } from 'redux-saga/effects'
import { retrieveMenuService } from 'api/mock'
import { call, put, takeLatest } from 'redux-saga/effects'


// interface IAction extends Action {
//   payload: any
// }


function* retrieveMenuSaga(action: string) {
  try {
    let response = yield call(retrieveMenuService)
  } catch (err) {
    console.log(err)
  }
}

export default function* rootSaga() {
  yield all([])
}