import * as React from 'react'
import BottomBorderDiv from 'components/Shared/BottomBorderDiv'
import OrderRow from 'components/Shared/OrderRow'
import SelectFoodContainer from 'containers/App/SelectFoodContainer'
import './index.scss'

const Logo = require('assets/image/logo.svg')
const Profile = require('assets/image/user.svg')

class App extends React.Component<{}, {}> {
  render() {
    return (
      <div className='container'>

        <BottomBorderDiv borderHeight='4px'>
          <div className='header'>
            {/*Item 1*/}
            <div className='header__item profile'>
              <img id='header-1' className='profile__image' src={Profile} alt='profile' />
            </div>
            {/*Item 2*/}
            <div className='header__item logo'>
              <img id='logo' src={Logo} alt='logo' />
            </div>
            {/*Item 3*/}
            <div className='header__item profile end'>
                <img id='header-2' className='profile__image' src={Profile} alt='profile' />
                <a className='profile__login-text' href='#'><b>LOGIN</b></a>
            </div>
          </div>
        </BottomBorderDiv>

        <BottomBorderDiv borderHeight='3px'>
          <div style={{ textAlign: 'center' }}>
            <h1 style={{ margin: 0 }}>ORDER & COLLECT</h1>
          </div>
        </BottomBorderDiv>
        <OrderRow order='1' label='PICK A LOCATION' />
        <OrderRow order='2' label='SELECT YOUR FOOD'>
          <SelectFoodContainer />
        </OrderRow>
        <OrderRow order='3' label='PAYMENT' />
        <OrderRow order='4' label='CONFIRM' />

      </div>
    )
  }

}

export default App