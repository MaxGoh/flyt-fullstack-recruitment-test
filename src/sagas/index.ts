import { all } from 'redux-saga/effects'
import { retrieveMenuService } from 'api/mock'
import { call, put, takeLatest } from 'redux-saga/effects'
import { RETRIEVE_LOCATION_MENU_REQUEST, retrievelocationMenuSuccess } from 'actions'


// interface IAction extends Action {
//   payload: any
// }


function* retrieveMenuSaga(action: string) {
  try {
    let response = yield call(retrieveMenuService)
    yield put(retrievelocationMenuSuccess(response))
  } catch (err) {
    console.log(err)
  }
}

export default function* rootSaga() {
  yield all([
    takeLatest(RETRIEVE_LOCATION_MENU_REQUEST, retrieveMenuSaga)
  ])
}