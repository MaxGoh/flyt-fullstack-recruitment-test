import * as React from 'react'
import BottomBorderDiv from 'components/Shared/BottomBorderDiv'

interface IProps {
  quantity: Number
  name: String
  price: String
}

const OrderItem: React.SFC<IProps> = () => (
  <div className='order-item'>
    <BottomBorderDiv borderHeight='1px' />
  </div>
)

export default OrderItem