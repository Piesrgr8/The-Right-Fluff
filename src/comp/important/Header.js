import React from 'react'
import { Link } from 'react-router-dom'

import '../../assets/css/HeadFoot.css'
import logo from '../../assets/img/icon.svg'

export default function Header() {
    return (
        <header>
            <div className="content">
                <div className="logo">
                    <Link to={'/'}>
                        <img src={logo} alt="" />
                    </Link>
                </div>
                <div className="links">
                    <nav>
                        <li>
                            <Link to={'/'}>Home</Link>
                        </li>
                        <li>
                            <Link to={'/about'}>About</Link>
                        </li>
                        {/* <li>
                            <Link to={'/shop'}>Shop</Link>
                        </li> */}
                        <li>
                            <Link to={'/contact'}>Contact</Link>
                        </li>
                    </nav>
                </div>
            </div>
        </header>
    )
}
