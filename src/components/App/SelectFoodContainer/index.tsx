import * as React from 'react'
import MenuCategoryList from 'containers/App/SelectFoodContainer/MenuCategoryList'
import './index.scss'

interface IProps {}

interface IDispatchProps {}

class SelectFoodContainer extends React.Component<IProps & IDispatchProps, {}> {
  render() {
    return (
      <div className='select-food-container'>
        <div className='select-food-container__item'>
          <MenuCategoryList />
        </div>
        <div className='select-food-container__item'/>
        <div className='select-food-container__item'/>
      </div>
    )
  }
}

export default SelectFoodContainer