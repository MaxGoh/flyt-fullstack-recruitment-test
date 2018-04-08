import * as React from 'react'
import * as commonTypes from 'commons/types'
import BottomBorderDiv from 'components/Shared/BottomBorderDiv'
import './index.scss'

export interface IProps {
  activeMenu: commonTypes.IMenuCategories
}

class MenuList extends React.Component<IProps, {}> {
  render() {
    const { activeMenu } = this.props
    return (
      <div>
        <BottomBorderDiv borderHeight='2px'>
          <div style={{ textAlign: 'left', fontSize: '24px' }}>
            <h1 style={{ margin: 0 }}>
              {activeMenu.name}
            </h1>
          </div>
        </BottomBorderDiv>
        {
          (activeMenu.items !== undefined)
            ? activeMenu.items.map((item: commonTypes.IMenuCategoriesItem, index: number) => {
              return (
                <div key={index}>
                  <BottomBorderDiv borderHeight='2px'>
                    <div  className='item-cell' style={{ display: 'flex' }}>
                      <h3 className='item-name'>
                        {item.name}
                      </h3>
                      <div style={{ marginLeft: '5px' }}>
                        {
                          (item.portions !== undefined)
                            ? item.portions.map((portion: commonTypes.IMenuCategoriesItemPortion, key: number) => {
                              return (
                                <div key={key}>
                                  <span style={{ fontSize: '14px' }}>£{portion.ingredient.addPrice}</span>
                                </div>
                              )
                              })
                            : null
                        }
                      </div>
                    </div>
                  </BottomBorderDiv>
                </div>
                )
              })
            : null
        }
      </div>
    )
  }
}

export default MenuList