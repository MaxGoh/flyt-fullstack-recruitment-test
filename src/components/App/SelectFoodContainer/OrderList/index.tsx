import * as React from 'react'
import BottomBorderDiv from 'components/Shared/BottomBorderDiv'
import Button from 'components/Shared/Button'
import OrderItem from 'containers/App/SelectFoodContainer/OrderList/OrderItem'
import './index.scss'
import { ICartData } from 'commons/types'
import TotalPriceLabel from 'containers/App/SelectFoodContainer/OrderList/TotalPriceLabel'

export interface IProps {
  cart: ICartData[]
}

class OrderList extends React.Component<IProps, {}> {
  render() {
    const { cart } = this.props
    return (
      <div className='order-list-container'>
        <BottomBorderDiv borderHeight='2px'>
          <div style={{ textAlign: 'center' }}>
            <h3 style={{ margin: 0 }}>MY ORDERS</h3>
          </div>
        </BottomBorderDiv>
        {
          cart.map((cartData: ICartData, index: number) => {
            return (
              <div style={{ padding: '0 15px' }} key={index}>
                <OrderItem
                  quantity={cartData.quantity}
                  name={cartData.data.name}
                  price={cartData.data.portions[0].ingredient.addPrice}
                  data={cartData.data}
                />
              </div>
            )
          })
        }
        <div className='order-list-total'>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: '15px' }}>
            <span>Total</span>
            <TotalPriceLabel />
          </div>
          <Button label='CHECKOUT' />
        </div>
      </div>
    )
  }
}

export default OrderList