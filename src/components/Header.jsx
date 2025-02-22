import React, { useEffect, useState } from 'react'

import '../style/Components.css'
import { BiSolidCameraMovie } from "react-icons/bi";
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { GiHamburgerMenu } from "react-icons/gi";
import { Box } from '@mui/material';
import { IoPersonCircleSharp } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
function Header() {

  const [menuSituation, setMenuSituation] = useState(false)
  const [displaySize, setDisplaySize] = useState('flex')
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1080) {
        setDisplaySize('none')
      } else {
        setDisplaySize('flex')
      }
    }
    window.addEventListener('resize', handleResize);
    handleResize()
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [])
  const menuItems = [
    { text: "Watch Movies", link: '#' },
    { text: 'Best Movies', link: '#' },
    { text: 'Series', link: '#' },
    { text: 'Genres', link: '#' },
    { text: 'Preferences', link: '#' },

  ]
  return (
    <div className='parent-header'>
      <div className='header-flex'>
        <Button className='hm-button' sx={{ fontSize: "28px", color: "#fff", display: displaySize === 'none' ? 'block' : 'none' }} onClick={() => setMenuSituation(true)}><GiHamburgerMenu /></Button>
        <Drawer open={menuSituation} onClose={() => { setMenuSituation(false) }} >
          <Box>
            <ul>
              {menuItems.map((item) => {
                return (
                  <li key={item.text} className='hm-item' >
                    <a className={item.className ? item.className : ''} href={item.link}>{item.text}</a>
                  </li>
                )
              })}
            </ul>
          </Box>
        </Drawer>
        <div className="header-left header-flex">
          <BiSolidCameraMovie className='header-logo logo-color' /><span className='logo-color logo-text ' >Movie<span className='logo-text'>Mania</span> </span>
        </div>
        <div style={{ display: displaySize }} className="header-right header-flex">
          <ul className="header-bottons">
            {menuItems.map((item) => {
              return (
                <li key={item.text} className='header-button'>
                  <a className={item.className ? item.className : ''} href={item.link}>{item.text}</a>
                </li>
              )
            })}
          </ul>
        </div>
        <div className='header-right'>
          <input type="text" style={{ display: displaySize }} className='header-input' placeholder='Enter keywords...' />
          <div >
            <button className='login-btn'><IoPersonCircleSharp className='btn-icon' /><span className='login-text' style={{ display: displaySize }} >Login</span></button>
          </div>
        </div>
      </div >
      <input style={{ display: displaySize === 'none' ? 'block' : 'none' }} className='responsive-input' placeholder='Enter keywords...' type="text" />
    </div >
  )
}

export default Header