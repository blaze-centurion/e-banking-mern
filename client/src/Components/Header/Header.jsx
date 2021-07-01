import React from 'react'
import './Header.css';
import { NavLink } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';


const Header = () => {
    
    const toggleMenu = (event) => {
        event.stopPropagation()
        const menu = document.querySelector('#menu');
        menu.classList.toggle('active')
    }
    window.addEventListener('click', (event) => {
		if (event.target.id !== 'menu') {
			try{
				const menu = document.querySelector("#menu");
				menu.classList.remove("active");
			}catch (err) {
				console.log(err);
			}
		}
	})

    return (
        <>
            <header>
                <NavLink to="/" className="logo">Logo</NavLink>
                <div className="toggle-menu" id="toggle-menu" onClick={toggleMenu}>
                    <MenuIcon />
                </div>
                <nav>
                    <ul id="menu">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/login">Login</NavLink></li>
                        <li><NavLink to="/signup">Register</NavLink></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header
