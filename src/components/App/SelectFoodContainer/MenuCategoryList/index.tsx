import * as React from 'react'
import { IMenu, IMenuCategories } from 'commons/types'
import BottomBorderDiv from 'components/Shared/BottomBorderDiv'
import './index.scss'

export interface IProps {
  menus: IMenu[]
}

const MenuCategoryList: React.SFC<IProps> = ({
  menus
}) => {
  console.log('menu', menus)
  return (
    <div className='menu-category-list'>
      {
        (menus !== undefined)
          ? menus.map((menuObj: IMenu) => (
            menuObj.categories.map((menuCategoryObj: IMenuCategories, index: number) => {
              return (
                <BottomBorderDiv
                  borderHeight='4px'
                  key={index}
                >
                  <div style={{ textAlign: 'center' }}>
                    <b>{menuCategoryObj.name}</b>
                  </div>
                </BottomBorderDiv>
              )
            })
          ))
          : null
      }
    </div>
  )
}

export default MenuCategoryList