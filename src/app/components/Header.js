'use client'

import styles from './Header.module.scss'
import Logo from './Logo'
import Button from './Button'
import DesktopNav from './DesktopNav'
import MobileNav from './MobileNav'
import { useState, useEffect } from 'react'

const Header = () => {
    const [screenTop, setScreenTop] = useState({ last: 0, current: 0 });
    const [viewportWidth, setViewportWidth] = useState(0);
    console.log(viewportWidth)

    const headerStyle = {
        "position": "sticky",
        "top": 0,
        "boxShadow": "rgba(149, 157, 165, 0.2) 0px 8px 24px"
    }

    const showHeader = (screenTop.last > screenTop.current) && screenTop.current !== 0

    useEffect(() => {
        const handleWidth = () => setViewportWidth(window.innerWidth)
        handleWidth()

        window.addEventListener("resize", handleWidth)
        return () => window.removeEventListener("resize", handleWidth)
    }, [])

    useEffect(() => {
        const handleScroll = () => {
            setScreenTop({
                last: screenTop.current,
                current: window.scrollY
            })
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [screenTop])

    return (
        <header className={styles.container} style={showHeader ? headerStyle : null}>
            <div className={styles.content_container}>
                {
                    viewportWidth > 1100
                        ? <DesktopNav />
                        : <MobileNav />
                }
            </div>
        </header>
    )
}


export default Header