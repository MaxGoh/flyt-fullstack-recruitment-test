interface IAction<T> {
  type: string
  payload: T
  error?: boolean
}

export const CHANGE_ACTIVE_LOCATION  = 'CHANGE_ACTIVE_LOCATION'

export type ChangeActiveLocation = {
  location: String
}

export const changeActiveLocation = (location: String): IAction<ChangeActiveLocation> => ({
  type: CHANGE_ACTIVE_LOCATION,
  payload: { location }
})