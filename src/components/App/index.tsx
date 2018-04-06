import * as React from 'react'
import BottomBorderDiv from 'components/Shared/BottomBorderDiv'
import './index.css'

const Logo = require('assets/image/logo.svg')
const Profile = require('assets/image/user.svg')

class App extends React.Component<{}, {}> {

  render() {
    return (
      <div className='container'>
        <BottomBorderDiv borderHeight='4px'>
          <div style={{ textAlign: 'center' }}>
            <img id='logo' src={Logo} alt='logo' />
            <div style={{ float: 'right' }}>
              <div>
                <img id='profile' src={Profile} alt='profile' />
                <a href='#'>LOGIN</a>
              </div>
            </div>
          </div>
        </BottomBorderDiv>
      </div>
    )
  }

}

export default App