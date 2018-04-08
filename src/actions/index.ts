import * as commonTypes from 'commons/types'

export interface IAction<T, P, E> {
  readonly type: T
  readonly payload?: P
  readonly error?: String
}

export function createAction<
  T extends string, R, P, E
>(type: T, payload: P, error: E): IAction<T, P, E> {
  return { type, payload }
}

/* RETRIEVE_LOCATION_MENU_REQUEST */

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

export const retrieveLocationMenuRequest = (
  payload: {
    locationId: String
    orderTypeId: String
  }
): RetrieveLocationMenuRequest => {
  return createAction(RETRIEVE_LOCATION_MENU_REQUEST, payload, null)
}

export const retrieveLocationMenuSuccess = (
  payload: commonTypes.ILocationMenu
): RetrieveLocationMenuSuccess => {
  return createAction(RETRIEVE_LOCATION_MENU_SUCCESS, payload, null)
}

export const retrieveLocationMenuFailed = (
  error: String
): RetrieveLocationMenuFailed => {
  return createAction(RETRIEVE_LOCATION_MENU_FAILED, null, error)
}

/* SET_ACTIVE_MENU */

export const SET_ACTIVE_MENU = 'SET_ACTIVE_MENU'
export const SET_ACTIVE_MENU_SUCCESS = 'SET_ACTIVE_MENU_SUCCESS'
export const SET_ACTIVE_MENU_FAILED = 'SET_ACTIVE_MENU_FAILED'

type SetActiveMenu = IAction<
  typeof SET_ACTIVE_MENU,
  { menu: commonTypes.IMenuCategories },
  null
>

type SetActiveMenuSuccess = IAction<
  typeof SET_ACTIVE_MENU_SUCCESS,
  { menu: commonTypes.IMenuCategories },
  null
>

type SetActiveMenuFailed = IAction<
  typeof SET_ACTIVE_MENU_FAILED,
  null,
  String
>

export const setActiveMenu = (
  payload: { menu: commonTypes.IMenuCategories }
): SetActiveMenu => {
  return createAction(SET_ACTIVE_MENU, payload, null)
}

export const setActiveMenuSuccess = (
  payload: { menu: commonTypes.IMenuCategories }
): SetActiveMenuSuccess => {
  return createAction(SET_ACTIVE_MENU_SUCCESS, payload, null)
}

export const setActiveMenuFailed = (
  error: String
): SetActiveMenuFailed => {
  return createAction(SET_ACTIVE_MENU_FAILED, null, error)
}

export type TRootAction =
  | RetrieveLocationMenuRequest
  | RetrieveLocationMenuSuccess
  | RetrieveLocationMenuFailed
  | SetActiveMenu
  | SetActiveMenuSuccess
  | SetActiveMenuFailed