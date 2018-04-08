import * as React from 'react'
import BottomBorderDiv from 'components/Shared/BottomBorderDiv'
import { IMenuCategoriesItem } from 'commons/types'
import './index.scss'

interface IProps {
  quantity: Number
  name: String
  price: String,
  data: IMenuCategoriesItem
}

export interface IDispatchProps {
  removeMenuItem: (
    payload: { item: IMenuCategoriesItem }
  ) => void
}

const OrderItem: React.SFC<IProps & IDispatchProps> = ({
  quantity, name, price, removeMenuItem, data
}) => {
  const payload = { item: data }
  return (
    <div className='order-item'>
      <BottomBorderDiv borderHeight='1px'>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between'
            }}
        >
          <span>{quantity}x</span>
          <span>{name}</span>
          <div>
            <span>£{price}</span>
            <button
              onClick={() => removeMenuItem(payload)}
              className='remove-item-button'
            >
              -
            </button>
          </div>
        </div>
      </BottomBorderDiv>
    </div>
  )
}

export default OrderItem