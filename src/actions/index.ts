import * as commonTypes from 'commons/types'

export interface IAction<T, P, E> {
  readonly type: T
  readonly payload?: P
  readonly error?: String
}

export function createAction<T extends string, P, E>(type: T, payload: P, error: E): IAction<T, P, E> {
  return { type, payload }
}

export const RETRIEVE_LOCATION_MENU_REQUEST = 'RETRIEVE_LOCATION_MENU_REQUEST'
export const RETRIEVE_LOCATION_MENU_SUCCESS = 'RETRIEVE_LOCATION_MENU_SUCCESS'
export const RETRIEVE_LOCATION_MENU_FAILED = 'RETRIEVE_LOCATION_MENU_FAILED'

type RetrieveLocationMenuRequest = IAction<
  typeof RETRIEVE_LOCATION_MENU_REQUEST,
  { locationId: String, orderTypeId: String},
  null
>

type RetrieveLocationMenuSuccess = IAction<
  typeof RETRIEVE_LOCATION_MENU_SUCCESS,
  commonTypes.ILocationMenu,
  null
>

type RetrieveLocationMenuFailed = IAction<
  typeof RETRIEVE_LOCATION_MENU_FAILED,
  null,
  String
>

export const retrievelocationMenuRequest = (
  payload: {
    locationId: String
    orderTypeId: String
  }
): RetrieveLocationMenuRequest => {
  return createAction(RETRIEVE_LOCATION_MENU_REQUEST, payload, null)
}

export const retrievelocationMenuSuccess = (
  payload: commonTypes.ILocationMenu
): RetrieveLocationMenuSuccess => {
  return createAction(RETRIEVE_LOCATION_MENU_SUCCESS, payload, null)
}

export const retrieveLocationMenuFailed = (
  error: String
): RetrieveLocationMenuFailed => {
  return createAction(RETRIEVE_LOCATION_MENU_FAILED, null, error)
}

export type TRootAction =
  | RetrieveLocationMenuRequest
  | RetrieveLocationMenuSuccess
  | RetrieveLocationMenuFailed