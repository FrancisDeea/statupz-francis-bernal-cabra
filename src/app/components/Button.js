import styles from './Button.module.scss'

const Button = ({path, value, style}) => (
    <button className={styles.btn} style={style ? style : null}>{value}</button>
) 

export default Button