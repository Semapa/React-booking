import React from 'react'
import classes from './Footer.css'
import logoImg from '../../assets/img/logo2.png'

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.footerLogo}>
        <img src={logoImg} alt="" />
      </div>
    </div>
  )
}

export default Footer
