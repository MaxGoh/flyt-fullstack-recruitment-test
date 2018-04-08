import * as React from 'react'
import './index.scss'

// interface IProps {
//   children?: JSX.Element
//   borderHeight: String
// }

const BottomBorderDiv: React.SFC<any> = ({ children, borderHeight }) => (
  <div
    className='bottom-border-div'
    style={{ borderBottom: `${borderHeight} solid black` }}
  >
    {children}
  </div>
)

export default BottomBorderDiv