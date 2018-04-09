import { Action } from 'redux'
import { all } from 'redux-saga/effects'
import { retrieveMenuService } from 'api'
import { call, put, takeLatest, select } from 'redux-saga/effects'
import {
  RETRIEVE_LOCATION_MENU_REQUEST,
  retrieveLocationMenuSuccess,
  retrieveLocationMenuFailed,
  SET_ACTIVE_MENU,
  setActiveMenuSuccess,
  setActiveMenuFailed,
  APPEND_MENU_ITEM,
  appendMenuItemSuccess,
  appendMenuItemFailed,
  REMOVE_MENU_ITEM,
  removeMenuItemFailed,
  removeMenuItemSuccess
} from 'actions'
import { appendItemInCart, selectCartData, removeItemInCart } from 'helpers'
import { ICartData } from 'commons/types';

interface IAction extends Action {
  payload: any
}

function* retrieveMenuSaga(action: IAction) {
  try {
    const { locationId, orderTypeId } = action.payload
    let response = yield call(retrieveMenuService, locationId, orderTypeId)
    yield put(retrieveLocationMenuSuccess(response.data))
    yield put(setActiveMenuSuccess(response.data.menus[0].categories[0]))
  } catch (err) {
    yield put(retrieveLocationMenuFailed(err))
  }
}

function* setActiveMenuSaga(action: IAction) {
  try {
    const { menu } = action.payload
    yield put(setActiveMenuSuccess(menu))
  } catch (err) {
    yield put(setActiveMenuFailed(err))
  }
}

function* appendMenuItemSaga(action: IAction) {
  try {
    const { item } = action.payload

    const stateCartData: ICartData[] = yield select(selectCartData)
    const sortedCartData = appendItemInCart(item, stateCartData)

    yield put(appendMenuItemSuccess(sortedCartData))
  } catch (err) {
    yield put(appendMenuItemFailed(err))
  }
}

function* removeMenuItemSaga(action: IAction) {
  try {
    const { item } = action.payload
    const stateCartData: ICartData[] = yield select(selectCartData)
    const sortedCartData = removeItemInCart(item, stateCartData)

    yield put(removeMenuItemSuccess(sortedCartData))

  } catch (err) {
    yield put(removeMenuItemFailed(err))
  }
}

export default function* rootSaga() {
  yield all([
    takeLatest(RETRIEVE_LOCATION_MENU_REQUEST, retrieveMenuSaga),
    takeLatest(SET_ACTIVE_MENU, setActiveMenuSaga),
    takeLatest(APPEND_MENU_ITEM, appendMenuItemSaga),
    takeLatest(REMOVE_MENU_ITEM, removeMenuItemSaga),
  ])
}