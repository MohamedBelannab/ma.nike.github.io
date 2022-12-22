import React from 'react'
import { useSelector } from 'react-redux'
import { Link  , NavLink} from 'react-router-dom'

const Navbar = () => {
  const lengtPro = useSelector(state => state.cart)

  return (
    <header>
        <Link to="/" className="logo">
            <img src="img/logo.png" />
        </Link>
        <ul className="navbar">
            <li>
            <NavLink to="/">Home</NavLink>
            </li>
            <li>
            <NavLink to="/new">New</NavLink>
            </li>
            <li>
            <NavLink to="/men">Men</NavLink>
            </li>
            <li>
            <NavLink to="/woman">Woman</NavLink>
            </li>
            <li>
            <NavLink to="/kids">Kids</NavLink>
            </li>
            <li>
            <NavLink to="#">Contact</NavLink>
            </li>
        </ul>
        <div className="h-icons">
            <NavLink to="/shop">
            <span className='icon-shop'>
              <i className="bx bx-shopping-bag" />
              <span className='counter-shop'>{lengtPro.length}</span>
            </span>
            </NavLink>
            <NavLink to="/phone">
            <i className="bx bx-phone" />
            </NavLink>
            <NavLink to="/YourFavorite">
            <i className="bx bx-heart" />
            </NavLink>
            <div className="bx bx-menu" id="menu-icon" />
        </div>
    </header>
  )
}

export default Navbar