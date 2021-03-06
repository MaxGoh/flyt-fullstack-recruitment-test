import * as React from 'react'
import BottomBorderDiv from 'components/Shared/BottomBorderDiv'
import './index.scss'

export interface IProps {
  order: String
  label: String
  uniqueLabel?: String
  children?: any
}

const OrderRow: React.SFC<IProps> = ({
  order, label, uniqueLabel, children
}) => {
  return (
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
    <div>
      {children}
    </div>
  </section>
  )
}

export default OrderRow