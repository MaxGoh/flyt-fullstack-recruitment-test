import * as React from 'react'
import './index.scss'

interface IProps {
  label?: String
}

const Button: React.SFC<IProps> = ({
  label
}) => (
  <button className='button'>
    {label}
  </button>
)

export default Button