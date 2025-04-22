"use client";
import React, { useState } from 'react'
import Nav from './Nav'
import MobileNav from './MobileNav'

function ResponsiveNav() {
    const [showNav, setShowNav] = useState(false)
    const handNavShow = () => setShowNav(true)
    const closeNavShow = () => setShowNav(false)
    return (
        <div>
            <Nav openNav={handNavShow} />
            <MobileNav showNav={showNav} closeNav={closeNavShow} />
        </div>
    )
}

export default ResponsiveNav
