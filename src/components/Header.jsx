import React from 'react'
import { FcFilmReel } from "react-icons/fc";
import '../style/Components.css'
import logo from '../images/logo.svg'
function Header() {
  return (
    <div className='parent-header header-flex'>
        <div className="header-left header-flex">
        <FcFilmReel className='header-logo' />FULLHD
        </div>
        <div className="header-right header-flex">
          <div className="header-bottons">
            <a href="#">HOME</a>
            <a href="#">GENRES</a>
            <a href="#">COUNTRY</a>
            <a href="#">MOVIES</a>
            <a href="#">TV-SERIES</a>
            <a href="#">TOP IMDB</a>
          </div>
          <input type="text" />
        </div>

    </div>
  )
}

export default Header