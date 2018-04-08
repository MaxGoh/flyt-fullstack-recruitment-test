import { connect } from 'react-redux'
import TotalPriceLabel, { IProps } from 'components/App/SelectFoodContainer/OrderList/TotalPriceLabel'
import { TRootState } from 'reducers'

const mapStateToProps = (state: TRootState) => ({
  cart: state.cart.payload
})

export default connect<
  IProps, {}
>(mapStateToProps)(TotalPriceLabel)