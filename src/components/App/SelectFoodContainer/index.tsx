import * as React from 'react'
import MenuCategoryList from 'containers/App/SelectFoodContainer/MenuCategoryList'
import MenuList from 'containers/App/SelectFoodContainer/MenuList'
import OrderList from 'containers/App/SelectFoodContainer/OrderList'
import './index.scss'

export interface IDispatchProps {
  retrieveLocationMenu: (
    payload: { locationId: String, orderTypeId: String }
  ) => void
}

class SelectFoodContainer extends React.Component<IDispatchProps, {}> {
  componentDidMount() {
    const payload = { locationId: '92', orderTypeId: '1' }
    this.props.retrieveLocationMenu(payload)
  }
  
  render() {
    return (
      <div className='select-food-container'>
        <div className='select-food-container__item'>
          <MenuCategoryList />
        </div>
        <div className='select-food-container__item'>
          <MenuList />
        </div>
        <div className='select-food-container__item'>
          <OrderList />
        </div>
      </div>
    )
  }
}

export default SelectFoodContainer