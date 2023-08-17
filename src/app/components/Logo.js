/* eslint-disable @next/next/no-img-element */
'use client';
import styles from './Logo.module.scss'

const Logo = () => (
    <img
        onClick={() => window.scrollTo(0, 0)}
        src="/logo.svg"
        alt="logo"
        className={styles.logo}
    />
)

export default Logo