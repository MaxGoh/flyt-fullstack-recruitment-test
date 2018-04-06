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

            <div className='header__item' />

            <div className='header__item logo'>
              <img id='logo' src={Logo} alt='logo' />
            </div>

            <div className='header__item profile'>
                <img id='profile' src={Profile} alt='profile' />
                <a className='profile__login-text' href='#'><b>LOGIN</b></a>
            </div>

          </div>

        </BottomBorderDiv>
      </div>
    )
  }

}

export default App