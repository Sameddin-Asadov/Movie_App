import React, { useEffect, useState } from 'react'
import { menuChildren } from '../data/menuData';
import '../style/Components.css'
import { BiSolidCameraMovie } from "react-icons/bi";
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { GiHamburgerMenu } from "react-icons/gi";
import { Box } from '@mui/material';
import { IoPersonCircleSharp } from "react-icons/io5";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link} from 'react-router-dom';
import Series from '../pages/Series';
import {MyContext} from '../Context'
import { useContext } from 'react';
import { FaSearch } from "react-icons/fa";
function Header() {

  const [menuSituation, setMenuSituation] = useState(false)
  const [displaySize, setDisplaySize] = useState('flex')
  const [anchorEl, setAnchorEl] = useState(null); 
  const open = Boolean(anchorEl)
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
  const handleGenresClick = (e) => {
    setAnchorEl(e.currentTarget); 
  };
  const handleSeriesClick =()=>{
    responseSeries && responseSeries.map((series)=>{
<Series series={series}/>
    })
  }
  const handleGenresClose = () => {
    setAnchorEl(null); 
  };

  const { inputValue, setInputValue,setClickSearch,clickSearch } = useContext(MyContext)
  const menuItems = [
    { text: "Watch Movies", link: '#' },
    { text: 'Best Movies', link: '#' },
    { text: 'Series', link: '#' , onClick:handleSeriesClick},
    { text: 'Genres', link: '#', onClick:handleGenresClick },
    { text: 'Preferences', link: '#' },]
const handleSearch=()=>{
  setClickSearch(inputValue)
}
  return (
    <div className='parent-header'>
      <div className='header-flex'>
        <Link>
        <Button className='hm-button' sx={{ fontSize: "28px", color: "#fff", display: displaySize === 'none' ? 'block' : 'none' }} onClick={() => setMenuSituation(true)}><GiHamburgerMenu /></Button></Link>
        <Drawer open={menuSituation} onClose={() => { setMenuSituation(false) }} >
          <Box>
            <ul>
              {menuItems.map((item) => {
                return (
                  <li key={item.text} className='hm-item' >
                    <a className={item.className ? item.className : ''} onClick={item.onClick} href={item.link}>{item.text}</a>
                  </li>
                )
              })}
            </ul>
          </Box>
        </Drawer>
        <Link     to='/' className="header-left header-flex">
          <BiSolidCameraMovie className='header-logo logo-color' /><span className='logo-color logo-text ' >Movie<span className='logo-text'>Mania</span> </span>
        </Link>
        <div style={{ display: displaySize }} className="header-right header-flex">
          <ul className="header-bottons">
            {menuItems.map((item) => {
              return (
                <li key={item.text} className='header-button'>
                  <a className={item.className ? item.className : ''} onClick={item.onClick} href={item.link}>{item.text}</a>
                </li>
              )
            })}
          </ul>
        </div>
        <div className='header-right'>
          <input type="text" value={ inputValue || ""} onChange={(e)=>(setInputValue(e.target.value))}  style={{ display: displaySize }} className='header-input' placeholder='Enter keywords...' />
          <button onClick={handleSearch}><FaSearch/></button>
          <div >
            <button className='login-btn'><IoPersonCircleSharp className='btn-icon' /><span className='login-text' style={{ display: displaySize }} >Login</span></button>
          </div>
        </div>
      </div >
      <Menu
        id="genres-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleGenresClose}
        MenuListProps={{
          'aria-labelledby': 'genres-button',
        }}
      >
      {menuChildren && menuChildren.map((menuChild)=>(
        <MenuItem key={menuChild.text} component={Link} onClick={handleGenresClose} to={menuChild.to}>{menuChild.text}</MenuItem>
      ))}

      </Menu>

    </div >
  )
}

export default Header