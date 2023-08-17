
import styles from './Footer.module.scss'
import Logo from './Logo'
import { BsLinkedin, BsGithub } from 'react-icons/bs'

const Footer = () => {

    return (
        <footer className={styles.container}>
            <div className={styles.content_container}>
                <div className={styles.brand}>
                    <Logo />
                    <span>© 2020 Startupz.</span>
                    <span>All rights reserved.</span>
                </div>

                <div className={styles.companies}>
                    <h3>Companies</h3>
                    <ul>
                        <li>Tolq</li>
                        <li>LegalSite</li>
                        <li>CodeKeeper</li>
                        <li>Feedback Labs</li>
                    </ul>
                </div>

                <div className={styles.contact}>
                    <h3>Contact</h3>
                    <address>
                        World Trade Center - The Hague<br />
                        Prinses Margrietplantsoen 33<br />
                        2595 AM The Hague<br />
                        The Netherlands<br />
                        <a href="mailto:francisbernal14@gmail.com">Send us an email</a>
                    </address>
                </div>

                <div className={styles.social}>
                    <h3>Follow Us</h3>
                    <div className={styles.social_container}>
                        <a href="https://github.com/francisdeea" target="_blank"><BsGithub className={styles.icon} /></a>
                        <a href="https://www.linkedin.com/in/francis-bernal-full-stack-developer/" target="_blank"><BsLinkedin className={styles.icon} /></a>
                    </div>

                </div>
            </div>
        </footer>
    )
}

export default Footer