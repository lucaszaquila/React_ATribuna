import styles from './Button.module.css'

const Button = ({text, handleClick, customClass}) => {
    return (
        <button className={`${styles.button} ${styles[customClass]}`} onClick={handleClick}> {text} </button>
    )
}

export default Button