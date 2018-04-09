import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import MenuCategoryList, { IProps, IDispatchProps } from 'components/App/SelectFoodContainer/MenuCategoryList'
import { TRootState } from 'reducers'
import { setActiveMenu, TRootAction } from 'actions'
import * as commonTypes from 'commons/types'

const mapStateToProps = (state: TRootState) => ({
  menus: state.menu.payload.menus,
  selectedCategoryId: state.activeMenu.payload.id
})

const mapDispatchToProps = (dispatch: Dispatch<TRootAction>) => ({
  setActiveMenu: (
    payload: { menu: commonTypes.IMenuCategories }
  ) => dispatch(setActiveMenu(payload))
})

export default connect<
  IProps, IDispatchProps
>(mapStateToProps, mapDispatchToProps)(MenuCategoryList)