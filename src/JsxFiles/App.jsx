import React from 'react'
import BackgroundImg from './BackgroundImg'
import SignUpRegistation from './SignUpRegistation'
import InputOnRegistration from './InputOnRegistration'
import ButtonCreateAccount from './ButtonCreateAccount'
import "../css/style.sass"

function App() {
  return (
    <div className="background-main">
      <div className="container">
        <div className='backgroundColor'>
          <p className='ellipse'></p>
          <div className="swapLanguage">
            <a className='EN' href="#">EN</a>
            <a className='RU' href="#">RU</a>
          </div>

          <BackgroundImg/>
          <SignUpRegistation/>
          <InputOnRegistration/>
          <ButtonCreateAccount/>
        </div>
      </div>
    </div>
  )
}

export default App
