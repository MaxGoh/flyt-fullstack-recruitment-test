import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import SelectFoodContainer, { IDispatchProps } from 'components/App/SelectFoodContainer'
import { retrieveLocationMenuRequest } from 'actions'
import { TRootState } from 'reducers'

const mapDispatchToProps = (dispatch: Dispatch<TRootState>) => ({
  retrieveLocationMenu: (
    payload: { locationId: String, orderTypeId: String }
  ) => dispatch(retrieveLocationMenuRequest(payload))
})

export default connect<
 {}, IDispatchProps
>(null, mapDispatchToProps)(SelectFoodContainer)