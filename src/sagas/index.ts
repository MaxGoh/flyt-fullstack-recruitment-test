import { Action } from 'redux'
import { all } from 'redux-saga/effects'
import { retrieveMenuService } from 'api/mock'
import { call, put, takeLatest } from 'redux-saga/effects'
import {
  RETRIEVE_LOCATION_MENU_REQUEST,
  retrieveLocationMenuSuccess,
  retrieveLocationMenuFailed,
  SET_ACTIVE_MENU,
  setActiveMenuSuccess,
  setActiveMenuFailed
} from 'actions'

interface IAction extends Action {
  payload: any
}

function* retrieveMenuSaga(action: IAction) {
  try {
    let response = yield call(retrieveMenuService)
    yield put(retrieveLocationMenuSuccess(response))
    yield put(setActiveMenuSuccess(response.menus[0].categories[0]))
  } catch (err) {
    yield put(retrieveLocationMenuFailed(err))
  }
}

function* setActiveMenuSaga(action: IAction) {
  try {
    const { payload } = action
    yield put(setActiveMenuSuccess(payload))
  } catch (err) {
    yield put(setActiveMenuFailed(err))
  }
}

export default function* rootSaga() {
  yield all([
    takeLatest(RETRIEVE_LOCATION_MENU_REQUEST, retrieveMenuSaga),
    takeLatest(SET_ACTIVE_MENU, setActiveMenuSaga)
  ])
}