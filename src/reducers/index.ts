import { combineReducers } from 'redux'
import {
  TRootAction,
  RETRIEVE_LOCATION_MENU_REQUEST,
  RETRIEVE_LOCATION_MENU_SUCCESS,
  RETRIEVE_LOCATION_MENU_FAILED
} from 'actions'
import { ILocationMenu } from 'commons/types'

export type TRootState = {
  readonly menu: IState
}

interface IState {
  request: Object
  fetching: Boolean
  payload: ILocationMenu
  error: String
}

const initialState = {
  request: {},
  fetching: false,
  payload: {},
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

const rootReducer = combineReducers<TRootState>({
  menu: retrieveLocationMenuReducer
})

export default rootReducer