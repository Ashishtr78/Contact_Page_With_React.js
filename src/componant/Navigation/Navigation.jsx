import React from 'react'
import style from "./navigation.module.css"
const Navigation = () => {
  return (
    <nav className={`${style.navigation} container`}>
      <div className={style.logo}>
        <img src="public\images\logo (1).png" alt="do some codin  " />
      </div>
      <ul>
        <li >Home</li>
        <li>About </li>
       <li>Contact</li>
      </ul>
    
    </nav>
  )
}

export default Navigation
