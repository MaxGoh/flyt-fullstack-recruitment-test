import { connect } from 'react-redux'
import MenuList, { IProps } from 'components/App/SelectFoodContainer/MenuList'
import { TRootState } from 'reducers'

const mapStateToProps = (state: TRootState) => ({
  activeMenu: state.activeMenu.payload
})

export default connect<
  IProps, {}
>(mapStateToProps)(MenuList)