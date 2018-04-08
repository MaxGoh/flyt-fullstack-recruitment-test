import { connect } from 'react-redux'
import OrderList, { IProps } from 'components/App/SelectFoodContainer/OrderList'
import { TRootState } from 'reducers'

const mapStateToProps = (state: TRootState) => ({

})

export default connect<
  IProps, {}
>(mapStateToProps)(OrderList)