import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import OrderRow, { IProps, IDispatchProps } from 'components/Shared/OrderRow'
import { changeActiveLocation } from 'actions'
import { IRootState } from 'reducers'

const mapDispatchToProps = (dispatch: Dispatch<IRootState>) => ({
  changeActiveLocation: (location: String) => dispatch(changeActiveLocation(location))
})

export default connect<
 {}, IDispatchProps, IProps
>(null, mapDispatchToProps)(OrderRow)