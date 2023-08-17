/* eslint-disable @next/next/no-img-element */
import Button from "./Button"
import styles from './Card.module.scss'

const Card = ({ card }) => {
    const { title, description, img } = card
    const buttonStyle = {
        width: '100px',
        margin: '0 auto'
    }

    return (
        <div className={styles.container}>
            <h3>{title}</h3>
            <p className={styles.description}>{description}</p>
            <img
                className={styles.img}
                src={img}
                alt=""
            />
            <Button value="More" style={buttonStyle} />
        </div>
    )
}

export default Card