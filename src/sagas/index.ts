import { Action } from 'redux'
import { all } from 'redux-saga/effects'
import { retrieveMenuService } from 'api/mock'
import { call, put, takeLatest } from 'redux-saga/effects'
import {
  RETRIEVE_LOCATION_MENU_REQUEST,
  retrieveLocationMenuSuccess,
  retrieveLocationMenuFailed
} from 'actions'

interface IAction extends Action {
  payload: Object
}

function* retrieveMenuSaga(action: IAction) {
  try {
    let response = yield call(retrieveMenuService)
    yield put(retrieveLocationMenuSuccess(response))
  } catch (err) {
    console.log(err)
    yield put(retrieveLocationMenuFailed(err))
  }
}

export default function* rootSaga() {
  yield all([
    takeLatest(RETRIEVE_LOCATION_MENU_REQUEST, retrieveMenuSaga)
  ])
}