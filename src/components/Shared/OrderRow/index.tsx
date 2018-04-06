import * as React from 'react'
import BottomBorderDiv from 'components/Shared/BottomBorderDiv'
import './index.scss'

export interface IProps {
  order: String
  label: String
  uniqueLabel?: String
}

export interface IDispatchProps {
  changeActiveLocation: (location: String) => void
}

type Props = IProps & IDispatchProps

const OrderRow: React.SFC<Props> = ({ order, label, uniqueLabel }) => (
  <section>
    <BottomBorderDiv borderHeight='2px'>
      <div className='order-row'>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div className='section-indicator'>{order}</div>
        <a className='order-row__label'>{label}</a>
      </div>
          <span style={{ color: '#ef4135' }}><b>{uniqueLabel}</b></span>
      </div>
    </BottomBorderDiv>
    <div>hello</div>
  </section>
)

export default OrderRow