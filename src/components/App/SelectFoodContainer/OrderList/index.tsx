import * as React from 'react'
import BottomBorderDiv from 'components/Shared/BottomBorderDiv'
import Button from 'components/Shared/Button'
// import OrderItem from 'components/App/SelectFoodContainer/OrderList/OrderItem'
import './index.scss'

export interface IProps {
  // totalCost: Number
}

class OrderList extends React.Component<IProps, {}> {
  render() {
    // const { totalCost } = this.props
    return (
      <div className='order-list-container'>
        <BottomBorderDiv borderHeight='2px'>
          <div style={{ textAlign: 'center' }}>
            <h3 style={{ margin: 0 }}>MY ORDERS</h3>
          </div>
        </BottomBorderDiv>
        <div className='order-list-total'>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: '15px' }}>
            <span>Total</span>
            <span>£0.00</span>
          </div>
          <Button label='CHECKOUT' />
        </div>
      </div>
    )
  }
}

export default OrderList