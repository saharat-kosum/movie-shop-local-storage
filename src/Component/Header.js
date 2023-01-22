import React from 'react'
import { CgShoppingCart } from 'react-icons/cg';
import { BiMoviePlay } from 'react-icons/bi';
import './Header.css'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
        <nav>
            <ul>
                <li><Link to='/'><BiMoviePlay/></Link><p>Movie Shop</p></li>
                <li><Link to='/cart'><CgShoppingCart/></Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Header