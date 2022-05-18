import "./Header.css"
import { useEffect, useState } from 'react'
import { Link, NavLink } from "react-router-dom"
import SearchIcon from '@mui/icons-material/Search';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function Header({ isDarkMode, setIsDarkMode }) {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", changeScrollPositon);
        
        return () => {
            window.removeEventListener("scroll", changeScrollPositon);
        }
    })

    const changeScrollPositon = () => {
      if (window.scrollY > 10) {
        setScrollPosition(true);
      } else {
        setScrollPosition(false);
      }
    }

    const moveUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return (
        <header className={scrollPosition ? "active-header" : null}>
            <div className="header-inner container">
                <Link
                    className="header-logo"
                    to="/"
                >
                    <span>Pet</span>spatial.
                </Link>
                <nav>
                    <div className={`navbar-inner ${toggleMenu ? "toggle-menu" : ""}`}>
                        <NavLink className={navData => navData.isActive ? "active-link" : ""} to="/">Home</NavLink>
                        <NavLink className={navData => navData.isActive ? "active-link" : ""} to="/about">About</NavLink>
                        <NavLink className={navData => navData.isActive ? "active-link" : ""} to="/services">Services</NavLink>
                        <NavLink className={navData => navData.isActive ? "active-link" : ""} to="/blog-posts">Blog Posts</NavLink>
                        <NavLink className={navData => navData.isActive ? "active-link" : ""} to="/contact">Contact</NavLink>
                        <ul className="header-btns">
                            <button className="header-search">
                                <SearchIcon className="search-icon" />
                            </button>
                            <a className="header-phone" href="tel: (32)234-14-94">
                                <LocalPhoneIcon className="phone-icon" /> (32)234-14-94
                            </a>
                        </ul>
                    </div>
                    {isDarkMode ? (
                        <WbSunnyOutlinedIcon
                            className="theme-mode"
                            onClick={() => setIsDarkMode(false)}
                        />        
                    ) : (
                        <DarkModeOutlinedIcon
                            className="theme-mode"
                            onClick={() => setIsDarkMode(true)}
                        />
                    )}
                    <div 
                        className="navbar-menu" 
                        onClick={() => {
                            setToggleMenu(!toggleMenu)
                        }}
                    >
                        {toggleMenu ? (
                            <CloseIcon />
                        ) : (
                            <MenuIcon />
                        )}
                    </div>
                </nav>
            </div>
            {scrollPosition && (
                <div className="move-up" onClick={moveUp}>
                    <KeyboardArrowUpOutlinedIcon />
                </div>
            )}
        </header>
    )
}

export default Header
