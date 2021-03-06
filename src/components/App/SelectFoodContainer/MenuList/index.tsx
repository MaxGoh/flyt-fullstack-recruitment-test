import * as React from 'react'
import * as commonTypes from 'commons/types'
import BottomBorderDiv from 'components/Shared/BottomBorderDiv'
import './index.scss'
import AddItemButton from 'containers/Shared/AddItemButton'

export interface IProps {
  activeMenu: commonTypes.IMenuCategories
}

class MenuList extends React.Component<IProps, {}> {
  render() {
    const { activeMenu } = this.props
    return (
      <div>
        <BottomBorderDiv borderHeight='2px'>
          <div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between'
              }}
            >
              <h1 style={{ flex: 1, margin: 0, fontSize: '24px' }}>
                {activeMenu.name}
              </h1>
              <span style={{ cursor: 'pointer', margin: 0, fontSize: '22px', color: '#ef4135' }}>
                <i className='fa fa-info-circle' />
              </span>
            </div>
            <div>
              <p>{activeMenu.description}</p>
            </div>
          </div>
        </BottomBorderDiv>
        {
          (activeMenu.items !== undefined)
            ? activeMenu.items.map((item: commonTypes.IMenuCategoriesItem, index: number) => {
              return (
                <div key={index}>
                  <BottomBorderDiv borderHeight='2px'>
                    <div className='item-cell' style={{ display: 'flex', flexDirection: 'column' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                          <h3 className='item-name'>
                            {item.name}
                          </h3>
                          <div style={{ marginLeft: '5px' }}>
                            {
                              (item.portions !== undefined)
                                ? item.portions.map((portion: commonTypes.IMenuCategoriesItemPortion, key: number) => {
                                  return (
                                    <div key={key}>
                                      <span
                                        style={{
                                          fontSize: '14px', color: '#ef4135'
                                        }}
                                      >
                                        £{portion.ingredient.addPrice}
                                      </span>
                                    </div>
                                  )
                                  })
                                : null
                            }
                          </div>
                        </div>
                        <div>
                          <AddItemButton item={item} />
                        </div>
                      </div>
                      <div>
                        <p style={{ margin: 0 }}>
                          {item.description}
                        </p>
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