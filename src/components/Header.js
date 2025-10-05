import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <div className='navbar' >
    <div className="logo">
        <Link to='/' style={{textDecoration: "none", color: "#1c2951", marginTop:"0.8rem"}}><h2>Coinix </h2> </Link>
    </div>
  <ul>
    <li> <Link to='/coins'>Coins</Link></li>
  </ul>
</div>
  )
}

export default Header
