import * as React from 'react'
import MenuCategoryList from 'containers/App/SelectFoodContainer/MenuCategoryList'
import MenuList from 'containers/App/SelectFoodContainer/MenuList'
import OrderList from 'containers/App/SelectFoodContainer/OrderList'
import './index.scss'

const SelectFoodContainer: React.SFC<{}> = () => (
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

export default SelectFoodContainer