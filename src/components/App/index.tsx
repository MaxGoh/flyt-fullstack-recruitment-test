import * as React from 'react'
import BottomBorderDiv from 'components/Shared/BottomBorderDiv'
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
            <div className='header__item' />
            {/*Item 2*/}
            <div className='header__item logo'>
              <img id='logo' src={Logo} alt='logo' />
            </div>
            {/*Item 3*/}
            <div className='header__item profile'>
                <img className='profile__image' src={Profile} alt='profile' />
                <a className='profile__login-text' href='#'><b>LOGIN</b></a>
            </div>
          </div>

        </BottomBorderDiv>

        <BottomBorderDiv borderHeight='3px'>
          <div style={{ textAlign: 'center' }}>
            <h1 style={{ margin: 0 }}>ORDER & COLLECT</h1>
          </div>
        </BottomBorderDiv>
      </div>
    )
  }

}

export default App