import React from 'react'
import s from '/Users/eduardermolaev/Documents/pet-projects/pet-project-on-React/TestReact/sunmarket.reg/src/image/Ellipse1.png'

function BackgroundImg() {
  return (
    <div className='RightEllips'>
        <div className="text">
          <p>Have you an account?</p>
          <h1>SING IN</h1>
        </div>
        <div className="image">
          <img src={s} alt="" />
        </div>
    </div>
  )
}

export default BackgroundImg