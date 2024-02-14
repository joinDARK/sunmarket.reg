import React from 'react'
import s from '/src/image/Ellipse1.png'

function BackgroundImg() {
  return (
    <div className='RightEllips'>
        <div className="text">
          <a href='#'>Have you an account?</a>
          <h1>SING IN</h1>
        </div>
        <div className="image">
          <img src={s} alt="" />
        </div>
    </div>
  )
}

export default BackgroundImg