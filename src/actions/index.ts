import * as actionTypes from './types'

export interface IAction<T, P> {
  readonly type: T
  readonly payload?: P
  readonly error?: String
}

export function createAction<T extends string, P>(type: T, payload: P): IAction<T, P> {
  return { type, payload }
}

export const RETRIEVE_LOCATION_MENU_REQUEST = 'RETRIEVE_LOCATION_MENU_REQUEST'
export const RETRIEVE_LOCATION_MENU_SUCCESS = 'RETRIEVE_LOCATION_MENU_SUCCESS'
export const RETRIEVE_LOCATION_MENU_FAILED = 'RETRIEVE_LOCATION_MENU_FAILED'

type RetrieveLocationMenuRequest = IAction<
  typeof RETRIEVE_LOCATION_MENU_REQUEST,
  { locationId: String, orderTypeId: String}
>

type RetrieveLocationMenuSuccess = IAction<typeof RETRIEVE_LOCATION_MENU_SUCCESS, void>

type RetrieveLocationMenuFailed = IAction<typeof RETRIEVE_LOCATION_MENU_FAILED, void>

export const retrievelocationMenuRequest = (
  payload: {
    locationId: String
    orderTypeId: String
  }
): RetrieveLocationMenuRequest => {
  return createAction(RETRIEVE_LOCATION_MENU_REQUEST, payload);
}

export type TRootAction =
  | RetrieveLocationMenuRequest
  | RetrieveLocationMenuSuccess
  | RetrieveLocationMenuFailed