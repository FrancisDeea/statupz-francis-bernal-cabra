/* eslint-disable @next/next/no-img-element */
import styles from './Logo.module.scss'

const Logo = () => (
    <img
        src="/logo.svg"
        alt="logo"
        className={styles.logo}
    />
)

export default Logo