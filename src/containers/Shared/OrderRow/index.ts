import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import OrderRow, { IProps, IDispatchProps } from 'components/Shared/OrderRow'
import { retrieveLocationMenuRequest } from 'actions'
import { TRootState } from 'reducers'

const mapDispatchToProps = (dispatch: Dispatch<TRootState>) => ({
  retrieveLocationMenu: (
    payload: { locationId: String, orderTypeId: String }
  ) => dispatch(retrieveLocationMenuRequest(payload))
})

export default connect<
 {}, IDispatchProps, IProps
>(null, mapDispatchToProps)(OrderRow) 