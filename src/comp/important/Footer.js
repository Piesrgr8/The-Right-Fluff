import React from 'react'

import '../../assets/css/HeadFoot.css'
import logo from '../../assets/img/logo.png'

export default function Footer() {
    return (
        <footer>
            <hr />
            <div className="background">
                <img src={logo} alt="" />
                <p>2022 All rights reserved.</p>
            </div>
        </footer>
    )
}
