import * as React from 'react'
import Button from 'components/Shared/Button'
import './index.scss'

interface IProps {
  location: String
}

const LocationCard: React.SFC<IProps> = ({
  location
}) => (
  <div className='location-card'>
    <h3>{location}</h3>
    <Button>
      Order
    </Button>
  </div>
)

export default LocationCard