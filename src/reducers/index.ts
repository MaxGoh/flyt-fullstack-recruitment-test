import { combineReducers } from 'redux'

export interface IRootState {
  readonly activeLocation: string
}

const rootReducer = combineReducers<IRootState>({

})

export default rootReducer