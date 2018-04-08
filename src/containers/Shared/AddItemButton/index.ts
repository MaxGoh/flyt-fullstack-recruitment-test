import { connect } from 'react-redux'
import AddItemButton, { IDispatchProps, IProps } from 'components/Shared/AddItemButton'
import { Dispatch } from 'redux'
import { TRootAction, appendMenuItem } from 'actions'
import * as commonTypes from 'commons/types'

const mapDispatchToProps = (dispatch: Dispatch<TRootAction>) => ({
  appendMenuItem: (payload: { item: commonTypes.IMenuCategoriesItem } ) => dispatch(appendMenuItem(payload))
})

export default connect<
  {}, IDispatchProps, IProps
>(null, mapDispatchToProps)(AddItemButton)