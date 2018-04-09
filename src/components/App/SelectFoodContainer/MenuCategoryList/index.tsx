import * as React from 'react'
import * as commonTypes from 'commons/types'
import BottomBorderDiv from 'components/Shared/BottomBorderDiv'
import './index.scss'

export interface IProps {
  menus: commonTypes.IMenu[]
  selectedCategoryId: number
}

export interface IDispatchProps {
  setActiveMenu: (
    payload: { menu: commonTypes.IMenuCategories }
  ) => void
}

type Props = IProps & IDispatchProps

const MenuCategoryList: React.SFC<Props> = ({
  menus, selectedCategoryId, setActiveMenu
}) => {
  return (
    <div className='menu-category-list'>
      {
        (menus !== undefined)
          ? menus.map((menuObj: commonTypes.IMenu) => (
            menuObj.categories.map((menuCategoryObj: commonTypes.IMenuCategories, index: number) => {
              const payload = { menu : menuCategoryObj }
              return (
                <div
                  style={{
                    cursor: (menuCategoryObj.id === selectedCategoryId )
                        ? 'default'
                        : 'pointer'
                    }}
                  key={index}
                  onClick={() => {
                    setActiveMenu(payload)
                  }}
                >
                  <BottomBorderDiv
                    borderHeight='2px'
                  >
                    <div style={{ textAlign: 'center' }}>
                      <b
                        style={{
                          color: (menuCategoryObj.id === selectedCategoryId )
                            ? '#ef4135'
                            : 'black'
                        }}
                      >
                        {menuCategoryObj.name}
                      </b>
                    </div>
                  </BottomBorderDiv>
                </div>
              )
            })
          ))
          : null
      }
    </div>
  )
}

export default MenuCategoryList