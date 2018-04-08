import { connect } from 'react-redux'
import MenuCategoryList, { IProps } from 'components/App/SelectFoodContainer/MenuCategoryList'
import { TRootState } from 'reducers'

const mapStateToProps = (state: TRootState) => ({
  menus: state.menu.payload.menus
})

export default connect<
  IProps, {}
>(mapStateToProps)(MenuCategoryList)