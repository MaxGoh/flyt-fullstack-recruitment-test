import { connect } from 'react-redux'
import OrderItem, { IDispatchProps } from 'components/App/SelectFoodContainer/OrderList/OrderItem'
import { TRootAction } from 'actions'
import { Dispatch } from 'redux'
import { removeMenuItem } from 'actions'
import { IMenuCategoriesItem } from 'commons/types'

const mapDispatchToProps = (dispatch: Dispatch<TRootAction>) => ({
  removeMenuItem: (payload: { item: IMenuCategoriesItem } ) => dispatch(removeMenuItem(payload))
})

export default connect<
  {}, IDispatchProps
>(null, mapDispatchToProps)(OrderItem)