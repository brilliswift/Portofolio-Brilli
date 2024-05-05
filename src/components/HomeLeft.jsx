import React from 'react'
import Header from '../components/Header'
import Button from './Button'

const HomeLeft=() => {
  
  return (
    <div className='home-left'> 
      <Header />
      <p>
        I'am 23 years old Junior Web Developer living in Yogyakarta. Currently pursuing a degree in System Information at Universitas Bina Sarana Informatika, specializing in front-end and back-end development with hands-on experience on the Google Cloud platform.</p>
      <br />
      <a href='assets/myCV.pdf' download='myCV.pdf'>
        <Button /> 
      </a>
    </div>
    
  )
}

export default HomeLeft
