import * as React from 'react'
import * as commonTypes from 'commons/types'
import './index.scss'

export interface IDispatchProps {
  appendMenuItem: (
    payload: { item: commonTypes.IMenuCategoriesItem }
  ) => void
}

export interface IProps {
  item: commonTypes.IMenuCategoriesItem
}

const AddItemButton: React.SFC<IProps & IDispatchProps> = ({
  appendMenuItem, item
}) => {
  const payload = { item }
  return (
    <button
      className='append-button'
      onClick={() => appendMenuItem(payload)}
    >
      +
    </button>
  )
}

export default AddItemButton