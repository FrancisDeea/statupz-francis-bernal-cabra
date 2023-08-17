import { useState, useRef } from "react"
import Logo from "./Logo"
import Button from './Button'
import styles from './MobileNav.module.scss'
import { FiMenu, FiX } from 'react-icons/fi'

const MobileNav = () => {
    const [show, setShow] = useState(false)
    const modalRef = useRef(null)

    const buttonStyle = {
        "fontSize": "0.9rem"
    }

    const handleModal = () => {
        const modal = modalRef.current

        if (!show) {
            modal.style.height = "400px"
            setShow(!show)
        }

        if (show) {
            modal.style.height = "0px"
            setShow(!show)
        }
    }

    return (
        <>
            <Logo />
            <div className={styles.modal} ref={modalRef}>
                <nav>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#works">Our Works</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><Button value="Work with us!" style={buttonStyle} /></li>
                        <button className={styles.btn} onClick={handleModal}><FiX className={styles.close_btn} /></button>
                    </ul>
                </nav>
            </div>
            <button className={styles.btn}><FiMenu className={styles.icon} onClick={handleModal} /></button>
        </>
    )
}

export default MobileNav