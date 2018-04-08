import { combineReducers } from 'redux'
import {
  TRootAction,
  RETRIEVE_LOCATION_MENU_REQUEST,
  RETRIEVE_LOCATION_MENU_SUCCESS,
  RETRIEVE_LOCATION_MENU_FAILED,
  SET_ACTIVE_MENU,
  SET_ACTIVE_MENU_SUCCESS,
  SET_ACTIVE_MENU_FAILED,
  APPEND_MENU_ITEM,
  APPEND_MENU_ITEM_FAILED,
  APPEND_MENU_ITEM_SUCCESS,
  REMOVE_MENU_ITEM,
  REMOVE_MENU_ITEM_FAILED,
  REMOVE_MENU_ITEM_SUCCESS
} from 'actions'

export type TRootState = {
  readonly menu: IState
  readonly activeMenu: IState
  readonly cart: IState
}

interface IState {
  request: any
  fetching: Boolean
  payload: any
  error: String
}

const initialState = {
  request: [],
  fetching: false,
  payload: [],
  error: ''
}

const retrieveLocationMenuReducer = (
  state = initialState, action: TRootAction
) => {
  switch (action.type) {
    case RETRIEVE_LOCATION_MENU_REQUEST:
     return { ...state, fetching: true, request: action.payload }
    case RETRIEVE_LOCATION_MENU_SUCCESS:
      return { ...state, fetching: false, payload: action.payload }
    case RETRIEVE_LOCATION_MENU_FAILED:
      return { ...state, fetching: false, error: action.error }
    default:
      return state
  }
}

const setActiveMenuReducer = (
  state = initialState, action: TRootAction
) => {
  switch (action.type) {
    case SET_ACTIVE_MENU:
      return { ...state, fetching: true, request: action.payload }
    case SET_ACTIVE_MENU_SUCCESS:
     return { ...state, fetching: false, payload: action.payload }
    case SET_ACTIVE_MENU_FAILED:
      return { ...state, fetching: false, error: action.error }
    default:
      return state
  }
}

const cartReducer = (
  state = initialState, action: TRootAction
) => {
  switch (action.type) {
    case APPEND_MENU_ITEM:
      return { ...state, fetching: true, request: action.payload }
    case APPEND_MENU_ITEM_SUCCESS:
      return { ...state, fetching: false, payload: action.payload }
    case APPEND_MENU_ITEM_FAILED:
      return { ...state, fetching: false, error: action.error }
    case REMOVE_MENU_ITEM:
      return { ...state, fetching: true, request: action.payload }
    case REMOVE_MENU_ITEM_SUCCESS:
      return { ...state, fetching: false, payload: action.payload }
    case REMOVE_MENU_ITEM_FAILED:
      return { ...state, fetching: false, error: action.error }
    default:
      return state
  }
}

const rootReducer = combineReducers<TRootState>({
  menu: retrieveLocationMenuReducer,
  activeMenu: setActiveMenuReducer,
  cart: cartReducer
})

export default rootReducer