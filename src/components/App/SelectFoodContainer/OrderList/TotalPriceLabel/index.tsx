import * as React from 'react'
import { ICartData } from 'commons/types'
import { calculateTotalPrice } from 'helpers'

export interface IProps {
  cart: ICartData[]
}

interface IState {
  totalSum: number
}

class TotalPriceLabel extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    const { cart } = this.props
    let totalSum: number = calculateTotalPrice(cart)
    this.state = { totalSum }
  }

  componentWillReceiveProps(nextProps: IProps) {
    if (nextProps.cart !== this.props.cart) {
      let totalSum: number = calculateTotalPrice(nextProps.cart)
      this.handleState(totalSum)
    }
  }

  handleState(totalSum: number) {
    this.setState({ totalSum })
  }

  render() {
    const { totalSum } = this.state
    return <label>£{totalSum.toFixed(2)}</label>
  }
}

export default TotalPriceLabel