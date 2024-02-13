import React from 'react'
import BackgroundImg from './BackgroundImg'
import SignUpRegistation from './SignUpRegistation'
import InputOnRegistration from './InputOnRegistration'
import "../css/style.sass"
import "../css/adaptiv.css"
import ButtonCreateAccount from './ButtonCreateAccount'

function App() {
  return (
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
  )
}

export default App
