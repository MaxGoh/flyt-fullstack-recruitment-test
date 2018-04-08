import * as React from 'react'
import BottomBorderDiv from 'components/Shared/BottomBorderDiv'

interface IProps {
  quantity: Number
  name: String
  price: String
}

const OrderItem: React.SFC<IProps> = ({
  quantity, name, price
}) => (
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
        <span>£{price}</span>
      </div>
    </BottomBorderDiv>
  </div>
)

export default OrderItem